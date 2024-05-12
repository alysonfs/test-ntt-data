export interface IHttpClientService {
  get: <T>(url: string) => Promise<T>
}

export interface IHttpClient {
  get: <T>(url: string) => Promise<T>
}

export class HttpClientService implements IHttpClientService {
  constructor(
    private readonly httpClient: IHttpClient
  ) { }

  get = async <T>(url: string): Promise<T> => {
    const response = await this.httpClient.get<T>(url)
    return response
  }

}
