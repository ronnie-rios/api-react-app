import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query GetMovies {
    allFilms {
      films {
        title
        director
        releaseDate
        created
        id
      }
    }
  }
`;
