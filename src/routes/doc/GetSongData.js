/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const GetSongData = () => {
  const { restUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='get song data'
        content={
          <div>
            <h3>REST</h3>

            <div className='line-numbers language-js'>
              Get Song Data To get the data for a particular song send the
              following <code>GET</code> request
              <pre>
                <Code
                  content={`\n${restUrl}/<your-api-key>/song/<song-id>/`}
                />
              </pre>
              <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
              <div className='line-numbers language-js'>
                <Code
                  content={`
query {
  song(id: "<song-id>") {
    id
    name
    duration
  }
}`}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
export default GetSongData;
