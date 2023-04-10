import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Navbar = () => {
	const { store,actions } = useContext(Context);

const handleClick = (item) => {
	actions.deleteFav(item)
}

const switchDetail = (item) =>{
	if(item.diameter) return <li className="d-inline-flex"><Link to="/detailedPlanets" className="dropdown-item" state={item}>{item.name}</Link><button onClick={()=> handleClick(item)} className="float-end">🗑</button></li>
	return <li className="d-inline-flex"><Link to="/detailed" className="dropdown-item" state={item}>{item.name}</Link><button onClick={()=> handleClick(item)} className="float-end">🗑</button></li>
}
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-3">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" style={{maxHeight:40}}></img>
				</span>
			</Link>
			<div className="ml-auto">
			<div class="dropdown">
  			<button className="btn btn-secondary dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   			 Favorites
			</button>
			<ul className="dropdown-menu dropdown-menu-end">
				{store.favorites.map((item, index) =>{
					return switchDetail(item)
				})}
			</ul>
</div>
			</div>
		</nav>
	);
};
