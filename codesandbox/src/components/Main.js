import React from "react";
import { withDataLoad } from "./withDataLoad.js";
import Guests from "./Guests";
import { pizzaEvents } from "./events";

class Main extends React.PureComponent {
  fetchConfig = {
    URL: "https://gp-js-test.herokuapp.com/pizza/guests",
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };
  componentDidMount() {
    pizzaEvents.addListener("Rerender", this.reRender);
  }
  componentWillUnmount = () => {
    pizzaEvents.removeListener("Rerender", this.reRender);
  };
  reRender = (bool) => {
    this.setState({ rerender: true });
  };
  GuestsData = withDataLoad(this.fetchConfig, "guests")(Guests);
  render() {
    let storageParty = JSON.parse(window.localStorage.getItem("party"));
    if (storageParty) {
      console.log(console.log("данные загружены локально"));
      return <Guests info={storageParty} />;
    } else {
      var GuestsData = this.GuestsData;
      console.log("данные загружены удаленно");
      return <GuestsData />;
    }
  }
}
export default Main;
