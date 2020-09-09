/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <aside>
      <ul
        css={{
          all: 'unset',
          display: 'flex',
          color: '#2F3E46',
          borderRadius: '10px',
          width: 'fit-content',
          flexDirection: 'column',
          textTransform: 'capitalize',
          boxShadow: '0px 3px 6px #00000029',
          font: 'normal normal normal 16px/19px PT Sans',
          li: {
            all: 'unset',
            a: {
              display: 'inline-block',
              width: '288px',
              padding: '24px',
            },
          },
        }}
      >
        <li>
          <NavLink exact to='/doc/generatetoken' activeClassName='aside-active'>
            generate API token
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/artistsearch' activeClassName='aside-active'>
            artist search
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/albumsearch' activeClassName='aside-active'>
            album search
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/songsearch' activeClassName='aside-active'>
            song search
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/pagingalbum' activeClassName='aside-active'>
            paging albums
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/getartistdata' activeClassName='aside-active'>
            get artist data
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/getalbumdata' activeClassName='aside-active'>
            get album data
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/getsongdata' activeClassName='aside-active'>
            get song data
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/notes' activeClassName='aside-active'>
            notes
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/changelog' activeClassName='aside-active'>
            change log
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
