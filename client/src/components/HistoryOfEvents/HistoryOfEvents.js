import "./HistoryOfEvents.css";
import {List, ListItem} from "../../components/List";
import React, {Component} from "react";
import API from "../../utils/API";

class HistoryOfEvents extends Component {
    state = {
        eventsHosted: [],
        eventsAttended: []
    };

    // When the component mounts
    componentDidMount() {
        this.loadHostedEvents(localStorage.getItem("user"));
        this.loadAttendedEvents(localStorage.getItem("id"));
    }

    loadHostedEvents = (userId) => {
        API.getEventsHostedByUser(userId).then(res => {
            this.setState({eventsHosted: res.data});
        });
    }
    loadAttendedEvents = (userId) => {
        API.getEventsAttendedByUser(userId).then(res => {
            this.setState({eventsAttended: res.data});
        });
    }

    render() {
        if (localStorage.getItem("user") && localStorage.getItem("id")) {
            return (
                    <div className="col-md-4 col-md-offset-2 bottom thumbnail text-center">
                        <div className="thumbnail text-center">
                            <h3>My Events</h3>
                        </div>
                        <h4>I Created</h4>
                        <List>
                            {
                                (this.state.eventsHosted.length === 0)? <p><i>None</i></p> :
                                this.state.eventsHosted.map(eventHosted => {
                                    return (
                                            <ListItem key={eventHosted.id}>
                                                <a href={`/event/${eventHosted.eventName}`}><p>{eventHosted.eventName}
                                                    | {eventHosted.eventDate} | Hosted by: {eventHosted.eventHosts}</p>
                                                </a>
                                            </ListItem>
                                    );
                                })
                            }
                        </List>
                        <h4>I Checked In</h4>
                        <List>
                            {
                                (this.state.eventsAttended.length === 0)? <p><i>None</i></p> :
                                this.state.eventsAttended.map(eventHosted => {
                                    return (
                                            <ListItem key={eventHosted.id}>
                                                <a href={`/event/${eventHosted.eventName}`}><p>{eventHosted.eventName}
                                                    | {eventHosted.eventDate} | Hosted by: {eventHosted.eventHosts}</p>
                                                </a>
                                            </ListItem>
                                    );
                                })
                            }
                        </List>
                    </div>
            );
        } else {
            return ("");
        }
    }
}

export default HistoryOfEvents;
