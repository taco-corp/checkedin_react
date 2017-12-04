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
        currentUserId: "",
        currentUserLinkedinId: ""
    };
    componentWillMount() {
        this.setUpCurrentUserStates();
      }

      setUpCurrentUserStates = () => {
        this.setState({currentUserLinkedinId: localStorage.getItem("id")});
        this.setState({currentUserId: localStorage.getItem("user")});

      }
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
            <HistoryOfEvents 
                currentUserId = {this.state.currentUserId}
                currentUserLinkedinId = {this.state.currentUserLinkedinId}
            />
            <EventSearchResults
                searchResults={this.state.eventSearchResults}
            />
        </div>
        );
    }
}

export default Home;
