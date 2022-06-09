import React, { useEffect } from 'react'

const Title = ({ title }) => {
	useEffect(() => {
		document.title = title
	}, [title])
	return <React.Fragment></React.Fragment>
}

export default Title
