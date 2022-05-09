import React, {useState} from 'react'

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

import styles from './SelectBox.module.css'

const SelectBox = () => {
	const { selectBox, optionsContainer, option, radio, selected, active, arrowDownIcon, titleText } = styles

  const [currentOption, setCurrentOption] = useState('All Region')
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const handleTitleOnClick = () => {
    toggleActive()
  }

  const handleOptionOnClick = () => {
    setIsActive(false)
    setCurrentOption('Automobilesaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  }

	return (
		<div className={selectBox}>
			<div className={`${optionsContainer} ${isActive && active}`}>
				<div className={option} onClick={handleOptionOnClick}>
					<input
						type='radio'
						className={radio}
						id='automobiles'
						name='category'
					/>
					<label htmlFor='automobiles'>Automobiles</label>
				</div>
			</div>
			<div className={selected} onClick={handleTitleOnClick}>
      <div className={titleText}>
      {currentOption}
      </div>
        <div className={`${arrowDownIcon} ${isActive && active}`}>
        <MdOutlineKeyboardArrowDown />
        </div>
      </div>
		</div>
	)
}

export default SelectBox
