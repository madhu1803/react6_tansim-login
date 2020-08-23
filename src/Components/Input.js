import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./Css/Input.css";

export default class Input extends Component {
  render() {
    return (
      <Form.Group className="input-container pt-2 pb-2">
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="input-control"
        />
      </Form.Group>
    );
  }
}
