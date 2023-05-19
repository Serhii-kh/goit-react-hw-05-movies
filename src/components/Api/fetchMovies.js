import axios from 'axios';

export const fetchMovies = async (searchQuery, page) => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'e4624f9b78ee3bac020d603dacbf8ced';
  const BASE_FETCH_OPTIONS =
    'image_type=photo&orientation=horizontal&safesearch=true&per_page=12';
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  try {
    const response = await instance.get(
      `?api_key=${API_KEY}&q=${searchQuery}&${BASE_FETCH_OPTIONS}&page=${page}`
    );

    if (response.data.hits.length === 0) {
      alert('Please enter a valid search query');
    }
    return response.data;
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
