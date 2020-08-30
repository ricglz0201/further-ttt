import React, { Suspense, lazy } from 'react';
import AlertProvider from 'components/providers/AlertProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Home = lazy(() => import('components/pages/Home'));
const PVPGame = lazy(() => import('components/pages/PVPGame'));
const SPGame = lazy(() => import('components/pages/SPGame'));

function App() {
  return (
    <AlertProvider>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/single-player">
              <SPGame />
            </Route>
            <Route path="/multi-player">
              <PVPGame />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </AlertProvider>
  )
}

export default App;
