import { fetchMovieById } from "components/Api/fetchMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieDetails = () => {
	const [movie, setMovie] = useState(null)
	const { movieId } = useParams()

	useEffect(() => {
		try {
			fetchMovieById(movieId)
				.then(data => {
					setMovie(data)
					console.log(movie)
					console.log(data)
				})
		}
		catch (error) {
			console.log(error)
		}
		finally { }

	}, [movieId])

	const { original_title, overview, genres } = movie

	const movieGenres = []

	if (genres) {
		for (const genre of genres) {
			movieGenres.push(genre.name)
		}
	}

	return (
		<>

			<div className="movieDetails">
				<h1>{original_title}</h1>
				<p>{movieGenres}</p>
				<p>{overview}</p>

			</div>
		</>
	)
}