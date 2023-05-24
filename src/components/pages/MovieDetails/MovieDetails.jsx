import { fetchMovieById } from 'components/Api/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      fetchMovieById(movieId).then(data => {
        setMovie(movie);
        // console.log(movie);
        // data.data.genres;
        console.log(data.data.genres);
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, [movieId, movie]);

  // const {
  //   data: { original_title, overview, genres },
  // } = movie;
  // console.log(genres)

  return (
    <>
      <div className="movieDetails">
        {/* <h1>{original_title}</h1> */}
        {/* <ul>{genres.map((genre) => {
			return <li><p>{genre}</p></li>
		})}</ul> */}
        {/* <p>{overview}</p> */}
        <p>dsdsfdf</p>
      </div>
    </>
  );
};
