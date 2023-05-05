import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../redux/slices/movie';

export const store = configureStore({
  reducer: {
		movieReducer
	},
})