import React, { Component } from 'react';
import '../App.css';
import EventInfo from "../components/EventInfo";
import EventGuests from "../components/EventGuests";
// import EventHeader from "../components/EventHeader";
import API from "../utils/API";


class Event extends Component {
  state = {
    eventName: 'event name here',
    eventId: '',
    location: '',
    time: '',
    date: '',
    description: '',
    eventURL: '',
    eventHost: '',
    attendees: [],
    //cleanAttendees: []

  };
  
  handleCheckin = event => {
    let checkinObject = {
      eventId: this.state.eventId,
      displayName: localStorage.getItem('displayName'),
      id: localStorage.getItem('id'),
      picture: localStorage.getItem('picture'),
      profileURL: localStorage.getItem('profileURL')
    };
    API.addUserToEvent(checkinObject)
      .then(results => {
          API.getEventByName(this.state.eventName)
          .then(res => {
              let temp = res.data["0"].attendees;
              this.setState({attendees: temp})
          })
      });
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
        eventHost: res.data["0"].eventHosts,
        attendees: res.data["0"].attendees
      })
    });
  }

  render() {
    
    if (this.state.attendees){
      // let id = 1;
    return (
      
      <div className="App">
        <div className="center-text col-md-6 col-md-offset-3">
             <h2 id="eventTitle" className="text-center">{this.state.eventName}</h2>
              <div className="col-md-6 col-md-offset-3">
          <button className="btn btn-primary btn-lg btn-block" id="login" onClick={this.handleCheckin}>CheckIn with LinkedIn</button>
          </div>
        </div>
        {/* <EventHeader event={this.state.eventName} eventId={this.state.eventId} /> */}
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