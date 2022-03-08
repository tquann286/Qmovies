import React, { useState, useEffect } from 'react'

import { getHomePage } from '../../api'

import styles from './Home.module.css'
import { BannerSection, ListMovies } from '../index'

const Home = () => {
	const { homeContainer } = styles
	const [bannerMovies, setBannerMovies] = useState([])
	const [listMovies, setListMovies] = useState([])

	useEffect(() => {
		getHomePage(0).then((res) => {
			const { data } = res.data
			data.recommendItems.shift()
			setBannerMovies(data.recommendItems[0].recommendContentVOList)
			data.recommendItems.shift()
			setListMovies(data.recommendItems)
		})
	}, [])

	return (
		<div className={homeContainer}>
			<BannerSection bannerMovies={bannerMovies} />
			<ListMovies listMovies={listMovies} />
		</div>
	)
}

export default Home
