import gql from 'graphql-tag';

export const CREATE_USER_SESSION = gql`
  mutation ($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        email
        id
      }
    }
  }
`;

export const DELETE_USER_SESSION = gql`
  mutation ($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

/** PROFESSORS */
export const CREATE_PROFESSOR = gql`
  mutation ($fullName: String!, $matricule: String!, $registrationDate: Date!) {
    id
    fullName
    matricule
    registrationDate
  }
`;

export const UPDATE_PROFESSOR = gql`
  mutation (
    $professorId: ID!
    $fullName: String!
    $matricule: String!
    $registrationDate: Date!
  ) {
    updateProfessor(
      professorId: $professorId
      fullName: $fullName
      matricule: $matricule
      registrationDate: $registrationDate
    ) {
      id
      fullName
      matricule
      registrationDate
    }
  }
`;

export const DELETE_PROFESSOR = gql`
  mutation ($professorId: ID!) {
    null
  }
`;
