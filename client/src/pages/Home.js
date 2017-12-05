import React, {Component} from 'react';
import '../App.css';
import NewEvent from "../components/NewEvent";
import SearchEvent from "../components/SearchEvent";
import HistoryOfEvents from "../components/HistoryOfEvents";
import EventSearchResults from "../components/EventSearchResults";
// import SavedPeople from "../components/SavedPeople";
import Row from "../components/Row";

// import API from "../utils/API.js";

class Home extends Component {
    state = {
    };

    newSearchResultsAvailable = (results) => {
        this.setState({eventSearchResults: results});
    };

    render() {
        return (
                <div>
                    <Row>
                        <NewEvent/>
                        <SearchEvent
                                newSearchResultsAvailable={this.newSearchResultsAvailable}
                        />
                    </Row>
                    <HistoryOfEvents/>
                    <EventSearchResults
                            searchResults={this.state.eventSearchResults}
                    />
                </div>
        );
    }
}

export default Home;
