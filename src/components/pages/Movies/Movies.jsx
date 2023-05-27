import { useEffect } from "react";
import { fetchMovieByQuery } from "components/Api/fetchMovies";
import { Wrapper } from "components/Wrapper/Wrapper";
import css from '../Movies/Movies.module.css'
import { useSearchParams } from "react-router-dom";
// import PropTypes from 'prop-types';


export const Movies = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const searchQuery = searchParams.get('query')

	const handleChange = e => {
		const { value } = e.target;
		setSearchParams({ query: [value] })
		// console.log(value)
		// console.log(searchParams)	
		console.log(searchParams)
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (searchParams.get('query').trim() === '') {
			alert('Please, enter your search query!');
			return;
		}

		console.log('submit done!')

		fetchMovieByQuery(searchQuery).then(r => console.log(r))

		// handlerFormSubmit(searchQuery);
		// setSearchQuery('')
	};

	// useEffect(() => {
	// 	fetchMovieByQuery(searchQuery)
	// }, [searchQuery])


	return (
		<Wrapper>
			<form className={css.SearchForm} onSubmit={handleSubmit}>
				<button type="submit">
					<span>Search</span>
				</button>
				<input
					className={css.SearchForm__input}
					// value={searchParams}
					onChange={handleChange}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search movies"
					name="searchQuery"
				/>
			</form>

		</Wrapper>
	);
}

// Movies.PropTypes = {
// 	handlerFormSubmit: PropTypes.func.isRequired,
// }