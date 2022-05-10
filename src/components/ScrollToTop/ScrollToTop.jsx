import React, { useState, useEffect, memo } from 'react'
import { useWindowScroll } from 'react-use'
import { IoIosArrowDropupCircle } from 'react-icons/io'

import { onScrollToTop } from '../../utilities'

import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
	const { sttContainer, sttIcon, showScrollToTop } = styles

	const { y: pageYOffset } = useWindowScroll()
	const [visible, setVisiblity] = useState(false)

	useEffect(() => {
		if (pageYOffset > 400) {
			setVisiblity(true)
		} else {
			setVisiblity(false)
		}
	}, [pageYOffset])

	return (
		<div className={`${sttContainer} ${visible && showScrollToTop}`}>
			<IoIosArrowDropupCircle className={sttIcon} onClick={onScrollToTop} />
		</div>
	)
}

export default memo(ScrollToTop)
