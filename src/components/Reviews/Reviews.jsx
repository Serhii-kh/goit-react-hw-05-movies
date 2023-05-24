import { fetchReviews } from "components/Api/fetchMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import css from '../Reviews/Reviews.module.css'

export const Reviews = () => {
	const [reviews, setReviews] = useState([])
	const { movieId } = useParams();

	useEffect(() => {
		fetchReviews(movieId).then(({ data }) => setReviews(data.results))

	}, [movieId])

	// console.log(reviews)

	return (
		<>
			{reviews && (<ul>
				{
					reviews.map(({ author, content }) => (<li key={author}><p>
						<span className={css.author}>Author:</span> {author}
					</p>
						<p>
							{content}
						</p>
					</li>))
					
				}
			</ul>)}

			{/* <p>reviews</p> */}
			

		</>



	)

}