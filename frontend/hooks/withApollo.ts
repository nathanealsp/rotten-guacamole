import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

// const URI = process.env.BASE_URI;
const URI = process.env.NEXT_PUBLIC_BASE_URI;

console.log('URI  -----:>> ', URI);
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      // uri: process.env.NEXT_PUBLIC_BASE_URI,
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
    }),
);
