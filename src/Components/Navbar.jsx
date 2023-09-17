import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from './utils/global.context';

const Navbar = () => {
	const { state, dispatch } = useGlobalContext();

	const toggleTheme = () => {
		dispatch({ type: "TOGGLE_THEME" });
	};
	return (
		<nav className={ state.theme === "dark" ? "dark" : "light"}>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/contact">Contact</Link></li>
				<li><Link to="/favs">Favs</Link></li>
			</ul>
			<button onClick={toggleTheme}>Change theme</button>
			<span>Theme: {state.theme}</span>
		</nav>
	)
}

export default Navbar