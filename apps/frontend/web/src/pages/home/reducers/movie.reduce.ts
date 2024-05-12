import { createSlice } from "@reduxjs/toolkit";
import { TMovie } from "@ntt-data/core";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    title: '',
    actors: [],
    plot: '',
    poster: '',
    rating: 0,
    movieId: '',
    type: 'movie',
    ratingStars: 0
  } as TMovie,
  reducers: {

  }
})

export const selectMovie = (state: any) => state.movie as TMovie
export default movieSlice.reducer
