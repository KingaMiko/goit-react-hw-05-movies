import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { fetchMovies } from 'Api/fetchMovies';
import { Searchbar } from 'components/Searchbar/Searchbar';
import {
  NoMovies,
  HomeItem,
  TrendingImg,
  TrendingLi,
  TrendingList,
  TrendingName,
} from 'components/HomeTrendingList/HomeTrendingList.styled';

function MovieSearchItem({ movie, location }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!movie.poster_path) {
      setLoading(false);
    }
  }, [movie]);

  return (
    <TrendingLi key={movie.id}>
      <HomeItem to={`${movie.id}`} state={{ from: location }}>
        {loading && <Loader />}
        {movie.poster_path ? (
          <TrendingImg
            width="200px"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            onLoad={handleImageLoad}
            style={{ display: loading ? 'none' : 'block' }}
          />
        ) : (
          <TrendingImg
            width="200px"
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            alt={movie.title}
          />
        )}
        <TrendingName>{movie.original_title}</TrendingName>
        <p>User Scrore: {Math.round(movie.vote_average * 10)}%</p>
      </HomeItem>
    </TrendingLi>
  );
}

function Movies() {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchPerformed, setSearchPerformed] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';
    if (searchQuery !== '') {
      setSearchPerformed(true);
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
      fetchMovies(url)
        .then(results => {
          setMovies(results);
        })
        .catch(err => console.error('error:' + err));
    }
  }, [searchParams]);

  return (
    <>
      <Searchbar setSearchParams={setSearchParams} />
      {movies && movies.results.length > 0 ? (
        <TrendingList>
          {movies.results.map(result => {
            return (
              <MovieSearchItem
                key={result.id}
                movie={result}
                location={location}
              />
            );
          })}
        </TrendingList>
      ) : (
        searchPerformed && <NoMovies>No movies found</NoMovies>
      )}
    </>
  );
}

export default Movies;
