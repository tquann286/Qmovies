import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Similar.module.css'

const Similar = ({ similarList }) => {
	const { similarContainer, similarMain, movieMain, coverImage } = styles

	const detectLink = ({ category, id }) => {
		if (category) {
			return `/series/${id}`
		} else {
			return `/movie/${id}`
		}
	}

	return (
		<div className={similarContainer}>
			<h6>You may like</h6>
			<div className={similarMain}>
			{similarList?.map((similarMovie) => (
				<Link key={similarMovie.id} to={detectLink(similarMovie)}>
					<div className={movieMain}>
						<div className={coverImage}>
							<img src={similarMovie.coverVerticalUrl} alt={similarMovie.name} />
						</div>
						<span>{similarMovie.name}</span>
					</div>
				</Link>
			))}
			</div>
		</div>
	)
}

export default Similar
