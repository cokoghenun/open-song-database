/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Route, Redirect } from 'react-router-dom';
import Usage from './Usage';
import Parameters from './Parameters';
import Example from './Example';
import ChangeLog from './ChangeLog';
import Aside from '../../components/Aside';

const Doc = ({ match }) => {
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
      <Redirect to={`${match.path}/usage`} />
      <Route path={`${match.path}/usage`} component={Usage} />
      <Route path={`${match.path}/example`} component={Example} />
      <Route path={`${match.path}/changelog`} component={ChangeLog} />
      <Route path={`${match.path}/parameters`} component={Parameters} />
    </div>
  );
};
export default Doc;
