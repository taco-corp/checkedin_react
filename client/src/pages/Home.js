import React, { Component } from 'react';
import '../App.css';
import NewEvent from "../components/NewEvent";
import SearchEvent from "../components/SearchEvent";
import HistoryOfEvents from "../components/HistoryOfEvents";
import SavedPeople from "../components/SavedPeople";
import Row from "../components/Row";



class Home extends Component {
  render() {
    return (
       
        <div>
            <Row> 
                <NewEvent /><SearchEvent />
            </Row>
            <HistoryOfEvents />
            <SavedPeople />
        </div>
        );
    }
}




export default Home;
