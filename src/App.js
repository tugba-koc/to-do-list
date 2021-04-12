import "./App.css";
import React, { Component } from "react";
import SignUp from "./SignUp";
import { Switch, Route } from "react-router-dom";
import Cards from "./Card/Cards";

export default class App extends Component {
  userData;
  state = {
    userName: "",
    userLastName: "",
  };
  onKeyPress = (e) => {
    if (e.which === 13) {
      this.handleFormSubmit(e);
    }
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.setState({
        userName: this.userData.userName,
        userLastName: this.userData.userLastName,
      });
    } else {
      this.setState({
        userName: "",
        userLastName: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextProps));
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <SignUp
                {...props}
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
                userName={this.state.userName}
                userLastName={this.state.userLastName}
                onKeyPress={this.onKeyPress}
              />
            )}
          ></Route>

          <Route
            exact
            path="/mainpage"
            render={(props) => (
              <Cards {...props} userName={this.state.userName} />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}
