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
