import React from 'react'

import styles from './Home.module.css'
import { BannerSection, ListMovies } from '../index'

const Home = () => {
	const { homeContainer } = styles

	return (
		<div className={homeContainer}>
			<BannerSection />
      <ListMovies />
		</div>
	)
}

export default Home
