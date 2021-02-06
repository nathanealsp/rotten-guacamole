require('dotenv').config();

import { RESTDataSource } from 'apollo-datasource-rest';

const { BASE_URL, API_KEY } = process.env;

export class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  async getAllMovies(pageNumber) {
    const results = await this.get(
      `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`,
    );
    return [results];
  }

  async getMovieDetail(movieId) {
    const results = await this.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return [results];
  }
}
