import React from "react";
import { withDataLoad } from "./withDataLoad.js";
import Diet from "./Diet";

var dietURL = "";

class Guests extends React.PureComponent {
  state = { partyPizza: [], party: [], rerender: false };

  componentDidMount() {
    this.fetchConfigURL();
  }

  fetchConfigURL = () => {
    var guests = this.props.info.party;
    let pizzaEaters = 0;
    let partyParticipants = [];
    let partyPizzaEaters = [];

    for (let i = 0; i < guests.length; i++) {
      if (guests[i].eatsPizza) {
        pizzaEaters++;
        partyPizzaEaters.push(guests[i].name);
      }
      partyParticipants.push(guests[i].name);
    }
    this.setState({
      partyPizza: partyPizzaEaters,
      party: this.props.info.party
    });

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
      console.log("данные по диете загружены локально");
      return (
        <Diet
          diet={storageDiet.diet}
          guests={this.state.partyPizza}
          participants={this.state.party}
        />
      );
    }
    let DietData = this.DietData;
    return (
      <DietData
        guests={this.state.partyPizza}
        participants={this.state.party}
      />
    );
  }
}

export default Guests;
