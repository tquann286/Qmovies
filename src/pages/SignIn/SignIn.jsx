import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './SignIn.module.css'
import { LogoIcon } from '../../components'

import { auth, googleProvider, facebookProvider } from '../../shared/firebase'
import { signInWithPopup } from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook} from 'react-icons/im'

const SignIn = () => {
	const { container, logoIcon, main, signInGoogleBtn, signInSection, signInFacebookBtn } = styles

	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const signInWithFacebook = () => {
		signInWithPopup(auth, facebookProvider)
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
				<div className={logoIcon}>
					<LogoIcon />
				</div>
				<svg xmlns='http://www.w3.org/2000/svg'>
					<filter id='motion-blur-filter' filterUnits='userSpaceOnUse'>
						<feGaussianBlur stdDeviation='100 0'></feGaussianBlur>
					</filter>
				</svg>
				<span filter-content='S'>Sign In</span>
				<div className={signInSection}>
					<button className={signInGoogleBtn} onClick={signInWithGoogle}>
					<FcGoogle />
						<p>Sign In With Google</p>
					</button>
					<button className={signInFacebookBtn} onClick={signInWithFacebook}>
					<ImFacebook color='white'/>
						<p>Sign In With Facebook</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SignIn
