import gql from 'graphql-tag';

export const GET_USER_SESSION = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        email
      }
    }
  }
`;

/** STUDENTS */
export const GET_STUDENTS = gql`
  {
    students {
      id
      cin
      fullName
      branch
      birthDate
      registrationDate
      modules {
        id
        moduleName
        coefficient
      }
    }
  }
`;

/** PROFESSORS */
export const GET_PROFESSORS = gql`
  {
    professors {
      id
      fullName
      matricule
      registrationDate
      modules {
        id
        moduleName
        coefficient
      }
    }
  }
`;
