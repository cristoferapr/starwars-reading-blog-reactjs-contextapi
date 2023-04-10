import React, {useContext, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PeopleCard from "../component/peopleCard";

export const DetailedPlanets = (item) => {
  let state = useLocation();

	return (
						<div className="container">
						<div className="row">
                <div className="col-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" className="w-100 h-auto"></img>
                </div>
                <div className="col-6">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ac conubia, pretium lacus in aliquam ad curabitur nulla habitant enim volutpat, posuere imperdiet ligula placerat netus facilisis tempus quisque. Molestie augue netus pretium hac congue ullamcorper mollis dis, nisl vehicula morbi venenatis est mattis justo neque at, aptent fringilla taciti ligula tortor felis montes. Ante dictum viverra platea eu ultricies lacinia hac, natoque imperdiet nunc interdum ad.
Dis lectus cursus tortor nullam bibendum condimentum sagittis, dictum ullamcorper primis habitasse odio maecenas rutrum, aptent curabitur ut arcu et sociosqu. Aptent pretium nibh potenti curae parturient iaculis etiam, cursus arcu sociis venenatis mus proin, litora nascetur varius pharetra tempus donec. Eget tincidunt fusce cum class sociosqu hac dui aliquet, parturient a tempor ultrices sapien massa.</p>
                </div>
            </div>
            <div className="row border border-danger mt-3"></div>
            <div className="row mt-4 text-center text-danger">
              <div className="col">
                <span>Name</span>
                <br></br>
                <span>{state.state.name}</span>
              </div>
              <div className="col">
                <span>Rotatio Period</span>
                <br></br>
                <span>{state.state.rotation_period}</span>
                </div>
              <div className="col">
                <span>Orbital Period</span>
                <br></br>
                <span>{state.state.orbital_period}</span>
                </div>
              <div className="col">
                <span>Gravity</span>
                <br></br>
                <span>{state.state.gravity}</span>
                </div>
              <div className="col">
                <span>Population</span>
                <br></br>
                <span>{state.state.population}</span>
                </div>
            </div>
            <div className="row border border-danger mt-3"></div>
            <div className="row mt-4 text-center text-danger">
            <div className="col">
                <span>Climate</span>
                <br></br>
                <span>{state.state.climate}</span>
                </div>
                <div className="col">
                <span>Terrain</span>
                <br></br>
                <span>{state.state.terrain}</span>
                </div>
                <div className="col">
                <span>Surface water</span>
                <br></br>
                <span>{state.state.surface_water}</span>
                </div>
                <div className="col">
                <span>Diameter</span>
                <br></br>
                <span>{state.state.diameter}</span>
                </div>
            </div>
						</div>
	);
};