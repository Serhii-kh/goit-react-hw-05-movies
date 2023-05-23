import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Layout } from "./Layout/Layout";
// import PropTypes from 'prop-types';


export const App = () => {



	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="movie/:movieId" element={<MovieDetails />} />
					<Route path="search/movie" element={<Movies />} />
				</Route>
			</Routes>
		</>
	);
};



			// <NavLink className={css.Navigation__link} to="/" end>Home</NavLink>
			// <NavLink className={css.Navigation__link} to="search/movie">Movies</NavLink>