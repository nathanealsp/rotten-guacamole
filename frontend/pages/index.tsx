import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// QUERIES
import { GET_MOVIE_LIST } from '../Queries';

// COMPONENTS
import MovieList from '../components/MovieList';

// INTERFACES
import { Response } from '../interfaces/MovieList';

interface ResponseData {
  results: Response[];
}

interface ListResponseData {
  movies: ResponseData;
}

interface PaginationVars {
  pageNumber: number;
}

const Movies = () => {
  const { data } = useQuery<ListResponseData, PaginationVars>(GET_MOVIE_LIST, {
    variables: { pageNumber: 1 },
  });

  const movies = data?.movies[0]?.results;

  if (!movies) return null;

  return <MovieList movies={movies} />;
};

export default Movies;
