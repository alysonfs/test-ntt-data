import { Test, TestingModule } from '@nestjs/testing';
import { SearchMovieController } from './search-movie.controller';

describe('SearchMovieController', () => {
  let controller: SearchMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchMovieController],
    }).compile();

    controller = module.get<SearchMovieController>(SearchMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET /movie/search-movie/:name - should returns Return: any_name', () => {
    const payload_name = 'any_name';
    const result = controller.searchMovie(payload_name);
    expect(result).toBe(`Return: ${payload_name}`);
  });
});
