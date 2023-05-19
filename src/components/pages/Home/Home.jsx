import { useEffect } from "react";
import { fetchMovies } from "components/Api/fetchMovies";

export const Home = () => {
	useEffect(() => {
		fetchMovies()
	}, [])
}

