import React, { useState, useEffect } from 'react'

import styles from './Discovery.module.css'
import noImage from './../../images/noImage.jfif'

import { getDiscoveryVideos } from '../../api'

import { Navbar } from '../index'
import HlsPlayer from 'react-hls-player'
import { InView } from 'react-intersection-observer'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Discovery = () => {
	const {
		disContainer,
		postContainer,
		postUpImage,
		postUpName,
		postImageSection,
		postContentSection,
		postCaption,
		postReact,
    postVideoContainer,
    postVideo,
	} = styles

	const [dicoveryVideos, setDicoveryVideos] = useState([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		getDiscoveryVideos(page).then((res) => {
			setDicoveryVideos(res)
		})
	}, [])

	console.log(dicoveryVideos)

	return (
		<React.Fragment>
			<Navbar />
			<div className={disContainer}>
				{dicoveryVideos.map((post) => (
					<div key={post.id} className={postContainer}>
						<div className={postImageSection}>
							<img
								className={postUpImage}
								src={post.upInfo.upImgUrl || noImage}
								alt={post.upInfo.upName}
								effect='opacity'
							/>
						</div>
						<div className={postContentSection}>
							<p className={postUpName}>{post.upInfo.upName}</p>
							<p className={postCaption}>{post.introduction}</p>
							<div className={postVideoContainer}>
              <HlsPlayer
              className={postVideo}
              controls
              muted
              autoPlay={false}
              playsInline
              src={post.mediaUrl}
            />
              </div>
						</div>
						<div className={postReact}></div>
					</div>
				))}
			</div>
		</React.Fragment>
	)
}

export default Discovery
