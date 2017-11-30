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
        currentUserId: "5a1ccd5fee8d7027c4c53e63"
    };
    componentDidMount() {
        this.setUpCurrentUserId();
      }
      setUpCurrentUserId = () => {
        var currentUserLinkedinId = localStorage.getItem("id");
        API.getUserIdByLinkedinId(currentUserLinkedinId).then((res) => {
            this.setState({currentUserId: res});
        })
      }
  render() {
    return (
       
        <div>
            <Row> 
                <NewEvent /><SearchEvent />
            </Row>
            <HistoryOfEvents 
                currentUserId = {this.state.currentUserId}
            />
            <SavedPeople />
        </div>
        );
    }
}




export default Home;
