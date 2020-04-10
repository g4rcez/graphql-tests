import PostDataSource from "./posts.data-source";
import CommentDataSource from "./comments.data-source";

const dataSource = () => ({
  postDataSource: new PostDataSource(),
  commentDataSource: new CommentDataSource(),
});

export type DataSource = ReturnType<typeof dataSource>;
export default dataSource;
