import React, { Component } from 'react';

class Newevent extends Component {

    render() {
        return (
            <div>
            <div className="Event">
                  
            </div>

            <div className="Event col-md-6 col-md-offset-3 thumbnail">
                
                <form id="event-form" class="container col-md-12">
                    <div className="text-center"><h2>Create Your Event</h2></div>
                    <input type="text" placeholder="Event Hosts Name (required)" name="hostname" id="inputHost" class="form-control" required />
                    <input type="text" placeholder="Event Location (required)" name="location" id="inputLocation" class="form-control" required />
                    <input type="text" placeholder="Event Name (required)" name="eventname" id="inputName" class="form-control" required />
                    <input type="text" placeholder="Event Description (required)" name="description" id="inputDescription" class="form-control" required />
                    <input type="text" placeholder="Event Keyword #1 (required)" name="keyword1" id="inputKeyword1" class="form-control"/>
                    <input type="text" placeholder="Event Keyword #2" name="keyword2" id="inputKeyword2" class="form-control"/>
                    <input type="text" placeholder="Event Keyword #3" name="keyword3" id="inputKeyword3" class="form-control"/>
                    <input type="text" placeholder="Optional URL to show event attendees." name="hostname" id="inputHost" class="form-control" />
                    {/* <!-- Event Button --> */}
                    <button type="submit" class="btn btn-primary btn-lg btn-block" id="createEventButton">Create Event</button>

                </form>

                <script src="assets/js/index.js" type="text/javascript">
                    
                </script>
            </div>
            </div>
        );
    }
}
export default Newevent;