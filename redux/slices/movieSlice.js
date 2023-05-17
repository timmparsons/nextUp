import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue
} from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  showSharePopup: false,
  popularMovies: null,
  error: null
};

export const getMovies = createAsyncThunk('posts/getPosts', async thunkAPI => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=d5826b4e12c757147537031e74238c63&language=en-US&page=1'
    ).then(data => data.json());
    return res;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

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
      .addCase(getMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.popularMovies = payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
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
export const selectAllPopularMovies = state =>
  state.movie?.popularMovies?.results;
export const showMovieLoadingState = state => state.movie.status;
