/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Route, Redirect } from 'react-router-dom';
import Notes from './Notes';
import ChangeLog from './ChangeLog';
import Aside from '../../components/Aside';
import GenerateApiKey from './GenerateApiKey';
import ArtistSearch from './ArtistSearch';
import AlbumSearch from './AlbumSearch';
import SongSearch from './SongSearch';
import PagingAlbum from './PagingAlbum';
import GetArtistData from './GetArtistData';
import GetAlbumData from './GetAlbumData';
import GetSongData from './GetSongData';
import mq from '../../utils/mq';
import { useState } from 'react';

const Doc = ({ match: { path }, location: { pathname } }) => {
  const [showAside, setShowAside] = useState(false);
  if (pathname === '/doc' || pathname === '/doc/') {
    return <Redirect to={`${path}/generatekey`} />;
  }
  return (
    <div
      css={{
        display: 'flex',
        // position: 'relative',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          zIndex: 5,
          top: '82px',
          width: '100vw',
          position: 'fixed',
          background: '#fff',
          overflowY: 'scroll',
          height: 'calc(100vh - 82px)',
          display: showAside ? 'initial' : 'none',
          [mq[1]]: {
            top: 'auto',
            position: 'sticky',
            marginRight: '24px',
            height: 'min-content',
          },
        }}
        onClick={() => {
          setShowAside(!showAside);
        }}
      >
        <Aside />
      </div>
      <Route path={`${path}/generatekey`} component={GenerateApiKey} />
      <Route path={`${path}/artistsearch`} component={ArtistSearch} />
      <Route path={`${path}/albumsearch`} component={AlbumSearch} />
      <Route path={`${path}/songsearch`} component={SongSearch} />
      <Route path={`${path}/pagingalbum`} component={PagingAlbum} />
      <Route path={`${path}/getartistdata`} component={GetArtistData} />
      <Route path={`${path}/getalbumdata`} component={GetAlbumData} />
      <Route path={`${path}/getsongdata`} component={GetSongData} />
      <Route path={`${path}/notes`} component={Notes} />
      <Route path={`${path}/changelog`} component={ChangeLog} />
      <div
        css={{
          zIndex: 10,
          width: '48px',
          color: '#fff',
          right: '20px',
          bottom: '20px',
          height: '48px',
          display: 'flex',
          cursor: 'pointer',
          position: 'fixed',
          borderRadius: '50%',
          alignItems: 'center',
          background: '#354F52',
          justifyContent: 'center',
          [mq[1]]: {
            display: 'none',
          },
        }}
        onClick={() => {
          setShowAside(!showAside);
        }}
      >
        <span>@</span>
      </div>
    </div>
  );
};
export default Doc;
