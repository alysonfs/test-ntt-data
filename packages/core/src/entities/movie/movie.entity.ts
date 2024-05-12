export type TMovie = {
  title: string
  actors: string[]
  plot: string
  poster: string
  rating: number
  movieId: string
  type: 'movie' | 'series' | 'episode'

  /** Movie rating represented from 1 to 5 stars */
  ratingStars?: number
}

export interface IMovie extends TMovie { }

export class Movie implements IMovie {
  title: string
  actors: string[]
  plot: string
  poster: string
  rating: number
  movieId: string
  type: 'movie' | 'series' | 'episode'
  ratingStars?: number

  constructor(movie: TMovie) {
    this.title = movie.title
    this.actors = movie.actors
    this.plot = movie.plot
    this.poster = movie.poster
    this.rating = movie.rating || 0
    this.movieId = movie.movieId
    this.type = movie.type

    this.ratingStars = Math.round((5 * this.rating) / 10)
  }

}
