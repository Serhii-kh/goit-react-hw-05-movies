import { Routes, Route, NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'

export const Navigation = () => {
	return (
		<>
			<nav className={css.Navigation}>
				<NavLink to="/" end>Home</NavLink>
				<NavLink to="search/movie">Movies</NavLink>
			</nav>
		</>
	)
}
