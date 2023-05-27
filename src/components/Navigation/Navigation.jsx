import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'

export const Navigation = () => {
	const setActive = ({ isActive }) => isActive ? 'active-link' : ''

	return (
		<>
			<header>
				<nav className={css.Navigation}>
					<NavLink to="/" className={setActive}>Home</NavLink>
					<NavLink to="movie" className={setActive}>Movies</NavLink>
				</nav>
			</header>
		</>
	)
}
