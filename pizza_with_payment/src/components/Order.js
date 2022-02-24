import React from "react";
import Payers from "./Payers";
import PizzaSliece from "./PizzaSliece";
import { pizzaEvents } from "./events";
import "./Order.css";
var guestsToPay = [];
class Order extends React.PureComponent {
  state = {
    price: this.props.order.price,
    notPayed: this.props.guests,
    toPay: 0,

    guestsToPay: {}
  };

  componentDidMount = () => {
    this.priceConvert();
    pizzaEvents.addListener("Paid", this.piecePayed);
  };

  componentWillUnmount = () => {
    pizzaEvents.removeListener("Paid", this.piecePayed);
  };
  piecePayed = (nameDel) => {
    let newPaid = [...this.state.guestsToPay];
    let k = [];

    for (let i = 0; i < newPaid.length; i++) {
      if (newPaid[i].name != nameDel && newPaid[i].toPay != 0) {
        newPaid[i] = {
          name: this.props.guests[i].name,
          toPay: this.state.toPay,
          isVegan: this.props.guests[i].isVegan
        };
        k.push(newPaid[i]);
      } else {
        newPaid[i] = {
          name: this.props.guests[i].name,
          toPay: 0,
          isVegan: this.props.guests[i].isVegan
        };
      }
    }
    this.setState({ notPayed: k });

    guestsToPay = newPaid;
    this.setState({ guestsToPay: newPaid });
    for (let i = 0; i < this.props.guests.length; i++) {
      if (this.props.guests[i].name != nameDel && newPaid[i].toPay != 0) {
        newPaid[i] = {
          name: this.props.guests[i].name,
          toPay: this.state.toPay,
          isVegan: this.props.guests[i].isVegan
        };
      } else {
        newPaid[i] = {
          name: this.props.guests[i].name,
          toPay: 0,
          isVegan: this.props.guests[i].isVegan
        };
      }
    }
  };
  priceConvert = () => {
    let currency = this.state.price.slice(-3);
    let priceTrimmed = this.state.price.slice(0, -3);
    if (!this.props.currency) {
      currency = "BYN";
    }
    let priceBYN = 0;
    switch (currency) {
      case "USD":
        priceBYN = priceTrimmed / this.props.currency.USD;
        break;
      case "EUR":
        priceBYN = priceTrimmed / this.props.currency.EUR;
        break;
      case "BYN":
        priceBYN = priceTrimmed;
        break;
      default:
        priceBYN = priceTrimmed;
    }
    let toPayFor = priceBYN / this.props.guests.length;
    this.setState({ price: priceBYN });
    this.setState({
      toPay: toPayFor
    });
    let guestsToPay2 = [];

    for (let i = 0; i < this.state.notPayed.length; i++) {
      const obj = {
        name: this.state.notPayed[i].name,
        toPay: toPayFor,
        isVegan: this.state.notPayed[i].isVegan
      };
      guestsToPay2.push(obj);
    }
    guestsToPay = guestsToPay2;
    this.setState({ guestsToPay: guestsToPay2 });
  };
  clearCash = () => {
    localStorage.removeItem("order");
    localStorage.removeItem("diet");
    localStorage.removeItem("currency");
    localStorage.removeItem("party");
  };
  render() {
    var guests = this.state.notPayed;
    let toCollect = Math.round(this.state.toPay * guests.length * 10) / 10;
    let priceRounded = Math.round(this.state.price * 10) / 10;
    let moneyCollected = Math.round((priceRounded - toCollect) * 10) / 10;

    let tableInfo = (
      <div className="info">
        <p className="Header">
          Pizza: <span>{this.props.order.name}</span>
        </p>
        <p className="Header">
          Pizza type: <span>{this.props.order.type}</span>
        </p>
        <p className="Header">
          Number of persons: <span>{this.props.guests.length}</span>
        </p>
      </div>
    );

    let tableHeader = (
      <tr className="TableHeader">
        <th className="TableHeader">Name</th>
        <th className="TableHeader">Share to pay</th>
        <th className="TableHeader"> Pay</th>
      </tr>
    );

    var payers = guestsToPay.map((p, i) => <Payers key={i} info={p} />);

    return (
      <div className="Guests">
        {tableInfo}
        <PizzaSliece className="main" data={this.props.orderNew} />
        <table>
          <tbody>
            {tableHeader}
            {payers}
            <tr>
              <td className="Total">Total order</td>
              <td className="Guests_payment">{priceRounded}</td>
              <td> </td>
            </tr>
            <tr>
              <td className="Total">Money to collect</td>
              <td className="Guests_payment">{toCollect}</td>
              <td> </td>
            </tr>
            <tr>
              <td className="Total">Money collected</td>
              <td className="Guests_payment">{moneyCollected}</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
        <input
          className="PaidButton"
          type="button"
          value="Clear Cash"
          onClick={this.clearCash}
        />
      </div>
    );
  }
}

export default Order;
