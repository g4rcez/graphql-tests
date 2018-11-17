import { ApolloServer, Request } from 'apollo-server';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolvers';
import Country from './datasources/Country';
import President from './datasources/President';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (request: Request) => {
    return { request: { authorized: false } };
  },
  tracing: true,
  dataSources: () => ({
    country: new Country(),
    president: new President(),
  }),
  cacheControl: true,
});

server.listen().then(({ url }) => {
  console.log(`Running at: ${url}`);
});
