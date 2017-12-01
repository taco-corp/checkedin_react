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
        {/* <a className='btn btn-primary' href={temp[props.id].profile_url}>
            Save Me
        </a> */}
        </div>
    </div>




// class Attendee extends Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         let temp = this.props.temp;
//         let id = this.props.id;
//         console.log("Attendee Component", temp)
//         console.log("Attendee Component", id)
        
//         //let props = this.props.id
//         return(
//             <div className="col-md-4" key={id}>
//                 <div className="thumbnail">
//                 <h3>{temp[id].first_name + ' ' + temp[id].last_name + temp[id].displayName}</h3>
//                 <a ClassName="pic" id="image" href={temp[id].profileURL} ><img className = "rounded " src={temp[id].picture} alt=""/></a>
                
//                 <a className='btn btn-primary' href={temp[id].profileURL}>
//                     Visit on LinkedIn
//                 </a><br/>
//                 {/* <a className='btn btn-primary' href={temp[props.id].profile_url}>
//                     Save Me
//                 </a> */}
//                 </div>
//             </div>
//         )
//     }
// }
export default Attendee;
