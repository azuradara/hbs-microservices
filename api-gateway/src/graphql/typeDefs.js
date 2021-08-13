import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Student {
    id: ID!
    fullName: String!
    cin: String!
    birthDate: Date!
    registrationDate: Date!
    branch: String!
    modules: [Module!]!
  }

  type Professor {
    id: ID!
    fullname: String!
    cin: String!
    matricule: String!
    registrationDate: Date!
    modules: [Module!]!
  }

  type Module {
    id: ID!
    professorId: ID!
    moduleName: String!
    coefficient: Float!
  }

  type Junction {
    id: ID!
    studentId: ID!
    moduleId: ID!
  }

  type User {
    id: ID!
    email: String!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Mutation {
    # USERS
    createUser(email: String!, password: String!): User!

    createUserSession(email: String!, password: String!): UserSession!

    deleteUserSession(sessionId: ID!): Boolean!

    # STUDENTS
    createStudent(
      fullName: String!
      cin: String!
      birthDate: Date!
      registrationDate: Date!
      branch: String!
    ): Student!

    updateStudent(
      fullName: String
      cin: String
      birthDate: Date
      registrationDate: Date
      branch: String
    ): Student!

    deleteStudent(studentId: ID!): Boolean!

    # PROFESSORS
    createProfessor(
      fullname: String!
      cin: String!
      matricule: String!
      registrationDate: Date!
    ): Professor!

    updateProfessor(
      fullname: String
      cin: String
      matricule: String
      registrationDate: Date
    ): Professor!

    deleteProfessor(professorId: ID!): Boolean!

    # MODULES
    createModule(
      moduleName: String!
      coefficient: Float!
      professorId: ID
    ): Module!

    updateModule(
      moduleName: String
      coefficient: Float
      professorId: ID
    ): Module!

    deleteModule(moduleId: ID!): Boolean!

    # JUNCTIONS
    createJunction(moduleId: ID!, studentId: ID!): Junction!

    deleteJunction(moduleId: ID!, studentId: ID!): Boolean!
  }

  type Query {
    students: [Student!]!
    professors: [Professor!]!
    modules: [Module!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
