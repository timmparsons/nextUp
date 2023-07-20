import { apiKey } from '../constants';
import {
  setTrendingMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieCredits,
  setMovieDetails,
  setSimilarMovies
} from '../redux/slices/movieSlice';

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;

const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?language=en-US`;
const movieCreditsEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?language=en-US`;
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?language=en-US`;

export const image500 = path => (path ? `https://image.tmdb.org/t/p/w500${path}` : null);
export const image185 = path => (path ? `https://image.tmdb.org/t/p/w185${path}` : null);

const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg'
  }
};

const apiCall = (endpoint, action, dispatch) => {
  fetch(endpoint, apiOptions)
    .then(response => response.json())
    .then(response => {
      dispatch(action({ movies: response }));
    })
    .catch(err => console.error(err));
};

export const getTrendingMovies = async dispatch => {
  return apiCall(trendingMoviesEndpoint, setTrendingMovies, dispatch);
};

export const getUpcomingMovies = dispatch => {
  return apiCall(upcomingMoviesEndpoint, setUpcomingMovies, dispatch);
};

export const getTopRatedMovies = dispatch => {
  return apiCall(topRatedMoviesEndpoint, setTopRatedMovies, dispatch);
};

export const getMovieDetails = dispatch => {
  return apiCall(movieDetailsEndpoint, setMovieDetails, dispatch);
};

export const getMovieCredits = dispatch => {
  return apiCall(movieCreditsEndpoint, setMovieCredits, dispatch);
};

export const getSimilarMovies = dispatch => {
  return apiCall(similarMoviesEndpoint, setSimilarMovies, dispatch);
};
