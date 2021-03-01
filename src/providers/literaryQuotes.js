import axios from 'axios'

const instanceConfigs = {
    baseURL: 'https://literaryquotesapi.herokuapp.com/api/v1'
}

const instance = axios.create(instanceConfigs)

export default instance
