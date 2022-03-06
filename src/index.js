import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
