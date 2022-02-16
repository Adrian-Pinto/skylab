import React from 'react';
import { Link } from 'react-router-dom';

const Unexist = () => (
  <>
    <h1>404 This page not found.</h1>
    <p>
      Back to
      {' '}
      <Link to="/">Home</Link>
    </p>
  </>
);

export default Unexist;
