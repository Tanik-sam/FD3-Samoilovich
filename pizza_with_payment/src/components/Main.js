import React from "react";
import { withDataLoad } from "./withDataLoad.js";
import Guests from "./Guests";

class Main extends React.PureComponent {
  state = {
    diet: {}
  };
  fetchConfig = {
    URL: "https://gp-js-test.herokuapp.com/pizza/guests",
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };
  GuestsData = withDataLoad(this.fetchConfig, "party")(Guests);
  render() {
    let storageParty = JSON.parse(window.localStorage.getItem("party"));
    console.log("storageParty", storageParty);
    if (storageParty) {
      console.log(console.log("данные загружены локально ", storageParty));
      return <Guests info={storageParty} />;
    } else {
      var GuestsData = this.GuestsData;
      console.log("данные загружены удаленно");
      return <GuestsData />;
    }
  }
}

export default Main;
