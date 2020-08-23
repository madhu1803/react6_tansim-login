import React, { Component } from "react";
import "./Css/Btn.css";
export default class Btn extends Component {
  render() {
    return (
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Block level button
      </button>
    );
  }
}
