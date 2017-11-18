import React, { Component } from 'react';

class Newevent extends Component {

    render() {
        return (
            <div>
            <div className="Event">
                  
            </div>

            <div className="Event">
                
                <form id="event-form" className="container">
                    <h2>Create Your Event</h2>
                    <input type="text" placeholder="Event Hosts Name (required)" name="" id="inputHost" className="form-control" required />
                    <input type="text" placeholder="Event Location (required)" name="" id="inputLocation" className="form-control" required />
                    <input type="text" placeholder="Event Name (required)" name="" id="inputName" className="form-control" required />
                    <input type="text" placeholder="Event Description (required)" name="" id="inputDescription" className="form-control" required />
                    <input type="text" placeholder="Event Keyword #1 (required)" name="" id="inputKeyword1" className="form-control"/>
                    <input type="text" placeholder="Event Keyword #2" name="" id="inputKeyword2" className="form-control"/>
                    <input type="text" placeholder="Event Keyword #3" name="" id="inputKeyword3" className="form-control"/>
                    {/* <!-- Event Button --> */}
                    <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit">Create Event</button>

                </form>

                <script src="assets/js/index.js" type="text/javascript">
                    
                </script>
            </div>
            </div>
        );
    }
}
export default Newevent;