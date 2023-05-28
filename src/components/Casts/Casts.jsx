import { fetchCasts } from "components/Api/fetchMovies"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import css from '../Casts/Casts.module.css'

const Casts = () => {
	const [casts, setCasts] = useState([])
	const { movieId } = useParams()

	useEffect(() => {
		fetchCasts(movieId).then(({ data }) => setCasts(data.cast))

	}, [movieId])

	return (
		<>
			{casts && <ul className={css.casts__list}>
				{
					casts.map(({ id, name, profile_path }) => (<li key={id}>
						<p>{name}</p>
						<img
							className={css.profile_path}
							src={`https://image.tmdb.org/t/p/w300${profile_path}`}
							alt={`${name}`}
						/>
					</li>))
				}
			</ul>}
			{casts.length === 0 && <div>
				<p>
					Sory, but we haven`t info about casts for this movie...
				</p>
			</div>}
		</>
	)
}

export default Casts;