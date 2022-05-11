import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './Movie.module.css'

import { getDiscoveryVideos } from '../../api'

import { Navbar, ScrollToTop } from '../../components'

const Movie = () => {
	const {
		movieContainer,
	} = styles

	const params = useParams()
	console.log(params)

	return (
		<div className={movieContainer}>
			<Navbar />
		</div>
	)
}

export default Movie
