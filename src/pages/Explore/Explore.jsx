import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Explore.module.css'

import { Navbar, ScrollToTop } from '../../components'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getSearchCategories } from '../../api'

const Explore = () => {
	const { expContainer, expMain, expMainCategory } = styles

	const [typeCategories, setTypeCategories] = useState([])
	console.log(typeCategories)

	useEffect(async () => {
		const fetchCategories = await getSearchCategories()
		if (fetchCategories) {
			setTypeCategories(fetchCategories)
		}
	}, [])

	return (
		<div className={expContainer}>
			<Navbar />
			<div className={expMain}>
				<div className={expMainCategory}>
					
				</div>
			</div>
		</div>
	)
}

export default Explore
