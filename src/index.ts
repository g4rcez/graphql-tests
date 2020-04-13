import { ApolloServer, gql } from "apollo-server";
import dataSources from "./data-sources";
import { importAllSchemas } from "./helpers/import-all-schemas";
import resolvers from "./resolvers";
import { join } from "path";

const env = process.env.NODE_ENV ?? "production";
const path = join(process.cwd(), `.env.${env}`);
require("dotenv").config({ path });

const port = process.env.PORT ?? 4000;
const isDev = env === "development";

const schemas = join(process.cwd(), "schemas/**/*.+(gql|graphql)");

importAllSchemas(schemas).then((typeDefs) => {
    const server = new ApolloServer({
        typeDefs: gql(typeDefs),
        resolvers,
        introspection: isDev,
        playground: isDev,
        onHealthCheck: (req): Promise<unknown> =>
            new Promise((resolve, reject) => {
                if (req.accepted) {
                    resolve();
                } else {
                    reject();
                }
            }),

        dataSources
    });
    server.listen({ port }).then(({ url }: any) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});
