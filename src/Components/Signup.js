import React, { Component } from "react";
import Input from "../Components/Input";
import Btn from "../Components/Btn";
import { Form } from "react-bootstrap";

export default class Signup extends Component {
  render() {
    return (
      <div className="text-capitalize">
        <h2 className="pb-4">Signup for an account today.</h2>
        <Input />
        <Input />
        <Input />
        <Input />
        <Btn />
        <Form.Text className="text-muted pt-2">
          By signing up, you agree to the terms and conditions.
        </Form.Text>
      </div>
    );
  }
}
