import React, { useState, useEffect, memo } from 'react'
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

	const navbarMenuData = [
		{
			title: 'Home',
			direction: '/',
			icon: <AiOutlineHome className={navIcon} />
		},
		{
			title: 'Explore',
			direction: '/explore',
			icon: <RiCompassDiscoverLine className={navIcon} />
		},
		{
			title: 'Discovery',
			direction: '/discovery',
			icon: <FaWpexplorer className={navIcon} />
		},
		{
			title: 'History',
			direction: '/History',
			icon: <FaHistory className={navIcon} style={{ fontSize: '27px' }} />
		},
	]

	const [isScrolled, setIsScrolled ] = useState(false)

	const onScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	useEffect(() => {
		const changeBgColor = () => {
			if (window.scrollY >= 536) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', changeBgColor)
	}, [])

	

	return (
		<div className={`${navContainer} ${isScrolled && navContainerScrolled}`}>
			<div className={navLogo}>
				<Link to='/' onClick={onScrollToTop}>
					<img className={navLogoIcon} src={NavLogoIcon} alt='' />
				</Link>
				<Link to='/' onClick={onScrollToTop}>
					<span className={`${navText} ${gradientText}`}>movies</span>
				</Link>
			</div>
			<ul className={navMain}>
			{navbarMenuData.map(data => (
				<Link key={data.title} className={navLink} to={data.direction} onClick={onScrollToTop}>
					{data.icon}
					<span>{data.title}</span>
				</Link>
			))}
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

export default memo(Navbar)
