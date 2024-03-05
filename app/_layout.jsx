import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Stack } from 'expo-router';
import StoreCtxProvider from '../utils/StoreCtx';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://testing-nextjs-graphql.netlify.app/api/graphql',
  cache: new InMemoryCache()
});

const Layout = () => {

  return (
    <ApolloProvider client={client}>
      <StoreCtxProvider>
        <Stack />
      </StoreCtxProvider>
    </ApolloProvider>
  )
};

export default Layout;