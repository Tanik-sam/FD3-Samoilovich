import React from "react";
import PropTypes from "prop-types";
import "./Payers.css";
import { pizzaEvents } from "./events";
import { Link } from "react-router-dom";

class Payers extends React.PureComponent {
  state = {
    info: this.props.info,
    editMode: 1
  };

  eaterClicked = () => {
    pizzaEvents.emit("EaterClicked", this.props.info.name);
  };
  render() {
    let classNameGuests = "GuestUnclicked";
    if (this.state.info.eatsPizza) {
      classNameGuests = "GuestClicked";
      return (
        <tr className={classNameGuests} onClick={this.eaterClicked}>
          <td>
            <div
              className={this.state.info.feedBack ? "Feedback-true" : ""}
            ></div>
          </td>
          <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
            <Link to={"/" + this.props.info.name + "/" + this.props.info.name}>
              {this.state.info.name}
            </Link>
          </td>

          <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
            {+this.props.info.isVegan ? "yes" : "no"}
          </td>
          <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
            {this.state.info.eatsPizza ? "yes" : "no"}
          </td>
        </tr>
      );
    } else {
      return (
        <tr className={classNameGuests}>
          <td>
            <div></div>
          </td>
          <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
            {this.state.info.name}
          </td>
          <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
            {+this.props.info.isVegan ? "yes" : "no"}
          </td>
          <td className={this.props.info.isVegan ? "greenClass" : "blackClass"}>
            {this.state.info.eatsPizza ? "yes" : "no"}
          </td>
        </tr>
      );
    }
  }
}
export default Payers;
