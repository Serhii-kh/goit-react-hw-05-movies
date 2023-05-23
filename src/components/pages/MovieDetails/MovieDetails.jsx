import { fetchMovieById } from "components/Api/fetchMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const MovieDetails = () => {
	const [ movie, setMovie ] = useState(null)
	const { movieId } = useParams()
	console.log(movieId)

	useEffect(() => {
		fetchMovieById(movieId)
			.then(movie => {
				setMovie(movie)
				console.log(movie)
			})
	}, [movieId])

	return (
		<>
			
			<div className="movieDetails">
				<h1>axaxa</h1>
			</div>
		</>
	)
}