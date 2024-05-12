import type { AxiosInstance } from "axios"
import type { IHttpClient } from "../http-client.service"

// Adaptador Axios para o HttpClient
export class AxiosHttpClientAdapter implements IHttpClient {
  constructor(
    private readonly axiosInstance: AxiosInstance
  ) { }

  get = async <T>(url: string): Promise<T> => {
    const response = await this.axiosInstance.get(url)
    return response.data
  }

}
