import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './SignIn.module.css'
import { auth, provider } from '../../shared/firebase'
import { signInWithPopup } from 'firebase/auth'

const SignIn = () => {
	const { container, main, signInBtn } = styles

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className={container}>
			<div className={main}>
				<svg xmlns='http://www.w3.org/2000/svg'>
					<filter id='motion-blur-filter' filterUnits='userSpaceOnUse'>
						<feGaussianBlur stdDeviation='100 0'></feGaussianBlur>
					</filter>
				</svg>
				<span filter-content='S'>Sign In</span>
				<div className={signInBtn} onClick={signInWithGoogle}>
					Sign In
				</div>
			</div>
		</div>
	)
}

export default SignIn
