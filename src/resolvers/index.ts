import { postResolver } from "./post.resolver";

const resolvers = {
  Query: {
    posts: postResolver,
  },
};

export default resolvers;
