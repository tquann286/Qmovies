import React from 'react'
import { Link } from 'react-router-dom'

import styles from './SectionSlider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const SectionSlider = ({ movies }) => {
	const { sectionTitle, movieImage, secContainer } = styles

	console.log(movies)

	return (
		<div className={secContainer}>
			<h1 className={sectionTitle}>{movies.homeSectionName}</h1>
			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				spaceBetween={40}
				slidesPerView={6}
				navigation
			>
				{movies.recommendContentVOList.map((movie) => (
					<SwiperSlide key={movie.id}>
						<Link to={`/movie/${movie.id}`}>
							<LazyLoadImage
								className={movieImage}
								src={movie.imageUrl}
								alt={movie.title}
								effect='opacity'
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SectionSlider
