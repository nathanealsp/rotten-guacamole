import { IResolvers } from 'apollo-server';

export const resolvers: IResolvers = {
  Query: {
    movies: (root, args, { dataSources }) => {
      const { pageNumber } = args;
      return dataSources.movieService.getAllMovies(pageNumber);
    },
    movieDetail: (root, args, { dataSources }) => {
      const { movieId } = args;
      return dataSources.movieService.getMovieDetail(movieId);
    },
  },
};

export default resolvers;
