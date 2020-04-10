import React from 'react';

import Videos from './videos';


const independentProviders = [
  Videos,
];

const dependentProviders = [
  // Surveys
];

const providers = [
  ...dependentProviders,
  ...independentProviders,
];


const MultiProvider = ({ children }) =>
  providers.reduce((acc, Provider) => <Provider>{acc}</Provider>, children)


export default MultiProvider;
