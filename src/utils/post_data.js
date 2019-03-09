import axios from 'axios'

const postData = (url, data = {}) => {
  return axios.post(url, data)
    .then(res => res.data)
    .catch(console.error)
}

export default postData
