import { ApolloServer } from 'apollo-server';

import { typeDefs } from './TypeDefs';
import { resolvers } from './Resolvers';

import { API } from './datasource';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieService: new API(),
  }),
  introspection: true,
  playground: true,
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
