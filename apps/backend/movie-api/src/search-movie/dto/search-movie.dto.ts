import { EMovieType, Movie } from "@ntt-data/core"
import { IsAlphanumeric, IsEnum, IsNotEmpty, IsNumber } from "class-validator"

export namespace DTO {
  export namespace Input {
    export class SearchMovie {
      @IsNotEmpty()
      @IsAlphanumeric()
      title: string
    }
  }

  export namespace Output {
    export class SearchMovie implements Movie {
      @IsNotEmpty()
      @IsAlphanumeric()
      title: string
      actors: string[]

      @IsNotEmpty()
      @IsAlphanumeric()
      plot: string

      @IsNotEmpty()
      @IsAlphanumeric()
      poster: string

      @IsNotEmpty()
      @IsNumber()
      rating: number

      @IsNotEmpty()
      @IsNumber()
      movieId: string

      @IsNotEmpty()
      @IsEnum(EMovieType)
      type: EMovieType
    }
  }
}
