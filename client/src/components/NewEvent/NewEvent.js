import React, { Component } from 'react';
import "./NewEvent.css";

// const NewEvent = () => 

class NewEvent extends Component {
    handleCreation = event => {
        event.preventDefault();
        console.log("HANDLE CREATION");
        window.location='http://localhost:8080/api/auth/linkedin';
    };

    render() {
        return (
            <div className="App text-center">
                <div className="thumbnail col-md-8 col-md-offset-2">
                <row className="col-md-12">
                    <div id="createEventBtn" class="container col-md-4 col-md-offset-4">
                    <button class="btn btn-primary btn-lg btn-block" href="/newevent" id="submit2" width="300" onClick={this.handleCreation}>Create New Event</button>
                    </div>
                </row>
                </div>
            </div>
        );
    }
}


export default NewEvent;
