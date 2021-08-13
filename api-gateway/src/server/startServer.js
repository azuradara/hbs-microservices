import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import getEnv from '#root/helpers/getEnv';

import formatGQLErrors from './formatGQLErrors';

const PORT = getEnv('PORT', 7000);

const apolloServer = new ApolloServer({
  context: (a) => a, // defines how gql resolver 3rd param works so that cookies work properly, idk how it works fully
  formatError: formatGQLErrors,
  resolvers,
  typeDefs,
});

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.listen(PORT, '0.0.0.0', () => {
  console.info(`API Gateway on ${PORT}`);
});
