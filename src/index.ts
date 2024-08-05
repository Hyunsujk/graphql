import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db/index.js";

import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games: () => db.games,
    game: (_: unknown, args: { id: string }) =>
      db.games.find((game) => game.id === args.id),
    reviews: () => db.reviews,
    review: (_: unknown, args: { id: string }) =>
      db.reviews.find((review) => review.id === args.id),
    authors: () => db.authors,
    author: (_: unknown, args: { id: string }) =>
      db.authors.find((author) => author.id === args.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
