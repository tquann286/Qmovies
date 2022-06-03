import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import './index.css'
import styles from './BannerSection.module.css'
import { detectMovieLink } from '../../utilities'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/controller'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const BannerSection = ({ bannerMovies }) => {
	const { banContainer, movieImage, movieName, movieSlide } = styles

	return (
		<Swiper
			className={banContainer}
			modules={[Navigation, Pagination, Autoplay]}
			loop
			autoplay
			slidesPerView={1}
			navigation={{ clickable: true }}
			pagination={{ clickable: true }}
		>
			{bannerMovies.map((movie) => {
				if (!detectMovieLink(movie)) {
					return null
				}

				return (
					<SwiperSlide key={movie.id}>
						<Link className={movieSlide} to={detectMovieLink(movie)}>
							{movie.title && <h2 className={movieName}>{movie.title}</h2>}
							<LazyLoadImage
								className={movieImage}
								src={movie.imageUrl}
								alt={movie.title}
								effect='opacity'
							/>
						</Link>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default BannerSection
