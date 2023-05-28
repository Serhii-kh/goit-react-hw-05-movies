import { fetchMovieById } from 'components/Api/fetchMovies';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from '../MovieDetails/MovieDetails.module.css';

 const MovieDetails = () => {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		try {
			fetchMovieById(movieId).then(({ data }) => {
				setMovie(data);
			});
		} catch (error) {
			console.log(error);
		} finally {
		}
	}, [movieId]);

	const location = useLocation()
	const backLinkLocationRef = useRef(location.state?.from ?? '/')

	return (
		movie && (
			<>
				<Link to={backLinkLocationRef.current} className={css.goBack}>Go back</Link>
				<div className={css.movieDetails}>
					<img
						src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
						alt={movie.title}
					/>
					<h1>{movie.original_title}</h1>
					<p>{movie.overview}</p>
					<ul>
						{movie.genres.map(({ id, name }) => (
							<li key={id}>
								<p>{name}</p>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2>Additional information</h2>
					<ul className={css.additional_information}>
						<li>
							<Link to={'cast'}>Cast</Link>
						</li>
						<li>
							<Link to={'reviews'}>Reviews</Link>
						</li>
					</ul>
				</div>
				<Outlet />
			</>
		)
	);
};


export default MovieDetails;