import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTable from "./MainTable";
import Feedback from "./Feedback";
class PagesRouter extends React.Component {
  render() {
    let pathPage;

    if (this.props.pageName != "") {
      pathPage = "/" + this.props.pageName; // + "/:clid";
      return (
        <Routes>
          <Route path={pathPage} element={<Feedback pr={this.props.name} />}>
            ;
            <Route path=":clid" element={<Feedback />} />
          </Route>
        </Routes>
      );
    } else {
      pathPage = "/";
      return (
        <Routes>
          <Route path={pathPage} element={<MainTable />} />
        </Routes>
      );
    }
  }
}
export default PagesRouter;
