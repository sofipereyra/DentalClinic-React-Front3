import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';
import useFetch from "../hooks/useFetch";

const Home = () => {
	const { state, dispatch } = useGlobalContext();
	const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
	
	useEffect(() => {
		if (!loading && !error) {
			dispatch({ type: "SET_DATA", payload: data });
		}

		console.log(state);
	}, [data, loading, error, dispatch]);

	return (
		<main className={`${state.theme === "dark" ? "dark" : "light"}`}>
		<div className='logo-section'>
			<div className='logo-container'>
			</div>
		</div>
		<div className="card-grid">
			{loading ? (
			<p>Cargando...</p>
			) : data ? (
			state.data.map((dentist) => (
				<Card key={dentist.id} dentist={dentist}></Card>
			))
			) : null}
		</div>
		</main>
	);
}

export default Home;