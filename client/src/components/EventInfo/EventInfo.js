import React, { Component } from 'react';
import "./EventInfo.css";

class EventInfo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log("event info props" , this.props)
        return(
            <div className="col-md-3 thumbnail">
                <h1>Event Information</h1>
        
                    <div>
                    <h3>
                    <u>Event Host:</u> <br/>
                    {this.props.eventHost}<br/>
                    <u>Event Location:</u> <br/>
                    {this.props.location}<br/>
                    <u>Event Time:</u> <br/>
                    {this.props.time}<br/>
                    <u>Event Description:</u> <br/>
                    {this.props.description}<br/>
                    <u>Event Url</u><br/>
                    {this.props.eventURL}<br/>
                    </h3>
                    </div>
                </div>  
        );

    }
}
// const NewEvent = () => 
//     <div className="col-md-3 thumbnail">
//         <h1>Event Information</h1>

//         <div>
//         <h3>
//         Event Host: Dallas Bro'Pitbull<br/>
//         Event Location: Raleigh<br/>
//         Event Time: 4pm<br/>
//         Event Description: Dog Stuff<br/>
//         </h3>
//         </div>
//     </div>


export default EventInfo;
