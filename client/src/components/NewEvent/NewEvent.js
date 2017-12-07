import React, { Component } from 'react';
import "./NewEvent.css";
import Row from "../Row"

// const NewEvent = () => 

class NewEvent extends Component {
    redirectToEventCreation= event => {
        event.preventDefault();
        window.location='/newevent';
        return false;
    };

    render() {
        return (
            <div className="App text-center">
                <div className="col-md-4 col-md-offset-2">
                <Row className="col-md-12">
                    <div id="createEventBtn" className="container col-md-8 col-md-offset-3">
                    <button className="btn btn-primary btn-block" id="createEvent"
                            onClick={this.redirectToEventCreation}>Create New Event</button>
                    </div>
                </Row>
                </div>
            </div>
        );
    }
}


export default NewEvent;
