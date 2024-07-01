import { useQuery } from '@tanstack/react-query';

import { MovieListResponse } from './types/movies';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Server side fetch for movies
 *
 */

export const getMovieList = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const res = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data: MovieListResponse = await res.json();
    return data.results;
  } catch (error) {
    throw new Error("Couldn't fetch movies");
  }
};

/**
 * Client side fetch for movies
 */
export const useMoviesList = () =>
  useQuery<NonNullable<MovieListResponse['results'] | null>, Error>({
    queryKey: ['movies'],
    queryFn: getMovieList,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
