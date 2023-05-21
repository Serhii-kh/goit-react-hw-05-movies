import { useState, useEffect } from "react";
// import { Link } from 'react-dom';
// import { Routes, Route } from "react-router-dom";
import { fetchTrandingMovies } from "components/Api/fetchMovies";
import { Wrapper } from "components/Wrapper/Wrapper";

export const Home = () => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetchTrandingMovies().then(response => {
			const { data: { results } } = response
			setMovies(results)
		})
	}, [])

	return (
		<Wrapper>
			<h1>In Trand</h1>
			<ul>
				{movies.map(({ id, title }) =>
				(<li key={id}>
					<p>{title}</p>
				</li>)
				)
				}
			</ul>
		</Wrapper>
	)
}

