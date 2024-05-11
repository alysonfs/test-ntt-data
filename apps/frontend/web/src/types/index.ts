import { MovieEntity } from "@ntt-data/core"

export type MovieDataRequest = Pick<MovieEntity.TMovie, 'title'>
