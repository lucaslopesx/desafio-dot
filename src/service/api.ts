import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/movie/popular?api_key=dc35ea9a8f93b99ec2a67ce9ce0238b2&language=en-US&page=1';

const api = axios.create({
  baseURL: url,
});

export default api;
