import React, { Component } from 'react';
import '../App.css';
import EventInfo from "../components/EventInfo";
import EventGuests from "../components/EventGuests";
import EventHeader from "../components/EventHeader";
import API from "../utils/API";


class Event extends Component {
  state = {
    eventName: '',
    eventId: '',
    location: '',
    time: '',
    description: '',
    eventURL: '',
    eventHost: ''

  };
  
  componentDidMount() {
    console.log(this.props.match.params.eventName);
    console.log("yay!");
    API.getEventByName(this.props.match.params.eventName).then(res => {
      console.log(res.data)
      this.setState({
        eventName: res.data["0"].eventName, 
        eventId:res.data["0"]._id, 
        location: res.data["0"].location,
        time: res.data["0"].eventTime,
        description: res.data["0"].description, 
        eventURL: res.data["0"].eventURL,
        eventHost: res.data["0"].eventHosts
      })
    });
    //.data["0"].eventName

  	//this.loadEvents();
  }

// loadEvents = () => {
// 	API.getAllEvents().then(res => {
// 		this.setState({eventsResJson: JSON.stringify(res.data)});
// 		this.setState({eventsHosted: res.data});
// 		this.setState({eventsAttended: res.data});
// 	});
// };

  render() {
    return (
      
      <div className="App">
        <EventHeader event={this.state.eventName} eventId={this.state.eventId} />
        <EventGuests eventName={this.state.eventName} />
        <EventInfo eventHost={this.state.eventHost} location={this.state.location} time={this.state.time} description={this.state.description} eventURL={this.state.eventURL}/>
      </div>
    );
  }
}

export default Event;