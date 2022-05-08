import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

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

	const onScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	return (
		<div className={`${sttContainer} ${visible && showScrollToTop}`}>
			<FontAwesomeIcon className={sttIcon} icon={solid('circle-chevron-up')} onClick={onScrollToTop} />
		</div>
	)
}

export default ScrollToTop
