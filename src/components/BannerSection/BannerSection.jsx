import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BannerSection.module.css'


import { LazyLoadImage } from "react-lazy-load-image-component";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/controller'
import 'swiper/css/pagination';

const BannerSection = ({bannerMovies}) => {
	const { banContainer, movieImage, movieName, movieSlide } = styles
	
	return (
		<Swiper
			className={banContainer}
			modules={[Navigation,Pagination]}
			loop
			slidesPerView={1}
			navigation={{ clickable: true }}
			pagination={{ clickable: true }}
		>
			{bannerMovies.map((movie) => (
				<SwiperSlide  key={movie.id}>
					<Link className={movieSlide} to={`/movie/${movie.id}`}>
						{movie.title && <h2 className={movieName}>{movie.title}</h2>}
						<LazyLoadImage
							className={movieImage}
							src={movie.imageUrl}
							alt={movie.title}
							effect="opacity"
						/>
					</Link>
				</SwiperSlide>
			))}
		</Swiper> 
	)
}

export default BannerSection
