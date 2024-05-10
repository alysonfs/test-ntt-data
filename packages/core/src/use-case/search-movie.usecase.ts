import type { Movie } from '../entities'

export namespace UCSearchMovie {
  export namespace Input {
    export type SearchMovie = {
      title: string
    }
  }
}

export interface UCSearchMovie {
  searchMovie: (input: UCSearchMovie.Input.SearchMovie) => Promise<Movie>
}
