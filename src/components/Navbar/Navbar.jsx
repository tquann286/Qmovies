import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import NavLogoIcon from '../../images/q-icon.svg'
import { AiOutlineHome } from 'react-icons/ai'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { FaWpexplorer, FaHistory, FaSignInAlt } from 'react-icons/fa'

const Navbar = () => {
	const {
		gradientText,
		navContainer,
		navContainerScrolled,
		navLogo,
		navText,
		navLogoIcon,
		navMain,
		navUser,
		navLink,
		navIcon,
	} = styles

	const [isScrolled, setIsScrolled ] = useState(false)
	const changeBgColor = () => {
		if (window.scrollY >= 540) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}

	window.addEventListener('scroll', changeBgColor)

	return (
		<div className={`${navContainer} ${isScrolled && navContainerScrolled}`}>
			<div className={navLogo}>
				<Link to='/'>
					<img className={navLogoIcon} src={NavLogoIcon} alt='' />
				</Link>
				<Link to='/'>
					<span className={`${navText} ${gradientText}`}>movies</span>
				</Link>
			</div>
			<ul className={navMain}>
				<Link className={navLink} to='/'>
					<AiOutlineHome className={navIcon} />
					<span style={{ marginTop: '5px' }}>Home</span>
				</Link>
				<Link className={navLink} to='/discovery'>
					<RiCompassDiscoverLine className={navIcon} />
					<span>Discovery</span>
				</Link>
				<Link className={navLink} to='/explore'>
					<FaWpexplorer className={navIcon} />
					<span>Explore</span>
				</Link>
				<Link className={navLink} to='/history'>
					<FaHistory className={navIcon} style={{ fontSize: '27px' }} />
					<span>History</span>
				</Link>
			</ul>
			<div className={navUser}>
				<Link className={navLink} to='/auth'>
					<FaSignInAlt className={navIcon} />
					<span>Sign In</span>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
