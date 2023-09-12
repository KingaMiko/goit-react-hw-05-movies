import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { fetchMovies } from 'Api/fetchMovies';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useLastLocation } from 'components/Context/LastLocationContext';
import {
  NoMovies,
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingList,
  TrendingName,
} from 'components/HomeTrendingList/HomeTrendingList.styled';

function MovieSearchItem({ movie, searchParams }) {
  const location = useLocation();
  const [loading, setLoading] = useState(!!movie.poster_path);

  const { setLastLocation } = useLastLocation();
  setLastLocation(location.pathname);

  useEffect(() => {
    setLastLocation(location.pathname);
  }, [location.pathname, setLastLocation]);

  const getImageUrl = path => {
    return path
      ? `https://image.tmdb.org/t/p/original/${path}`
      : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  };

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
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
        <TrendingName>{movie.original_title}</TrendingName>
      </HomeItem>
    </TrendingLi>
  );
}

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  //const [lastSearchParams, setLastSearchParams] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { lastSearchParams, setLastSearchParams } = useLastLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    if (searchQuery) {
      setSearchPerformed(true);
      setLastSearchParams(searchParams.toString());
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
      fetchMovies(url)
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error('error:' + err));
    }
  }, [searchParams, setLastSearchParams]);

  return (
    <>
      <Searchbar setSearchParams={setSearchParams} />
      {movies.length > 0 ? (
        <TrendingList>
          {movies.map(result => (
            <MovieSearchItem
              key={result.id}
              movie={result}
              searchParams={lastSearchParams}
            />
          ))}
        </TrendingList>
      ) : (
        searchPerformed && <NoMovies>No movies found</NoMovies>
      )}
    </>
  );
}

export default Movies;
