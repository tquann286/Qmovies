import React, { useState, useEffect } from 'react'

import styles from './ListMovies.module.css'

import { getHomePage } from '../../api'

import InfiniteScroll from 'react-infinite-scroll-component'
import SectionSlider from './../SectionSlider/SectionSlider'

const ListMovies = ({ listMovies, page, setPage }) => {
	const { listContainer } = styles

	function filterSingleAlbum(list) {
		return list.filter(
			(eachList) => eachList.homeSectionType === 'SINGLE_ALBUM'
		)
	}

	const [newListMovies, setNewListMovies] = useState(() =>
		filterSingleAlbum(listMovies)
	)
	

	const handleNextPage = () => {
		setPage((prev) => {
			if (prev === 0) {
				return 2
			}
			return prev + 1
		})
	}

	useEffect(() => {
		getHomePage(page).then((res) => {
			setNewListMovies(() => 
				newListMovies.concat(filterSingleAlbum(res.data.data.recommendItems))
			)
		})
	}, [page])

	return (
		<div className={listContainer}>
			<InfiniteScroll
				dataLength={newListMovies.length}
				next={handleNextPage}
				hasMore={page < 10 }
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