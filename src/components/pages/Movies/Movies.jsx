import { useState, useEffect } from "react";
// import { Routes, Route, NavLink } from "react-router-dom";
import { fetchMovieByQuery } from "components/Api/fetchMovies";
import { Wrapper } from "components/Wrapper/Wrapper";
import css from '../Movies/Movies.module.css'
import PropTypes from 'prop-types';


export const Movies = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleChange = ({ target: { value } }) => {
		setSearchQuery(value);
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (searchQuery.trim() === '') {
			alert('Please enter your search query');
			return;
		}
		// handlerFormSubmit(searchQuery);
	};


	return (
		<Wrapper>
			<form className={css.SearchForm} onSubmit={handleSubmit}>
				<button type="submit">
					<span>Search</span>
				</button>
				<input
					className={css.SearchForm__input}
					value={searchQuery}
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