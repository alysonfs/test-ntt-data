import { IsAlphanumeric, IsNotEmpty, Length } from "class-validator"

export namespace DTO {
  export namespace Input {
    export class SearchMovie {
      @IsNotEmpty({ message: 'The title is required' })
      @IsAlphanumeric(undefined, { message: 'The title must contain only alphanumeric characters' })
      @Length(3, 150, { message: 'The title must be between 3 and 150 characters long' })
      title: string
    }
  }
}
