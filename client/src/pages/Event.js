import React, { Component } from 'react';
import '../App.css';
import temp from '../snippet'


class Event extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="col-md-12 thumbnail">
          <p>
            <h1>Event Title Goes Here</h1>
          </p>
        </div>
        <div className="col-md-8 bottom">
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
        <p> <h3>
          Event Host: Jon Riddick<br/>
          Event Location: Raleigh<br/>
          Event Time: 4pm<br/>
          Event Description: Learning React<br/>
        </h3></p>
        </div>
      </div>
    );
  }
}

export default Event;