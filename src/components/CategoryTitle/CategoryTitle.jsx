import React, { memo } from 'react'

import styles from './CategoryTitle.module.css'

const CategoryTitle = ({ category, handleCategoryClick, currentCate }) => {
	const { cateName, cateActive } = styles

	const { name } = category
	let isActive = false

	if (name === currentCate) isActive = true

	return (
		<div
			className={`${cateName} ${isActive && cateActive}`}
			onClick={() => handleCategoryClick(name)}
		>
			{name}
		</div>
	)
}

export default memo(CategoryTitle)
