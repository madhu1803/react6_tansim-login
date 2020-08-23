import React, { Component } from "react";
import "./Css/RightContainer.css";
import Input from "../Components/Input";
import Btn from "../Components/Btn";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <Input />
        <Btn />
      </div>
    );
  }
}
