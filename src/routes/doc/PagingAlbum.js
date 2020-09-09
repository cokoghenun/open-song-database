/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const PagingAlbum = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='paging albums'
        content={
          <div className='line-numbers language-js'>
            Paging Albums You can page through the entire albums in the database
            by sending a <code>GET</code> request to this endpoint
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/album?page=<page-number>&limit=<number-of-albums-to-return>`}</code>
            </pre>
            Please note that the above request does not return the song data in
            each album, it only returns an array of album with their metadata.
            To return an array of albums with their songs, make a request to
            this endpoint
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/album/song?page=<page-number>&limit=<number-of-albums-to-return>`}</code>
            </pre>
          </div>
        }
      />
    </div>
  );
};
export default PagingAlbum;
