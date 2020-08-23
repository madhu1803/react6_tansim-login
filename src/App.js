import React, { Component } from "react";
import LeftContainer from "./MajorComponents/LeftContainer";
import RightContainer from "./MajorComponents/RightContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <LeftContainer />
        <RightContainer />
      </div>
    );
  }
}
