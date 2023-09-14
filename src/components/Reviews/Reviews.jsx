import { fetchMovieReviews } from './api/fetchMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [allReviews, setAllReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        setAllReviews(data);
      })
      .catch(err => {
        console.error('error:', err);
        setError('Something went wrong. Please try again later.');
      });
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (allReviews === null) {
    return <p>Loading...</p>;
  }

  return allReviews.results && allReviews.results.length > 0 ? (
    <ul>
      {allReviews.results.map(result => (
        <li key={result.id}>
          <h3>{result.author}</h3>
          <p>{result.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews found.</p>
  );
}

export default Reviews;
