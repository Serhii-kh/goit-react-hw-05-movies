import { useEffect } from "react";
import { fetchTrandingMovies } from "components/Api/fetchMovies";
import { fetchMovieByQuery } from "components/Api/fetchMovies";
import { fetchMovieById } from "components/Api/fetchMovies";
import { fetchCasts } from "components/Api/fetchMovies";
import { fetchReviews } from "components/Api/fetchMovies";

export const Home = () => {
	useEffect(() => {
		// fetchTrandingMovies()
		// fetchMovieByQuery()
		// fetchMovieById(840326)
		// fetchCasts(840326)
		fetchReviews(502356)
	}, [])
}

