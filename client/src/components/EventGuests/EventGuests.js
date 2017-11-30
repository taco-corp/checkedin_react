import React, { Component } from 'react';
import temp from '../../snippet'
import "./EventGuests.css";
import Attendee from '../Attendee';
import API from "../../utils/API";


//const EventGuests = () => 
class EventGuests extends Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        let eventName = this.props.eventName;
        API.getEventByName(eventName)
        .then(res => {
           console.log("This is what you're looking for:", res.data["0"].attendees)
        }
        )
    
    };

    render(){
        return(
            <div className="col-md-7 col-md-offset-1 thumbnail">
                <div className="">
                <h1>Event Guests</h1>
                </div>
                {
                Object.keys(temp).map((id)=>{
                    console.log(id)
                    return(
                        <Attendee 
                            id={id}/>
                    
                    )
                })
                }
            </div>
        );
    }
}
export default EventGuests;
