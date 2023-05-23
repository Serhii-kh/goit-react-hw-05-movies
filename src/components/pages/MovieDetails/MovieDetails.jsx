import { fetchMovieById } from "components/Api/fetchMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieDetails = () => {
	const [movie, setMovie] = useState({})
	const { movieId } = useParams()

	useEffect(() => {
		fetchMovieById(movieId)
			.then(({ data }) => {
				setMovie(data)
				console.log(movie)
				console.log(data)
			})
	}, [movieId])

	const { original_title, overview, genres } = movie

	return (
		<>
			
			<div className="movieDetails">
				<h1>{original_title}</h1>
				{/* <p>{genres }</p> */}
				<p>{overview}</p>
				
			</div>
		</>
	)
}