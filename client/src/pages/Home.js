import React, { Component } from 'react';
import '../App.css';
import NewEvent from "../components/NewEvent";
import HistoryOfEvents from "../components/HistoryOfEvents";
import SavedPeople from "../components/SavedPeople";



class Home extends Component {
  render() {
    return (
       
        <div> 
            <NewEvent />
            <HistoryOfEvents />
            <SavedPeople />
        </div>
        );
    }
}




export default Home;
