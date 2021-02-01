import React from 'react';
import { GetStaticProps } from 'next';

import { MovieDetail } from '../../interfaces/MovieDetail';

import styles from '../../styles/Home.module.css';

interface IProps {
  movie: MovieDetail;
}

export const Movie: React.FC<IProps> = ({ movie }) => {
  if (!movie) return null;

  return <div className={styles.card}>{movie.title}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const { API_KEY, BASE_URL } = process.env;
  const URL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const res = await fetch(URL);
  const movie: MovieDetail = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = async (): Promise<{
  paths: any[];
  fallback: boolean;
}> => {
  const { API_KEY, BASE_URL } = process.env;
  const URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  const res = await fetch(URL);
  const movies = await res.json();

  const movie_ids = movies.results.map((movie) => ({
    params: { id: `${movie.id}` },
  }));

  return { paths: [...movie_ids], fallback: false };
};

export default Movie;
