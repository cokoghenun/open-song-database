/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const SongSearch = () => {
  const { rest } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='song search'
        content={
          <div>
            <h3>REST</h3>
            <div className='line-numbers language-js'>
              Song Search Send the following <code>GET</code> request to search
              for a song
              <Code
                content={`\n${rest}/<your-api-token>/search/song?query=<song-name>&limit=<number-of-results>`}
              />
              The above request returns an array of songs sorted by best match
            </div>
            <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
            <div className='line-numbers language-js'>
              <Code
                content={`
query {
  searchSong(input: {query: "<song-name>", limit: <number-of-results>}) {
      id
      name
      duration
  }
}`}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};
export default SongSearch;
