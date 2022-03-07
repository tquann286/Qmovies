import React from 'react'

import styles from './Home.module.css'
import {BannerSection} from '../index';

const Home = () => {
  const {homeContainer} = styles

  return (
    <div className={homeContainer}>
      <BannerSection />
    </div>
  )
}

export default Home