export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Author = {
   __typename?: 'Author';
  name: Scalars['String'];
};

export type Book = {
   __typename?: 'Book';
  title: Scalars['String'];
  author: Author;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Library = {
   __typename?: 'Library';
  branch: Scalars['String'];
  books?: Maybe<Array<Book>>;
};

export type Query = {
   __typename?: 'Query';
  libraries?: Maybe<Array<Maybe<Library>>>;
};

