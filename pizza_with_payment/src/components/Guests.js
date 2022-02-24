import React from "react";
import PropTypes from "prop-types";
import "./Guests.css";
import { withDataLoad } from "./withDataLoad.js";
import Diet from "./Diet";

var dietURL = "";
var partyPizza = [];
class Guests extends React.PureComponent {
  componentDidMount() {
    this.fetchConfigURL();
  }
  fetchConfigURL = () => {
    var guests =
      this.props.guests || JSON.parse(window.localStorage.getItem("party"));
    let pizzaEaters = 0;
    let partyParticipants = [];
    let partyPizzaEaters = [];
    console.log(guests);
    for (let i = 0; i < guests.party.length; i++) {
      if (guests.party[i].eatsPizza) {
        pizzaEaters++;
        partyPizzaEaters.push(guests.party[i].name);
      }

      partyParticipants.push(guests.party[i].name);
    }
    partyPizza = partyPizzaEaters;
    let pizzaEatersList = String(partyPizzaEaters);
    let pizzaEatersListAddr = pizzaEatersList.split(" ").join("%20");
    dietURL =
      "https://gp-js-test.herokuapp.com/pizza/world-diets-book/" +
      pizzaEatersListAddr;
    let fetchConfig = {
      URL: dietURL,
      method: "GET",
      headers: { Accept: "application/json" }
    };
    return fetchConfig;
  };
  fetchConfig = {
    URL: this.fetchConfigURL,
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };
  DietData = withDataLoad(this.fetchConfigURL(), "diet")(Diet);
  render() {
    let storageDiet = JSON.parse(window.localStorage.getItem("diet"));
    if (storageDiet) {
      console.log("данные по диете загружены локально", storageDiet);
      return <Diet guests={partyPizza} />;
    }
    let DietData = this.DietData;
    return <DietData guests={partyPizza} />;
  }
}

export default Guests;
