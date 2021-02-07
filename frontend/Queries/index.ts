import { gql } from 'apollo-boost';

export const GET_MOVIE_LIST = gql`
  query GetMovieList($pageNumber: Int) {
    movies(pageNumber: $pageNumber) {
      results {
        title
        id
        overview
        poster_path
      }
    }
  }
`;

export const GET_MOVIE_DETAIL = gql`
  query GetMovieList($movieId: Int) {
    movieDetail(movieId: $movieId) {
      title
      id
      overview
      backdrop_path
      tagline
      genres {
        name
      }
      status
      vote_average
      runtime
      release_date
    }
  }
`;
