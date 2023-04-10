import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/peopleCard.css"
import { Link } from "react-router-dom";


const PeopleCard = () => {
    const { store, actions } = useContext(Context);
    const handleClick = (item) =>{
        if(!store.favorites.includes(item)) actions.setFav(item)
    }

    
    return (
    <div className="container-fluid ">
        <div className="d-flex flex-row flex-nowrap overflow-auto m-auto">
        {store.people.map((item, i) =>(
            <div className="card me-2">
            <img className="card-img-top" src="https://assets.adnradio.cl/2023/01/nueva-serie-spin-off-de-The-Mandalorian-Star-Wars.jpg"></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <span>Gender : {(item.gender)}</span>
                <br/>
                <span>Hair color : {(item.hair_color)}</span>
                <br/>
                <span>Eye color : {(item.eye_color)}</span>
                <br className="mb-3"/>
                <Link to="/detailed" className="btn btn-primary" state={item}>More Info</Link>
                <button className="btn btn-primary float-end" onClick={() => handleClick(item)}>♥</button>
            </div>
        </div>
        ))}
        </div>
        </div>
        
    );
}

export default PeopleCard