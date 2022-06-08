import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './InSeries.module.css'

const InSeries = ({ refList }) => {
	const { inSeriesContainer, refMain, movieMain, coverImage } = styles

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
			<div className={refMain}>
			{refList?.map((refMovie) => (
				<Link key={refMovie.id} to={detectLink(refMovie)}>
					<div className={movieMain}>
						<div className={coverImage}>
							<img src={refMovie.coverVerticalUrl} alt={refMovie.name} />
						</div>
						<span>{refMovie.name}</span>
					</div>
				</Link>
			))}
			</div>
		</div>
	)
}

export default InSeries
