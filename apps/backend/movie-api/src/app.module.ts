import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { SearchMovieController } from './search-movie/search-movie.controller';
import { SearchMovieService } from './search-movie/search-movie.service';

@Module({
  controllers: [HealthCheckController, SearchMovieController],
  providers: [SearchMovieService]
})
export class AppModule {}
