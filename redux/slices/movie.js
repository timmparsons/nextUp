import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movie: 0,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    increment: (state) => {
      state.movie += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = movieSlice.actions

export default movieSlice.reducer