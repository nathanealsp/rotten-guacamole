import React from 'react';
import styled, { css } from 'styled-components';

import styles from '../styles/Moviecard.module.css';

const BACKDROP_PATH = process.env.NEXT_PUBLIC_BACKDROP_PATH;

// const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

export const MovieDetailCard = ({ movie }) => {
  const image = `${BACKDROP_PATH}${movie.backdrop_path}`;
  return (
    <div className={styles.movieCard}>
      <div className={styles.container}>
        <Hero posterImage={{ image }}>
          <div className={styles.details}>
            <div className={styles.title1}>{movie.tagline}</div>
            <div className={styles.title2}>{movie.title}</div>
          </div>
        </Hero>
        <div className={styles.description}>
          <div className={styles.column2}>
            <p className={styles.rottenScore}>
              Rotten Guac Score
              <span className={styles.rottenScoreVote}>
                {movie?.vote_average}
              </span>
            </p>
            {movie.genres && (
              <div className={styles.genres}>
                {movie.genres.map((genre, idx) => (
                  <div key={idx} className={styles.genre}>
                    {genre.name}
                  </div>
                ))}
              </div>
            )}

            <p className={styles.columTwo}>{movie.overview}</p>
            <div className={styles.moreInfo}>
              <p>
                Release date
                <span className={styles.info}>{movie?.release_date}</span>
              </p>
              <p>
                Runtime
                <span className={styles.info}>{movie?.runtime} mins</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = styled.div`
  height: 342px;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: -1;

    ${(props) =>
      props?.posterImage &&
      css`
        background: url(${props?.posterImage.image}) center/cover no-repeat;
      `}

    transform: skewY(-2.2deg);
    transform-origin: 0 0;
  }
`;

export default MovieDetailCard;
