import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { SearchMovieController } from './search-movie/search-movie.controller';

@Module({
  controllers: [HealthCheckController, SearchMovieController]
})
export class AppModule {}
