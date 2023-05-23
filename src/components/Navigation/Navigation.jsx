import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css'

export const Navigation = () => {
	return (
		<>
			<header>
				<nav className={css.Navigation}>
					<NavLink className={css.Navigation__link} to="/">Home</NavLink>
					<NavLink className={css.Navigation__link} to="search/movie">Movies</NavLink>
				</nav>
		</header>
		</>
	)
}
