import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LeftContainer from "./MajorComponents/LeftContainer";
import Login from "./MajorComponents/Login";
import Signup from "./MajorComponents/Signup";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="col-lg-5">
            <LeftContainer />
          </div>
          <div className="col-lg-7">
            <div>
              <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
