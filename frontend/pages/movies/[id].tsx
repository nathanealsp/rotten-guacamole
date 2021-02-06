import React from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/react-hooks';

import { MovieDetail } from '../../interfaces/MovieDetail';

import { GET_MOVIE_DETAIL } from '../../Queries';

interface IProps {
  movie: MovieDetail;
}

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

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

  return (
    <div>
      <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="" />
      <p>{movie.title}</p>
      {movie.overview}
    </div>
  );
};

export default Movie;
