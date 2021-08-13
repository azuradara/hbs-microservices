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
  }

  type Query {
    students: [Student!]!
    userSession(me: Boolean!): UserSession
  }
`;

export default typeDefs;
