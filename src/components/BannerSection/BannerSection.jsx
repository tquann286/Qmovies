import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { getHomePage } from '../../api'
import styles from './BannerSection.module.css'

const BannerSection = () => {
	const { banContainer } = styles
	const [bannerMovies, setBannerMovies] = useState([])

	useEffect(() => {
		getHomePage(1).then((res) => {
			const { data } = res.data
			const movieLists = data.recommendItems.filter(
				(list) => !list.bannerProportion
			)
			setBannerMovies(
				movieLists.filter(
					(movies) => movies.homeSectionName === 'Newest Releases'
				)[0].recommendContentVOList
			)
		})
	}, [])
	console.log(bannerMovies)

	return (
		<div className={banContainer}>
			<h1 className=''>Newest Releases</h1>
			<Swiper modules={[Navigation]} navigation loop slidesPerView={1}>
      </Swiper>
		</div>
	)
}

export default BannerSection
