/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const ArtistSearch = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='artist search'
        content={
          <div className='line-numbers language-js'>
            Make the following <code>GET</code> request to perform an artist
            search
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/search/artist?query=<artist-name>&limit=<number-of-search-results-to-return>`}</code>
            </pre>
            An array of matching artists excluding their albums and song
          </div>
        }
      />
    </div>
  );
};
export default ArtistSearch;
