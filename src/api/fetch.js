import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
export const PLACEHOLDER_URL =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
const headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTc2OWMyZGE2MzlmZjllODU0YTM4N2VkMWI3Yjg5MSIsInN1YiI6IjY0ODJmNjFhZTM3NWMwMDBjNTI2Y2E2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e0pQI1sxEGJ4JEJ59Sreac2JKX6PA1NDAayyIXVyBg ',
};

export const fetchMovies = async url => {
  try {
    const response = await axios.get(url, { headers });

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};

export const fetchMovieCredits = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  return await fetchMovies(url);
};

export const fetchMovieReviews = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`;
  return await fetchMovies(url);
};

export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day?language=en-US`;
  return await fetchMovies(url);
};

export const fetchMovieDetails = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
  return await fetchMovies(url);
};

export const fetchMovieSearch = async query => {
  try {
    const url = `${BASE_URL}/search/movie`;
    const response = await axios.get(url, {
      headers,
      params: {
        query: query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error!! status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
};
