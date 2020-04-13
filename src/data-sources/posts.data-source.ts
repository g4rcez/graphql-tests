import { RESTDataSource } from "apollo-datasource-rest";
import { Post } from "../schemas";

export default class PostDataSource extends RESTDataSource {
    public constructor() {
        super();
        this.baseURL = "http://localhost:3000/posts";
    }

    public async getPost(id: string | number): Promise<Post> {
        return this.get(`/${id}`);
    }

    public async getPosts(): Promise<Post[]> {
        return this.get("/");
    }
}
