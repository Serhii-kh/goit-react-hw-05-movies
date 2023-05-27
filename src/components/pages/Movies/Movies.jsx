import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "components/Api/fetchMovies";
import { Wrapper } from "components/Wrapper/Wrapper";
import css from '../Movies/Movies.module.css'

export const Movies = () => {
	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const [query, setQuery] = useState('')
	const location = useLocation()
	const searchQuery = searchParams.get('query')

	const handleChange = e => {
		const { value } = e.target;
		setSearchParams({ query: [value] })
		setQuery(value)
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (searchQuery === '') {
			alert('Please, enter your search movie name!')
			return
		}

		// fetchMovieByQuery(searchQuery).then(response => {
		// 	const { data: { results } } = response
		// 	setMovies(results)
		// })
	};

	useEffect(() => {
		if (!searchQuery) return

		fetchMovieByQuery(searchQuery).then(response => {
			const { data: { results } } = response
			setMovies(results)
		})
	}, [searchQuery])

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

