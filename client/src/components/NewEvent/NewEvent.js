import React, { Component } from 'react';
import "./NewEvent.css";

// const NewEvent = () => 

class NewEvent extends Component {
    redirectToEventCreation= event => {
        event.preventDefault();
        window.location='/newevent';
    };

    render() {
        return (
            <div className="App text-center">
                <div className="thumbnail col-md-4 col-md-offset-2">
                <row className="col-md-12">
                    <div id="createEventBtn" class="container col-md-8 col-md-offset-3">
                    <button className="btn btn-primary btn-block" id="createEvent"
                            onClick={this.redirectToEventCreation}>Create New Event</button>
                    </div>
                </row>
                </div>
            </div>
        );
    }
}


export default NewEvent;
