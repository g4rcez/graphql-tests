import { Resolver } from "../../types";

export const queryComments: Resolver<any, any, any> = async (_, __, context) => {
    const ok = await context.dataSources.commentDataSource.getComments();
    return ok;
};

export const queryOneComment: Resolver<any, { id: string | number }, any> = async (_, { id }, context) => {
    const ok = await context.dataSources.commentDataSource.getComment(id);
    return ok;
};
