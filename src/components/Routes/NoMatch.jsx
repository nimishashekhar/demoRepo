import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = ({match}) => <div>
  <span>{match.url} not found</span>
  <div>
    <Link to='/'>Go Home</Link>
  </div>
</div>

export default NoMatch;