import axios from 'axios'

const API = axios.create({
  baseURL: "https://ga-mobile-api.loklok.tv/cms/app",
  headers: {
    lang: "en",
    versioncode: "11",
    clienttype: "ios_jike_default",
  },
})

export const getHomePage = (page) => API.get(`/homePage/getHome?page=${page}`)