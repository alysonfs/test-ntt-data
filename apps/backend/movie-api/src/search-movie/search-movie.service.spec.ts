import { Test, TestingModule } from '@nestjs/testing';
import { SearchMovieService } from './search-movie.service';

describe('SearchMovieService', () => {
  let service: SearchMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchMovieService],
    }).compile();

    service = module.get<SearchMovieService>(SearchMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
