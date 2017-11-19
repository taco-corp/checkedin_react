import React from "react";
import temp from '../../snippet'
import "./EventGuests.css";
import Attendee from '../Attendee'

const EventGuests = () => 
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

export default EventGuests;
