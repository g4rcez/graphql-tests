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

export enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}

export type Comment = {
    __typename?: "Comment";
    id?: Maybe<Scalars["Int"]>;
    body?: Maybe<Scalars["String"]>;
    post?: Maybe<Post>;
};

export type Ms = {
    __typename?: "MS";
    ms?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["ID"]>;
};

export type Mutation = {
    __typename?: "Mutation";
    ping: Ms;
};

export type MutationPingArgs = {
    ms?: Maybe<Scalars["Int"]>;
};

export type Post = {
    __typename?: "Post";
    id?: Maybe<Scalars["Int"]>;
    title?: Maybe<Scalars["String"]>;
    author?: Maybe<Scalars["String"]>;
};

export type Profile = {
    __typename?: "Profile";
    name?: Maybe<Scalars["String"]>;
};

export type Query = {
    __typename?: "Query";
    posts?: Maybe<Array<Maybe<Post>>>;
    comments?: Maybe<Array<Maybe<Comment>>>;
    comment?: Maybe<Comment>;
};

export type QueryCommentArgs = {
    id?: Maybe<Scalars["ID"]>;
};
