export const createTmdbImageUrl = (path, IMAGE_BASE_URL, PLACEHOLDER_URL) => {
  return path ? `${IMAGE_BASE_URL}${path}` : `${PLACEHOLDER_URL}`;
};
