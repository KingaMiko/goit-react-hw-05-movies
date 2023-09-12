import React, { useEffect, useState } from 'react';
import { HomeDiv, HomeTitle } from './Home.styled';
import { HomeTrendingList } from 'components/HomeTrendingList/HomeTrendingList';
import { fetchMovies } from 'Api/fetchMovies';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results } = await fetchMovies(url);
        setMovies(results);
      } catch (err) {
        setError('Something went wrong.');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <HomeDiv>
      <HomeTitle>Trending today</HomeTitle>
      <HomeTrendingList movies={movies} />
    </HomeDiv>
  );
}

export default Home;
