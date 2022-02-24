import React from "react";

import { NavLink } from "react-router-dom";
import "./PageLinks.css";

class PagesLinks extends React.Component {
  render() {
    return (
      <NavLink
        to={"/" + this.props.pageName + "/" + this.props.pageName}
        className="PageLinkMenu"
      >
        {this.props.pageName}
      </NavLink>
    );
  }
}

export default PagesLinks;
