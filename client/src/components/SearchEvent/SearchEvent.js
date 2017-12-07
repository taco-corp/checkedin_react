import React, {Component} from 'react';
import theme from "./SearchEvent.css";
import API from "../../utils/API";
import Autosuggest from 'react-autosuggest';

class SearchEvent extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            value: '',
            suggestions: []
        };
        this.allEvents = [];
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = (event) => {
        event.preventDefault();
        API.searchEvent(this.state.searchTerm)
        .then(results => {
            console.log(results);
            this.props.newSearchResultsAvailable(results);
            this.setState({
                searchTerm: ''
            });
        })
        .catch(err => console.log(err));
    };

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
     
      // Autosuggest will call this function every time you need to update suggestions. 
      onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        API.getAllEvents().then((res) => {
            this.allEvents = res;
            var eventsArray = (inputLength !== 0 && Array.isArray(res.data)) ? res.data : [];
            var filteredEventsArray = eventsArray.filter(eventOption =>
                    eventOption.eventName.toLowerCase().slice(0, inputLength) === inputValue
                );
            this.setState({
                suggestions: filteredEventsArray
            });
        })
      };
     
      // Autosuggest will call this function every time you need to clear suggestions. 
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };

      getSuggestionValue = (suggestion) => {
        return suggestion.eventName;
      }

      renderSuggestion = (suggestion) => {
        return (
          <span>{JSON.stringify(suggestion.eventName)}</span>
        );
      }

    render() {
        const value = this.state.value;
        
           // Autosuggest will pass through all these props to the input. 
           const inputProps = {
             placeholder: 'Search Events',
             onChange: this.onChange,
             id: "inputSearchTerm",
             name: "searchTerm",
             value: this.state.searchTerm,
             onChange: this.handleInputChange
           };
        return (
                <div className="col-md-4">
                    <form className="col-md-8 col-md-offset-2" role="search">
                        <div className="input-group">
                            {/* <input className="form-control"
                                   placeholder="Search Events"
                                   name="searchTerm"
                                   id="inputSearchTerm"
                                   type="text"
                                   value={this.state.searchTerm} onChange={this.handleInputChange}
                            /> */}
                            <Autosuggest
                                suggestions={this.state.suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={this.getSuggestionValue}
                                renderSuggestion={this.renderSuggestion}
                                inputProps={inputProps}
                                alwaysRenderSuggestions={true}
                                theme={theme}
                            />
                            <div className="input-group-btn">
                                <button className="btn btn-default" onClick={this.handleSearch}>
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}


export default SearchEvent;
