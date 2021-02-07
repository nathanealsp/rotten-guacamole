import React, { FC } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { CardStyles } from './styles/CardStyles';

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
              <Button>Read more...</Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </CardStyles>
  );
};

const Wrapper = styled.div`
  ${props =>
    props.posterImage &&
    css`
      background: url(${props.posterImage.image}) center/cover no-repeat;
      color: white;
    `}
`;

const Button = styled.div`
  width: 200px;
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  position: relative;
  font-weight: 500;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px);
  font-family: 'XfinityStandard', helvetica, arial, sans-serif;
  padding: 14px;
  margin: 2rem 2.5rem 0rem 1.8rem;
  border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 0;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 1);
  }

  &:hover:after {
    width: 110%;
  }
`;
