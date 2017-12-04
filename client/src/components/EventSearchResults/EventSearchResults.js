import "./EventSearchResults.css";
import {List, ListItem} from "../../components/List";
import React, {Component} from "react";

class EventSearchResults extends Component {
    state = {};

    // When the component mounts
    componentDidMount() {}

    render() {
        if (this.props.searchResults !== null && typeof this.props.searchResults !== "undefined") {
            return (
                    <div className="col-md-4 bottom thumbnail text-center">
                        <div className="text-center">
                            <h3>Event Search Results</h3>
                            <List>
                                {
                                    this.props.searchResults.data.map(evt => {
                                        let url = "/event/" + evt.eventName;
                                        return (
                                                <ListItem key={evt._id}>
                                                    <a href={url}>{evt.eventName}</a>
                                                </ListItem>);
                                    })
                                }
                            </List>
                        </div>
                    </div>
            );
        }
        else {
            return (
                    <div className="col-md-4 bottom thumbnail text-center">
                    <p><i>No search results available.</i></p>
                    </div>
            );
        }
    }
}

export default EventSearchResults;
