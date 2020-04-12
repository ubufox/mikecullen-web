import React from 'react';

import Videos from './videos';
import Survey from './survey';


const independentProviders = [
  Videos,
];

const dependentProviders = [
  Survey,
];

const providers = [
  ...dependentProviders,
  ...independentProviders,
];


const MultiProvider = ({ children }) =>
  providers.reduce((acc, Provider) => <Provider>{acc}</Provider>, children)


export default MultiProvider;
