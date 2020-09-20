/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const AlbumSearch = () => {
  const { restUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='album search'>
        <div>
          <h3>REST</h3>
          <div className='line-numbers language-js'>
            To search for albums make the following <code>GET</code> request to
            this endpoint
            <Code
              content={`\n${restUrl}/<your-api-key>/search/album?query=<album-name>&limit=<number-of-results>`}
            />
            This returns an array of album metadata. Please note that the songs
            are not included
          </div>
          <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
          <div className='line-numbers language-js'>
            <Code
              content={`
query {
  searchAlbum(input: { query: "<album-name>", limit: <number-of-results> }) {
    id
    name
    year
    image
  }
}`}
            />
          </div>
        </div>
      </Page>
    </div>
  );
};
export default AlbumSearch;
