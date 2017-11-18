import React, { Component } from 'react';
import '../App.css';
import temp from '../snippet'
import EventInfo from "../components/EventInfo";
import EventGuests from "../components/EventGuests";


class Event extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="thumbnail col-md-8 col-md-offset-2">
          <row className="">
              <h1>Bark in the Park</h1>
          </row>
          <row className="col-md-12">
            <div id="eventcheckinbtn" class="container col-md-4 col-md-offset-4">
              <a class="btn btn-primary btn-lg btn-block" href="/auth/linkedin/{{key.sanitized_event_name}}" id="submit2" width="300">Get CheckedIn with LinkedIn</a>
            </div>
          </row>
        </div>
        <row>
          <EventGuests />
          <EventInfo />
        </row>
      </div>
    );
  }
}

export default Event;