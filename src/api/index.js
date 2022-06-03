import axios from 'axios'

const API = axios.create({
	baseURL: 'https://ga-mobile-api.loklok.tv/cms/app',
	headers: {
		lang: 'en',
		versioncode: '11',
		clienttype: 'ios_jike_default',
	},
})

export const getHomePage = (page) => API.get(`/homePage/getHome?page=${page}`)

export const getDiscoveryVideos = async (page = 0) => {
	const data = (
		await API.get('recommendPool/getVideoFromRecommondPool', {
			params: {
				page,
			},

			headers: { deviceid: Math.random().toString(36).slice(-8) },
		})
	).data.data

	const sources = (
		await API.post(
			'media/bathGetplayInfo',
			data.map((item) => ({
				category: item.category,
				contentId: item.id,
				episodeId: item.mediaInfo.id,
				definition: item.mediaInfo.definitionList.slice(-1)[0].code,
			}))
		)
	).data.data.map((item) => item.mediaUrl)

	return data.map((item, index) => ({
		...item,
		mediaUrl: sources[index],
	}))
}

export const getSearchCategories = async () => {
	const data = (await API.get('search/list')).data.data

	return data
}

export const getExploreContent = async (searchQuery) => {
	const data = (await API.post('search/v1/search', searchQuery)).data.data
	
	return data 
}

export const getMovieDetail = async (movieId, movieType) => {
	const data = (await API.get(`/movieDrama/get?id=${movieId}&category=${movieType}`)).data.data
	
	return data
}

export const getMoviePreviewInfo = async (movieId, movieType, episodeId, definition) => {
	const data = (await API.get(`/media/previewInfo?category=${movieType}&contentId=${movieId}&episodeId=${episodeId}&definition=${definition}`)).data.data
	
	return data
}