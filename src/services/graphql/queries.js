// src/graphql/queries.js
export const GET_CHARACTERS = `
 query {
    characters(page: 1) {
    info {
      count
      pages
      next
      prev
    }
    results {
       id
        name
        status
        species
        type
        gender
        image
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
  }
`;
// src/graphql/queries.js
export const GET_CHARACTER_BY_NAME = `
 query {
  characters(filter: { name: "" }) {
    info {
      count
    }
    results {
      id
        name
        status
        species
        type
        gender
        image
        
    }
  }
}
`;

