import React, {useContext, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PeopleCard from "../component/peopleCard";
import PlanetsCard from "../component/planetsCard";
import VehicleCard from "../component/vehiclesCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	

	return (
						<div className="container">
						<h2 className="text-danger">Characters</h2>
						<PeopleCard />
						<br></br>
						<h2 className="text-danger">Planets</h2>
						<PlanetsCard />
						<br></br>
						<h2 className="text-danger">Vehicles</h2>
						<VehicleCard />
						<br className="mb-2"></br>
						</div>
	);
};