import { apiKey } from '../constants';
import {
  setTrendingMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieCast,
  setMovieDetails,
  setSimilarMovies,
	setPerson
} from '../redux/slices/movieSlice';

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;

const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}`;
const movieCastEndpoint = id => `${apiBaseUrl}/movie/${id}/credits`;
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?page=1`
const getPersonEndpoint = id => `${apiBaseUrl}/person/${id}`;

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

export const fetchMovieDetails = async (id, dispatch) => {
	try {
		fetch(movieDetailsEndpoint(id), apiOptions)
    .then(response => response.json())
    .then(json => dispatch(setMovieDetails(json)))
	} catch(err) {
		console.error(err)
	}
};

export const fetchMovieCast = async (id, dispatch) => {
	try {
		fetch(movieCastEndpoint(id), apiOptions)
		.then(response => response.json())
		.then(json => dispatch(setMovieCast(json)))
	} catch(err) {
		console.error(err)
	}
};

export const fetchSimilarMovies = async (id, dispatch) => {
	try {
		fetch(similarMoviesEndpoint(id), apiOptions)
		.then(response => response.json())
		.then(json => dispatch(setSimilarMovies(json)))
	} catch(err) {
		console.error(err)
	}
}

export const fetchPerson = async (id, dispatch) => {
	try {
		fetch(getPersonEndpoint(id), apiOptions)
		.then(response => response.json())
		.then(json => dispatch(setPerson(json)))
	} catch(err) {
		console.error(err);
}}
