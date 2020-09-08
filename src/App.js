/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Doc from './routes/doc/Doc';
import Nav from './components/Nav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Patron from './routes/Patron';
import ApiKey from './routes/ApiKey';

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
            <Route path='/patron' component={Patron} />
            <Route path='/apikey' component={ApiKey} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
