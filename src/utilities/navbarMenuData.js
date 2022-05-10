import { AiOutlineHome } from 'react-icons/ai'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { FaWpexplorer, FaHistory } from 'react-icons/fa'

import styles from '../components/Navbar/Navbar.module.css'

const { navIcon } = styles

const navbarMenuData = [
	{
		title: 'Home',
		direction: '/',
		icon: <AiOutlineHome className={navIcon} />,
		scrollBgChangeHeight: 520
	},
	{
		title: 'Explore',
		direction: '/explore',
		icon: <RiCompassDiscoverLine className={navIcon} />,
		scrollBgChangeHeight: 120
	},
	{
		title: 'Discovery',
		direction: '/discovery',
		icon: <FaWpexplorer className={navIcon} />,
		scrollBgChangeHeight: 120
	},
	{
		title: 'History',
		direction: '/history',
		icon: <FaHistory className={navIcon} style={{ fontSize: '27px' }} />,
		scrollBgChangeHeight: 120
	},
]

export default navbarMenuData
