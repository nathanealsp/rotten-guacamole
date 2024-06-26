"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const TypeDefs_1 = require("./TypeDefs");
const Resolvers_1 = require("./Resolvers");
const datasource_1 = require("./datasource");
const server = new apollo_server_1.ApolloServer({
    typeDefs: TypeDefs_1.typeDefs,
    resolvers: Resolvers_1.resolvers,
    dataSources: () => ({
        movieService: new datasource_1.API(),
    }),
    introspection: true,
    playground: true,
});
// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
