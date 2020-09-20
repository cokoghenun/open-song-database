/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const PagingAlbum = () => {
  const { restUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page title='paging albums'>
        <div>
          <h3>REST</h3>
          <div className='line-numbers language-js'>
            You can page through the entire albums in the database by sending a{' '}
            <code>GET</code> request to this endpoint
            <Code
              content={`\n${restUrl}/<your-api-key>/album?page=<page-number>&limit=<number-of-results>`}
            />
            Please note that the above request does not return the song data in
            each album, it only returns an array of album with their metadata.
            To return an array of albums with their songs, make a request to
            this endpoint
            <Code
              content={`\n${restUrl}/<your-api-key>/album/song?page=<page-number>&limit=<number-of-results>`}
            />
          </div>
          <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
          <div className='line-numbers language-js'>
            <Code
              content={`
query {
  albums(input: { page: <page-number>, limit: <number-of-results> }) {
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
export default PagingAlbum;
