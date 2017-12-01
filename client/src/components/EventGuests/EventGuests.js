import React, { Component } from 'react';
import temp from '../../snippet'
import "./EventGuests.css";
import Attendee from '../Attendee';
import API from "../../utils/API";


// const EventGuests = () => 
// <div className="col-md-7 col-md-offset-1 thumbnail">
//     <div className="">
//     <h1>Event Guests</h1>
//     </div>
//     {
//     Object.keys(temp).map((id)=>{
//     console.log(id)
//     return(
//         // <Attendee 
//         //     id={id}/>
//         <div className="col-md-4" key={id}>
//             <div className="thumbnail">
//             <h3>{temp[id].first_name + ' ' + temp[id].last_name}</h3>
//             <a ClassName="pic" id="image" href={temp[id].profile_url} ><img className = "rounded " src={temp[id].picture} alt=""/></a>
            
//             <a className='btn btn-primary' href={temp[id].profile_url}>
//                 Visit on LinkedIn
//             </a><br/>
//             {/* <a className='btn btn-primary' href={temp[props.id].profile_url}>
//                 Save Me
//             </a> */}
//             </div>
//         </div>
//     )
//     })
//     }
// </div>



class EventGuests extends Component {
    constructor(props){
        super(props)
    }
    
    

    renderFunction(eventName) {
        console.log("event name", eventName)
        // console.log("props", this.props)
        // let html;
        // let eventName = this.props.eventName;
        if (this.state.attendees.length==0){
            console.log("is empty") 
            console.log("event name", eventName)
            
            API.getEventByName(eventName)
            .then(res => {
                console.log("response", res);
               let temp = res.data["0"].attendees
               this.setState({attendees:temp})
               console.log("Array of event attendees here", temp)
               console.log("this state", this.state)
            //   Object.keys(temp).map((id)=>{
            //     console.log("id:", id)                
            //     console.log("Display name of attendee:", temp[id].displayName)
            //     console.log("Individual attendee info:", temp[id])
            //     console.log(temp)
                //return(
                    // <div className="col-md-4" key={id}>
                    //     <div className="thumbnail">
                    //     <h3>{temp[id].first_name + ' ' + temp[id].last_name}</h3>
                    //     <a ClassName="pic" id="image" href={temp[id].profile_url} ><img className = "rounded " src={temp[id].picture} alt=""/></a>
                    
                    //     <a className='btn btn-primary' href={temp[id].profile_url}>
                    //         Visit on LinkedIn
                    //     </a><br/>
                    //     {/* <a className='btn btn-primary' href={temp[props.id].profile_url}>
                    //         Save Me
                    //     </a> */}
                    //     </div>
                    // </div>
               // )
           // })
           }
            )
        }
        else{
            
        }
            
    }
    // componentDidMount() {
    //         console.log("Component did mount")
    //         console.log(this.props)
    //         let eventName = this.props.eventName;
    //         // API.getEventByName(eventName)
    //         // .then(res => {
    //         //     let temp = res.data["0"].attendees
    //         //     this.setState({attendees:temp})
    //         //    console.log("This is what you're looking for:", res.data["0"].attendees)
    //         //    console.log("CDM temp", temp)
    //         //    debugger
    //         // }
    //         //)
    //         //this.forceUpdate()
    //         console.log("this state", this.state, eventName)
    //         this.renderFunction(eventName)
            
    //     };
    render(){
        console.log("props from EG", this.props)
        let id = 1;
        return(
            <div className="col-md-7 col-md-offset-1 thumbnail">
           {console.log("render", this.state)}
                
                <div className="">
                <h1>Event Guests</h1>
                </div>
                {/* {this.renderFunction()} */}

                <div className="col-md-12" key={id}>    
                {
                        this.props.attendees.map(person =>
                             <div className="thumbnail col-md-4">
                             <h3>{person.displayName}</h3>
                             <a ClassName="pic" id="image" href={person.profileURL} ><img className = "rounded" src={person.picture} alt=""/></a>
                             <a className='btn btn-primary' href={person.profileURL}>Visit on LinkedIn</a><br/>
                             </div> 
                        )
                    }
                    
                   
                    
                </div>

                {/* <Attendee 
                    id={this.id} temp={this.temp}/>                  */}
                {
                // Object.keys(temp).map((id)=>{
                //     console.log(id)
                //     return(
                //          <Attendee 
                //             id={id}/>
                    
                //     )
                // })
                }
            </div>
        );
    }
}


export default EventGuests;
