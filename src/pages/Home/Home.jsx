import React, { useState, useEffect } from 'react'
import { cloneDeep } from 'lodash'

import styles from './Home.module.css'

import { Navbar, ListMovies, BannerSection } from '../../components'
import { getHomePage } from './../../api/index'

const Home = () => {
	const { homeContainer } = styles
	const [page, setPage] = useState(0)
	const [bannerMovies, setBannerMovies] = useState([])
	const [listMovies, setListMovies] = useState([])

	useEffect(() => {
		getHomePage(page).then((res) => {
			const { data } = cloneDeep(res.data)
			console.log(data)
			setBannerMovies(data.recommendItems[0].recommendContentVOList)
			setListMovies(data.recommendItems.shift())
		})
	}, [])

	return (
		<React.Fragment>
			<Navbar />
			<div className={homeContainer}>
				<BannerSection bannerMovies={bannerMovies} />
				<ListMovies listMovies={listMovies} page={page} setPage={setPage} />
			</div>
		</React.Fragment>
	)
}

export default Home
