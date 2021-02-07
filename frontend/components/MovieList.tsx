import React, { FC } from 'react';
import styled from 'styled-components';

import { Movie } from '../interfaces/MovieList';
import { MovieCard } from './MovieCard';

interface IProps {
  movies: [Movie];
}

export const MovieList: FC<IProps> = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieCard movie={movie} />
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  max-width: 1200px;
  margin: 10px auto;
  margin-top: 100px;
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
`;

const ListItem = styled.li``;

export default MovieList;
