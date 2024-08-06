import { readFileSync } from "fs";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { DataSource } from "./db/index.js";
import resolvers from "./resolvers/index.js";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

export interface Context {
  dataSources: DataSource;
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: new DataSource(),
    };
  },
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
