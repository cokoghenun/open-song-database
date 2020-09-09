/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect } from 'react';

const GetSongData = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='get song data'
        content={
          <div className='line-numbers language-js'>
            Get Song Data To get the data for a particular song send the
            following <code>GET</code> request
            <pre>
              <code>{`https://osdbapi.com/api/<your-api-token>/song/<song-id>/`}</code>
            </pre>
          </div>
        }
      />
    </div>
  );
};
export default GetSongData;
