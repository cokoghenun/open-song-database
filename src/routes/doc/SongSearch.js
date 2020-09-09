/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const SongSearch = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='song search'
        content={
          <div className='line-numbers language-js'>
            Song Search Send the following <code>GET</code> request to search
            for a song
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/search/song?query=<song-name>&limit=<number-of-search-results-to-return>`}</code>
            </pre>
            The above request returns an array of songs sorted by best match
          </div>
        }
      />
    </div>
  );
};
export default SongSearch;
