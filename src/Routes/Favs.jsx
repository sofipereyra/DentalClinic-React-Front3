import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

const Favs = () => {
	const {state} = useGlobalContext();

	return (
		<div className={ state.theme === "dark" ? "dark" : "light"}>
			<h1>Dentists Favs</h1>
			<div className="favs-container">
				{state.favorites.map((dentist) => (
					<Card key={dentist.id} dentist={dentist}/>
				))}
			</div>
		</div>
	);
	};

export default Favs;
