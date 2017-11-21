import React, { Component } from 'react';
import '../App.css';
import EventInfo from "../components/EventInfo";
import EventGuests from "../components/EventGuests";
import EventHeader from "../components/EventHeader";


class Event extends Component {
  render() {
    return (
      
      <div className="App">
        <EventHeader />
        <EventGuests />
        <EventInfo />
      </div>
    );
  }
}

export default Event;