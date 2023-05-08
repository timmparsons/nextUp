import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showSharePopup: false,
	selectedMovie: null
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    showSharePopup: (state, action) => {
      state.showSharePopup = action.payload;
		},
		selectedMovie: (state, action) => {
			console.log('action payloaod', action.payload)
			state.selectedMovie = action.payload
		}
  },
})

// Action creators are generated for each case reducer function
export const { showSharePopup, selectedMovie } = movieSlice.actions

export default movieSlice.reducer