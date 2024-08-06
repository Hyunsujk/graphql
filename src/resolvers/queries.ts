import { QueryResolvers } from "src/__generated__/resolvers-types";

const queries: QueryResolvers = {
  games: async (_, _args, { dataSources }) => dataSources.getGames(),
  game: async (_, args, { dataSources }) => dataSources.getGame(args.id),
  reviews: async (_, _args, { dataSources }) => dataSources.getReviews(),
  review: async (_, args, { dataSources }) => dataSources.getReivew(args.id),
  authors: async (_, _args, { dataSources }) => dataSources.getAuthors(),
  author: async (_, args, { dataSources }) => dataSources.getAuthor(args.id),
};
//Game: {
//  reviews: (parent, _, { dataSources }) => dataSources.getGame,
//},

export default queries;
