import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrandingMovies } from "components/Api/fetchMovies";
import PropTypes from 'prop-types';

export const Home = () => {
	const [movies, setMovies] = useState([])
	const location = useLocation()

	useEffect(() => {
		fetchTrandingMovies().then(response => {
			const { data: { results } } = response
			setMovies(results)
		})
	}, [])

	return (
		<>
			<h1>In Trand</h1>
			<ul>
				{movies.map(({ id, title }) =>
				(<li key={id}>
					<Link to={`movie/${id}`} state={{ from: location }}>
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