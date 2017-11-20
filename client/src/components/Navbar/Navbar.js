import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
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
    </div>
  </nav>;

export default Navbar;
