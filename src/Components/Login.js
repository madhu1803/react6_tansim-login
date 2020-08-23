import React, { Component } from "react";
import Input from "../Components/Input";
import Btn from "../Components/Btn";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Hello There!Welcome Back</p>
        <Input />
        <Input />
        <Btn />
      </div>
    );
  }
}
