import { Resolver, ID } from "../../types";

export const queryPosts: Resolver<any, any, any> = async (_, __, context) => {
    const ok = await context.dataSources.postDataSource.getPosts();
    return ok;
};

export const queryOnePost: Resolver<any, { id: ID; count: number }, any> = async (_, { id }, context) => {
    console.log({ _ });
    const ok = await context.dataSources.postDataSource.getPost(id);
    return ok;
};
