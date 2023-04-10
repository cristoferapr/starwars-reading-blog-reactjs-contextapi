import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const [aux, setAux] = useState([])
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			tempfetch: '',
			tempfetchplanets: '',
			tempfetchvehicles: ''
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeopleData: () => {
				const store = getStore();
				/*const resp = await fetch ("https://www.swapi.tech/api/people")
				const data = await resp.json()
				const ppl = data.results
				setStore({people : ppl})*/
				(store.tempfetch == ''  ? fetch("https://www.swapi.tech/api/people") : fetch(store.tempfetch) )
				.then((res) => res.json())
				.then((data) => {
					let index = 0
					while ((index)<data.results.length){
					fetch(data.results[index].url)
					.then((response) => response.json())
					.then((datos) => {
						setStore ( { people : [...store.people, datos.result.properties] } ) })
					index++;	
					}
					if(data.next!=null) setStore ({tempfetch:data.next})
				})
				.catch((err) => console.log(err))
			},
			loadPlanetsData: () =>{
				const store = getStore();

				(store.tempfetchplanets == ''  ? fetch("https://www.swapi.tech/api/planets") : fetch(store.tempfetchplanets) )
				.then((res) => res.json())
				.then((data) => {
					let index = 0
					while ((index)<data.results.length){
					fetch(data.results[index].url)
					.then((response) => response.json())
					.then((datos) => {
						setStore ( { planets : [...store.planets, datos.result.properties] } ) })
					index++;	
					}
					if(data.next!=null) setStore ({tempfetchplanets:data.next})
				})
				.catch((err) => console.log(err))
			},
			loadVehiclesData: () =>{
				const store = getStore();

				(store.tempfetchvehicles == ''  ? fetch("https://www.swapi.tech/api/vehicles") : fetch(store.tempfetchvehicles) )
				.then((res) => res.json())
				.then((data) => {
					let index = 0
					while ((index)<data.results.length){
					fetch(data.results[index].url)
					.then((response) => response.json())
					.then((datos) => {
						setStore ( { vehicles : [...store.vehicles, datos.result.properties] } ) })
					index++;	
					}
					if(data.next!=null) setStore ({tempfetchvehicles:data.next})
				})
				.catch((err) => console.log(err))
			},
			setFav: (item) =>{
				const store = getStore();
				setStore( { favorites : [...store.favorites, item ]} )
				console.log(store.favorites)
			},
			deleteFav: (item) =>{
				const store = getStore();
				setStore ( { favorites : store.favorites.filter(fav => fav.name !== item.name) } )
			}
		},
		
	};
};

export default getState;
