import axios, { AxiosRequestConfig } from 'axios'
import { config } from 'process'

const axiosInstance = axios.create({
  baseURL: 'https://66332c8cf7d50bbd9b4869db.mockapi.io/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
})


class APIClient<T> { 
  endpoint: string

  constructor(endpoint:string){
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then(res => res.data)
  }
}

export { APIClient }