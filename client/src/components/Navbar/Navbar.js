import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
// import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
  state = {
    loggedInUserName: ""
  };

  componentDidMount() {
    this.getUserInfo();
  }

  // Loads all books  and sets them to this.state.books
  getUserInfo = () => {
    API.getUserInfo()
      .then(res =>
        {
          var displayName = (res && res.data && res.data.displayName) ? res.data.displayName : "";
          this.setState({ loggedInUserName: displayName });
        }
      )
      .catch(err => console.log(err));
  };
  logout = () => {
    API.logout()
      .then(res => 
        {
          this.setState({ loggedInUserName: "" });
          /* 
          Redirects to LinkedIn upon logout. Consequently also
          logs out of LinkedIn.
          */
          window.location="https://linkedin.com/m/logout";
        }
      );
  };

    render() {
    return (
  <nav className="navbar navbar-default fixed-top navbar-toggleable-md navbar-light bg-faded">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          CheckedIn
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={window.location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login</Link>
        </li>
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "active"
              : ""
          }
        >
          <Link to="/home">Home</Link>
        </li>
        <li className={window.location.pathname === "/newevent" ? "active" : ""}>
          <Link to="/newevent">Create Event</Link>
        </li>
        <li
          className={window.location.pathname === "/event" ? "active" : ""}>
          <Link to="/event">Event</Link>
        </li>
      </ul>
      <button className="logout right-nav" onClick={this.logout}>Logout</button>
      <span className="loggedin-user right-nav">{this.state.loggedInUserName}</span>
    </div>
  </nav>
  );
}
}

export default Navbar;
