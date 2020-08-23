import React, { Component } from "react";
import LeftContainer from "./MajorComponents/LeftContainer";
import RightContainer from "./MajorComponents/RightContainer";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-5">
          <LeftContainer />
        </div>
        <div className="col-lg-7">
          <RightContainer />
        </div>
      </div>
    );
  }
}
