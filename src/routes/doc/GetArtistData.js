/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const GetArtistData = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='get artist data'
        content={
          <div className='line-numbers language-js'>
            Get Artist Data To get artist data, which includes albums and songs
            send the following GET request
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/artist/<artist-id>/`}</code>
            </pre>
            The above returns basic artist information only (i.e artist name)
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/artist/<artist-id>/album`}</code>
            </pre>
            The above returns both the artist basic information and an array of
            albums composed by the artist. This includes all relevant album
            metadata without the songs in the album
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/artist/<artist-id>/album/song`}</code>
            </pre>
            The above returns artist information, album metadata and the songs
            in each album
          </div>
        }
      />
    </div>
  );
};
export default GetArtistData;
