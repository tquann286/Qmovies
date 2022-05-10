import React, { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Navbar.module.css'
import NavLogoIcon from '../../images/q-icon.svg'
import { FaSignInAlt } from 'react-icons/fa'

import { navbarMenuData, onScrollToTop } from '../../utilities'

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

	const location = useLocation()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const { scrollBgChangeHeight } = navbarMenuData.filter(
			(data) => location.pathname === data.direction
		)[0]
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
			<div className={navLogo}>
				<Link to='/' onClick={onScrollToTop}>
					<img className={navLogoIcon} src={NavLogoIcon} alt='' />
				</Link>
				<Link to='/' onClick={onScrollToTop}>
					<span className={`${navText} ${gradientText}`}>movies</span>
				</Link>
			</div>
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
