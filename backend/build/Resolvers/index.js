"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
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
exports.default = exports.resolvers;
