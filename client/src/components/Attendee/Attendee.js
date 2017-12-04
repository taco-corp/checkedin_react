import React, { Component } from 'react';
import temp from '../../snippet'
import "./Attendee.css";

const Attendee = (props) => 
    <div className="col-md-4" key={props.id}>
        <div className="thumbnail">
            <h3>{temp[props.id].first_name + ' ' + temp[props.id].last_name}</h3>
            <a ClassName="pic" id="image" href={temp[props.id].profile_url} ><img className = "rounded " src={temp[props.id].picture} alt=""/></a>
            
            <a className='btn btn-primary' href={temp[props.id].profile_url}>
                Visit on LinkedIn
            </a><br/>
        </div>
    </div>

export default Attendee;
