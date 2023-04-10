import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/peopleCard.css"
import { Link } from "react-router-dom";


const PlanetsCard = () => {
    const { store, actions } = useContext(Context);
    const handleClick = (item) =>{
        if(!store.favorites.includes(item)) actions.setFav(item)
    }
    
    return (
    <div className="container-fluid ">
        <div className="d-flex flex-row flex-nowrap overflow-auto m-auto">
        {store.planets.map((item, i) =>(
            <div className="card me-2">
            <img className="card-img-top" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/bn7n21v2HaGsypqIPk3UiA8uInTyLP.jpg"></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <span>Population : {(item.population)}</span>
                <br/>
                <span>Terrain : {(item.terrain)}</span>
                <br className="mb-3"/>
                <Link to="/detailedPlanets" className="btn btn-primary" state={item}>More Info</Link>
                <button className="btn btn-primary float-end" onClick={() => handleClick(item)}>♥</button>
            </div>
        </div>
        ))}
        </div>
        </div>
        
    );
}

export default PlanetsCard