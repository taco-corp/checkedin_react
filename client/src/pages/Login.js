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
      <div className="thumbnail center-text col-md-6 col-md-offset-3">
	       <h2 className="text-center">Welcome! Please log in.</h2>
		    <div className="col-md-6 col-md-offset-3">
        <button className="btn btn-primary btn-lg btn-block" id="login" onClick={this.handleLogin}>Log in with LinkedIn</button>
        </div>
      </div>
    );
  }
}

export default Login;
