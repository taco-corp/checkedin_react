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
                    <div className="eidiv"><h3><u>Event Host(s):</u></h3>
                    <h4>{this.props.eventHost}</h4></div>
                    <div className="eidiv"><h3><u>Event Location:</u> </h3>
                    <h4>{this.props.location}</h4></div>
                    <div className="eidiv"><h3><u>Event Date:</u> </h3>
                    <h4>{this.props.date}</h4></div>
                    <div className="eidiv"><h3><u>Event Time:</u> </h3>
                    <h4>{this.props.time}</h4></div>
                    <div className="eidiv"><h3><u>Event Description:</u> </h3>
                    <h4>{this.props.description}</h4></div>
                    <div className="eidiv"><h3><u>Event URL</u></h3>
                    <a href={this.props.eventURL} target="_blank">Click Here</a> </div>
                </div>
            </div>  
        );

    }
}

export default EventInfo;
