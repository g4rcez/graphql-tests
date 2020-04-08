import { RESTDataSource } from "apollo-datasource-rest";

export default class PostDataSource extends RESTDataSource {
  public constructor() {
    super();
    this.baseURL = "http://localhost:3000/posts";
  }

  public async getPost(id: string | number) {
    return this.get(`/${id}`);
  }

  public async getPosts() {
    return this.get("/");
  }
}
