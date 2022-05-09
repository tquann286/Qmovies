import React from 'react'

import styles from './SelectBox.module.css'

const SelectBox = () => {
	const { selectBox, optionsContainer, option, radio, selected } = styles
	return (
		<div className={selectBox}>
			<div className={optionsContainer}>
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
			<div className={selected}>All Region</div>
		</div>
	)
}

export default SelectBox
