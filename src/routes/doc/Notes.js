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
            <ol>
              <li>
                API <code>kEY</code> is sent to the registered email address
              </li>
              <li>
                The maximum number for the <code>limit</code> query parameter is
                20. Any value greater than this defaults to 20
              </li>
              <li>
                The maximum number of request per IP is 1000 within a 24 hour
                period
              </li>
            </ol>
          </div>
        }
      />
    </div>
  );
};
export default GetAlbumData;
