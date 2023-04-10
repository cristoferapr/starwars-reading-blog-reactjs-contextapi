import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/peopleCard.css"
import { Link } from "react-router-dom";


const VehicleCard = () => {
    const { store } = useContext(Context);

    
    return (
    <div className="container-fluid ">
        <div className="d-flex flex-row flex-nowrap overflow-auto m-auto">
        {store.vehicles.map((item, i) =>(
            <div className="card me-2">
            <img className="card-img-top" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/7f/Vehicles.png"></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <span>Model : {(item.model)}</span>
                <br/>
                <span>Class : {(item.vehicle_class)}</span>
                <br/>
                <span>Manufacturer : {(item.manufacturer)}</span>
                <br/>
                <span>Cost : {(item.cost_in_credits)}</span>
                <br/>
            </div>
        </div>
        ))}
        </div>
        </div>
        
    );
}

export default VehicleCard