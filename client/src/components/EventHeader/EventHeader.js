import React, { Component } from 'react';
import "./EventHeader.css";
import API from "../../utils/API";


class EventHeader extends Component {
  constructor(props){
    super(props)
  }

  handleCheckin = event => {
      let checkinObject = {
        eventId: this.props.eventId,
        displayName: localStorage.getItem('displayName'),
        id: localStorage.getItem('id'),
        picture: localStorage.getItem('picture'),
        profileURL: localStorage.getItem('profileURL')
      };
      API.addUserToEvent(checkinObject);
    };
  
    render() {
     
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
