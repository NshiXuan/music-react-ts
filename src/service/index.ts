import { BASE_URL, TIME_OUT } from './config'
import SXRequest from './request'

const sxRequest = new SXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default sxRequest
