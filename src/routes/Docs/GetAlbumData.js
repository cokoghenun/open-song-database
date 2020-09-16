/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const GetAlbumData = () => {
  const { restUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='get album data'
        content={
          <div>
            <h3>REST</h3>
            <div className='line-numbers language-js'>
              To get album data, make the following{' '}
              <code>GET</code> request
              <Code
                content={`\n${restUrl}/<your-api-key>/album/<album-id>/`}
              />
              The above returns album metadata without the songs
              <Code
                content={`\n${restUrl}/<your-api-key>/album/<album-id>/song`}
              />
              The above returns the album metadata as well as the songs in the
              album
            </div>
            <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
            <div className='line-numbers language-js'>
              <Code
                content={`
query {
  album(id: "<album-id>") {
    id
    name
    year
    cover
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
export default GetAlbumData;
