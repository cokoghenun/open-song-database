/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      css={{
        top: '0',
        color: '#fff',
        height: '96px',
        display: 'flex',
        position: 'sticky',
        padding: '0 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#354F52 0% 0% no-repeat padding-box',
      }}
    >
      <div css={{ font: 'normal normal 40px/52px PT Sans' }}>
        <span css={{ fontWeight: 'bold' }}>Open Song Database</span> API
      </div>
      <ul
        css={{
          all: 'unset',
          textTransform: 'capitalize',
          li: {
            all: 'unset',
            a: {
              padding: '15px 30px',
              font: 'normal normal 600 16px/19px PT Sans',
            },
          },
        }}
      >
        <li>
          <NavLink to='/doc/usage' activeClassName='nav-active'>
            docs
          </NavLink>
        </li>

        <li>
          <NavLink to='/apikey' activeClassName='nav-active'>
            API key
          </NavLink>
        </li>
        <li>
          <NavLink to='/patron' activeClassName='nav-active'>
            become a patron
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
