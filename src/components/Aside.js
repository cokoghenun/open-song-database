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
              padding: '24px'
            }
          },
        }}
      >
        <li>
          <NavLink exact to='/doc/usage'  activeClassName='aside-active'>
            usage
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/parameters' activeClassName='aside-active'>
            parameters
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/doc/example' activeClassName='aside-active'>
            examples
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
