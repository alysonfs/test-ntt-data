import { Controller, Get, Param } from '@nestjs/common'
import { UCSearchMovie } from '@ntt-data/core'
import { DTO } from './dto'
import { SearchMovieService } from './search-movie.service'

@Controller('movie')
export class SearchMovieController implements UCSearchMovie {
  constructor(private readonly searchMovieService: SearchMovieService) {}

  @Get('/search-movie/:title')
  async searchMovie(@Param() params: DTO.Input.SearchMovie): Promise<DTO.Output.SearchMovie> {
    return this.searchMovieService.searchMovie(params.title)
  }
}
