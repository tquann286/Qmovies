import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Discovery from './pages/Discovery/Discovery'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/discovery' element={<Discovery />} />
			</Routes>	
		</BrowserRouter>
	)
}

export default App
