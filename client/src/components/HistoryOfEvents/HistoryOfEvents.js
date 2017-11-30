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
    loggedInUserId: "",
    loggedInUserProfileUrl: "",
    testJson: ""
  };

  // When the component mounts
  componentDidMount() {
    this.getUserInfo();
    this.loadHostedEvents(this.props.currentUserId);
  	// this.loadAttendedEvents(this.props.currentUserId);
  }

loadHostedEvents = (userId) => {
  API.getEventsHostedByUser(userId).then(res => {
		// this.setState({eventsHostedResJson: JSON.stringify(res)});
		this.setState({eventsHosted: res.data});
	});
}
//TODO fix
loadAttendedEvents = (userId) => {
    API.getEventsAttendedByUser(userId).then(res => {
		this.setState({eventsAttendedResJson: JSON.stringify(res)});
		this.setState({eventsAttended: res.data});
	});
}
getUserInfo = () => {
    API.getUserInfo()
        .then(res => {
        	var loggedInUserLinkedinId = (res && res.data && res.data.id) ? res.data.id : "";
            var profileUrl = (res && res.data && res.data._json) ? res.data._json.publicProfileUrl : "";
            var profileUrlPart = (profileUrl) ? profileUrl.split('/').pop() : "";

            this.setState({ loggedInUserProfileUrl: profileUrlPart });
            // API.getUserIdByLinkedinId(loggedInUserLinkedinId).then((res2) => {
            // 	this.setState({ testJson: API.getUserIdByLinkedinId(loggedInUserLinkedinId) });
            // });
            this.setState({ testJson: API.getUserIdByLinkedinId(loggedInUserLinkedinId) });
        }
        )
        .catch(err => console.log(err));
}
render() {
  if(this.props.currentUserId) {
	return (
    <div className="col-md-5 col-md-offset-2 bottom thumbnail text-center">
        <div className="thumbnail text-center">
        <h3>My Events</h3>
        </div>
        <p>{`HAHAHAH: ${this.props.currentUserId}`}</p>
        <p>{this.state.loggedInUserId}</p>
        <p>{this.state.loggedInUserProfileUrl}</p>
        <p>{`eventsHostedResJson:... ${this.state.eventsHostedResJson}`}</p>
        <p>{`eventsAttendedResJson:... ${this.state.eventsAttendedResJson}`}</p>
        <p>{`TEST JSON:... ${this.state.testJson}`}</p>
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
  } else {
    return ("");
  }
}
}

export default HistoryOfEvents;
