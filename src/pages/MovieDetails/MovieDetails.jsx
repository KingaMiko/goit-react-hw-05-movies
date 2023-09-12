import React, { useEffect, useState, Suspense } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useLastLocation } from 'components/Context/LastLocationContext';

import {
  MovieDetailsPage,
  MovieDetailsDiv,
  MovieDetailsGenres,
  MovieDetailsLink,
  GoBackLink,
  StyledUl,
} from './MovieDetails.styled';
import { fetchMovies } from 'Api/fetchMovies';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const { lastLocation, lastSearchParams } = useLastLocation();

  const goBack = () => {
    let navigateTo = lastLocation ?? '/';
    if (lastSearchParams) {
      navigateTo = `${navigateTo}?${lastSearchParams}`;
    }
    setShouldNavigate(navigateTo);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchMovies(url);
        setMovie(results);
      } catch (err) {
        setError('Something went wrong.');
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);
  if (shouldNavigate) {
    return <Navigate to={shouldNavigate} replace />;
  }
  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    movie && (
      <MovieDetailsPage>
        <GoBackLink onClick={goBack}>&larr; Go back</GoBackLink>
        <MovieDetailsDiv>
          {loading && <Loader />}
          <img
            width="220px"
            height="300px"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }
            alt={movie.title}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? 'none' : 'block' }}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <MovieDetailsGenres>
              {movie.genres.map(genr => {
                return <p key={genr.id}>{genr.name}</p>;
              })}
            </MovieDetailsGenres>
          </div>
        </MovieDetailsDiv>
        <StyledUl>
          <li>
            <MovieDetailsLink to="cast">Cast</MovieDetailsLink>
          </li>
          <li>
            <MovieDetailsLink to="reviews">Reviews</MovieDetailsLink>
          </li>
        </StyledUl>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsPage>
    )
  );
}

export default MovieDetails;
