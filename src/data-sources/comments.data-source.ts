import { RESTDataSource } from "apollo-datasource-rest";
import { Comment } from "../schemas";

export default class CommentDataSource extends RESTDataSource {
    public constructor() {
        super();
        this.baseURL = "http://localhost:3000/comments";
    }

    public async getComment(id: string | number): Promise<Comment> {
        const result = await this.get(`/${id}`);
        return this.resolveComment(result);
    }

    public async getComments(): Promise<Comment[]> {
        const list = await this.get("/");
        return list.map((x: Comment) => this.resolveComment(x));
    }

    private async resolveComment(comment: any): Promise<Comment> {
        return {
            ...comment,
            post: this.context.dataSources.postDataSource.getPost(comment.postId)
        };
    }
}
