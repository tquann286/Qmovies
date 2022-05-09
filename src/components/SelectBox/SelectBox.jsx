import React, {useState} from 'react'

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

import styles from './SelectBox.module.css'

const SelectBox = () => {
	const { selectBox, optionsContainer, option, radio, selected, active, arrowDownIcon } = styles
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

	return (
		<div className={selectBox}>
			<div className={`${optionsContainer} ${isActive && active}`}>
				<div className={option}>
					<input
						type='radio'
						className={radio}
						id='automobiles'
						name='category'
					/>
					<label htmlFor='automobiles'>Automobiles</label>
				</div>
				<div className={option}>
					<input type='radio' className={radio} id='film' name='category' />
					<label htmlFor='film'>Film & Animation</label>
				</div>
        <div className={option}>
					<input
						type='radio'
						className={radio}
						id='automobiles'
						name='category'
					/>
					<label htmlFor='automobiles'>Automobiles</label>
				</div>
				<div className={option}>
					<input type='radio' className={radio} id='film' name='category' />
					<label htmlFor='film'>Film & Animation</label>
				</div>
        <div className={option}>
					<input
						type='radio'
						className={radio}
						id='automobiles'
						name='category'
					/>
					<label htmlFor='automobiles'>Automobiles</label>
				</div>
				<div className={option}>
					<input type='radio' className={radio} id='film' name='category' />
					<label htmlFor='film'>Film & Animation</label>
				</div>
        <div className={option}>
					<input
						type='radio'
						className={radio}
						id='automobiles'
						name='category'
					/>
					<label htmlFor='automobiles'>Automobiles</label>
				</div>
				<div className={option}>
					<input type='radio' className={radio} id='film' name='category' />
					<label htmlFor='film'>Film & Animation</label>
				</div>
        <div className={option}>
					<input
						type='radio'
						className={radio}
						id='automobiles'
						name='category'
					/>
					<label htmlFor='automobiles'>Automobiles</label>
				</div>
				<div className={option}>
					<input type='radio' className={radio} id='film' name='category' />
					<label htmlFor='film'>Film & Animation</label>
				</div>
			</div>
			<div className={selected} onClick={toggleActive}>
        All Region
        <div className={`${arrowDownIcon} ${isActive && active}`}>
        <MdOutlineKeyboardArrowDown />
        </div>
      </div>
		</div>
	)
}

export default SelectBox
