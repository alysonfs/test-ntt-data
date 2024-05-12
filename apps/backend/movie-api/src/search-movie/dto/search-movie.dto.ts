import { IsAlphanumeric, IsNotEmpty, IsString, Length } from "class-validator"

export namespace DTO {
  export namespace Input {
    export class SearchMovie {
      @IsNotEmpty({ message: 'The title is required' })
      @IsString({ message: 'The title must be a string' })
      @Length(3, 150, { message: 'The title must be between 3 and 150 characters long' })
      title: string
    }
  }
}
