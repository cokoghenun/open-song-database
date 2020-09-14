import React from 'react';

export const vars = {
  rest: 'https://api.osdbapi.com/rest',
  gql: 'https://api.osdbapi.com/graphql',
  base: 'https://api.osdbapi.com',
};

export const AppContext = React.createContext(vars);
