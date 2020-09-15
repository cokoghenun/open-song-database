import React from 'react';

export const vars = {
  baseUrl: 'https://api.osdbapi.com',
  restUrl: 'https://api.osdbapi.com/rest',
  gqlUrl: 'https://api.osdbapi.com/graphql',
  keyUrl: 'https://api.osdbapi.com/key',
};

export const AppContext = React.createContext(vars);
