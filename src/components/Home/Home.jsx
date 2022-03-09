import React, { useState, useEffect } from 'react'

import { getHomePage } from '../../api'

import styles from './Home.module.css'
import { BannerSection, ListMovies } from '../index'

const Home = () => {
	const { homeContainer } = styles
	const [page, setPage] = useState(0)
	const [bannerMovies, setBannerMovies] = useState([])
	const [listMovies, setListMovies] = useState([])

	useEffect(() => {
		getHomePage(page).then((res) => {
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
			<ListMovies listMovies={listMovies} page={page}
			setPage={setPage} />
		</div>
	)
}

export default Home
