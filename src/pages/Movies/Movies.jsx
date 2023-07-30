import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesItem, MoviesTitle } from './Movies.styled';
import { fetchMovies } from 'Api/fetchMovies';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState('');

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    fetchMovies(url)
      .then(results => {
        setMovies(results);
      })
      .catch(err => console.error('error:' + err));
  }, [searchParams]);

  return (
    <>
      <Searchbar setSearchParams={setSearchParams} />
      {movies && (
        <ul>
          {movies.results.map(result => {
            return (
              <MoviesTitle key={result.id}>
                <MoviesItem to={`${result.id}`}>
                  <p>{result.original_title}</p>
                </MoviesItem>
              </MoviesTitle>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default Movies;
