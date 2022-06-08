import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './SignIn.module.css'

const SignIn = () => {
	const { container, main } = styles

	return (
		<div className={container}>
			<div className={main}>
				<svg xmlns='http://www.w3.org/2000/svg'>
					<filter id='motion-blur-filter' filterUnits='userSpaceOnUse'>
						<feGaussianBlur stdDeviation='100 0'></feGaussianBlur>
					</filter>
				</svg>
				<span filter-content='S'>Sign In</span>
			</div>
		</div>
	)
}

export default SignIn
