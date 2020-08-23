import React, { Component } from "react";
import "./Css/Btn.css";
export default class Btn extends Component {
  render() {
    let { txt } = this.props;
    return (
      <button
        type="button"
        className="btn btn-container btn-lg btn-block text-white text-uppercase"
      >
        {txt}
      </button>
    );
  }
}
