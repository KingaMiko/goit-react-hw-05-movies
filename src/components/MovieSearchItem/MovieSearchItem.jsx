import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { IMAGE_BASE_URL, PLACEHOLDER_URL } from 'api/fetchMovies';
import {
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingName,
} from 'components/HomeTrendingList/HomeTrendingList.styled';
import { createTmdbImageUrl } from 'helpers/createTmdbImageUrl';
import { useLastLocation } from 'components/Context/LastLocationContext';

function MovieSearchItem({ movie, searchParams }) {
  const location = useLocation();
  const [loading, setLoading] = useState(!!movie.poster_path);
  const { setLastLocation } = useLastLocation();

  useEffect(() => {
    setLastLocation(location.pathname);
  }, [location.pathname, setLastLocation]);

  const imgUrl = createTmdbImageUrl(
    movie.poster_path,
    IMAGE_BASE_URL,
    PLACEHOLDER_URL
  );

  return (
    <TrendingLi key={movie.id}>
      <HomeItem
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location.pathname, searchParams: searchParams },
        }}
      >
        {loading && <Loader />}
        <TrendingImg
          width="200px"
          src={imgUrl}
          alt={movie.title}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
        <TrendingName>{movie.original_title}</TrendingName>
      </HomeItem>
    </TrendingLi>
  );
}

MovieSearchItem.propTypes = {
  movie: PropTypes.object.isRequired,
  searchParams: PropTypes.string,
};

export default MovieSearchItem;
