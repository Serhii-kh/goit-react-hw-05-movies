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

export const fetchMovieByQuery = async (searchQuery) => {
  const { SEARCH_MOVIE } = END_POINTS;

  try {
    return await axios(`${SEARCH_MOVIE}`);
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

// `example: Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=e4624f9b78ee3bac020d603dacbf8ced
// `;

// key: Ключ API (v3 auth)
// e4624f9b78ee3bac020d603dacbf8ced

// key: Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDYyNGY5Yjc4ZWUzYmFjMDIwZDYwM2RhY2JmOGNlZCIsInN1YiI6IjY0NjdiNWM4MmJjZjY3MDExYmYyOWY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCt0jOhedHnh60a_edwwtb3D5q3YgrVjg34K2M2aywg

//  В этой работе будут использоваться следующие ендпоинты.

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

// https://api.themoviedb.org/3/movie/550/?api_key=e4624f9b78ee3bac020d603dacbf8ced
// Status Code:
// 404

// https://api.themoviedb.org/3/movie/550?api_key=e4624f9b78ee3bac020d603dacbf8ced
// Status Code:
// 200

// https://api.themoviedb.org/3/trending/movie/{time_window}
// Get the trending movies on TMDB.

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDYyNGY5Yjc4ZWUzYmFjMDIwZDYwM2RhY2JmOGNlZCIsInN1YiI6IjY0NjdiNWM4MmJjZjY3MDExYmYyOWY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCt0jOhedHnh60a_edwwtb3D5q3YgrVjg34K2M2aywg',
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
