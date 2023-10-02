export const getFilms = `
query AllFilms {
    allFilms {
      films {
        title
        releaseDate
      }
    }
  }
`;
