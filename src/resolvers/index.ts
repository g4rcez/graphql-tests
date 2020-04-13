import { queryPosts, queryOnePost } from "./query/post.query";
import { queryComments, queryOneComment } from "./query/comment.query";
import { mutationPing } from "./mutation/ping.mutation";

const resolvers: any = {
    Query: {
        posts: queryPosts,
        comments: queryComments,
        comment: queryOneComment
    },
    Post: queryOnePost,
    Mutation: {
        ping: mutationPing
    }
};

export default resolvers;
