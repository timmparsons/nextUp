import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  movieDetails: [],
  popularMovies: null,
  showSharePopup: false,
  similarMovies: [],
  status: 'idle',
  trendingList: null,
  trendingMovies: [],
  trendingTvShows: null,
  topRatedMovies: [],
  upcomingMovies: []
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
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload.movies.results;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload.movies.results;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload.movies.results;
    },
    setMovieCredits: (state, action) => {
      state.movieCredits = action.payload.results;
    },
    setSimilarMovies: (state, action) => {
      state.similarMovies = action.payload.results;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  showSharePopup,
  setSelectedMovie,
  setTrendingMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieDetails,
  setMovieCredits,
  setSimilarMovies
} = movieSlice.actions;

// Selectors
export const selectTrendingMovies = state => state.movie.trendingMovies;
export const selectUpcomingMovies = state => state.movie.upcomingMovies;
export const selectTopRatedMovies = state => state.movie.topRatedMovies;
export const selectMovieDetails = state => state.movie.movieDetails;
export const selectMovieCredits = state => state.movie.movieCredits;
export const selectSimilarMovies = state => state.movie.similarMovies;

export default movieSlice.reducer;
