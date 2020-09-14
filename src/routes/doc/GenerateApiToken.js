/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import Code from '../../components/Code';

const GenerateApiToken = ({ match }) => {
  const { base } = useContext(AppContext);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='generate API token'
        content={
          <div className='line-numbers language-js' css={{ marginTop: '24px' }}>
            Generating API Token To create a user account send a{' '}
            <code>POST</code> request to <code>{base}/token</code>
            with the following body
            <Code
              content={`
{
  "email": "john@doe.com",
  "firstname": "John",
  "lastname": "Doe",
}`}
            />
            An email would be sent which contains the API <code>TOKEN</code>
          </div>
        }
      />
    </div>
  );
};
export default GenerateApiToken;
