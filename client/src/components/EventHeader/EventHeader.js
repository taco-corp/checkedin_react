import React from "react";
import "./EventHeader.css";

const EventHeader = () => 
    <div className="thumbnail col-md-8 col-md-offset-2">
        <row className="">
            <h1>Bark in the Park</h1>
        </row>
        <row className="col-md-12">
        <div id="eventcheckinbtn" class="container col-md-4 col-md-offset-4">
            <a class="btn btn-primary btn-lg btn-block" href="/auth/linkedin/{{key.sanitized_event_name}}" id="submit2" width="300">Get CheckedIn with LinkedIn</a>
        </div>
        </row>
    </div>

export default EventHeader;
