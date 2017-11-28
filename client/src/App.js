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
    //Comment this code in to turn on the login function
    // render() {
    //     API.getUserInfo()
    //     .then(res => {
    //                 if (res && res.data && res.data.displayName !== null)
    //                     this.setState({isLoggedIn: true});
    //                 else
    //                     this.setState({isLoggedIn: false});
    //             }
    //     )
    //     .catch(err => console.log(err));

    //     if (this.state.isLoggedIn === false) {
    //         return (
    //                 <div>
    //                     <Logo/>
    //                     <Login/>
    //                     <Footer/>
    //                 </div>
    //         );
    //     } else {
    //         return (
    //                 <Router>
    //                     <div>
    //                         <Navbar/>
    //                         <Logo/>
    //                         <Wrapper>
    //                             <Route exact path="/" component={Home}/>
    //                             <Route exact path="/home" component={Home}/>
    //                             <Route exact path="/event/" component={Event}/>
    //                             <Route exact path="/newevent" component={Newevent}/>
    //                         </Wrapper>
    //                         <Footer/>
    //                     </div>
    //                 </Router>
    //         );
    //     }
    // }

    //Comment this code in turn off the login function
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Logo/>
                    <Wrapper>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/event/" component={Event}/>
                        <Route exact path="/newevent" component={Newevent}/>
                    </Wrapper>
                    <Footer/>
                </div>
            </Router>
        );
        
    }

}

export default App;