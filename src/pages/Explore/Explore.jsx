import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Explore.module.css'

import { Navbar } from '../../components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineOpenInNew } from 'react-icons/md'

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
		postLikeCount,
		postWatchNow,
		postHeartIcon,
		postOpenIcon,
		reactContainer
	} = styles

	const [dicoveryVideos, setDicoveryVideos] = useState([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		getDiscoveryVideos(page).then((res) => {
			setDicoveryVideos(dicoveryVideos.concat(res))
		})
	}, [page])

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
							<div className={postReact}>
								<div className={reactContainer}>
									<div className={postLikeCount}>
										<FaHeart className={postHeartIcon} />
										<p>{post.likeCount}</p>
									</div>
									<Link to={
										post.refList[0]?.category === 0
											? `/movie/${post.refList[0]?.id}`
											: `/tv/${post.refList[0]?.id}`
									} className={postWatchNow}>
										<MdOutlineOpenInNew className={postOpenIcon} />
										<p>Watch</p>
									</Link>
								</div>
							</div>
						</div>
					))}
				</InfiniteScroll>
			</div>
		</React.Fragment>
	)
}

export default Discovery
