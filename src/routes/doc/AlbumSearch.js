/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const AlbumSearch = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='album search'
        content={
          <div className='line-numbers language-js'>
            Album Search To search for albums make the following <code>GET</code> request to
            this endpoint
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/search/album?query=<album-name>&limit=<number-of-search-results-to-return>`}</code>
            </pre>
            This above returns an array of album metadata. Please note that the
            songs are not returned
          </div>
        }
      />
    </div>
  );
};
export default AlbumSearch;
