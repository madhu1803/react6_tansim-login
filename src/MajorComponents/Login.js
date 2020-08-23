import React, { Component } from "react";
import "./Css/RightContainer.css";
import Input from "../Components/Input";
import Btn from "../Components/Btn";
import { Form } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="right-container text-capitalize">
        <h2>Login</h2>
        <p className="text-muted pt-2 pb-2">Hello There! welcome Back</p>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            className="text-muted pb-3"
          />
        </Form.Group>
        <Btn txt="Login" />
        <Form.Text className="text-muted pt-2">
          By signing up, you agree to the terms and conditions.
        </Form.Text>
      </div>
    );
  }
}
