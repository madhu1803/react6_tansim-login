import React, { Component } from "react";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";

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
