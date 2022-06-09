import React, { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Navbar.module.css'
import { FaSignInAlt } from 'react-icons/fa'
import { LogoIcon } from '../../components'
import { navbarMenuData, onScrollToTop } from '../../utilities'

const Navbar = () => {
	const {
		navContainer,
		navContainerScrolled,
		navMain,
		navUser,
		navLink,
		navIcon,
	} = styles

	const location = useLocation()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const filterData = navbarMenuData.filter(
			(data) => location.pathname === data.direction
		)[0]

		let scrollBgChangeHeight

		if (!filterData) {
			scrollBgChangeHeight = 120
		} else {
			scrollBgChangeHeight = filterData.scrollBgChangeHeight
		}

		const changeBgColor = () => {
			if (window.scrollY >= scrollBgChangeHeight) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', changeBgColor)

		return () => {
			window.removeEventListener('scroll', changeBgColor)
		}
	}, [])

	return (
		<div className={`${navContainer} ${isScrolled && navContainerScrolled}`}>
			<LogoIcon />
			<ul className={navMain}>
				{navbarMenuData.map((data) => (
					<Link
						key={data.title}
						className={navLink}
						to={data.direction}
						onClick={onScrollToTop}
					>
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
