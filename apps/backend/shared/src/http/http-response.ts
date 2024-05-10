export interface TResponse<T extends Object> {
  status: boolean
  fromCache?: boolean
  message?: string
  result?: T
}

export class HttpResponse<T extends Object | Error> implements TResponse<T> {
  status: boolean
  fromCache?: boolean
  message?: string
  result?: T

  constructor(private response: T, status = 200, fromCache = false, message?: string) {
    this.status = this.statusToBoolean(status)
    this.fromCache = fromCache
    this.message = message
    this.result = this.response
  }

  private statusToBoolean (status: number){
    return status >= 200 && status < 300
  }

  public build(): TResponse<T> {
    return {
      status: this.status,
      fromCache: this.fromCache,
      message: this.message,
      result: this.result
    }
  }
}
