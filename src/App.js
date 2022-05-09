import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Discovery, Explore } from './pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/discovery' element={<Discovery />} />
				<Route path='/explore' element={<Explore />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
