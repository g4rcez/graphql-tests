import PostDataSource from "./posts.data-source";

const dataSource = () => ({
  postDataSource: new PostDataSource(),
});

export type DataSource = ReturnType<typeof dataSource>;
export default dataSource;
