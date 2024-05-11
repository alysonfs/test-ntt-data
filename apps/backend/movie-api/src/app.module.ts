import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { SearchMovieController } from './search-movie/search-movie.controller';
import { SearchMovieService } from './search-movie/search-movie.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [HealthCheckController, SearchMovieController],
  providers: [SearchMovieService]
})
export class AppModule {}
