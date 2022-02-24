import React from "react";
import PropTypes from "prop-types";
import Currency from "./Currency";
import { withDataLoad } from "./withDataLoad.js";
var newOrd;

class Diet extends React.PureComponent {
  fetchConfigURL = () => {
    console.log("это здесь", this.props);
    let diet =
      this.props.diet || JSON.parse(window.localStorage.getItem("diet")).diet;
    let vegan = 0;
    for (let i = 0; i < diet.length; i++) {
      console.log(diet[i].isVegan);
      if (diet[i].isVegan) {
        vegan++;
      }
    }
    let type;
    vegan / diet.length > 0.51 ? (type = true) : (type = false);

    if (type === true) {
      var typePizza = "vegan";
    } else {
      Math.random() > 0.5 ? (typePizza = "cheese") : (typePizza = "meat");
    }
    let order =
      "https://gp-js-test.herokuapp.com/pizza/order/" +
      typePizza +
      "/" +
      diet.length;
    newOrd = { type: typePizza, quantity: diet.length };

    let fetchConfig = {
      URL: order,
      method: "GET",
      headers: { Accept: "application/json" }
    };
    return fetchConfig;
  };
  OrderData = withDataLoad(this.fetchConfigURL(), "order")(Currency);
  render() {
    var diet =
      this.props.diet || JSON.parse(window.localStorage.getItem("diet")).diet;
    let storageOrder = JSON.parse(window.localStorage.getItem("order"));
    if (storageOrder) {
      console.log("данные по заказу загружены локально, order", storageOrder);
      return <Currency guests={diet} orderNew={newOrd} />;
    }
    let OrderData = this.OrderData;
    return <OrderData guests={diet} orderNew={newOrd} />;
  }
}

export default Diet;
