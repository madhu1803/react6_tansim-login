import React, { Component } from "react";
import "./Css/Btn.css";
export default class Btn extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-container btn-lg btn-block text-white text-uppercase"
      >
        Create your Account
      </button>
    );
  }
}
