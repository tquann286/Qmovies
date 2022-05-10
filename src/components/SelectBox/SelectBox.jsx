import React, { useState, memo } from 'react'

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import styles from './SelectBox.module.css'

const SelectBox = ({ category, onSearchPayloadChange }) => {
	const {
		selectBox,
		optionsContainer,
		option,
		radio,
		selected,
		active,
		arrowDownIcon,
		titleText,
	} = styles

	const [currentOption, setCurrentOption] = useState(category.items[0].name)
	const [isActive, setIsActive] = useState(false)

	const toggleActive = () => {
		setIsActive(!isActive)
	}

	const handleTitleOnClick = () => {
		toggleActive()
	}

	const handleOptionOnClick = (cateName, type, params) => {
		setIsActive(false)
		setCurrentOption(cateName)
		onSearchPayloadChange(type, params)
	}

	return (
		<div className={selectBox}>
			<div className={`${optionsContainer} ${isActive && active}`}>
				{category.items.map(item => {
					const { name, params, screeningType } = item

					return (
						<div key={item.name} className={option} onClick={() => handleOptionOnClick(name, screeningType, params)}>
					<input
						type='radio'
						className={radio}
						id={item.name}
						name='category'
					/>
					<label htmlFor={item.name}>{item.name}</label>
				</div>
					)
				})}
			</div>
			<div className={selected} onClick={handleTitleOnClick}>
				<div className={titleText}>{currentOption}</div>
				<div className={`${arrowDownIcon} ${isActive && active}`}>
					<MdOutlineKeyboardArrowDown />
				</div>
			</div>
		</div>
	)
}

export default memo(SelectBox)
