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
import { fetchMovieDetails, IMAGE_BASE_URL, PLACEHOLDER_URL } from 'api/fetch';
import { createTmdbImageUrl } from 'helpers/createTmdbImageUrl';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    fetchMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Something went wrong.');
        setLoading(false);
      });
  }, [movieId]);

  if (shouldNavigate) {
    return <Navigate to={shouldNavigate} replace />;
  }
  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  const imgUrl = createTmdbImageUrl(
    movie.poster_path,
    IMAGE_BASE_URL,
    PLACEHOLDER_URL
  );

  return (
    movie && (
      <MovieDetailsPage>
        <GoBackLink onClick={goBack}>&larr; Go back</GoBackLink>
        <MovieDetailsDiv>
          <img width="220px" height="300px" src={imgUrl} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <MovieDetailsGenres>
              {movie.genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
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
