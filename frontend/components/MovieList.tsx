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
  background-color: red;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default MovieList;
