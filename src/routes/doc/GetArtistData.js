/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Page from '../../components/Page';
import Prism from 'prismjs';
import { useEffect, useContext } from 'react';
import Code from '../../components/Code';
import { AppContext } from '../../components/AppContext';

const GetArtistData = () => {
  const { restUrl } = useContext(AppContext);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <Page
        title='get artist data'
        content={
          <div>
            <h3>REST</h3>
            <div className='line-numbers language-js'>
              Get Artist Data To get artist data, which includes albums and
              songs send the following GET request
              <Code
                content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/`}
              />
              The above returns basic artist information only (i.e artist name)
              <Code
                content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/album`}
              />
              The above returns both the artist basic information and an array
              of albums composed by the artist. This includes all relevant album
              metadata without the songs in the album
              <Code
                content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/album/song`}
              />
              The above returns artist information, album metadata and the songs
              in each album
            </div>
            <h3 css={{ marginTop: '30px' }}>GRAPHQL</h3>
            <div className='line-numbers language-js'>
              <Code
                content={`
query {
  artist(id: "<artist-id>") {
    id
    name
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
export default GetArtistData;
