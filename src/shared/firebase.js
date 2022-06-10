import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: 'AIzaSyDDi8VtNwOw-mNJwh41SUfiah2CAJLBHPM',
	authDomain: 'qmovies-38092.firebaseapp.com',
	projectId: 'qmovies-38092',
	storageBucket: 'qmovies-38092.appspot.com',
	messagingSenderId: '116661253920',
	appId: '1:116661253920:web:ac25c4c05972449944c945',
	measurementId: 'G-KL6WCPYZ5P',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const db = getFirestore(app)

export { auth, googleProvider, facebookProvider, db }
