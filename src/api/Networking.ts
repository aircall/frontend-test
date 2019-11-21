import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
export interface INetworkingError {
  status: number
  statusText: string
  data: any
}

export type NetworkingErrorHandler = (error: INetworkingError) => void

export class Networking {
  private api: AxiosInstance
  private baseUrl: string
  private errorhandlers: NetworkingErrorHandler[] = []

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.api = axios.create()
    this.api.interceptors.request.use(this.requestInterceptor)
    this.api.interceptors.response.use(this.responseInterceptor, this.errorResponseInterceptor)
  }

  public addErrorHandler(errorHandler: (error: INetworkingError) => void) {
    this.errorhandlers.push(errorHandler)
  }

  public async get<T>(url: string) {
    const response = await this.api.get<T>(url)
    return this.responseHandler<T>(response)
  }

  public async post<T>(url: string, body?: any) {
    const response = await this.api.post<T>(url, body)
    return this.responseHandler<T>(response)
  }

  public async put<T>(url: string, body?: any) {
    const response = await this.api.put<T>(url, body)
    return this.responseHandler<T>(response)
  }

  public async delete(url: string) {
    const response = await this.api.delete(url)
    return this.responseHandler(response)
  }

  private responseHandler<T>(response: AxiosResponse<T>): T {
    return response.data
  }

  private requestInterceptor = async (config: AxiosRequestConfig) => {
    console.log('request', config)
    config.baseURL = this.baseUrl
    config.headers = {
      ...config.headers
    }
    return config
  }

  private responseInterceptor = (response: AxiosResponse) => {
    console.log('response', response)
    return response
  }

  private errorResponseInterceptor = async (err: any) => {
    const error: INetworkingError = {
      status: err.response.status,
      statusText: err.response.statusText,
      data: err.response.data
    }
    this.errorhandlers.forEach((errorHandler) => errorHandler(error))
  }
}
