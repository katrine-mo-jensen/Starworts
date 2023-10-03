export const getFilms = `
query AllFilms {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;
