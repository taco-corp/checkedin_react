import React, { Component } from 'react';
import temp from '../../snippet'
import "./EventGuests.css";
import Attendee from '../Attendee';
import API from "../../utils/API";

class EventGuests extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log("props from EG", this.props)
        let id = 1;
        return(
            <div className="col-md-7 col-md-offset-1">
           {console.log("render this.state", this.state)}
                
                <div className="">
                <h1>Event Guests</h1>
                </div>
                <div className="col-md-12" key={id}>    
                {
                        this.props.attendees.map(person =>
                             <div className="thumbnail col-md-4">
                             <h3>{person.displayName}</h3>
                             <a ClassName="pic" id="image" href={person.profileURL} ><img className = "rounded" src={person.picture} alt=""/></a>
                             <a className='btn btn-primary' href={person.profileURL}>Visit on LinkedIn</a><br/>
                             </div> 
                        )
                    }
                </div>
            </div>
        );
    }
}


export default EventGuests;
