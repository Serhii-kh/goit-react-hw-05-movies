import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Home } from "./pages/Home/Home";

import { Wrapper } from "./Wrapper/Wrapper";
// import PropTypes from 'prop-types';


export const App = () => {
	return (
		<>
			<Wrapper>
				{/* <Navigation /> */}
				<Home />
			</Wrapper>

			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search/movie" element={<About />} />
				<Route path="/products" element={<Products />} />
			</Routes> */}
		</>
	);
};


	// <NavLink to="/" end>Home</NavLink>
	// <NavLink to="search/movie">Movies</NavLink>