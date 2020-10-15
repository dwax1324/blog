import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me: Scalars['Boolean'];
  posts: Array<Post>;
  findPostsInTitle: Array<Post>;
  tags: Array<Tag>;
  post?: Maybe<Post>;
  tag?: Maybe<Tag>;
};


export type QueryFindPostsInTitleArgs = {
  title: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  thumbnail: Scalars['String'];
  tags?: Maybe<Array<Tag>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  text: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  postsLength?: Maybe<Scalars['Int']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  updatePost: Post;
  createPost: Post;
  createTag: Tag;
  addTagPost: Scalars['Boolean'];
  deleteTagPost: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deleteTag: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  input: PostInput;
  id: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationCreateTagArgs = {
  text: Scalars['String'];
};


export type MutationAddTagPostArgs = {
  postId: Scalars['Int'];
  tagId: Scalars['Int'];
};


export type MutationDeleteTagPostArgs = {
  postId: Scalars['Int'];
  tagId: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['Int'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['Int'];
};

export type PostInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type RegularDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'thumbnail'>
);

export type AddTagPostMutationVariables = Exact<{
  postId: Scalars['Int'];
  tagId: Scalars['Int'];
}>;


export type AddTagPostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addTagPost'>
);

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & RegularDetailsFragment
  ) }
);

export type CreateTagMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type CreateTagMutation = (
  { __typename?: 'Mutation' }
  & { createTag: (
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'text'>
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'description' | 'updatedAt' | 'createdAt'>
    )>> }
  ) }
);

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePost'>
);

export type DeleteTagMutationVariables = Exact<{
  tagId: Scalars['Int'];
}>;


export type DeleteTagMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTag'>
);

export type DeleteTagPostMutationVariables = Exact<{
  postId: Scalars['Int'];
  tagId: Scalars['Int'];
}>;


export type DeleteTagPostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTagPost'>
);

export type LoginMutationVariables = Exact<{
  id: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: PostInput;
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & { updatePost: (
    { __typename?: 'Post' }
    & RegularDetailsFragment
  ) }
);

export type FindPostsInTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type FindPostsInTitleQuery = (
  { __typename?: 'Query' }
  & { findPostsInTitle: Array<(
    { __typename?: 'Post' }
    & { tags?: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'text'>
    )>> }
    & RegularDetailsFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'me'>
);

export type PostQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & { tags?: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'text'>
    )>> }
    & RegularDetailsFragment
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & { tags?: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'text'>
    )>> }
    & RegularDetailsFragment
  )> }
);

export type TagQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TagQuery = (
  { __typename?: 'Query' }
  & { tag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'postsLength' | 'id' | 'text'>
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'description' | 'updatedAt' | 'createdAt' | 'thumbnail'>
      & { tags?: Maybe<Array<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'text'>
      )>> }
    )>> }
  )> }
);

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = (
  { __typename?: 'Query' }
  & { tags: Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'text' | 'postsLength'>
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'description' | 'createdAt' | 'updatedAt'>
    )>> }
  )> }
);

export const RegularDetailsFragmentDoc = gql`
    fragment RegularDetails on Post {
  id
  title
  description
  createdAt
  updatedAt
  thumbnail
}
    `;
export const AddTagPostDocument = gql`
    mutation AddTagPost($postId: Int!, $tagId: Int!) {
  addTagPost(postId: $postId, tagId: $tagId)
}
    `;
export type AddTagPostMutationFn = Apollo.MutationFunction<AddTagPostMutation, AddTagPostMutationVariables>;

/**
 * __useAddTagPostMutation__
 *
 * To run a mutation, you first call `useAddTagPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTagPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTagPostMutation, { data, loading, error }] = useAddTagPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useAddTagPostMutation(baseOptions?: Apollo.MutationHookOptions<AddTagPostMutation, AddTagPostMutationVariables>) {
        return Apollo.useMutation<AddTagPostMutation, AddTagPostMutationVariables>(AddTagPostDocument, baseOptions);
      }
export type AddTagPostMutationHookResult = ReturnType<typeof useAddTagPostMutation>;
export type AddTagPostMutationResult = Apollo.MutationResult<AddTagPostMutation>;
export type AddTagPostMutationOptions = Apollo.BaseMutationOptions<AddTagPostMutation, AddTagPostMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: postInput!) {
  createPost(input: $input) {
    ...RegularDetails
  }
}
    ${RegularDetailsFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($text: String!) {
  createTag(text: $text) {
    id
    text
    posts {
      id
      title
      description
      updatedAt
      createdAt
    }
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, baseOptions);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($postId: Int!) {
  deletePost(postId: $postId)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, baseOptions);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($tagId: Int!) {
  deleteTag(tagId: $tagId)
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, baseOptions);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const DeleteTagPostDocument = gql`
    mutation DeleteTagPost($postId: Int!, $tagId: Int!) {
  deleteTagPost(postId: $postId, tagId: $tagId)
}
    `;
export type DeleteTagPostMutationFn = Apollo.MutationFunction<DeleteTagPostMutation, DeleteTagPostMutationVariables>;

/**
 * __useDeleteTagPostMutation__
 *
 * To run a mutation, you first call `useDeleteTagPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagPostMutation, { data, loading, error }] = useDeleteTagPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useDeleteTagPostMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagPostMutation, DeleteTagPostMutationVariables>) {
        return Apollo.useMutation<DeleteTagPostMutation, DeleteTagPostMutationVariables>(DeleteTagPostDocument, baseOptions);
      }
export type DeleteTagPostMutationHookResult = ReturnType<typeof useDeleteTagPostMutation>;
export type DeleteTagPostMutationResult = Apollo.MutationResult<DeleteTagPostMutation>;
export type DeleteTagPostMutationOptions = Apollo.BaseMutationOptions<DeleteTagPostMutation, DeleteTagPostMutationVariables>;
export const LoginDocument = gql`
    mutation Login($id: String!, $password: String!) {
  login(id: $id, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: Int!, $input: postInput!) {
  updatePost(id: $id, input: $input) {
    ...RegularDetails
  }
}
    ${RegularDetailsFragmentDoc}`;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, baseOptions);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const FindPostsInTitleDocument = gql`
    query FindPostsInTitle($title: String!) {
  findPostsInTitle(title: $title) {
    ...RegularDetails
    tags {
      id
      text
    }
  }
}
    ${RegularDetailsFragmentDoc}`;

/**
 * __useFindPostsInTitleQuery__
 *
 * To run a query within a React component, call `useFindPostsInTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPostsInTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPostsInTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useFindPostsInTitleQuery(baseOptions?: Apollo.QueryHookOptions<FindPostsInTitleQuery, FindPostsInTitleQueryVariables>) {
        return Apollo.useQuery<FindPostsInTitleQuery, FindPostsInTitleQueryVariables>(FindPostsInTitleDocument, baseOptions);
      }
export function useFindPostsInTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPostsInTitleQuery, FindPostsInTitleQueryVariables>) {
          return Apollo.useLazyQuery<FindPostsInTitleQuery, FindPostsInTitleQueryVariables>(FindPostsInTitleDocument, baseOptions);
        }
export type FindPostsInTitleQueryHookResult = ReturnType<typeof useFindPostsInTitleQuery>;
export type FindPostsInTitleLazyQueryHookResult = ReturnType<typeof useFindPostsInTitleLazyQuery>;
export type FindPostsInTitleQueryResult = Apollo.QueryResult<FindPostsInTitleQuery, FindPostsInTitleQueryVariables>;
export const MeDocument = gql`
    query Me {
  me
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    ...RegularDetails
    tags {
      id
      text
    }
  }
}
    ${RegularDetailsFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  posts {
    ...RegularDetails
    tags {
      id
      text
    }
  }
}
    ${RegularDetailsFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const TagDocument = gql`
    query Tag($id: Int!) {
  tag(id: $id) {
    postsLength
    id
    text
    posts {
      id
      title
      description
      updatedAt
      createdAt
      tags {
        id
        text
      }
      thumbnail
    }
  }
}
    `;

/**
 * __useTagQuery__
 *
 * To run a query within a React component, call `useTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTagQuery(baseOptions?: Apollo.QueryHookOptions<TagQuery, TagQueryVariables>) {
        return Apollo.useQuery<TagQuery, TagQueryVariables>(TagDocument, baseOptions);
      }
export function useTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagQuery, TagQueryVariables>) {
          return Apollo.useLazyQuery<TagQuery, TagQueryVariables>(TagDocument, baseOptions);
        }
export type TagQueryHookResult = ReturnType<typeof useTagQuery>;
export type TagLazyQueryHookResult = ReturnType<typeof useTagLazyQuery>;
export type TagQueryResult = Apollo.QueryResult<TagQuery, TagQueryVariables>;
export const TagsDocument = gql`
    query Tags {
  tags {
    id
    text
    postsLength
    posts {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;