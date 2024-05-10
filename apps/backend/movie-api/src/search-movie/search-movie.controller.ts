import { Controller, Get, Param } from '@nestjs/common'
import { IsAlphanumeric, IsNotEmpty } from 'class-validator'

export namespace DTO {
  export namespace Input {
    export class SearchMovie {
      @IsNotEmpty()
      @IsAlphanumeric()
      name: string
    }
  }
}

@Controller('movie')
export class SearchMovieController {
  @Get('/search-movie/:name')
  searchMovie(@Param() params: DTO.Input.SearchMovie): string {
    return `Return: ${params.name}`
  }
}
