import { fetchMovieById } from "components/Api/fetchMovies"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const MovieDetails = () => {
	const { movieId } = useParams()
	console.log(movieId)

	useEffect(() => {
		fetchMovieById(movieId)
	}, [movieId])

	return (
		<>
			<div>{movieId}</div>
		</>
	)
}