import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// INTERFACES
import { InferGetStaticPropsType } from 'next';
import { Response } from '../interfaces/MovieList';

const Movies = ({ movies }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!movies) return null;
  const { results } = movies;

  return (
    <div className={styles.grid}>
      {results.map((movie) => {
        const ellipsis = `${movie.overview.slice(0, 90)}...`;
        return (
          <Link key={movie.id} href={`movies/${movie.id}`}>
            <a className={styles.card}>
              <h3>{movie.title} &rarr;</h3>
              <p className={styles.overview}>{ellipsis}</p>
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
