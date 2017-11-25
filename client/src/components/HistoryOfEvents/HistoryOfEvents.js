import "./HistoryOfEvents.css";
import { List, ListItem } from "../../components/List";
import React, { Component } from "react";
var eventsHistory = [{"id": "4", "title": "Ball in the Park", "date": "11/11/11", "host": "Dallas Bro'Pitbull"},
{"id": "5", "title": "Title", "date": "03/11/11", "host": "Angela"}];

class HistoryOfEvents extends Component {
render() {
	return (
    <div className="col-md-5 col-md-offset-2 bottom thumbnail text-center">
        <div className="thumbnail text-center">
        <h3>List of History of Events</h3>
        </div>
        <a href="/event"> <h4>Bark in the Park  |  11/06/17  |  Hosted by: Dallas Bro'Pitbull</h4></a>
            <List>
            {
              eventsHistory.map(eventHistory => {
              return (
                <ListItem key={eventHistory.id}>
                  <a href="#"><p>{eventHistory.title} | {eventHistory.date} | Hosted by: {eventHistory.host}</p></a>
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
