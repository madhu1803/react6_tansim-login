import React, { Component } from "react";
import Input from "../Components/Input";
import Btn from "../Components/Btn";
import { Button } from "react-bootstrap";

export default class RightContainer extends Component {
  render() {
    return (
      <div>
        <Input />
        <Btn />
      </div>
    );
  }
}
