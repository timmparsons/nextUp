import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  showSharePopup: false,
  trendingList: null,
  popularMovies: null,
  trendingMovies: [],
  trendingTvShows: null,
  error: null
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload.movie;
      state.showSharePopup = action.payload.showSharePopup;
    },
    setTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload.movies.results;
    }
  }
});

// Action creators are generated for each case reducer function
export const { showSharePopup, setSelectedMovie, setTrendingMovies } = movieSlice.actions;

// Selectors
export const selectTrendingMovies = state => state.movie.trendingMovies;

export default movieSlice.reducer;
