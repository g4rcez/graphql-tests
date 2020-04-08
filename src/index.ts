import { ApolloServer, gql } from "apollo-server";
import dataSources from "./data-sources";
import { importAllSchemas } from "./helpers/import-all-schemas";
import resolvers from "./resolvers";

importAllSchemas("./schemas/**/*.+(gql|graphql)").then((typeDefs) => {
  const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    dataSources,
  });
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
