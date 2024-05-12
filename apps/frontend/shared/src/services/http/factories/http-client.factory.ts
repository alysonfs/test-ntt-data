import axios from 'axios'
import { AxiosHttpClientAdapter } from '../adapters'
import { HttpClientService } from '../http-client.service'

// criar instancia do axios
const axiosInstance = axios.create({
  responseType: 'json',
  baseURL: 'http://localhost:8080'
})

export const HttpClientFactory = () => new HttpClientService(
  new AxiosHttpClientAdapter(axiosInstance)
)
