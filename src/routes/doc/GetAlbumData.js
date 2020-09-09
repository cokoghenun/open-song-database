/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const GetAlbumData = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='get album data'
        content={
          <div className='line-numbers language-js'>
            Get Album Data To get album data, make the following{' '}
            <code>GET</code> request
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/album/<album-id>/`}</code>
            </pre>
            The above returns album metadata without the songs
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/album/<album-id>/song`}</code>
            </pre>
            The above returns the album metadata as well as the songs in the
            album
          </div>
        }
      />
    </div>
  );
};
export default GetAlbumData;
