import React, { FC } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { CardStyles } from './styles/CardStyles';
import styles from '../styles/Button.module.css';

// INTERFACES
import { Movie } from '../interfaces/MovieList';

interface IProps {
  movie: Movie;
}

const POSTER_PATH = process.env.NEXT_PUBLIC_POSTER_PATH;

export const MovieCard: FC<IProps> = ({ movie }) => {
  if (!movie) return;
  const ellipsis = `${movie?.overview?.slice(0, 110)}...`;

  const image = `${POSTER_PATH}${movie.poster_path}`;

  return (
    <CardStyles>
      <Wrapper posterImage={{ image }} className="wrapper">
        <div className="data">
          <div className="content">
            <h1 className="title">{movie.title}</h1>
            <p className="text">{ellipsis}</p>
            <Link key={movie.id} href={`movies/${movie.id}`}>
              <button className={styles.readMoreBtn}>Read more...</button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </CardStyles>
  );
};

const Wrapper = styled.div`
  ${(props) =>
    props.posterImage &&
    css`
      background: url(${props.posterImage.image}) center/cover no-repeat;
      color: white;
    `}
`;
