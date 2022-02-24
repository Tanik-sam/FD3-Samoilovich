import React from "react";
import PageRouter from "./PageRouter";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTable from "./MainTable";

class Diet extends React.PureComponent {
  render() {
    console.log("это в диет", this.props.guests);
    let pageName = [...this.props.guests];
    pageName.push("");
    var routeSheet = pageName.map((p) => (
      <PageRouter key={p + "p"} pageName={p.split(" ").join("%20")} name={p} />
    ));

    return <BrowserRouter>{routeSheet}</BrowserRouter>;
  }
}

export default Diet;
