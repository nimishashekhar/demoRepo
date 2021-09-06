import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import LazyRoute from './LazyRoute';
import { useLocation } from 'react-router-dom'

const Home = lazy(() => import('../Home'));
const NoMatch = lazy(() => import('./NoMatch'));
const Infrastructure = lazy(() => import('../Infrastructure/infrastructure-connector'));

const Routes = ({ routes }) => {
  let location = useLocation();

  return <Switch>
    <LazyRoute exact path='/' component={Home} />
    <LazyRoute exact path='/infrastructure' component={Infrastructure} />
    <LazyRoute exact path='/notification' component={Home} />
    <LazyRoute path="*" component={NoMatch} />
  </Switch >
}

export default Routes;