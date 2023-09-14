import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'api/fetch';
import { Searchbar } from 'components/Searchbar/Searchbar';
import {
  NoMovies,
  TrendingList,
} from 'components/HomeTrendingList/HomeTrendingList.styled';
import MovieSearchItem from '../../components/MovieSearchItem/MovieSearchItem';
import { useLastLocation } from 'components/Context/LastLocationContext';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { lastSearchParams, setLastSearchParams } = useLastLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    if (searchQuery) {
      setSearchPerformed(true);
      setLastSearchParams(searchParams.toString());
      fetchMovieSearch(searchQuery)
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
