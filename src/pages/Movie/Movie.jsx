import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Player } from 'react-tuby'
import 'react-tuby/css/main.css'

import styles from './Movie.module.css'

import { getMovieDetail } from '../../api'

import { Navbar, ScrollToTop } from '../../components'

const Movie = () => {
	const {
		movieContainer,
		movieMain,
		movieSection,
		videoSection,
		relativeSection,
		sameSeriesSection,
		relativeSeriesSection,
	} = styles

	const [movie, setMovie] = useState(null)
	console.log(movie)
	const params = useParams()

	useEffect(async () => {
		const fetchData = await getMovieDetail(params.movieId, 0)

		if (fetchData) {
			setMovie(fetchData)
		}
	}, [])

	return (
		<div className={movieContainer}>
			<Navbar />
			<div className={movieMain}>
				<div className={movieSection}>
					<div className={videoSection}></div>
					<div className={relativeSection}>
						<div className={sameSeriesSection}></div>
						<div className={relativeSeriesSection}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Movie
