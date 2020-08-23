import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./Css/Input.css";

export default class Input extends Component {
  render() {
    return (
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    );
  }
}
