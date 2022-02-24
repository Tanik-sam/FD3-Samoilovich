import React from "react";
import Payers from "./Payers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { pizzaEvents } from "./events";

class MainTable extends React.PureComponent {
  clearApp = () => {
    let storageLength = JSON.parse(window.localStorage.getItem("diet")).diet;

    for (let i = 0; i < storageLength.length; i++) {
      localStorage.removeItem(storageLength[i].name);
    }
    localStorage.removeItem("party");
    localStorage.removeItem("diet");
    this.rerender();
    console.log("чисто");
  };

  rerender = () => {
    pizzaEvents.emit("Rerender", true);
  };

  render() {
    let storageDiet = JSON.parse(window.localStorage.getItem("diet")).diet;
    let storageParty = JSON.parse(window.localStorage.getItem("party")).party;
    let guestsAndDiet = [];

    for (let i = 0; i < storageParty.length; i++) {
      let count = 0;
      for (let j = 0; j < storageDiet.length; j++) {
        if (storageParty[i].name == storageDiet[j].name) {
          let storage = JSON.parse(
            window.localStorage.getItem(storageDiet[j].name)
          )
            ? true
            : false;

          guestsAndDiet.push({
            name: storageParty[i].name,
            eatsPizza: storageParty[i].eatsPizza,
            isVegan: storageDiet[j].isVegan,
            feedBack: storage
          });
          count++;
        }
      }
      if (count === 0) {
        guestsAndDiet.push({
          name: storageParty[i].name,
          eatsPizza: storageParty[i].eatsPizza,
          isVegan: "",
          feedBack: false
        });
      }
    }

    let tableInfo = (
      <div className="info">
        <h2>List of guests</h2>
        <p>Number of persons: {storageParty.length}</p>
      </div>
    );
    let tableHeader = (
      <tr className="TableHeader">
        <th className="TableHeader" colSpan="2">
          Name
        </th>
        <th className="TableHeader">Vegan</th>
        <th className="TableHeader">Eaters</th>
      </tr>
    );

    var payers = guestsAndDiet.map((p, i) => <Payers key={p.name} info={p} />);
    return (
      <div className="Guests">
        {tableInfo}
        <table>
          <tbody>
            {tableHeader}
            {payers}
          </tbody>
        </table>
        <div>
          <input
            className="CardButton"
            type="button"
            value="CLEAR APP"
            onClick={this.clearApp}
          />
        </div>
      </div>
    );
  }
}

export default MainTable;
