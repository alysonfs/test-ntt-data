import { Controller, Get, Param,  } from '@nestjs/common';

@Controller('movie')
export class SearchMovieController {
  
  @Get('/search-movie/:name')
  searchMovie(@Param('name') name: string): string {
    return `Return: ${name}`;
  }
}
