import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showSharePopup: false,
	selectedMovie: null
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
		setSelectedMovie: (state, action) => {
			state.selectedMovie = action.payload.movie;
			state.showSharePopup = action.payload.showSharePopup;
		}
  },
})

// Action creators are generated for each case reducer function
export const { showSharePopup, setSelectedMovie } = movieSlice.actions

export default movieSlice.reducer