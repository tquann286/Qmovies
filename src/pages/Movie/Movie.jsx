import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './Movie.module.css'

import { getMovieDetail } from '../../api'

import { Navbar, ScrollToTop } from '../../components'

const Movie = () => {
	const { movieContainer } = styles

	const params = useParams()

	useEffect(async () => {
		const fetchData = await getMovieDetail(params.movieId, 0)


	}, [])

	return (
		<div className={movieContainer}>
			<Navbar />
		</div>
	)
}

export default Movie
