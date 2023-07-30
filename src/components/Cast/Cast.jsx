import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'Api/fetchMovies';
import { CastList, ListItem } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState('');

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

  return (
    credits && (
      <CastList>
        {credits.cast.map(credit => {
          const imgUrl = credit.profile_path
            ? `https://image.tmdb.org/t/p/original/${credit.profile_path}`
            : placeholder; // Wybieramy obrazek z API lub placeholder
          return (
            <ListItem key={credit.id}>
              <img
                width="100px"
                height="150px"
                src={imgUrl}
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </ListItem>
          );
        })}
      </CastList>
    )
  );
}
export default Cast;
