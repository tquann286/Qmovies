import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Explore.module.css'

import { Navbar, ScrollToTop, SelectBox } from '../../components'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getSearchCategories } from '../../api'

const Explore = () => {
	const {
		expContainer,
		expMain,
		expMainCategory,
		cateName,
		cateActive,
		expDetailsCategory,
	} = styles

	const [categories, setCategories] = useState([])
	const [currentCate, setCurrentCate] = useState('')
	const [detailsCate, setDetailsCate] = useState([])

	useEffect(async () => {
		const fetchCategories = await getSearchCategories()
		if (fetchCategories) {
			setCategories(fetchCategories)
			setCurrentCate(fetchCategories[0].name)
			setDetailsCate(fetchCategories[0].screeningItems)
		}
	}, [])

	const handleCategoryClick = (categoryName) => {
		setCurrentCate(categoryName);
	}

	return (
		<div className={expContainer}>
			<Navbar />
			<div className={expMain}>
				<div className={expMainCategory}>
				{categories.map(category => {
					const {name, id} = category
					let isActive = false

					if (name === currentCate) isActive = true

					return (
						<div key={id} className={`${cateName} ${isActive && cateActive}`} onClick={() => handleCategoryClick(name)}>{name}</div>
					)
				})}
					
				</div>
				<div className={expDetailsCategory}>
					{detailsCate.map(category => {

						return (
							<SelectBox key={category.name} category={category} />
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Explore
