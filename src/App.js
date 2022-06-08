import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Discovery, Explore, Movie, SignIn, NotFound } from './pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/discovery' element={<Discovery />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/movie/:movieId' element={<Movie />} />
				<Route path='/auth' element={<SignIn />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
