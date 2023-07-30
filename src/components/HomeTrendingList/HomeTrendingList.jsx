import React from 'react';
import { HomeItem } from './HomeTrendingList';
export function HomeTrendingList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <HomeItem to={`movies/${movie.id}`}>
              <p>{movie.title}</p>
            </HomeItem>
          </li>
        );
      })}
    </ul>
  );
}
