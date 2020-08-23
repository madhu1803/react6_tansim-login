import React, { Component } from "react";
import "./Css/RightContainer.css";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <Signup />
      </div>
    );
  }
}
