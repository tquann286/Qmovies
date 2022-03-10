import React, { useState, useEffect } from 'react'

import styles from './Discovery.module.css'
import noImage from './../../images/noImage.jfif'

import { getDiscoveryVideos } from '../../api'

import { Navbar } from '../index'
import HlsPlayer from 'react-hls-player'
import { InView } from 'react-intersection-observer'
import InfiniteScroll from 'react-infinite-scroll-component'

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
			setDicoveryVideos(dicoveryVideos.concat(res))
		})
	}, [page])

	console.log(dicoveryVideos)

	return (
		<React.Fragment>
			<Navbar />
			<div className={disContainer}>
				<InfiniteScroll
					dataLength={dicoveryVideos.length}
					next={() => setPage((prev) => prev + 1)}
					hasMore={true}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
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
									<InView threshold={0.5}>
										{({ inView, ref }) => (
											<div ref={ref}>
												<HlsPlayer
													className={postVideo}
													controls
													autoPlay={inView}
													playsInline
													src={post.mediaUrl}
												/>
											</div>
										)}
									</InView>
								</div>
							</div>
							<div className={postReact}></div>
						</div>
					))}
				</InfiniteScroll>
			</div>
		</React.Fragment>
	)
}

export default Discovery
