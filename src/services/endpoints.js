const API_URL = import.meta.env?.VITE_GIPHY_API_URL || 'https://default'
const API_VERSION = import.meta.env?.VITE_GIPHY_API_VERSION || 'v1'
const API_KEY = import.meta.env?.VITE_API_KEY || ''

const URL = `${API_URL}${API_VERSION}`

const endPoints = {
  gifs: {
    trending: {
      getTrending: (limit) => `${URL}gifs/trending?api_key=${API_KEY}&limit=${limit}`
    },
    search: {
      getQuery: (q, limit) => `${URL}gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}`
    }
  }
}

export default endPoints