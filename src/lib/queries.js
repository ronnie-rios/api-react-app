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
//$id = the symbol used to indicate that its a variable, choose any name
//ID  ! means no null
export const SINGLE_MOVIE_QUERY = gql`
  query GetMovieById($id: ID!) {
    film(id: $id) {
      title
      director
      releaseDate
      episodeID
      edited
      producers
      characterConnection {
        characters {
          name
        }
      }
      
    }
  }
`;
