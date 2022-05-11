import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Discovery, Explore, Movie } from './pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/discovery' element={<Discovery />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/movie/:movieId' element={<Movie />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
