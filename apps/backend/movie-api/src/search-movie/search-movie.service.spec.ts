import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { SearchMovieService } from './search-movie.service'
import { Movie } from '@ntt-data/core'

describe('SearchMovieService', () => {
  let service: SearchMovieService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      providers: [SearchMovieService]
    }).compile()

    service = module.get<SearchMovieService>(SearchMovieService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('GET /movie/search-movie/:name - should returns Return: any_name', async () => {
    const payload_name = 'viva'
    const result = await service.searchMovie(payload_name)
    expect(result).toBeInstanceOf(Movie)
  })

})
