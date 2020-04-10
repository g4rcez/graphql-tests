import { Resolver } from "../types";

export const commentResolver: Resolver<any, any, any> = async (
  _,
  __,
  context
) => {
  const ok = await context.dataSources.commentDataSource.getComments();
  return ok;
};

export const oneCommentResolver: Resolver<any, any, any> = async (
  _,
  { id },
  context
) => {
  const ok = await context.dataSources.commentDataSource.getComment(id);
  return ok;
};
