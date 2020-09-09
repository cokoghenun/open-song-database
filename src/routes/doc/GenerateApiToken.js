/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const GenerateApiToken = ({ match }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='generate API token'
        content={
          <div className='line-numbers language-js'>
            Generating API Token To create a user account send a{' '}
            <code>POST</code> request to <code>https://osdbapi.com/join</code>
            with the following body
            <pre>
              <code>
                {`{
  "email": "john@doe.com",
  "firstname": "John",
  "lastname": "Doe",
}`}
              </code>
            </pre>
            An email would be sent which contains the API <code>TOKEN</code>
          </div>
        }
      />
    </div>
  );
};
export default GenerateApiToken;
