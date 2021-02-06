import React, { FC } from 'react';
import Link from 'next/link';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

// INTERFACES
import { Movie } from '../interfaces/MovieList';

interface IProps {
  movie: Movie;
}

export const MovieCard: FC<IProps> = ({ movie }) => {
  if (!movie) return;
  const ellipsis = `${movie?.overview?.slice(0, 90)}...`;

  return (
    <Link key={movie.id} href={`movies/${movie.id}`}>
      <a>
        <div>
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt="" />
        </div>
        <div>
          <p>{movie.title}</p>
          <p>{ellipsis}</p>
        </div>
      </a>
    </Link>
  );
};
