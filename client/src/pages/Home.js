import React, {Component} from 'react';
import '../App.css';
import NewEvent from "../components/NewEvent";
import SearchEvent from "../components/SearchEvent";
import HistoryOfEvents from "../components/HistoryOfEvents";
import EventSearchResults from "../components/EventSearchResults";
import SavedPeople from "../components/SavedPeople";
import Row from "../components/Row";
import API from "../utils/API.js";


class Home extends Component {
    state = {
        currentUserId: "5a1ccd5fee8d7027c4c53e63",
        eventSearchResults: null
    };

    componentDidMount() {
        this.setUpCurrentUserId();
    }

    setUpCurrentUserId = () => {
        let currentUserLinkedinId = localStorage.getItem("id");
        API.getUserIdByLinkedinId(currentUserLinkedinId).then((res) => {
            this.setState({currentUserId: res});
        })
    };

    newSearchResultsAvailable = (results) => {
        this.setState({eventSearchResults: results});
    };

    render() {
        // Removed <SavedPeople /> .
        return (

                <div>
                    <Row>
                        <NewEvent/>
                        <SearchEvent
                                newSearchResultsAvailable={this.newSearchResultsAvailable}
                        />
                    </Row>
                    <Row>
                        <HistoryOfEvents
                                currentUserId={this.state.currentUserId}
                        />
                        <EventSearchResults
                                searchResults={this.state.eventSearchResults}
                        />
                    </Row>
                </div>
        );
    }
}


export default Home;
