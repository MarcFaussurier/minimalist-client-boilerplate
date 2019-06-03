import { hot } from 'react-hot-loader';
import React from 'react';
import Header from './layout/Header';
import Card from './components/Card';

const App = () => (
  <div>
    <Header />
    <Card />
  </div>
);

export default hot(module)(App);
