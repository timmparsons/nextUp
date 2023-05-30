import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { options, apiCalls } from '../api/index';
import { ENDPOINTS } from '../constants';

export const getPopularMovies = createAsyncThunk(
  'posts/getPopularMovies',
  async thunkAPI => {
    try {
      const res = await fetch(apiCalls.popularMovies, options).then(data =>
        data.json()
      );
      return res;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const getTrendingMovies = createAsyncThunk(
  'posts/getTrendingMovies',
  async thunkAPI => {
    const trendingMovies = apiCalls.filter(
      api => api.id === ENDPOINTS.trendingMovies
    );

    try {
      const res = await fetch(trendingMovies[0].endpoint, options).then(data =>
        data.json()
      );
      return res;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const getTrendingTvShows = createAsyncThunk(
  'posts/getTrendingTVShows',
  async thunkAPI => {
    const trendingTvShows = apiCalls.filter(
      api => api.id === ENDPOINTS.trendingTvShows
    );
    try {
      const res = await fetch(trendingTvShows[0].endpoint, options).then(data =>
        data.json()
      );
      return res;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export default apiCalls;
