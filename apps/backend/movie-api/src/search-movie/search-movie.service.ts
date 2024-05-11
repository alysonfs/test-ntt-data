import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { EMovieType, Movie } from '@ntt-data/core'
import { AxiosError } from 'axios'
import { catchError, firstValueFrom } from 'rxjs'

@Injectable()
export class SearchMovieService {
  private readonly logger = new Logger(SearchMovieService.name)
  private readonly OMDB_API_URL = process.env.OMDB_API_URL || 'http://www.omdbapi.com'
  private readonly OMDB_API_KEY = process.env.OMDB_API_KEY || 'any_key'

  constructor(private readonly httpService: HttpService) {}

  async searchMovie(title: string): Promise<Movie> {
    const movies = await this.getMovies(title)
    return movies
  }

  private async getMovies(title: string): Promise<Movie> {
    const url = new URL(this.OMDB_API_URL)
    url.searchParams.append('apikey', this.OMDB_API_KEY)
    url.searchParams.append('t', title)
    url.searchParams.append('type', 'movie')
    url.searchParams.append('plot', 'full')

    const { data } = await firstValueFrom(
      this.httpService.get<Movie>(url.toString()).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data)
          throw 'An error happened!'
        })
      )
    )

    return this.omdbDataToMovie(data)
  }

  private omdbDataToMovie(data: any): Movie {
    const movie = new Movie({
      title: data.Title,
      actors: data.Actors.split(', '),
      plot: data.Plot,
      poster: data.Poster,
      rating: parseFloat(data.imdbRating),
      movieId: data.imdbID,
      type: data.Type as EMovieType
    })
    return movie
  }
}
