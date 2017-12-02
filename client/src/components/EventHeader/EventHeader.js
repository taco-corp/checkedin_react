import React, { Component } from 'react';
import "./EventHeader.css";
import API from "../../utils/API";


class EventHeader extends Component {
  constructor(props){
    super(props)
  }

  handleCheckin = event => {
      //event.preventDefault();
      let checkinObject = {
        eventId: this.props.eventId,
        displayName: localStorage.getItem('displayName'),
        id: localStorage.getItem('id'),
        picture: localStorage.getItem('picture'),
        profileURL: localStorage.getItem('profileURL')
      };
      API.addUserToEvent(checkinObject);
      // The following line adds the checkin user to the users collection if they don't already exist
      //window.location='http://localhost:8080/api/auth/linkedin';
      this.forceUpdate();
    };
  
    render() {
      console.log("event header props" , this.props)
      //We need the eventName to be dynamic and dependant upong the URL
      // var eventName = 'http://localhost:3000/event/:eventName';
      //var eventName = req.params.eventName
      //var eventName = 'Bark in the Park';

      return (
        <div className="thumbnail center-text col-md-6 col-md-offset-3">
             <h2 id="eventTitle" className="text-center">{this.props.event}</h2>
              <div className="col-md-6 col-md-offset-3">
          <button className="btn btn-primary btn-lg btn-block" id="login" onClick={this.handleCheckin.bind(this)}>CheckIn with LinkedIn</button>
          </div>
        </div>
      );
    }
  }

export default EventHeader;
