import React from 'react'

import styles from './SectionSlider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

const SectionSlider = ({ movies }) => {
	const { sectionTitle } = styles
	
	console.log(movies)
	
	return (
		<div>
			<h1 className={sectionTitle}>{movies.homeSectionName}</h1>
			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={6}
				navigation
			>
				
			</Swiper>
		</div>
	)
}

export default SectionSlider
