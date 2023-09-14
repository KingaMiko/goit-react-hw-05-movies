import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { useLastLocation } from '../Context/LastLocationContext';
import { IMAGE_BASE_URL } from 'api/fetch';

import {
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingList,
  TrendingName,
} from './HomeTrendingList.styled';

const MovieItem = memo(function MovieItem({ movie }) {
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();
  const { setLastLocation } = useLastLocation();
  useEffect(() => {
    setLastLocation(location.pathname);
  }, [location.pathname, setLastLocation]);

  return (
    <TrendingLi>
      <HomeItem
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location.pathname },
        }}
      >
        {loading && <Loader />}
        <TrendingImg
          width="220px"
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
        <TrendingName>{movie.title}</TrendingName>
      </HomeItem>
    </TrendingLi>
  );
});

export function HomeTrendingList({ movies }) {
  return (
    <TrendingList>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </TrendingList>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

HomeTrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
