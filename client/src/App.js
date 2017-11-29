import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Newevent from "./pages/Newevent";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Logo from "./components/Logo";
import API from "./utils/API";

class App extends Component {
    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        API.getUserInfo()
        .then(res => {
            console.log("Response Data", res.data);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("displayName", res.data.displayName);
            
                    if (res && res.data && res.data.displayName !== null)
                        this.setState({isLoggedIn: true});
                    else
                    // *****************************************************
                    //    change the false to true in the next line if
                    //       you want to disable the login function
                    // *****************************************************
                        this.setState({isLoggedIn: false});
                }
        )
        .catch(err => console.log(err));
    }

    render() {
        if (this.state.isLoggedIn === false) {
            return (
                    <div>
                        <Logo/>
                        <Login/>
                        <Footer/>
                    </div>
            );
        } else {
            return (
                    <Router>
                        <div>
                            <Navbar/>
                            <Logo/>
                            <Wrapper>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/event/:eventName" component={Event}/>
                                <Route exact path="/newevent" component={Newevent}/>
                            </Wrapper>
                            <Footer/>
                        </div>
                    </Router>
            );
        }
    }

}

export default App;