import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { Listings } from './sections/Listings';

const client = new ApolloClient({
  uri: '/api',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <Listings title='WanderOffice Listings' />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
