import React, { Component } from 'react';
import '../App.css';
import NewEvent from "../components/NewEvent";
import SearchEvent from "../components/SearchEvent";
import HistoryOfEvents from "../components/HistoryOfEvents";
import SavedPeople from "../components/SavedPeople";
import Row from "../components/Row";
import API from "../utils/API.js";

class Home extends Component {
    state = {
        currentUserId: "",
        currentUserLinkedinId: ""
    };
    componentWillMount() {
        this.setUpCurrentUserStates();
      }

      setUpCurrentUserStates = () => {
        this.setState({currentUserLinkedinId: localStorage.getItem("id")});
        this.setState({currentUserId: localStorage.getItem("user")});

      }
  render() {
    return (
        <div>
            <Row> 
                <NewEvent /><SearchEvent />
            </Row>
            <HistoryOfEvents 
                currentUserId = {this.state.currentUserId}
                currentUserLinkedinId = {this.state.currentUserLinkedinId}
            />

        </div>
        );
    }
}

export default Home;
