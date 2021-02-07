import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    adult: Boolean
    backdrop_path: String
    genre_ids: [Int]
    id: Int
    original_language: String
    original_title: String
    overview: String
    popularity: Int
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Int
    vote_count: Int
  }

  type MovieList {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }

  type Genre {
    id: Int
    name: String
  }

  type Collection {
    id: Int
    name: String
    poster_path: String
    backdrop_path: String
  }

  type ProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type ProductionCountry {
    iso_3166_1: String
    name: String
  }

  type Language {
    english_name: String
    iso_639_1: String
    name: String
  }

  type MovieDetail {
    adult: Boolean
    backdrop_path: String
    belongs_to_collection: [Collection]
    budget: Int
    genres: [Genre]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Int
    poster_path: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [Language]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type Query {
    movies(pageNumber: Int): [MovieList]
    movieDetail(movieId: Int): [MovieDetail]
  }
`;

export default typeDefs;
