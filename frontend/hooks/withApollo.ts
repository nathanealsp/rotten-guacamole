import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const URI = process.env.BASE_URI;
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: process.env.NEXT_PUBLIC_BASE_URI,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
);
