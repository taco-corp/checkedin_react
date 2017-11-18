import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  render() {
    return (
      <div>
	      <div>Login Page type stuff goes here!</div>
	      <h2>Welcome! Please log in.</h2>
		  <a href="/auth/linkedin">Login with Linkedin</a>
	  </div>
    );
  }
}

export default Login;
