import axios from 'axios'
const axiosClient = axios.create({
  baseURL: 'https://js-post-app.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
