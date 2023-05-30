export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg'
  }
};

export const apiCalls = [
  {
    id: 'Trending Movies',
    endpoint: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  },
  {
    id: 'Trending TV Shows',
    endpoint: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
  }
  // {
  //   popularMovies: {
  //     id: 'Popular Movies',
  //     endpoint:
  //       'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
  //   }
  // }
];
