import React, {Component} from 'react';
import API from "../utils/API";
import Row from "../components/Row";

class Newevent extends Component {

    state = {
        eventName: '',
        location: '',
        eventHosts: '',
        date: '',
        time: '',
        description: '',
        keywords: '',
        eventURL: ''
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCreation = event => {
        event.preventDefault();
        console.log("this.state", this.state);
        API.createEvent(this.state)
        .then(res => {
            console.log("HANDLED CREATION");

            // redirect user to the specific event's page
            window.location = "/event/" + this.state.eventName;

            // clear all input fields
            this.setState({
                eventName: '',
                location: '',
                eventHosts: '',
                date: '',
                time: '',
                description: '',
                keywords: '',
                eventURL: ''
            });
        });
    };

    render() {
        return (
                <div>
                    <div className="Event col-md-6 col-md-offset-3">
                        <h2 id="eventTitle" className="text-center">Create Your Event</h2>

                        <form id="event-form" className="container col-md-12">
                            <input type="text" value={this.state.eventName} onChange={this.handleInputChange}
                                   placeholder="Event Name (required)" name="eventName" id="inputName"
                                   className="form-control" required/>

                            <input type="text" value={this.state.eventHosts} onChange={this.handleInputChange}
                                   placeholder="Event Host(s) (required)" name="eventHosts" id="inputHosts"
                                   className="form-control" required/>

                            <input type="text" value={this.state.location} onChange={this.handleInputChange}
                                   placeholder="Event Location (required)" name="location" id="inputLocation"
                                   className="form-control" required/>

                            <input type="text" value={this.state.date} onChange={this.handleInputChange}
                                   placeholder="Event Date - YYYY/MM/DD (required)" name="date" id="inputDate"
                                   className="form-control" required/>

                            <input type="text" value={this.state.time} onChange={this.handleInputChange}
                                   placeholder="Event Time - HH:MM (required)" name="time" id="inputTime"
                                   className="form-control" required/>

                            <input type="text" value={this.state.description} onChange={this.handleInputChange}
                                   placeholder="Event Description" name="description" id="inputDescription"
                                   className="form-control"/>

                            <input type="text" value={this.state.keywords} onChange={this.handleInputChange}
                                   placeholder="Keywords" name="keywords" id="inputKeywords" className="form-control"/>

                            <input type="text" value={this.state.eventURL} onChange={this.handleInputChange}
                                   placeholder="Related URL" name="eventURL" id="inputEventURL"
                                   className="form-control"/>


                            <div className="App text-center">
                                <div className="col-md-8 col-md-offset-2">
                                    <Row className="col-md-12">
                                        <div id="createEventBtn" className="container col-md-12">
                                            <button className="btn btn-primary btn-large btn-block" href="/newevent"
                                                    id="submit2"
                                                    onClick={this.handleCreation}>Create Event
                                            </button>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Newevent;