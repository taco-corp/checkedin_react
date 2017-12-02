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
                    <div className="eidiv"><u>Event Host(s):</u> <br/>
                    {this.props.eventHost}<br/></div>
                    <div className="eidiv"><u>Event Location:</u> <br/>
                    {this.props.location}<br/></div>
                    <div className="eidiv"><u>Event Date:</u> <br/>
                    {this.props.date}<br/></div>
                    <div className="eidiv"><u>Event Time:</u> <br/>
                    {this.props.time}<br/></div>
                    <div className="eidiv"><u>Event Description:</u> <br/>
                    {this.props.description}<br/></div>
                    <div className="eidiv"><u>Event URL</u><br/>
                    <a href={this.props.eventURL} target="_blank">Click Here</a> <br/></div>
                    </h3>
                    </div>
                </div>  
        );

    }
}

export default EventInfo;
