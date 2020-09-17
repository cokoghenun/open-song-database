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
      <Page title='get artist data'>
        <div>
          <h3>REST</h3>
          <div className='line-numbers language-js'>
            To get artist data, make the following GET request
            <Code content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/`} />
            The above returns basic artist information only (i.e artist name).
            To get albums and songs by artist, make the below requests
            <Code
              content={`\n${restUrl}/<your-api-key>/artist/<artist-id>/album`}
            />
            The above returns both the artist basic information and an array of
            albums composed by the artist. This includes all relevant album
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
      </Page>
    </div>
  );
};
export default GetArtistData;