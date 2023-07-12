import { apiKey } from '../constants';

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;

export const image500 = path => (path ? `https://image.tmdb.org/t/p/w500${path}` : null);

const apiCall = endpoint => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  };

  try {
    const response = fetch(endpoint, options);
    return response.json();
  } catch (error) {
    console.log('Error: ', error);
    return {};
  }
};

export const fetchTrendingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg'
    }
  };

  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return await apiCall(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};
