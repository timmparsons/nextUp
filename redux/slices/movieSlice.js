import { createSlice } from '@reduxjs/toolkit';
import {
  getPopularMovies,
  getTrendingMovies,
  getTrendingTvShows
} from '../../api/apiCalls';

const initialState = {
  status: 'idle',
  showSharePopup: false,
  trendingList: null,
  popularMovies: null,
  trendingMovies: null,
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
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPopularMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(getPopularMovies.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.popularMovies = payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getTrendingMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(getTrendingMovies.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.trendingList = payload;
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getTrendingTvShows.pending, state => {
        state.status = 'loading';
      })
      .addCase(getTrendingTvShows.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.trendingList = payload;
      })
      .addCase(getTrendingTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Action creators are generated for each case reducer function
export const { showSharePopup, setSelectedMovie } = movieSlice.actions;

export default movieSlice.reducer;

// Selectors
export const selectShowPopup = state => state.movie.showSharePopup;
export const selectTrendingList = state => state.movie.trendingList;
export const selectAllPopularMovies = state =>
  state.movie?.popularMovies?.results;
export const showMovieLoadingState = state => state.movie.status;
