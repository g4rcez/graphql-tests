import { Resolver } from "../types";

export const postResolver: Resolver<any, any, any> = async (_, __, context) => {
  const ok = await context.dataSources.postDataSource.getPosts();
  console.log(ok);
  return ok;
};
