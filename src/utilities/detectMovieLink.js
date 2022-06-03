const detectMovieLink = (movie) => {
	let movieAddress

	const searchParams = new URLSearchParams(new URL(movie.jumpAddress).search)

	if (!searchParams.get('id')) {
		return null
	}

	if (searchParams.get('type') === '0') {
		movieAddress = `/movie/${searchParams.get('id')}`
	} else {
		movieAddress = `/series/${searchParams.get('id')}`
	}

  return movieAddress
}

export default detectMovieLink
