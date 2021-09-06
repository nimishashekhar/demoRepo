import React, { Suspense } from 'react';
import { Spinner } from 'reactstrap';
import { Route } from 'react-router-dom';

const Fallback = () => <Spinner color='primary' type='grow'/>;
const LazyRoute = (props) => <Suspense
  fallback={<Fallback/>}
  >
    <Route {...props}/>
  </Suspense>

export default LazyRoute;