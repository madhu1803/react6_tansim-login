import React, { Component } from "react";
import "./Css/RightContainer.css";
import Input from "../Components/Input";
import Btn from "../Components/Btn";
import { Form } from "react-bootstrap";

export default class Signup extends Component {
  render() {
    return (
      <div className="right-container text-capitalize">
        <h2 className="pb-4">Signup for an account today.</h2>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Input type="email" placeholder="Confirm Password" />
        <Input type="number" placeholder="Mobile Number" />
        <Btn txt="Create Your Account" />
        <Form.Text className="text-muted pt-2">
          By signing up, you agree to the terms and conditions.
        </Form.Text>
      </div>
    );
  }
}
