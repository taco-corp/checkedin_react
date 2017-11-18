import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Newevent from "./pages/Newevent";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";



const App = () =>
  <Router>
    <div>
      <Navbar />
        <Logo />
          <Wrapper>
            <Route exact path="/" component={Index} />
            <Route exact path="/index" component={Index} />
            <Route exact path="/event/" component={Event} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/newevent" component={Newevent} />
          </Wrapper>
          <Route exact path="/login" component={Login} />
      <Footer />
    </div>
  </Router>;

export default App;