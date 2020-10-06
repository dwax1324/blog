webpackHotUpdate_N_E("pages/_app",{

/***/ "./generated/graphql.tsx":
/*!*******************************!*\
  !*** ./generated/graphql.tsx ***!
  \*******************************/
/*! exports provided: RegularDetailsFragmentDoc, AddTagPostDocument, useAddTagPostMutation, CreatePostDocument, useCreatePostMutation, CreateTagDocument, useCreateTagMutation, DeletePostDocument, useDeletePostMutation, DeleteTagDocument, useDeleteTagMutation, DeleteTagPostDocument, useDeleteTagPostMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, UpdatePostDocument, useUpdatePostMutation, MeDocument, useMeQuery, useMeLazyQuery, PostDocument, usePostQuery, usePostLazyQuery, PostsDocument, usePostsQuery, usePostsLazyQuery, TagDocument, useTagQuery, useTagLazyQuery, TagsDocument, useTagsQuery, useTagsLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularDetailsFragmentDoc", function() { return RegularDetailsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTagPostDocument", function() { return AddTagPostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddTagPostMutation", function() { return useAddTagPostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostDocument", function() { return CreatePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePostMutation", function() { return useCreatePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTagDocument", function() { return CreateTagDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateTagMutation", function() { return useCreateTagMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostDocument", function() { return DeletePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePostMutation", function() { return useDeletePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTagDocument", function() { return DeleteTagDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteTagMutation", function() { return useDeleteTagMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTagPostDocument", function() { return DeleteTagPostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteTagPostMutation", function() { return useDeleteTagPostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostDocument", function() { return UpdatePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePostMutation", function() { return useUpdatePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeLazyQuery", function() { return useMeLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDocument", function() { return PostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostQuery", function() { return usePostQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostLazyQuery", function() { return usePostLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsDocument", function() { return PostsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostsQuery", function() { return usePostsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostsLazyQuery", function() { return usePostsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDocument", function() { return TagDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTagQuery", function() { return useTagQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTagLazyQuery", function() { return useTagLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsDocument", function() { return TagsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTagsQuery", function() { return useTagsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTagsLazyQuery", function() { return useTagsLazyQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$(),
    _s10 = $RefreshSig$(),
    _s11 = $RefreshSig$(),
    _s12 = $RefreshSig$(),
    _s13 = $RefreshSig$(),
    _s14 = $RefreshSig$(),
    _s15 = $RefreshSig$(),
    _s16 = $RefreshSig$(),
    _s17 = $RefreshSig$(),
    _s18 = $RefreshSig$(),
    _s19 = $RefreshSig$();

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Tags {\n  tags {\n    id\n    text\n    postsLength\n    posts {\n      id\n      title\n      description\n      createdAt\n      updatedAt\n    }\n  }\n}\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Tag($id: Int!) {\n  tag(id: $id) {\n    postsLength\n    id\n    text\n    posts {\n      id\n      title\n      description\n      updatedAt\n      createdAt\n      tags {\n        id\n        text\n      }\n      thumbnail\n    }\n  }\n}\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Posts {\n  posts {\n    ...RegularDetails\n    tags {\n      id\n      text\n    }\n  }\n}\n    ", ""]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Post($id: Int!) {\n  post(id: $id) {\n    ...RegularDetails\n    tags {\n      id\n      text\n    }\n  }\n}\n    ", ""]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Me {\n  me\n}\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation UpdatePost($id: Int!, $input: postInput!) {\n  updatePost(id: $id, input: $input) {\n    ...RegularDetails\n  }\n}\n    ", ""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation Logout {\n  logout\n}\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation Login($id: String!, $password: String!) {\n  login(id: $id, password: $password)\n}\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation DeleteTagPost($postId: Int!, $tagId: Int!) {\n  deleteTagPost(postId: $postId, tagId: $tagId)\n}\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation DeleteTag($tagId: Int!) {\n  deleteTag(tagId: $tagId)\n}\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation DeletePost($postId: Int!) {\n  deletePost(postId: $postId)\n}\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation CreateTag($text: String!) {\n  createTag(text: $text) {\n    id\n    text\n    posts {\n      id\n      title\n      description\n      updatedAt\n      createdAt\n    }\n  }\n}\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation CreatePost($input: postInput!) {\n  createPost(input: $input) {\n    ...RegularDetails\n  }\n}\n    ", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation AddTagPost($postId: Int!, $tagId: Int!) {\n  addTagPost(postId: $postId, tagId: $tagId)\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    fragment RegularDetails on Post {\n  id\n  title\n  description\n  createdAt\n  updatedAt\n  thumbnail\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var RegularDetailsFragmentDoc = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var AddTagPostDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());

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
function useAddTagPostMutation(baseOptions) {
  _s();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](AddTagPostDocument, baseOptions);
}

_s(useAddTagPostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var CreatePostDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3(), RegularDetailsFragmentDoc);

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
function useCreatePostMutation(baseOptions) {
  _s2();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreatePostDocument, baseOptions);
}

_s2(useCreatePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var CreateTagDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4());

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
function useCreateTagMutation(baseOptions) {
  _s3();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreateTagDocument, baseOptions);
}

_s3(useCreateTagMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var DeletePostDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5());

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
function useDeletePostMutation(baseOptions) {
  _s4();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](DeletePostDocument, baseOptions);
}

_s4(useDeletePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var DeleteTagDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6());

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
function useDeleteTagMutation(baseOptions) {
  _s5();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](DeleteTagDocument, baseOptions);
}

_s5(useDeleteTagMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var DeleteTagPostDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject7());

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
function useDeleteTagPostMutation(baseOptions) {
  _s6();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](DeleteTagPostDocument, baseOptions);
}

_s6(useDeleteTagPostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var LoginDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject8());

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
function useLoginMutation(baseOptions) {
  _s7();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument, baseOptions);
}

_s7(useLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var LogoutDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject9());

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
function useLogoutMutation(baseOptions) {
  _s8();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LogoutDocument, baseOptions);
}

_s8(useLogoutMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var UpdatePostDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject10(), RegularDetailsFragmentDoc);

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
function useUpdatePostMutation(baseOptions) {
  _s9();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"](UpdatePostDocument, baseOptions);
}

_s9(useUpdatePostMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"]];
});

var MeDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject11());
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

function useMeQuery(baseOptions) {
  _s10();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](MeDocument, baseOptions);
}

_s10(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

function useMeLazyQuery(baseOptions) {
  _s11();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](MeDocument, baseOptions);
}

_s11(useMeLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]];
});

var PostDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject12(), RegularDetailsFragmentDoc);
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

function usePostQuery(baseOptions) {
  _s12();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](PostDocument, baseOptions);
}

_s12(usePostQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

function usePostLazyQuery(baseOptions) {
  _s13();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](PostDocument, baseOptions);
}

_s13(usePostLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]];
});

var PostsDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject13(), RegularDetailsFragmentDoc);
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

function usePostsQuery(baseOptions) {
  _s14();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](PostsDocument, baseOptions);
}

_s14(usePostsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

function usePostsLazyQuery(baseOptions) {
  _s15();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](PostsDocument, baseOptions);
}

_s15(usePostsLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]];
});

var TagDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject14());
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

function useTagQuery(baseOptions) {
  _s16();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](TagDocument, baseOptions);
}

_s16(useTagQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

function useTagLazyQuery(baseOptions) {
  _s17();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](TagDocument, baseOptions);
}

_s17(useTagLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]];
});

var TagsDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject15());
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

function useTagsQuery(baseOptions) {
  _s18();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](TagsDocument, baseOptions);
}

_s18(useTagsQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

function useTagsLazyQuery(baseOptions) {
  _s19();

  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](TagsDocument, baseOptions);
}

_s19(useTagsLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2VuZXJhdGVkL2dyYXBocWwudHN4Il0sIm5hbWVzIjpbIlJlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2MiLCJncWwiLCJBZGRUYWdQb3N0RG9jdW1lbnQiLCJ1c2VBZGRUYWdQb3N0TXV0YXRpb24iLCJiYXNlT3B0aW9ucyIsIkFwb2xsbyIsIkNyZWF0ZVBvc3REb2N1bWVudCIsInVzZUNyZWF0ZVBvc3RNdXRhdGlvbiIsIkNyZWF0ZVRhZ0RvY3VtZW50IiwidXNlQ3JlYXRlVGFnTXV0YXRpb24iLCJEZWxldGVQb3N0RG9jdW1lbnQiLCJ1c2VEZWxldGVQb3N0TXV0YXRpb24iLCJEZWxldGVUYWdEb2N1bWVudCIsInVzZURlbGV0ZVRhZ011dGF0aW9uIiwiRGVsZXRlVGFnUG9zdERvY3VtZW50IiwidXNlRGVsZXRlVGFnUG9zdE11dGF0aW9uIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luTXV0YXRpb24iLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiVXBkYXRlUG9zdERvY3VtZW50IiwidXNlVXBkYXRlUG9zdE11dGF0aW9uIiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJ1c2VNZUxhenlRdWVyeSIsIlBvc3REb2N1bWVudCIsInVzZVBvc3RRdWVyeSIsInVzZVBvc3RMYXp5UXVlcnkiLCJQb3N0c0RvY3VtZW50IiwidXNlUG9zdHNRdWVyeSIsInVzZVBvc3RzTGF6eVF1ZXJ5IiwiVGFnRG9jdW1lbnQiLCJ1c2VUYWdRdWVyeSIsInVzZVRhZ0xhenlRdWVyeSIsIlRhZ3NEb2N1bWVudCIsInVzZVRhZ3NRdWVyeSIsInVzZVRhZ3NMYXp5UXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ekIsMkQ7OztBQUtWLElBQU0wQixXQUFXLEdBQUc5QiwwREFBSCxxQkFBakI7QUFzQlA7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVMrQixXQUFULENBQXFCNUIsV0FBckIsRUFBeUY7QUFBQTs7QUFDeEYsU0FBT0MsdURBQUEsQ0FBNkMwQixXQUE3QyxFQUEwRDNCLFdBQTFELENBQVA7QUFDRDs7S0FGUzRCLFc7VUFDRDNCLHVEOzs7QUFFUixTQUFTNEIsZUFBVCxDQUF5QjdCLFdBQXpCLEVBQWlHO0FBQUE7O0FBQzlGLFNBQU9DLDJEQUFBLENBQWlEMEIsV0FBakQsRUFBOEQzQixXQUE5RCxDQUFQO0FBQ0Q7O0tBRk82QixlO1VBQ0M1QiwyRDs7O0FBS1YsSUFBTTZCLFlBQVksR0FBR2pDLDBEQUFILHFCQUFsQjtBQWlCUDs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLFNBQVNrQyxZQUFULENBQXNCL0IsV0FBdEIsRUFBNEY7QUFBQTs7QUFDM0YsU0FBT0MsdURBQUEsQ0FBK0M2QixZQUEvQyxFQUE2RDlCLFdBQTdELENBQVA7QUFDRDs7S0FGUytCLFk7VUFDRDlCLHVEOzs7QUFFUixTQUFTK0IsZ0JBQVQsQ0FBMEJoQyxXQUExQixFQUFvRztBQUFBOztBQUNqRyxTQUFPQywyREFBQSxDQUFtRDZCLFlBQW5ELEVBQWlFOUIsV0FBakUsQ0FBUDtBQUNEOztLQUZPZ0MsZ0I7VUFDQy9CLDJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjU2ZWJjMzcxNDNkMWVhM2NhODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCAqIGFzIEFwb2xsbyBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xuICAvKiogVGhlIGphdmFzY3JpcHQgYERhdGVgIGFzIHN0cmluZy4gVHlwZSByZXByZXNlbnRzIGRhdGUgYW5kIHRpbWUgYXMgdGhlIElTTyBEYXRlIHN0cmluZy4gKi9cbiAgRGF0ZVRpbWU6IGFueTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHRhZ3M6IEFycmF5PFRhZz47XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgdGFnPzogTWF5YmU8VGFnPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVRhZ0FyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3QgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUG9zdCc7XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRlc2NyaXB0aW9uOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGh1bWJuYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGFncz86IE1heWJlPEFycmF5PFRhZz4+O1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snRGF0ZVRpbWUnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFRhZyA9IHtcbiAgX190eXBlbmFtZT86ICdUYWcnO1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0cz86IE1heWJlPEFycmF5PFBvc3Q+PjtcbiAgcG9zdHNMZW5ndGg/OiBNYXliZTxTY2FsYXJzWydJbnQnXT47XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgbG9naW46IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHVwZGF0ZVBvc3Q6IFBvc3Q7XG4gIGNyZWF0ZVBvc3Q6IFBvc3Q7XG4gIGNyZWF0ZVRhZzogVGFnO1xuICBhZGRUYWdQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGRlbGV0ZVRhZ1Bvc3Q6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgZGVsZXRlUG9zdDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBkZWxldGVUYWc6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVBvc3RBcmdzID0ge1xuICBpbnB1dDogUG9zdElucHV0O1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlVGFnQXJncyA9IHtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQWRkVGFnUG9zdEFyZ3MgPSB7XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG4gIHRhZ0lkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVUYWdQb3N0QXJncyA9IHtcbiAgcG9zdElkOiBTY2FsYXJzWydJbnQnXTtcbiAgdGFnSWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVBvc3RBcmdzID0ge1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVRhZ0FyZ3MgPSB7XG4gIHRhZ0lkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3RJbnB1dCA9IHtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRodW1ibmFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyRGV0YWlsc0ZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICd0aXRsZScgfCAnZGVzY3JpcHRpb24nIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICd0aHVtYm5haWwnPlxuKTtcblxuZXhwb3J0IHR5cGUgQWRkVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0YWdJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBBZGRUYWdQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdhZGRUYWdQb3N0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFBvc3RJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVQb3N0OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFJlZ3VsYXJEZXRhaWxzRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVUYWdNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdGV4dDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVUYWdNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVUYWc6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVGFnJyB9XG4gICAgJiBQaWNrPFRhZywgJ2lkJyB8ICd0ZXh0Jz5cbiAgICAmIHsgcG9zdHM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICAgJiBQaWNrPFBvc3QsICdpZCcgfCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICd1cGRhdGVkQXQnIHwgJ2NyZWF0ZWRBdCc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdkZWxldGVQb3N0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ011dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0YWdJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVUYWdNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2RlbGV0ZVRhZyc+XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG4gIHRhZ0lkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2RlbGV0ZVRhZ1Bvc3QnPlxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9naW4nPlxuKTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ291dCc+XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgaW5wdXQ6IFBvc3RJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVQb3N0OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIFJlZ3VsYXJEZXRhaWxzRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgUGljazxRdWVyeSwgJ21lJz5cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHBvc3Q/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIHsgdGFncz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdUYWcnIH1cbiAgICAgICYgUGljazxUYWcsICdpZCcgfCAndGV4dCc+XG4gICAgKT4+IH1cbiAgICAmIFJlZ3VsYXJEZXRhaWxzRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcG9zdHM6IEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICYgeyB0YWdzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1RhZycgfVxuICAgICAgJiBQaWNrPFRhZywgJ2lkJyB8ICd0ZXh0Jz5cbiAgICApPj4gfVxuICAgICYgUmVndWxhckRldGFpbHNGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBUYWdRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVGFnUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgdGFnPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdUYWcnIH1cbiAgICAmIFBpY2s8VGFnLCAncG9zdHNMZW5ndGgnIHwgJ2lkJyB8ICd0ZXh0Jz5cbiAgICAmIHsgcG9zdHM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICAgJiBQaWNrPFBvc3QsICdpZCcgfCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICd1cGRhdGVkQXQnIHwgJ2NyZWF0ZWRBdCcgfCAndGh1bWJuYWlsJz5cbiAgICAgICYgeyB0YWdzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgICB7IF9fdHlwZW5hbWU/OiAnVGFnJyB9XG4gICAgICAgICYgUGljazxUYWcsICdpZCcgfCAndGV4dCc+XG4gICAgICApPj4gfVxuICAgICk+PiB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFRhZ3NRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIFRhZ3NRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyB0YWdzOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1RhZycgfVxuICAgICYgUGljazxUYWcsICdpZCcgfCAndGV4dCcgfCAncG9zdHNMZW5ndGgnPlxuICAgICYgeyBwb3N0cz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgICAmIFBpY2s8UG9zdCwgJ2lkJyB8ICd0aXRsZScgfCAnZGVzY3JpcHRpb24nIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0Jz5cbiAgICApPj4gfVxuICApPiB9XG4pO1xuXG5leHBvcnQgY29uc3QgUmVndWxhckRldGFpbHNGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyRGV0YWlscyBvbiBQb3N0IHtcbiAgaWRcbiAgdGl0bGVcbiAgZGVzY3JpcHRpb25cbiAgY3JlYXRlZEF0XG4gIHVwZGF0ZWRBdFxuICB0aHVtYm5haWxcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IEFkZFRhZ1Bvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBBZGRUYWdQb3N0KCRwb3N0SWQ6IEludCEsICR0YWdJZDogSW50ISkge1xuICBhZGRUYWdQb3N0KHBvc3RJZDogJHBvc3RJZCwgdGFnSWQ6ICR0YWdJZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgQWRkVGFnUG9zdE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxBZGRUYWdQb3N0TXV0YXRpb24sIEFkZFRhZ1Bvc3RNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VBZGRUYWdQb3N0TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQWRkVGFnUG9zdE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUFkZFRhZ1Bvc3RNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2FkZFRhZ1Bvc3RNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUFkZFRhZ1Bvc3RNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBwb3N0SWQ6IC8vIHZhbHVlIGZvciAncG9zdElkJ1xuICogICAgICB0YWdJZDogLy8gdmFsdWUgZm9yICd0YWdJZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkVGFnUG9zdE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8QWRkVGFnUG9zdE11dGF0aW9uLCBBZGRUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248QWRkVGFnUG9zdE11dGF0aW9uLCBBZGRUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXM+KEFkZFRhZ1Bvc3REb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQWRkVGFnUG9zdE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFkZFRhZ1Bvc3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBZGRUYWdQb3N0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8QWRkVGFnUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEFkZFRhZ1Bvc3RNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxBZGRUYWdQb3N0TXV0YXRpb24sIEFkZFRhZ1Bvc3RNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVBvc3QoJGlucHV0OiBwb3N0SW5wdXQhKSB7XG4gIGNyZWF0ZVBvc3QoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJEZXRhaWxzXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlUG9zdE11dGF0aW9uLCBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ3JlYXRlUG9zdE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVBvc3RNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDcmVhdGVQb3N0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjcmVhdGVQb3N0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVQb3N0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaW5wdXQ6IC8vIHZhbHVlIGZvciAnaW5wdXQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVBvc3RNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENyZWF0ZVBvc3RNdXRhdGlvbiwgQ3JlYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVBvc3RNdXRhdGlvbiwgQ3JlYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVQb3N0RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDcmVhdGVQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlUG9zdE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVBvc3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlUG9zdE11dGF0aW9uLCBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRhZ0RvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVRhZygkdGV4dDogU3RyaW5nISkge1xuICBjcmVhdGVUYWcodGV4dDogJHRleHQpIHtcbiAgICBpZFxuICAgIHRleHRcbiAgICBwb3N0cyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB1cGRhdGVkQXRcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBDcmVhdGVUYWdNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlVGFnTXV0YXRpb24sIENyZWF0ZVRhZ011dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVRhZ011dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVRhZ011dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVRhZ011dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlVGFnTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVUYWdNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0ZXh0OiAvLyB2YWx1ZSBmb3IgJ3RleHQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVRhZ011dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlVGFnTXV0YXRpb24sIENyZWF0ZVRhZ011dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVRhZ011dGF0aW9uLCBDcmVhdGVUYWdNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlVGFnRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVRhZ011dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVRhZ011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVRhZ011dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVRhZ011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVRhZ011dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVRhZ011dGF0aW9uLCBDcmVhdGVUYWdNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRGVsZXRlUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIERlbGV0ZVBvc3QoJHBvc3RJZDogSW50ISkge1xuICBkZWxldGVQb3N0KHBvc3RJZDogJHBvc3RJZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxEZWxldGVQb3N0TXV0YXRpb24sIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VEZWxldGVQb3N0TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlRGVsZXRlUG9zdE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZURlbGV0ZVBvc3RNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RlbGV0ZVBvc3RNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZURlbGV0ZVBvc3RNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBwb3N0SWQ6IC8vIHZhbHVlIGZvciAncG9zdElkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWxldGVQb3N0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxEZWxldGVQb3N0TXV0YXRpb24sIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxEZWxldGVQb3N0TXV0YXRpb24sIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlUG9zdERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRGVsZXRlUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVBvc3RNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxEZWxldGVQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPERlbGV0ZVBvc3RNdXRhdGlvbiwgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBEZWxldGVUYWdEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVUYWcoJHRhZ0lkOiBJbnQhKSB7XG4gIGRlbGV0ZVRhZyh0YWdJZDogJHRhZ0lkKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBEZWxldGVUYWdNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248RGVsZXRlVGFnTXV0YXRpb24sIERlbGV0ZVRhZ011dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZURlbGV0ZVRhZ011dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZURlbGV0ZVRhZ011dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZURlbGV0ZVRhZ011dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGVsZXRlVGFnTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VEZWxldGVUYWdNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0YWdJZDogLy8gdmFsdWUgZm9yICd0YWdJZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVsZXRlVGFnTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxEZWxldGVUYWdNdXRhdGlvbiwgRGVsZXRlVGFnTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248RGVsZXRlVGFnTXV0YXRpb24sIERlbGV0ZVRhZ011dGF0aW9uVmFyaWFibGVzPihEZWxldGVUYWdEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgRGVsZXRlVGFnTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRGVsZXRlVGFnTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlVGFnTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8RGVsZXRlVGFnTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlVGFnTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8RGVsZXRlVGFnTXV0YXRpb24sIERlbGV0ZVRhZ011dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBEZWxldGVUYWdQb3N0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRGVsZXRlVGFnUG9zdCgkcG9zdElkOiBJbnQhLCAkdGFnSWQ6IEludCEpIHtcbiAgZGVsZXRlVGFnUG9zdChwb3N0SWQ6ICRwb3N0SWQsIHRhZ0lkOiAkdGFnSWQpXG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248RGVsZXRlVGFnUG9zdE11dGF0aW9uLCBEZWxldGVUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlRGVsZXRlVGFnUG9zdE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZURlbGV0ZVRhZ1Bvc3RNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VEZWxldGVUYWdQb3N0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtkZWxldGVUYWdQb3N0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VEZWxldGVUYWdQb3N0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgcG9zdElkOiAvLyB2YWx1ZSBmb3IgJ3Bvc3RJZCdcbiAqICAgICAgdGFnSWQ6IC8vIHZhbHVlIGZvciAndGFnSWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVRhZ1Bvc3RNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbiwgRGVsZXRlVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbiwgRGVsZXRlVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzPihEZWxldGVUYWdQb3N0RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VEZWxldGVUYWdQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlVGFnUG9zdE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBEZWxldGVUYWdQb3N0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8RGVsZXRlVGFnUG9zdE11dGF0aW9uLCBEZWxldGVUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IExvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9naW4oJGlkOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgbG9naW4oaWQ6ICRpZCwgcGFzc3dvcmQ6ICRwYXNzd29yZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dpbk11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUxvZ2luTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTG9naW5NdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ2luTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMb2dpbk11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICAgICBwYXNzd29yZDogLy8gdmFsdWUgZm9yICdwYXNzd29yZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2dpbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUxvZ291dE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUxvZ291dE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ291dE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbbG9nb3V0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMb2dvdXRNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KExvZ291dERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2dvdXRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxMb2dvdXRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVQb3N0KCRpZDogSW50ISwgJGlucHV0OiBwb3N0SW5wdXQhKSB7XG4gIHVwZGF0ZVBvc3QoaWQ6ICRpZCwgaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJEZXRhaWxzXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248VXBkYXRlUG9zdE11dGF0aW9uLCBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlUG9zdE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVVwZGF0ZVBvc3RNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VVcGRhdGVQb3N0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVQb3N0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VVcGRhdGVQb3N0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVQb3N0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxVcGRhdGVQb3N0TXV0YXRpb24sIFVwZGF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVcGRhdGVQb3N0TXV0YXRpb24sIFVwZGF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oVXBkYXRlUG9zdERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVXBkYXRlUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlUG9zdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZVBvc3RNdXRhdGlvbiwgVXBkYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWVcbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlTWVRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgTWVRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNZVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFBvc3QoJGlkOiBJbnQhKSB7XG4gIHBvc3QoaWQ6ICRpZCkge1xuICAgIC4uLlJlZ3VsYXJEZXRhaWxzXG4gICAgdGFncyB7XG4gICAgICBpZFxuICAgICAgdGV4dFxuICAgIH1cbiAgfVxufVxuICAgICR7UmVndWxhckRldGFpbHNGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlUG9zdFF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVBvc3RRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVBvc3RRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VQb3N0UXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3RRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFBvc3RRdWVyeSwgUG9zdFF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFBvc3RRdWVyeSwgUG9zdFF1ZXJ5VmFyaWFibGVzPihQb3N0RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0TGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFBvc3RRdWVyeSwgUG9zdFF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFBvc3RRdWVyeSwgUG9zdFF1ZXJ5VmFyaWFibGVzPihQb3N0RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVBvc3RRdWVyeT47XG5leHBvcnQgdHlwZSBQb3N0TGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVBvc3RMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUG9zdFF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFBvc3RRdWVyeSwgUG9zdFF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBQb3N0c0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFBvc3RzIHtcbiAgcG9zdHMge1xuICAgIC4uLlJlZ3VsYXJEZXRhaWxzXG4gICAgdGFncyB7XG4gICAgICBpZFxuICAgICAgdGV4dFxuICAgIH1cbiAgfVxufVxuICAgICR7UmVndWxhckRldGFpbHNGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlUG9zdHNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VQb3N0c1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUG9zdHNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VQb3N0c1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3RzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxQb3N0c1F1ZXJ5LCBQb3N0c1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFBvc3RzUXVlcnksIFBvc3RzUXVlcnlWYXJpYWJsZXM+KFBvc3RzRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxQb3N0c1F1ZXJ5LCBQb3N0c1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFBvc3RzUXVlcnksIFBvc3RzUXVlcnlWYXJpYWJsZXM+KFBvc3RzRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgUG9zdHNRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQb3N0c1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIFBvc3RzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVBvc3RzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8UG9zdHNRdWVyeSwgUG9zdHNRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVGFnRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgVGFnKCRpZDogSW50ISkge1xuICB0YWcoaWQ6ICRpZCkge1xuICAgIHBvc3RzTGVuZ3RoXG4gICAgaWRcbiAgICB0ZXh0XG4gICAgcG9zdHMge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgdXBkYXRlZEF0XG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHRhZ3Mge1xuICAgICAgICBpZFxuICAgICAgICB0ZXh0XG4gICAgICB9XG4gICAgICB0aHVtYm5haWxcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlVGFnUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlVGFnUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VUYWdRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VUYWdRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFnUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxUYWdRdWVyeSwgVGFnUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8VGFnUXVlcnksIFRhZ1F1ZXJ5VmFyaWFibGVzPihUYWdEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhZ0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxUYWdRdWVyeSwgVGFnUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8VGFnUXVlcnksIFRhZ1F1ZXJ5VmFyaWFibGVzPihUYWdEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBUYWdRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VUYWdRdWVyeT47XG5leHBvcnQgdHlwZSBUYWdMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVGFnTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFRhZ1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFRhZ1F1ZXJ5LCBUYWdRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVGFnc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFRhZ3Mge1xuICB0YWdzIHtcbiAgICBpZFxuICAgIHRleHRcbiAgICBwb3N0c0xlbmd0aFxuICAgIHBvc3RzIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZVRhZ3NRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VUYWdzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VUYWdzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlVGFnc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhZ3NRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFRhZ3NRdWVyeSwgVGFnc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFRhZ3NRdWVyeSwgVGFnc1F1ZXJ5VmFyaWFibGVzPihUYWdzRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWdzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFRhZ3NRdWVyeSwgVGFnc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFRhZ3NRdWVyeSwgVGFnc1F1ZXJ5VmFyaWFibGVzPihUYWdzRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgVGFnc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVRhZ3NRdWVyeT47XG5leHBvcnQgdHlwZSBUYWdzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVRhZ3NMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgVGFnc1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFRhZ3NRdWVyeSwgVGFnc1F1ZXJ5VmFyaWFibGVzPjsiXSwic291cmNlUm9vdCI6IiJ9