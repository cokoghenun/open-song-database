/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Doc from './routes/doc/Doc';
import Nav from './components/Nav';
import Patron from './routes/Patron';
import ApiKey from './routes/ApiKey';
import {AppContext, vars} from './components/AppContext'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <AppContext.Provider value={vars}>
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
        <footer
          css={{
            margin: '30px 0',
            color: '#707070',
            textAlign: 'center',
            textTransform: 'capitalize',
            font: 'normal normal normal 14px/16px PT Sans',
          }}
        >
          © 2020 open song database API
        </footer>
      </div>
    </AppContext.Provider>
  );
};

export default App;
