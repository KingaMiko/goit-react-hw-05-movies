export async function fetchMovies(url) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTc2OWMyZGE2MzlmZjllODU0YTM4N2VkMWI3Yjg5MSIsInN1YiI6IjY0ODJmNjFhZTM3NWMwMDBjNTI2Y2E2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-e0pQI1sxEGJ4JEJ59Sreac2JKX6PA1NDAayyIXVyBg ',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
}
