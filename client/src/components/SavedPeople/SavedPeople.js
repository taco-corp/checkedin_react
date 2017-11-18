import React from "react";
import "./SavedPeople.css";
import temp from '../../snippet'


const SavedPeople = () => 
    <div className="col-md-3 bottom thumbnail">
        <div className="thumbnail text-center">
            <h3>Saved People</h3>
        </div>
        {
            Object.keys(temp).map((id)=>{
            console.log(id)
            return(
                
                <div className="col-md-3" key={id}>
                    <div className="">
                    <a className="pic" href={temp[id].profile_url} ><img className = "rounded " src={temp[id].picture} alt=""/></a>
                    </div>
                </div>
            
            )
            })
        }
    </div>

export default SavedPeople;
