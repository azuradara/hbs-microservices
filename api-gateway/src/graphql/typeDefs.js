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

  type Query {
    students: [Student!]!
  }
`;

export default typeDefs;
