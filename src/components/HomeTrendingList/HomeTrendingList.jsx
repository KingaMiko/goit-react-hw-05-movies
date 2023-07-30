import React, { useState } from 'react';
import Loader from 'components/Loader/Loader';
import {
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingList,
  TrendingName,
} from './HomeTrendingList.styled';

function MovieItem({ movie }) {
  const [loading, setLoading] = useState(true);

  return (
    <TrendingLi key={movie.id}>
      <HomeItem to={`movies/${movie.id}`}>
        {loading && <Loader />}
        <TrendingImg
          width="220px"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
        <TrendingName>{movie.title}</TrendingName>
      </HomeItem>
    </TrendingLi>
  );
}

export function HomeTrendingList({ movies }) {
  return (
    <TrendingList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </TrendingList>
  );
}
