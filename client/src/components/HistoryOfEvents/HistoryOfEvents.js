import "./HistoryOfEvents.css";
import { List, ListItem } from "../../components/List";
import React, { Component } from "react";
import API from "../../utils/API";

var eventsHistoryTemp = [{"id": "4", "title": "Ball in the Park", "date": "11/11/11", "host": "Dallas Bro'Pitbull"},
{"id": "5", "title": "Title", "date": "03/11/11", "host": "Angela"}];

class HistoryOfEvents extends Component {
  state = {
  	eventsHosted: [],
    eventsAttended: [],
    eventsHostedResJson: "",
    eventsAttendedResJson: "",
    loggedInUserLinkedinId: "",
    loggedInUserProfileUrl: ""
  };

  // When the component mounts
  componentDidMount() {
    this.getUserInfo();
    this.loadHostedEvents();
  	this.loadAttendedEvents();
  }

loadHostedEvents = () => {
    API.getEventsHostedByCurrentUser(this.state.loggedInUserLinkedinId).then(res => {
        debugger;
		this.setState({eventsHostedResJson: JSON.stringify(res)});
		this.setState({eventsHosted: res.data});
	});
}
loadAttendedEvents = () => {
    API.getEventsAttendedByCurrentUser(this.state.loggedInUserProfileUrl).then(res => {
		this.setState({eventsAttendedResJson: JSON.stringify(res)});
		this.setState({eventsAttended: res.data});
	});
}
getUserInfo = () => {
    API.getUserInfo()
        .then(res => {
            var linkedinId = (res && res.data && res.data.id) ? res.data.id : "";
            var profileUrl = (res && res.data && res.data._json) ? res.data._json.publicProfileUrl : "";
            var profileUrlPart = (profileUrl) ? profileUrl.split('/').pop() : "";

            this.setState({ loggedInUserLinkedinId: linkedinId });
            this.setState({ loggedInUserProfileUrl: profileUrlPart });
        }
        )
        .catch(err => console.log(err));
}
render() {
	return (
    <div className="col-md-5 col-md-offset-2 bottom thumbnail text-center">
        <div className="thumbnail text-center">
        <h3>My Events</h3>
        </div>
        <p>{this.state.loggedInUserLinkedinId}</p>
        <p>{this.state.loggedInUserProfileUrl}</p>
        <p>{this.state.eventsHostedResJson}</p>
        <p>{this.state.eventsAttendedResJson}</p>
        <a href="/event"> <h4>Bark in the Park  |  11/06/17  |  Hosted by: Dallas Bro'Pitbull</h4></a>
            <h4>Hosted</h4>
            <List>
            {
              this.state.eventsHosted.map(eventHosted => {
	              return (
	                <ListItem key={eventHosted.id}>
	                  <a href="#"><p>{eventHosted.eventName} | {eventHosted.eventDate} | Hosted by: {eventHosted.hostUser}</p></a>
	                </ListItem>
	              );
	            })
          	}
          	</List>
            <h4>Attended</h4>
            <List>
            {
              this.state.eventsAttended.map(eventHosted => {
	              return (
	                <ListItem key={eventHosted.id}>
	                  <a href="#"><p>{eventHosted.eventName} | {eventHosted.eventDate} | Hosted by: {eventHosted.hostUser}</p></a>
	                </ListItem>
	              );
	            })
          	}
          	</List>
    </div>
    ); 
}
}

export default HistoryOfEvents;
