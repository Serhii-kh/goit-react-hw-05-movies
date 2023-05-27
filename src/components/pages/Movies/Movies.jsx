import {  useState } from "react";
import { fetchMovieByQuery } from "components/Api/fetchMovies";
import { Wrapper } from "components/Wrapper/Wrapper";
import css from '../Movies/Movies.module.css'
import { Link, useLocation, useSearchParams } from "react-router-dom";
// import {Home} from '../Home/Home'
// import PropTypes from 'prop-types';


export const Movies = () => {
	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()
	const searchQuery = searchParams.get('query')

	const handleChange = e => {
		const { value } = e.target;
		setSearchParams({ query: [value] })
	}

	const handleSubmit = e => {
		e.preventDefault();

		// searchParams?.get('query')?.trim() === '' ?? alert('Please, enter your search query!');		

		fetchMovieByQuery(searchQuery).then(response => {
			const { data: { results } } = response
			setMovies(results)
		})

		// setSearchParams({})
	};

	return (
		<Wrapper>
			<form className={css.SearchForm} onSubmit={handleSubmit}>
				<button type="submit">
					<span>Search</span>
				</button>
				<input
					className={css.SearchForm__input}
					value={searchQuery? searchQuery : ''}
					onChange={handleChange}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search movies"
					name="searchQuery"
				/>
			</form>

			<ul>
				{movies.map(({ id, title }) =>
				(<li key={id}>
					<Link to={`${id}`} state={{ from: location }}>
						{title}
					</Link>
				</li>)
				)
				}
			</ul>
		</Wrapper>
	);
}

// Movies.PropTypes = {
// 	handlerFormSubmit: PropTypes.func.isRequired,
// }