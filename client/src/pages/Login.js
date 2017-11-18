import React, { Component } from 'react';
import API from "../utils/API";
import '../App.css';

class Login extends Component {
  handleLogin = event => {
  	event.preventDefault();
  	console.log("HANDLE LOGIN....");
    API.login();
  };
  render() {
    return (
      <div>
	      <div>Login Page type stuff goes here!</div>
	      <h2>Welcome! Please log in.</h2>
		  <a href="/auth/linkedin">Login with Linkedin</a>
		  <button className="btn btn-primary btn-lg btn-block" id="login" onClick={this.handleLogin}>Login</button>
	  </div>
    );
  }
}

export default Login;
