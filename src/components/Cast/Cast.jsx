import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'Api/fetchMovies';
import { CastList, ListItem } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    fetchMovies(url)
      .then(results => {
        setCredits(results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  const placeholder =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  if (credits === null) {
    return <p>Loading...</p>;
  }

  return credits.cast.length > 0 ? (
    <CastList>
      {credits.cast.map(credit => {
        const imgUrl = credit.profile_path
          ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
          : placeholder;
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
