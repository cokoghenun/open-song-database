/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      css={{
        top: '0',
        zIndex: '10',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#354F52 0% 0% no-repeat padding-box',
      }}
    >
      <div css={{ font: 'normal normal 30px/42px PT Sans' }}>
        <span css={{ fontWeight: 'bold' }}>Open Song Database</span> API
      </div>
      <ul
        css={{
          all: 'unset',
          li: {
            all: 'unset',
            a: {
              padding: '15px 30px',
              textTransform: 'capitalize',
              font: 'normal normal 600 16px/19px PT Sans',
            },
          },
        }}
      >
        <li>
          <NavLink to='/doc' activeClassName='nav-active'>
            docs
          </NavLink>
        </li>

        <li>
          <NavLink to='/apikey' activeClassName='nav-active'>
            API key
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/patron' activeClassName='nav-active'>
            become a patron
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
