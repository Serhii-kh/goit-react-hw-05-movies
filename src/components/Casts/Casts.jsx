import { fetchCasts } from "components/Api/fetchMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Casts = () => {
	const [casts, setCasts] = useState(null)
	const { movieId } = useParams()

	useEffect(() => {
		fetchCasts(movieId).then(({ data }) => setCasts(data.cast))

	}, [movieId])

	console.log(casts)

	return (
		<>
			{casts && <ul>
				{
					casts.map(({ id, name }) => (<li key={id}>
						<p>{name}</p>
					</li>))
				}
			</ul>}


		</>
	)

}