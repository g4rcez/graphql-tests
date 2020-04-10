import { Resolver } from "../types";

export const postResolver: Resolver<any, any, any> = async (_, __, context) => {
  const ok = await context.dataSources.postDataSource.getPosts();
  return ok;
};

export const onePostResolver: Resolver<any, any, any> = async (
  _,
  { id },
  context
) => {
  const ok = await context.dataSources.postDataSource.getPost(id);
  return ok;
};
