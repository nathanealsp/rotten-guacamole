import React, { FC } from 'react';

import styles from '../styles/MovieList.module.css';

import { Movie } from '../interfaces/MovieList';
import { MovieCard } from './MovieCard';

interface IProps {
  movies: [Movie];
}

export const MovieList: FC<IProps> = ({ movies }) => {
  return (
    <ul className={styles.listStyles}>
      {movies.map((movie) => (
        <li className={styles.listItem} key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
