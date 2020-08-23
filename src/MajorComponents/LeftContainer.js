import React, { Component } from "react";
import "./Css/LeftContainer.css";
export default class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container text-capitalize">
        <h1 className="header-txt text-white">TANSIM LOGO</h1>
        <h4 className="main-txt pt-5">
          Entrepreneurship Development and Innovation Institute{" "}
        </h4>
        <p className="sub-txt text-white pt-1">
          It Provides Various Information Such As Details about.Startup
          ecosystem in state events.
        </p>
        <p className="login-txt text-white">
          Have an Account? <a href="#">Login</a>
        </p>
      </div>
    );
  }
}
