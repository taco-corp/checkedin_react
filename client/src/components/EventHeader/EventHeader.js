import React, { Component } from 'react';
import "./EventHeader.css";

class EventHeader extends Component {
    handleLogin = event => {
        event.preventDefault();
        // console.log("HANDLE LOGIN....");
        window.location='http://localhost:8080/api/auth/linkedin';
    };
  
    render() {
      return (
        <div className="thumbnail center-text col-md-6 col-md-offset-3">
             <h2 id="eventTitle" className="text-center">Event Name Here!</h2>
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
