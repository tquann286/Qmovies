import React, { useState, useEffect } from 'react'

import styles from './Discovery.module.css'

import { getDiscoveryVideos } from '../../api'

import { Navbar } from '../index'

const Discovery = () => {
  const [dicoveryVideos, setDicoveryVideos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getDiscoveryVideos(page).then((res) => {
      setDicoveryVideos(res.data.data)
    })
  }, [])
  console.log(dicoveryVideos)

	return (
		<React.Fragment>
			<Navbar />
		</React.Fragment>
	)
}

export default Discovery