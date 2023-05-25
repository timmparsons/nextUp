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

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg'
  }
};

fetch(
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const getPopularMovies = createAsyncThunk(
  'posts/getPosts',
  async thunkAPI => {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        options
      ).then(data => data.json());
      return res;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

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
