import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/pages/NotFound/NotFound";
const Home = lazy(() => import("../components/pages/Home/Home"));
const Movies = lazy(() => import("../components/pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../components/pages/MovieDetails/MovieDetails"));
const Casts = lazy(() => import("../components/Casts/Casts"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="movie/:movieId" element={<MovieDetails />} >
						<Route path="cast" element={<Casts />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="movie" element={<Movies />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
