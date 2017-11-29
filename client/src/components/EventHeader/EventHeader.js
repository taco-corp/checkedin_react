import React, { Component } from 'react';
import "./EventHeader.css";
import API from "../../utils/API";


class EventHeader extends Component {
  constructor(props){
    super(props)
  }

    handleLogin = event => {
        event.preventDefault();
        let userId = localStorage.getItem("id")
        API.addUserToEvent(userId, this.props.eventId)
      
        // console.log("HANDLE LOGIN....");
        window.location='http://localhost:8080/api/auth/linkedin';
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
          <button className="btn btn-primary btn-lg btn-block" id="login" onClick={this.handleLogin}>CheckIn with LinkedIn</button>
          </div>
        </div>
      );
    }
  }


// const EventHeader = () => 
//     <div className="thumbnail col-md-8 col-md-offset-2">
//         <row className="">
//             <h1>Bark in the Park</h1>
//         </row>
//         <row>        
//         <div id="eventcheckinbtn" class="container col-md-4 col-md-offset-4">
//             <a class="btn btn-primary btn-lg btn-block" id="submit2" width="300">Get CheckedIn with LinkedIn</a>
//         </div>
//         </row>
//     </div>

export default EventHeader;
