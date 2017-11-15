import React, { Component } from 'react';
import '../App.css';
import temp from '../snippet'


class Event extends Component {
  render() {
    return (
      
      <div className="App">
        <row className="col-md-12 thumbnail">
            <h1>Event Title Goes Here</h1>
        </row>
        <row className="col-md-12 thumbnail">
          <div id="eventcheckinbtn" class="container col-md-4 col-md-offset-4">
            <a class="btn btn-primary btn-lg btn-block" href="/auth/linkedin/{{key.sanitized_event_name}}" id="submit2" width="300">Get CheckedIn with LinkedIn</a>
          </div>
        </row>
        <row>
          <div className="col-md-8 bottom">
            <div className="thumbnail">
              <h1>Event Guests</h1>
            </div>
          {
            Object.keys(temp).map((id)=>{
              console.log(id)
              return(
                
                  <div className="col-md-4" key={id}>
                    <div className="thumbnail">
                      <h3>{temp[id].first_name + ' ' + temp[id].last_name}</h3>
                      <a className="pic" href={temp[id].profile_url} ><img className = "rounded " src={temp[id].picture} alt=""/></a>
                    
                      <a className='btn btn-primary' href={temp[id].profile_url}>
                        Visit on LinkedIn
                      </a>
                    </div>
                  </div>
              
              )
            })
          }
          </div>
          <div className="col-md-4 thumbnail">
            <h1>Event Information</h1>
            
            <div>
            <h3>
              Event Host: Jon Riddick<br/>
              Event Location: Raleigh<br/>
              Event Time: 4pm<br/>
              Event Description: Learning React<br/>
            </h3>
            </div>
          </div>
        </row>
      </div>
    );
  }
}

export default Event;