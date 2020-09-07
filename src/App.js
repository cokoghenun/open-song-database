/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Nav from './components/Nav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Doc from './routes/doc/Doc';

const App = () => {
  return (
    <div css={{ position: 'relative' }}>
      <Router>
        <Nav />
        <div css={{ padding: '24px' }}>
          <Switch>
            <Route exact path='/'>
              <div>Home</div>
            </Route>
            <Route path='/doc' component={Doc} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
