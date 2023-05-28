import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "components/Api/fetchMovies";
import { Wrapper } from "components/Wrapper/Wrapper";
import css from '../Movies/Movies.module.css'

const Movies = () => {
	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()
	const searchQuery = searchParams.get('query')

	const handleChange = ({ target: { value } }) => {
		value === "" ? setSearchParams({}) : setSearchParams({ query: [value] });
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (searchQuery === '' || !searchQuery) {
			alert('Please, enter your search movie name!')
			return
		}

		fetchMovieByQuery(searchQuery).then(response => {
			const { data: { results } } = response

			results.length !== 0 ? setMovies(results) : alert('No results for your search :(')
		})
	};

	useEffect(() => {
		fetchMovieByQuery(searchQuery).then(response => {
			const { data: { results } } = response
			setMovies(results)
		}, [])
	})

	return (
		<Wrapper>
			<form className={css.SearchForm} onSubmit={handleSubmit}>
				<button type="submit">
					<span>Search</span>
				</button>
				<input
					className={css.SearchForm__input}
					value={searchQuery ? searchQuery : ''}
					onChange={handleChange}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search movies"
					name="searchQuery"
				/>
			</form>
			{movies && <ul>
				{movies.map(({ id, title }) =>
				(<li key={id}>
					<Link to={`${id}`} state={{ from: location }}>
						{title}
					</Link>
				</li>)
				)
				}
			</ul>}
		</Wrapper>
	);
}

export default Movies;