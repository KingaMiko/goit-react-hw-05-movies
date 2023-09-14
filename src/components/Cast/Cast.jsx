import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieCredits,
  IMAGE_BASE_URL,
  PLACEHOLDER_URL,
} from 'api/fetchMovies';
import { CastList, ListItem } from './Cast.styled';
import { createTmdbImageUrl } from 'helpers/createTmdbImageUrl';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => {
        setCredits(data);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  if (credits === null) {
    return <p>Loading...</p>;
  }

  return credits.cast.length > 0 ? (
    <CastList>
      {credits.cast.map(credit => {
        const imgUrl = createTmdbImageUrl(
          credit.profile_path,
          IMAGE_BASE_URL,
          PLACEHOLDER_URL
        );
        return (
          <ListItem key={credit.id}>
            <img width="100px" height="150px" src={imgUrl} alt={credit.name} />
            <h3>{credit.name}</h3>
            <p>{credit.character}</p>
          </ListItem>
        );
      })}
    </CastList>
  ) : (
    <p>No cast found.</p>
  );
}
export default Cast;
