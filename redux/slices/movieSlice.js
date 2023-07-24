import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  movieDetails: [],
	movieCast: [],
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
      state.movieDetails = action.payload;
    },
    setMovieCast: (state, action) => {
      state.movieCast = action.payload.cast;
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
  setMovieCast,
  setSimilarMovies
} = movieSlice.actions;

// Selectors
export const selectTrendingMovies = state => state.movie.trendingMovies;
export const selectUpcomingMovies = state => state.movie.upcomingMovies;
export const selectTopRatedMovies = state => state.movie.topRatedMovies;
export const selectMovieDetails = state => state.movie.movieDetails;
export const selectMovieCast = state => state.movie.movieCast;
export const selectSimilarMovies = state => state.movie.similarMovies;

export default movieSlice.reducer;
