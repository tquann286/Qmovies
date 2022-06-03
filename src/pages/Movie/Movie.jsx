import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Player } from 'react-tuby'
import 'react-tuby/css/main.css'

import styles from './Movie.module.css'

import { getMovieDetail, getMoviePreviewInfo } from '../../api'

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
	const [isLoading, setIsLoading] = useState(true)
	console.log(movie)

	const params = useParams()

	useEffect(async () => {
		const fetchData = await getMovieDetail(params.movieId, 0)

		if (fetchData) {
			const episodeInfo = await Promise.all(
				fetchData.episodeVo[0].definitionList.map(async (item) => {
					const fetchEpisodeInfo = await getMoviePreviewInfo(
						params.movieId,
						0,
						fetchData.episodeVo[0].id,
						item.code
					)

					return fetchEpisodeInfo
				})
			)

			setMovie({ ...fetchData, episodeInfo: episodeInfo })
		}

		setIsLoading(false)
	}, [])

	return (
		<div className={movieContainer}>
			<Navbar />
			{isLoading ? (
				<div className={movieMain}>
					<h4>Loading...</h4>
				</div>
			) : (
				<div className={movieMain}>
					<div className={movieSection}>
						<div className={videoSection}>
							
						</div>
						<div className={relativeSection}>
							<div className={sameSeriesSection}></div>
							<div className={relativeSeriesSection}></div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Movie
