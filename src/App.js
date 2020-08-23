import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Navigation } from "react-router-dom";
import LeftContainer from "./MajorComponents/LeftContainer";
import RightContainer from "./MajorComponents/RightContainer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-5">
          <LeftContainer />
        </div>
        <div className="col-lg-7">
          <BrowserRouter>
            <div>
              {/* <Navigation /> */}
              <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
