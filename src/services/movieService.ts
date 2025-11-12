import axios from 'axios';
import type { Movie } from '../types/movie';
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface MovieHttpResponse {
  results: Movie[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchMovie = async (movie: string): Promise<Movie[]> => {
  const res = await axiosInstance.get<MovieHttpResponse>('/search/movie', {
    params: { query: movie },
  });

  return res.data.results;
};
