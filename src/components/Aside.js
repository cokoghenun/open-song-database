/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import mq from '../utils/mq';

const Aside = () => {
  return (
    <aside>
      <ul
        css={{
          all: 'unset',
          width: '100%',
          display: 'flex',
          color: '#2F3E46',
          borderRadius: '10px',
          flexDirection: 'column',
          textTransform: 'capitalize',
          font: 'normal normal normal 16px/19px PT Sans',
                [mq[1]]: {
                  width: 'fit-content',
                  boxShadow: '0px 3px 6px #00000029',
                },
          li: {
            all: 'unset',
            width: 'inherit',
            a: {
              [mq[1]]: {
                width: '288px',
              },
              padding: '24px',
              display: 'block',
            },
          },
        }}
      >
        <li>
          <NavLink exact to='/doc/generatekey' activeClassName='aside-active'>
            generate API key
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
