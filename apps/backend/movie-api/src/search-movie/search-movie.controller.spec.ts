import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { SearchMovieController } from './search-movie.controller'
import { SearchMovieService } from './search-movie.service'
import { Movie } from '@ntt-data/core'

describe('SearchMovieController', () => {
  let controller: SearchMovieController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      providers: [SearchMovieService],
      controllers: [SearchMovieController]
    }).compile()

    controller = module.get<SearchMovieController>(SearchMovieController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('GET /movie/search-movie/:name - should returns Return: any_name', async () => {
    const payload_name = 'viva'
    const result = await controller.searchMovie({ title: payload_name })
    expect(result).toBeInstanceOf(Movie)
  })
})
