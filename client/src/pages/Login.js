import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  handleLogin = event => {
  	event.preventDefault();
  	// console.log("HANDLE LOGIN....");
  	window.location='http://localhost:8080/api/auth/linkedin';
  };

  render() {
    return (
      <div>
	      <div>Login Page type stuff goes here!</div>
	      <h2>Welcome! Please log in.</h2>
		  <button className="btn btn-primary btn-lg btn-block" id="login" onClick={this.handleLogin}>Login</button>
	  </div>
    );
  }
}

export default Login;
