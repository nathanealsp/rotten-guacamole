import React from 'react';
import Link from 'next/link';
import styles from '../styles/Moviecard.module.css';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

export const MovieCard = ({ movie }) => {
  const ellipsis = `${movie.overview.slice(0, 90)}...`;
  return (
    <div>
      <Link key={movie.id} href={`movies/${movie.id}`}>
        <a className={styles.card}>
          <div className={styles.img_wrapper}>
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt="" />
          </div>
          <MovieCard movie={movie} />
          <div className={styles.movie_info_wrapper}>
            <p className={styles.headline}>{movie.title}</p>
            <p className={styles.overview}>{ellipsis}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
