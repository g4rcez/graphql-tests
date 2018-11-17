import { ApolloServer, Request } from 'apollo-server';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolvers';
import dataSources from './datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (request: Request) => {
    return { request: { authorized: false } };
  },
  tracing: true,
  dataSources: () => dataSources,
  cacheControl: true,
});

server.listen().then(({ url }) => {
  console.log(`Running at: ${url}`);
});
