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
  private localStorageJWTKey: string
  private errorhandlers: NetworkingErrorHandler[] = []

  constructor(baseUrl: string, localStorageJWTKey: string) {
    this.baseUrl = baseUrl
    this.localStorageJWTKey = localStorageJWTKey
    this.api = axios.create()
    this.api.interceptors.request.use(this.requestInterceptor)
    this.api.interceptors.response.use(this.responseInterceptor, this.errorResponseInterceptor)
  }

  public async setToken(token: string): Promise<void> {
    localStorage.setItem(this.localStorageJWTKey, token)
  }

  public async deleteToken(): Promise<void> {
    localStorage.removeItem(this.localStorageJWTKey)
    return
  }

  public async isTokenSet(): Promise<boolean> {
    return !!(await localStorage.getItem(this.localStorageJWTKey))
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
    const token = await localStorage.getItem(this.localStorageJWTKey)
    config.baseURL = this.baseUrl
    config.headers = {
      ...config.headers,
      authorization: token ? `Bearer ${token}` : undefined
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
