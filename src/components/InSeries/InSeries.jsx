import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './InSeries.module.css'

const InSeries = ({ refList }) => {
	const { inSeriesContainer, movieMain, coverImage } = styles

	const detectLink = ({ category, id }) => {
		if (category) {
			return `/series/${id}`
		} else {
			return `/movie/${id}`
		}
	}

	return (
		<div className={inSeriesContainer}>
			<h6>Related Series</h6>
			{refList?.map((refMovie) => {
				console.log(refMovie)
				return (
					<Link key={refMovie.id} to={detectLink(refMovie)}>
						<div className={movieMain}>
							<div className={coverImage}>
								<img src={refMovie.coverVerticalUrl} alt={refMovie.name} />
							</div>
							<span>{refMovie.name}</span>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default InSeries
