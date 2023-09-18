import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from './utils/global.context';
import dark from "../img/dark-icon.PNG"
import light from "../img/light-icon.jpg"

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
			<button onClick={toggleTheme}>
				{state.theme === "light" ? <img className="theme-icon" src={dark} alt="Light theme icon" /> : <img className="theme-icon" src={light} alt="Light theme icon" />}
			</button>
		</nav>
	)
}

export default Navbar