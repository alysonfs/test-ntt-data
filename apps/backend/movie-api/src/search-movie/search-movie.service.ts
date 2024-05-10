import { Injectable } from '@nestjs/common'
import { Movie } from '@ntt-data/core'
import { DTO } from './dto'

@Injectable()
export class SearchMovieService {
  async searchMovie(title: string): Promise<DTO.Output.SearchMovie> {
    return {
      title: 'The Shawshank Redemption',
    } as Movie
  }
}
