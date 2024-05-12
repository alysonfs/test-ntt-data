import { HttpClientFactory } from '@web/shared'
import type { MovieEntity } from "@ntt-data/core"


export const getMovie = async (title: string): Promise<MovieEntity.TMovie> => {
  const httpClient = HttpClientFactory()
  return await httpClient.get<MovieEntity.TMovie>(`/movie/search-movie/${title}`)
}
