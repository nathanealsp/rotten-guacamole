import React from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/react-hooks';

import { MovieDetail } from '../../interfaces/MovieDetail';

import { GET_MOVIE_DETAIL } from '../../Queries';

import { MovieDetailCard } from '../../components/MovieDetailCard';

interface IProps {
  movie: MovieDetail;
}

export const Movie: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  const parsedID = Number(id);

  const { data } = useQuery(GET_MOVIE_DETAIL, {
    variables: { movieId: parsedID },
  });

  const movie = data?.movieDetail[0];
  if (!movie) return null;

  return <MovieDetailCard movie={movie} />;
};

export default Movie;
