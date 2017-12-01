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
    date: '',
    description: '',
    eventURL: '',
    eventHost: '',
    attendees: []

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
        date: res.data["0"].eventDate,
        eventHost: res.data["0"].eventHosts
      })
      API.getEventByName(res.data["0"].eventName)
      .then(res => {
        console.log("response", res);
       let temp = res.data["0"].attendees
       console.log("temp2", temp)
       this.setState({attendees:temp})
       console.log("Array of event attendees here", temp)
       console.log("this state", this.state)
      }
    ) 
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
    if (this.state.attendees){
    return (
      
      <div className="App">
        <EventHeader event={this.state.eventName} eventId={this.state.eventId} />
        <EventGuests eventName={this.state.eventName} attendees={this.state.attendees}/>
        <EventInfo date={this.state.date} eventHost={this.state.eventHost} location={this.state.location} time={this.state.time} description={this.state.description} eventURL={this.state.eventURL}/>
      </div>
    );
  }else{
    return(
       <div> Empty </div>
    )  
      }
  }
}

export default Event;