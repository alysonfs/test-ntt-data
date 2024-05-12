import { HttpClientFactory } from '@web/shared'
import { TMovie } from "@ntt-data/core"


export const getMovie = async (title: string): Promise<TMovie> => {
  const httpClient = HttpClientFactory()
  return await httpClient.get<TMovie>(`/movie/search-movie/${title}`)
}
