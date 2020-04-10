import { postResolver, onePostResolver } from "./post.resolver";
import { commentResolver, oneCommentResolver } from "./comment.resolver";

const resolvers: any = {
  Query: {
    posts: postResolver,
    comments: commentResolver,
    comment: oneCommentResolver,
  },
  Post: onePostResolver,
};

export default resolvers;
