/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../components/AppContext';
import Code from '../../components/Code';
import { Link } from 'react-router-dom';

const GenerateApiKey = ({ match }) => {
  const { baseUrl } = useContext(AppContext);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='generate API key'
        content={
          <div className='line-numbers language-js' css={{ marginTop: '24px' }}>
            Generating your API key, simply{' '}
            <Link to='/apikey' className='link'>
              click here
            </Link>{' '}
            or send a <code>POST</code> request to <code>{baseUrl}/key</code>{' '}
            with the following body
            <Code
              content={`
{
  "email": "john@doe.com",
  "firstname": "John",
  "lastname": "Doe",
}`}
            />
            An email would be sent which contains the API <code>KEY</code>
          </div>
        }
      />
    </div>
  );
};
export default GenerateApiKey;
