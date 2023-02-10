import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const URI = process.env.NEXT_PUBLIC_BASE_URI;

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: URI,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
);
