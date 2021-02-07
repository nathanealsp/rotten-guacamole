import { FC } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Layout from '../components/Layout';

import withApollo from '../hooks/withApollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import '../styles/globals.css';

// NPROGRESS BAR
import '../components/styles/nprogress.css';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
  Component: any;
  pageProps: any;
}

const MyApp: FC<IProps> = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default withApollo(MyApp);
