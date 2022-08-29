export const imageResolver = (source) => {
  const path =
    "http://localhost:1337" +
    (source?.data ? source.data?.attributes.url : source?.attributes.url);
  const width = source?.data?.attributes?.width;
  const height = source?.data?.attributes?.height;
  const alt = source?.data?.attributes?.alternativeText;
  return { path, width, height, alt };
};
