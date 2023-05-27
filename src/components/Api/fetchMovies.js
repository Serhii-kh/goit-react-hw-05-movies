import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'e4624f9b78ee3bac020d603dacbf8ced',
  language: 'en-US',
};

 const END_POINTS = {
  TRANDING: 'trending/movie/week',
  SEARCH_MOVIE: 'search/movie',
  MOVIE_BY_ID: 'movie/',
  CASTS: '/credits',
  REVIEWS: '/reviews',
};

export const fetchTrandingMovies = async () => {
  const { TRANDING } = END_POINTS;

  try {
    return await axios(`${TRANDING}?`);
  } catch (error) {}
};

export const fetchMovieByQuery = async (query) => {
	const { SEARCH_MOVIE } = END_POINTS;

  try {
    return await axios(`${SEARCH_MOVIE}?query=${query}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async id => {
  const { MOVIE_BY_ID } = END_POINTS;

  try {
    return await axios(`${MOVIE_BY_ID}${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCasts = async id => {
  const { MOVIE_BY_ID, CASTS } = END_POINTS;

  try {
    return await axios(`${MOVIE_BY_ID}${id}${CASTS}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async id => {
  const { MOVIE_BY_ID, REVIEWS } = END_POINTS;

  try {
    return await axios(`${MOVIE_BY_ID}${id}${REVIEWS}`);
  } catch (error) {
    console.log(error);
  }
};
