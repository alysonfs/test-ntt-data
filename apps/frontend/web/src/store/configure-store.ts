import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../pages/home/reducers/movie.reduce'

export default configureStore({
  devTools: true,
  reducer: {
    movie: movieSlice
  }
})
