import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";

import { Wrapper } from "./Wrapper/Wrapper";
// import PropTypes from 'prop-types';


export const App = () => {



	return (
		<>
			<Wrapper>
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search/movie" element={<Movies />} />
					{/* <Route path="/products" element={<Products />} /> */}
				</Routes>

			</Wrapper>
		</>
	);
};



			// <NavLink className={css.Navigation__link} to="/" end>Home</NavLink>
			// <NavLink className={css.Navigation__link} to="search/movie">Movies</NavLink>