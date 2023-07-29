import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export function MovieDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1> MovieDetails Page</h1>
      <ul>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews"> Go to Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
