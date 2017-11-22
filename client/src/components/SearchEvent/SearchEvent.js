import React, { Component } from 'react';
import "./SearchEvent.css";

// const SearchEvent = () => 

class SearchEvent extends Component {
    handleSearch = event => {
        event.preventDefault();
        console.log("HANDLE SEARCH");
    };

    render() {
        return (
            <div className="thumbnail col-md-4">
                <form className="col-md-8 col-md-offset-2" role="search">
                    <div className="input-group">
                      <input className="form-control" placeholder="Search Events" name="srch-term" id="srch-term" type="text"/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchEvent;
