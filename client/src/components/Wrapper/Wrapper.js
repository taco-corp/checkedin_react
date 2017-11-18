import React, { Component } from 'react';
import "./Wrapper.css";

class Wrapper extends Component{
	state = {
      isLoggedIn: true
  	}
	render() {
		if(this.state.isLoggedIn === true) {		
			return (
				<div>
					<main className="wrapper" {...this.props} />
				</div>
			);
		} else {
			return (
				<p>NOT LOGGED IN...</p>
			);
		}
	}
}

export default Wrapper;
