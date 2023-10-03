export const getCharacterDetails = `
query Person($personId: ID) {
  person(id: $personId) {
    name
    height
    gender
    species {
      name
      classification
      language
      homeworld {
        name
        population
      }
    }
  }
}
`;
