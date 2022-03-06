import React from 'react'
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
		navLogo,
		navText,
		navLogoIcon,
		navMain,
		navUser,
		navLink,
		navIcon,
	} = styles

	return (
		<div className={navContainer}>
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
					<FaHistory className={navIcon} />
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
