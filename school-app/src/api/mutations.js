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
    createProfessor(
      fullName: $fullName
      matricule: $matricule
      registrationDate: $registrationDate
    ) {
      id
      fullName
      matricule
      registrationDate
      modules {
        id
        moduleName
      }
    }
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
      modules {
        id
        moduleName
      }
    }
  }
`;

export const DELETE_PROFESSOR = gql`
  mutation ($professorId: ID!) {
    deleteProfessor(professorId: $professorId)
  }
`;

/** STUDENTS */
export const CREATE_STUDENT = gql`
  mutation (
    $fullName: String!
    $cin: String!
    $branch: String!
    $birthDate: Date!
    $registrationDate: Date!
  ) {
    createStudent(
      fullName: $fullName
      cin: $cin
      branch: $branch
      birthDate: $birthDate
      registrationDate: $registrationDate
    ) {
      id
      fullName
      cin
      branch
      birthDate
      registrationDate
      modules {
        id
        moduleName
      }
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation (
    $studentId: ID!
    $fullName: String!
    $cin: String!
    $branch: String!
    $birthDate: Date!
    $registrationDate: Date!
  ) {
    updateStudent(
      studentId: $studentId
      fullName: $fullName
      cin: $cin
      branch: $branch
      birthDate: $birthDate
      registrationDate: $registrationDate
    ) {
      id
      fullName
      cin
      branch
      birthDate
      registrationDate
      modules {
        id
        moduleName
      }
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation ($studentId: ID!) {
    deleteStudent(studentId: $studentId)
  }
`;

/** MODULES */
export const CREATE_MODULE = gql`
  mutation ($moduleName: String!, $professorId: ID, $coefficient: Float!) {
    createModule(
      moduleName: $moduleName
      professorId: $professorId
      coefficient: $coefficient
    ) {
      id
      moduleName
      coefficient
      professorId
    }
  }
`;

export const UPDATE_MODULE = gql`
  mutation (
    $moduleId: ID!
    $moduleName: String!
    $professorId: ID
    $coefficient: Float!
  ) {
    updateModule(
      moduleId: $moduleId
      moduleName: $moduleName
      professorId: $professorId
      coefficient: $coefficient
    ) {
      id
      moduleName
      coefficient
      professorId
    }
  }
`;

export const DELETE_MODULE = gql`
  mutation ($moduleId: ID!) {
    deleteModule(moduleId: $moduleId)
  }
`;
