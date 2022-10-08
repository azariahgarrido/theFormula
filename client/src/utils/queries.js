import gql from 'graphql-tag';


export const GET_ME = gql`
query Query {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }`;