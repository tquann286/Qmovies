import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './SectionSlider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const SectionSlider = ({ movies }) => {
	const { sectionTitle, movieImage, secContainer, movieTitle } = styles

	return (
		<div className={secContainer}>
			<h1 className={sectionTitle}>{movies.homeSectionName}</h1>
			<Swiper
				modules={[Navigation]}
				spaceBetween={40}
				slidesPerView={6}
				navigation
				loop
			>
				{movies.recommendContentVOList.map((movie) => {
					const contentType = movie.contentType.toLowerCase()

					return (
						<SwiperSlide key={movie.id}>
							<Link to={`/${contentType}/${movie.id}`}>
								<LazyLoadImage
									className={movieImage}
									src={movie.imageUrl}
									alt={movie.title}
									effect='opacity'
								/>
								<h3 className={movieTitle}>{movie.title}</h3>
							</Link>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default memo(SectionSlider)
