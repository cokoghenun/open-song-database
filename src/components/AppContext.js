import React from 'react';

const backend = process.env.REACT_APP_BACKEND;
const playgroundBackend = process.env.REACT_APP_PLAYGROUND_BACKEND;
const playgroundToken = process.env.REACT_APP_PLAYGROUND_TOKEN;

export const vars = {
  baseUrl: backend,
  restUrl: `${backend}/rest`,
  gqlUrl: `${backend}/graphql`,
  keyUrl: `${backend}/key`,
  playgroundBackend,
  playgroundToken,
};

export const AppContext = React.createContext(vars);
