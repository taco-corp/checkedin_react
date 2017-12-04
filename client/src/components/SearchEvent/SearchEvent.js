import React, {Component} from 'react';
import "./SearchEvent.css";
import API from "../../utils/API";

class SearchEvent extends Component {
    state = {
        searchTerm: ''
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = event => {
        event.preventDefault();
        console.log("HANDLE SEARCH");
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

    render() {
        return (
                <div className="col-md-4">
                    <form className="col-md-8 col-md-offset-2" role="search">
                        <div className="input-group">
                            <input className="form-control"
                                   placeholder="Search Events"
                                   name="searchTerm"
                                   id="inputSearchTerm"
                                   type="text"
                                   value={this.state.searchTerm} onChange={this.handleInputChange}
                            />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit" onClick={this.handleSearch}>
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
