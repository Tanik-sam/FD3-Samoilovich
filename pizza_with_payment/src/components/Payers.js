import React from "react";
import "./Payers.css";
import { pizzaEvents } from "./events";

class Payers extends React.PureComponent {
  state = {
    info: this.props.info,
    editMode: 1
  };
  paid = () => {
    this.setState({ editMode: 0 });
    pizzaEvents.emit("Paid", this.props.info.name);
  };
  render() {
    let payment = Math.round(this.props.info.toPay * 10) / 10;

    return (
      <tr className="Guests">
        <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
          {this.state.info.name}
        </td>
        <td className="Guests_payment">{payment}</td>
        <td className="Guests">
          <input
            className="PaidButton"
            type="button"
            value="Paid"
            onClick={this.paid}
            disabled={this.state.editMode == 0}
          />
        </td>
      </tr>
    );
  }
}
export default Payers;
