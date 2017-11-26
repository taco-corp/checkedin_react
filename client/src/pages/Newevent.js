import React, { Component } from 'react';
// import NewEvent from "../components/NewEvent";
import API from "../utils/API";
import Row from "../components/Row";

class Newevent extends Component {
    state = {
        host:'',
        location:'',
        eventName:'',
        description:'',
        keywordOne:'',
        keywordTwo:'',
        keywordThree:'',
        eventURL:''
    }

    // ***ERROR: Why are we 1 character behind the input****
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });        
        // console.log("currentState", this.state);
      };
    // handleEventNameChange = event => {
    //     this.setState({eventName: event.target.value});
    //   }
    handleCreation = event => {
        event.preventDefault();
        console.log("this.state", this.state);
        API.createEvent(this.state)
        //   .then(res =>
        //     {
        //     //   var displayName = (res && res.data && res.data.displayName) ? res.data.displayName : "";
        //     //   this.setState({ loggedInUserName: displayName });
        //     }
        //   )
        //   .catch(err => console.log(err));
    
    console.log("HANDLE CREATION");
    // window.location='http://localhost:8080/api/auth/linkedin';
    // db.Event
    //     .create({
    //         host: req.body.event_host
    //     })
};   
    render() {
        return (
            <div>
            <div className="Event">
                  
            </div>

            <div className="Event col-md-6 col-md-offset-3 thumbnail">
                <form id="event-form" className="container col-md-12">
                    <div className="text-center"><h2>Create Your Event</h2></div>
                    
                    <input type="text" value={this.state.host} onChange={this.handleInputChange} placeholder="Event Hosts Name (required)" name="host" id="inputHost" className="form-control" required />

                    <input type="text" value={this.state.location} onChange={this.handleInputChange} placeholder="Event Location (required)" name="location" id="inputLocation" className="form-control" required />

                    <input type="text" value={this.state.eventName} onChange={this.handleInputChange} placeholder="Event Name (required)" name="eventName" id="inputName" className="form-control" required />

                    
                    <input type="text" value={this.state.description} onChange={this.handleInputChange} placeholder="Event Description (required)" name="description" id="inputName" className="form-control" required />


                    <input type="text" value={this.state.keywordOne} onChange={this.handleInputChange} placeholder="Event Keyword (required)" name="keywordOne" id="inputName" className="form-control" required />


                    <input type="text" value={this.state.keywordTwo} onChange={this.handleInputChange} placeholder="Event Keyword (required)" name="keywordTwo" id="inputName" className="form-control" required />


                    <input type="text" value={this.state.keywordThree} onChange={this.handleInputChange} placeholder="Event Keyword (required)" name="keywordThree" id="inputName" className="form-control" required />


                    <input type="text" value={this.state.eventURL} onChange={this.handleInputChange} placeholder="Event URL (required)" name="eventURL" id="inputName" className="form-control" required /> 


                    {/* <!-- Event Button --> */}
                    
                    <div className="App text-center">
                        <div className="thumbnail col-md-4 col-md-offset-2">
                        <Row className="col-md-12">
                            <div id="createEventBtn" className="container col-md-8 col-md-offset-3">
                            <button className="btn btn-primary btn-lg btn-block" href="/newevent" id="submit2" width="300" onClick={this.handleCreation}>Create New Event</button>
                            </div>
                        </Row>
                        </div>
                    </div>
                    {/* <NewEvent handleClick=
                    {this.handleCreation}/> */}
                    {/* <button type="submit" className="btn btn-primary btn-lg btn-block" id="createEventButton">Create Event</button> */}

                </form>

                <script src="assets/js/index.js" type="text/javascript">
                    
                </script>
            </div>
            </div>
        );
    }
}
export default Newevent;