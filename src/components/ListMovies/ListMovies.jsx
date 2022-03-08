import React from 'react'

import styles from './ListMovies.module.css'

import InfiniteScroll from 'react-infinite-scroll-component'
import SectionSlider from './../SectionSlider/SectionSlider'

const ListMovies = ({ listMovies }) => {
	const { listContainer } = styles

	const newListMovies = listMovies.filter((list) => list.homeSectionType === 'SINGLE_ALBUM')

	return (
		<div className={listContainer}>
			<InfiniteScroll
				dataLength={listMovies.length}
				next={() => {
					console.log('het')
				}}
				hasMore={true}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{newListMovies.map((movies) => (
					<SectionSlider key={movies.homeSectionId} movies={movies} />
				))}
			</InfiniteScroll>
		</div>
	)
}

export default ListMovies
