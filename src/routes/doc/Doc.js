/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Route, Redirect } from 'react-router-dom';
import Notes from './Notes';
import ChangeLog from './ChangeLog';
import Aside from '../../components/Aside';
import GenerateApiToken from './GenerateApiToken';
import ArtistSearch from './ArtistSearch';
import AlbumSearch from './AlbumSearch';
import SongSearch from './SongSearch';
import PagingAlbum from './PagingAlbum';
import GetArtistData from './GetArtistData';
import GetAlbumData from './GetAlbumData'
import GetSongData from './GetSongData';

const Doc = ({ match: { path }, location: { pathname } }) => {
  if (pathname === '/doc' || pathname === '/doc/') {
    return <Redirect to={`${path}/generatetoken`} />;
  }
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          position: 'sticky',
          height: 'min-content',
          top: '200px',
          marginRight: '24px',
        }}
      >
        <Aside />
      </div>
      <Route path={`${path}/generatetoken`} component={GenerateApiToken} />
      <Route path={`${path}/artistsearch`} component={ArtistSearch} />
      <Route path={`${path}/albumsearch`} component={AlbumSearch} />
      <Route path={`${path}/songsearch`} component={SongSearch} />
      <Route path={`${path}/pagingalbum`} component={PagingAlbum} />
      <Route path={`${path}/getartistdata`} component={GetArtistData} />
      <Route path={`${path}/getalbumdata`} component={GetAlbumData} />
      <Route path={`${path}/getsongdata`} component={GetSongData} />
      <Route path={`${path}/notes`} component={Notes} />
      <Route path={`${path}/changelog`} component={ChangeLog} />
    </div>
  );
};
export default Doc;
