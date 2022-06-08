import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Player } from 'react-tuby'
import 'react-tuby/css/main.css'

import styles from './Movie.module.css'

import { getMovieDetail, getMoviePreviewInfo } from '../../api'

import { Navbar, ScrollToTop } from '../../components'
import { subtitleProxy } from '../../utilities'

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
			const sourceInfo = await Promise.all(
				fetchData.episodeVo[0].definitionList.map(async (item) => {
					const fetchEpisodeInfo = await getMoviePreviewInfo(
						params.movieId,
						0,
						fetchData.episodeVo[0].id,
						item.code
					)
					fetchEpisodeInfo.definition = item.description.replace('P', '')

					return {
						quality: fetchEpisodeInfo.definition,
						url: fetchEpisodeInfo.mediaUrl,
					}
				})
			)

			const subtitlesInfo = await Promise.all(
				fetchData.episodeVo[0].subtitlingList.map(async (subtitle) => ({
					lang: subtitle.languageAbbr,
					language: `${subtitle.language} ${
						subtitle.translateType ? '(Auto)' : ''
					}`,
					url: subtitle.subtitlingUrl,
				}))
			)

			setMovie({
				...fetchData,
				sourceInfo: sourceInfo.sort((a, b) => b.quality - a.quality),
				subtitlesInfo: subtitlesInfo,
			})
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
							<Player
								src={movie.sourceInfo}
								subtitles={movie.subtitlesInfo.map((subtitle) => ({
									...subtitle,
									url: subtitleProxy(subtitle.url),
								}))}
								poster={movie.coverVerticalUrl}
							/>
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
