import React from 'react';
import Link from 'next/link';
import styles from '../styles/Moviecard.module.css';

import { MovieCard } from '../components/MovieCard';

// INTERFACES
import { InferGetStaticPropsType } from 'next';
import { Response } from '../interfaces/MovieList';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const Movies = ({ movies }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!movies) return null;
  const { results } = movies;

  return (
    <div className={styles.container}>
      {results.map((movie) => {
        const ellipsis = `${movie.overview.slice(0, 90)}...`;
        return (
          <Link key={movie.id} href={`movies/${movie.id}`}>
            <a className={styles.card}>
              <div className={styles.img_wrapper}>
                <img
                  className={styles.img}
                  src={`${POSTER_PATH}${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className={styles.movie_info_wrapper}>
                <p className={styles.headline}>{movie.title}</p>
                <p className={styles.overview}>{ellipsis}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const { API_KEY, BASE_URL } = process.env;
  const URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  const res = await fetch(URL);
  const movies: Response = await res.json();
  return {
    props: {
      movies,
    },
  };
};

export default Movies;
