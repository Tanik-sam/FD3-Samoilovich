import React from "react";
import Order from "./Order";
import { withDataLoad } from "./withDataLoad.js";

class Currency extends React.PureComponent {
  fetchConfigURL = () => {
    let fetchConfig = {
      URL: "https://gp-js-test.herokuapp.com/pizza/currency",
      method: "GET",
      headers: { Accept: "application/json" }
    };
    return fetchConfig;
  };
  OrderData = withDataLoad(this.fetchConfigURL(), "currancy")(Order);
  render() {
    console.log("а это currency", this.props.order);
    let order =
      this.props.order || JSON.parse(window.localStorage.getItem("order"));
    console.log("order", order);
    let storageCurrency = JSON.parse(window.localStorage.getItem("currancy"));
    if (storageCurrency) {
      console.log("данные по заказу загружены локально", storageCurrency);
      return (
        <Order
          guests={this.props.guests}
          orderNew={this.props.orderNew}
          order={order}
        />
      );
    }
    let OrderData = this.OrderData;
    return (
      <OrderData
        guests={this.props.guests}
        orderNew={this.props.orderNew}
        order={order}
      />
    );
  }
}

export default Currency;
