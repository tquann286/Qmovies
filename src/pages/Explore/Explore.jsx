import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Explore.module.css'

import { Navbar, ScrollToTop, SelectBox, CategoryTitle } from '../../components'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getSearchCategories, getExploreContent } from '../../api'

const Explore = () => {
	const {
		expContainer,
		expMain,
		expMainCategory,
		cateName,
		cateActive,
		expDetailsCategory,
		expInfScrollContent,
		contentContainer,
		contentTitle,
		contentImg,
	} = styles

	const [categories, setCategories] = useState([])
	const [currentCate, setCurrentCate] = useState('')
	const [detailsCate, setDetailsCate] = useState([])

	const [exploreContent, setExploreContent] = useState([])
	const [searchPayload, setSearchPayload] = useState({
		size: 30,
		params: '',
		area: '',
		category: '',
		year: '',
		subtitles: '',
		order: 'up',
	})

	useEffect(async () => {
		const fetchCategories = await getSearchCategories()
		if (fetchCategories) {
			const defaultCate = fetchCategories[0]
			setCategories(fetchCategories)
			setCurrentCate(defaultCate.name)
			setDetailsCate(defaultCate.screeningItems)
			setSearchPayload({ ...searchPayload, params: defaultCate.params })
		}

		const fetchExploreContent = await getExploreContent(searchPayload)
		if (fetchExploreContent) {
			setExploreContent(fetchExploreContent.searchResults)
		}
	}, [])

	useEffect(async () => {
		const fetchExploreContent = await getExploreContent(searchPayload)
		if (fetchExploreContent) {
			setExploreContent(fetchExploreContent.searchResults)
		}
	}, [searchPayload])

	const handleCategoryClick = (categoryName, params) => {
		if (currentCate !== categoryName) {
			setCurrentCate(categoryName)
			onSearchPayloadChange('params', params)
		}
	}

	const onSearchPayloadChange = (cate, payload) => {
		setSearchPayload({ ...searchPayload, [cate]: payload })
	}

	const handleLoadMoreContent = () => {
		setSearchPayload((prevSearchPayload) => ({ ...prevSearchPayload, size: prevSearchPayload.size + 30 }))
	}

	return (
		<div className={expContainer}>
			<Navbar />
			<div className={expMain}>
				<div className={expMainCategory}>
					{categories.map((category) => {
						return (
							<CategoryTitle
								key={category.id}
								category={category}
								handleCategoryClick={() => handleCategoryClick(category.name, category.params)}
								currentCate={currentCate}
							/>
						)
					})}
				</div>
				<div className={expDetailsCategory}>
					{detailsCate.map((category) => {
						return <SelectBox key={category.name} category={category} onSearchPayloadChange={onSearchPayloadChange} />
					})}
				</div>
				{exploreContent.length !== 0 ? (
					<InfiniteScroll
					dataLength={exploreContent.length}
					next={handleLoadMoreContent}
					hasMore={true}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					<div className={expInfScrollContent}>
						{exploreContent.map((content) => {
							return (
								<Link
									key={content.id}
									to={
										content.domainType === 0
											? `/movie/${content.id}`
											: `/drama/${content.id}`
									}
								>
									<div className={contentContainer}>
										<div className={contentImg}>
											<img src={content.coverVerticalUrl} alt={content.name} />
										</div>
										<div className={contentTitle}>
											<h6>{content.name}</h6>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</InfiniteScroll>
				) : (
					<h4>Nothing to see.</h4>
				)}
				
			</div>
			<ScrollToTop />
		</div>
	)
}

export default Explore
