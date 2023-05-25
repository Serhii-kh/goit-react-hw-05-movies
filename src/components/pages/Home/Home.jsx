import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Routes, Route, NavLink } from "react-router-dom";
import { fetchTrandingMovies } from "components/Api/fetchMovies";
// import { Wrapper } from "components/Wrapper/Wrapper";
import PropTypes from 'prop-types';

export const Home = () => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetchTrandingMovies().then(response => {
			const { data: { results } } = response
			setMovies(results)
			// console.log(results)
		})
	}, [])

	return (
		<>
			<h1>In Trand</h1>
			<ul>
				{movies.map(({ id, title }) =>
				(<li key={id}>
					<Link to={`movie/${id}`}>
						{title}
					</Link>
				</li>)
				)
				}
			</ul>
		</>
	)
}

Home.propTypes = {
	movies: PropTypes.array,
}


	// < Link to = {`${id}`}>