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

  type Mutation {
    createUser(email: String!, password: String!): User!
  }

  type Query {
    students: [Student!]!
  }
`;

export default typeDefs;
