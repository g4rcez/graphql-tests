import { RESTDataSource } from "apollo-datasource-rest";

export default class CommentDataSource extends RESTDataSource {
  public constructor() {
    super();
    this.baseURL = "http://localhost:3000/comments";
  }

  public async getComment(id: string | number) {
    const result = await this.get(`/${id}`);
    return this.resolveComment(result);
  }

  public async getComments() {
    const list = await this.get("/");
    return list.map((x: any) => this.resolveComment(x));
  }

  private async resolveComment(comment: any) {
    return {
      ...comment,
      post: this.context.dataSources.postDataSource.getPost(comment.postId),
    };
  }
}
