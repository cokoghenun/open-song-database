/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const ArtistSearch = () => {
  const { restUrl } = useContext(AppContext);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='artist search'>
        <div>
          <h3>REST</h3>
          <div className='line-numbers language-js'>
            Make the following <code>GET</code> request to perform an artist
            search
            <Code
              content={`\n${restUrl}/<your-api-key>/search/artist?query=<artist-name>&limit=<number-of-results>`}
            />
            An array of matching artists will be returned, excluding their
            albums and song
          </div>
          <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
          <div className='line-numbers language-js'>
            <Code
              content={`
query {
  searchArtist(input: { query: "<artist-name>", limit: <number-of-results> }) {
    id
    name
  }
}`}
            />
          </div>
        </div>
      </Page>
    </div>
  );
};
export default ArtistSearch;
