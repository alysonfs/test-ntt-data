import type { EMovieType } from '../../enum'

export class Movie {
  title: string
  actors: string[]
  plot: string
  poster: string
  rating: number
  movieId: string
  type: EMovieType
}
