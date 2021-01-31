import React from 'react';
import { BASE_URL } from '../services';

export default function Movies({ movies }) {
  console.log('movies :>> ', movies);
  return (
    <div>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const { API_KEY } = process.env;
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  );
  const movies = await res.json();

  return {
    props: {
      movies: movies.results,
    },
  };
}
