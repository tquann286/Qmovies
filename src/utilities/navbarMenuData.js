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
	},
	{
		title: 'Explore',
		direction: '/explore',
		icon: <RiCompassDiscoverLine className={navIcon} />,
	},
	{
		title: 'Discovery',
		direction: '/discovery',
		icon: <FaWpexplorer className={navIcon} />,
	},
	{
		title: 'History',
		direction: '/history',
		icon: <FaHistory className={navIcon} style={{ fontSize: '27px' }} />,
	},
]

export default navbarMenuData
