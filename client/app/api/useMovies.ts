import { useQuery } from '@tanstack/react-query';

import { MovieListResponse } from './types/movies';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useMovies = () =>
  useQuery<NonNullable<MovieListResponse['results'] | null>, Error>({
    queryKey: ['movies'],
    queryFn: async () => {
      const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      );
      const data = await res.json();
      return data.results;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });
