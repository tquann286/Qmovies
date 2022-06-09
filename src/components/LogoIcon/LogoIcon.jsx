import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './LogoIcon.module.css'
import logoIcon from '../../images/q-icon.svg'
import { onScrollToTop } from '../../utilities'

const LogoIcon = () => {
	const { gradientText, navLogo, navText, navLogoIcon } = styles

	return (
		<div className={navLogo}>
			<Link to='/' onClick={onScrollToTop}>
				<img className={navLogoIcon} src={logoIcon} alt='Qmovies Logo' />
			</Link>
			<Link to='/' onClick={onScrollToTop}>
				<span className={`${navText} ${gradientText}`}>movies</span>
			</Link>
		</div>
	)
}

export default memo(LogoIcon)
