import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getHomePage } from '../../api'
import styles from './BannerSection.module.css'


import { LazyLoadImage } from "react-lazy-load-image-component";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/controller'
import 'swiper/css/pagination';

const BannerSection = () => {
	const { banContainer, movieContainer, movieImage, movieName, movieSlide } =
		styles
	const [bannerMovies, setBannerMovies] = useState([])

	useEffect(() => {
		getHomePage(0).then((res) => {
			const { data } = res.data
			data.recommendItems.shift()
			setBannerMovies(data.recommendItems[0].recommendContentVOList)
		})
	}, [])
	console.log(bannerMovies)

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

	// return (
	// 	<Swiper
	// 		modules={[Navigation, Pagination]}
	// 		loop
	// 		slidesPerView={1}
	// 		navigation={{ clickable: true }}
	// 		pagination={{ clickable: true }}
	// 	>
	// 		<SwiperSlide>Slide 1</SwiperSlide>
	// 		<SwiperSlide>Slide 2</SwiperSlide>
	// 		<SwiperSlide>Slide 3</SwiperSlide>
	// 		<SwiperSlide>Slide 4</SwiperSlide>
	// 	</Swiper>
	// )
}

export default BannerSection
