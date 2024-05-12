import { createSlice } from "@reduxjs/toolkit";
import { TMovie } from "@ntt-data/core";

export const initialStateMovie = {
  title: '',
  actors: [],
  plot: '',
  poster: '',
  rating: 0,
  movieId: '',
  type: 'movie',
  ratingStars: 0
} as TMovie

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialStateMovie,
  reducers: {
    setMovie: (state, action) => {
      return action.payload
    }
  }
})

export const selectMovie = (state: any) => state.movie as TMovie

export const { setMovie } = movieSlice.actions
export default movieSlice.reducer
