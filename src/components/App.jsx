import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Layout } from "./Layout/Layout";
import { Casts } from "./Casts/Casts";
import { Reviews } from "./Reviews/Reviews";
import { NotFound } from "./pages/NotFound/NotFound";


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
