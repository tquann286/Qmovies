import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Explore.module.css'

import { Navbar, ScrollToTop, SelectBox } from '../../components'
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

	const [isLoading, setisLoading] = useState(true)

	const [exploreContent, setExploreContent] = useState([])
	console.log(exploreContent)
	const [searchPayload, setSearchPayload] = useState({
		size: 20,
		params: '',
		area: '',
		category: '',
		year: '',
		subtitles: '',
		order: 'up',
		sort: '',
	})

	useEffect(async () => {
		const fetchCategories = await getSearchCategories()
		if (fetchCategories) {
			const defaultCate = fetchCategories[0]
			setCategories(fetchCategories)
			setCurrentCate(defaultCate.name)
			setDetailsCate(defaultCate.screeningItems)
			setSearchPayload({ ...searchPayload, params: defaultCate.params })
			setisLoading(false)
		}

		const fetchExploreContent = await getExploreContent(searchPayload)
		if (fetchExploreContent) {
			setExploreContent(fetchExploreContent.searchResults)
		}
	}, [])

	const handleCategoryClick = (categoryName) => {
		setCurrentCate(categoryName)
	}

	return (
		<div className={expContainer}>
			<Navbar />
			<div className={expMain}>
				<div className={expMainCategory}>
					{categories.map((category) => {
						const { name, id } = category
						let isActive = false

						if (name === currentCate) isActive = true

						return (
							<div
								key={id}
								className={`${cateName} ${isActive && cateActive}`}
								onClick={() => handleCategoryClick(name)}
							>
								{name}
							</div>
						)
					})}
				</div>
				<div className={expDetailsCategory}>
					{detailsCate.map((category) => {
						return <SelectBox key={category.name} category={category} />
					})}
				</div>
					<InfiniteScroll
						dataLength={exploreContent.length}
						// next={() => setPage((prev) => prev + 1)}
						hasMore={true}
						loader={<h4>Loading...</h4>}
						endMessage={
							<p style={{ textAlign: 'center' }}>
								<b>Yay! You have seen it all</b>
							</p>
						}
					>
					<div className={expInfScrollContent}>
					{exploreContent.map(content => {

						return (
							<Link key={content.id} to='/17644'>
					<div className={contentContainer}>
							<div className={contentImg}>
								<img
									src='https://img.netpop.app/cover/20220509/1652084226799_91da620343a0187b3021d593847561f8dxqL09YSNA7Le75NBA4yOD8wjh0.jpg'
									alt='Rage'
								/>
							</div>
							<div className={contentTitle}>
								<span>Rage</span>
							</div>
					</div>
					</Link>
						)
					})}
					</div>
					</InfiniteScroll>
				</div>
		</div>
	)
}

export default Explore

