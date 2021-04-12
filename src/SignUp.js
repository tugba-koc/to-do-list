import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./App.css";

export default class SignUp extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          onKeyPress={this.props.onKeyPress}
          style={{
            width: "50%",
            border: "none",
            marginTop: "10%",
            padding: "5%",
            borderRadius: "20px",
            backgroundColor: "white",
            marginBottom:"5%",
            boxShadow: "10px 10px pink",
          }}
        >
          <FormGroup>
            <Label style={{ color: "red", fontWeight: "800" }} for="text">Name</Label>
            <Input
              onChange={this.props.handleChange}
              type="text"
              value={this.props.userName}
              name="userName"
              placeholder="user name"
            />
          </FormGroup>
          <FormGroup>
            <Label style={{ color: "red", fontWeight: "800" }} for="text">Last Name</Label>
            <Input
              onChange={this.props.handleChange}
              type="text"
              value={this.props.userLastName}
              name="userLastName"
              placeholder="last name"
            />
          </FormGroup>
          <Button className="btn-enter" style={{backgroundColor:"red"}} type="submit" 
          href="/mainpage">
            <span>Giriş</span>
          </Button>
        </Form>
      </div>
    );
  }
}
