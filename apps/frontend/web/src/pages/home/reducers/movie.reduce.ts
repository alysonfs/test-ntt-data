import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    title: '',
    actors: [],
    plot: '',
    poster: '',
    rating: 0,
    movieId: '',
    type: '',
    ratingStars: 0
  },
  reducers: {

  }
})

export const selectMovie = (state: any) => state.movie
// export const { selectMovie } = movieSlice.actions
export default movieSlice.reducer
