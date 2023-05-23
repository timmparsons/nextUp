import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../redux/slices/movieSlice';
import userReducer from '../redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  }
});
