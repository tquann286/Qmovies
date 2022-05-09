import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Explore.module.css'

import { Navbar, ScrollToTop } from '../../components'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getSearchCategories } from '../../api'

const Explore = () => {
	const { expContainer, expMain, expMainCategory, cateName, isCateActive } = styles

	const [categories, setCategories] = useState([])
	console.log(categories)

	useEffect(async () => {
		const fetchCategories = await getSearchCategories()
		if (fetchCategories) {
			setCategories(fetchCategories)
		}
	}, [])

	return (
		<div className={expContainer}>
			<Navbar />
			<div className={expMain}>
				<div className={expMainCategory}>
					<div className={cateName}>
						TV Series
					</div>
				</div>
			</div>
		</div>
	)
}

export default Explore
