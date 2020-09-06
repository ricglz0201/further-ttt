import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('components/pages/Home'));
const PVPGame = lazy(() => import('components/pages/PVPGame'));
const SPGame = lazy(() => import('components/pages/SPGame'));

const MainContent = () => {
  return (
    <main>
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
    </main>
  );
};

export default MainContent;
