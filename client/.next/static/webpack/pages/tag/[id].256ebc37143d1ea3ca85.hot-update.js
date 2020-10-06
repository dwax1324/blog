webpackHotUpdate_N_E("pages/tag/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2VuZXJhdGVkL2dyYXBocWwudHN4Il0sIm5hbWVzIjpbIlJlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2MiLCJncWwiLCJBZGRUYWdQb3N0RG9jdW1lbnQiLCJ1c2VBZGRUYWdQb3N0TXV0YXRpb24iLCJiYXNlT3B0aW9ucyIsIkFwb2xsbyIsIkNyZWF0ZVBvc3REb2N1bWVudCIsInVzZUNyZWF0ZVBvc3RNdXRhdGlvbiIsIkNyZWF0ZVRhZ0RvY3VtZW50IiwidXNlQ3JlYXRlVGFnTXV0YXRpb24iLCJEZWxldGVQb3N0RG9jdW1lbnQiLCJ1c2VEZWxldGVQb3N0TXV0YXRpb24iLCJEZWxldGVUYWdEb2N1bWVudCIsInVzZURlbGV0ZVRhZ011dGF0aW9uIiwiRGVsZXRlVGFnUG9zdERvY3VtZW50IiwidXNlRGVsZXRlVGFnUG9zdE11dGF0aW9uIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luTXV0YXRpb24iLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiVXBkYXRlUG9zdERvY3VtZW50IiwidXNlVXBkYXRlUG9zdE11dGF0aW9uIiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJ1c2VNZUxhenlRdWVyeSIsIlBvc3REb2N1bWVudCIsInVzZVBvc3RRdWVyeSIsInVzZVBvc3RMYXp5UXVlcnkiLCJQb3N0c0RvY3VtZW50IiwidXNlUG9zdHNRdWVyeSIsInVzZVBvc3RzTGF6eVF1ZXJ5IiwiVGFnRG9jdW1lbnQiLCJ1c2VUYWdRdWVyeSIsInVzZVRhZ0xhenlRdWVyeSIsIlRhZ3NEb2N1bWVudCIsInVzZVRhZ3NRdWVyeSIsInVzZVRhZ3NMYXp5UXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ekIsMkQ7OztBQUtWLElBQU0wQixXQUFXLEdBQUc5QiwwREFBSCxxQkFBakI7QUFzQlA7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLFNBQVMrQixXQUFULENBQXFCNUIsV0FBckIsRUFBeUY7QUFBQTs7QUFDeEYsU0FBT0MsdURBQUEsQ0FBNkMwQixXQUE3QyxFQUEwRDNCLFdBQTFELENBQVA7QUFDRDs7S0FGUzRCLFc7VUFDRDNCLHVEOzs7QUFFUixTQUFTNEIsZUFBVCxDQUF5QjdCLFdBQXpCLEVBQWlHO0FBQUE7O0FBQzlGLFNBQU9DLDJEQUFBLENBQWlEMEIsV0FBakQsRUFBOEQzQixXQUE5RCxDQUFQO0FBQ0Q7O0tBRk82QixlO1VBQ0M1QiwyRDs7O0FBS1YsSUFBTTZCLFlBQVksR0FBR2pDLDBEQUFILHFCQUFsQjtBQWlCUDs7Ozs7Ozs7Ozs7Ozs7OztBQWVPLFNBQVNrQyxZQUFULENBQXNCL0IsV0FBdEIsRUFBNEY7QUFBQTs7QUFDM0YsU0FBT0MsdURBQUEsQ0FBK0M2QixZQUEvQyxFQUE2RDlCLFdBQTdELENBQVA7QUFDRDs7S0FGUytCLFk7VUFDRDlCLHVEOzs7QUFFUixTQUFTK0IsZ0JBQVQsQ0FBMEJoQyxXQUExQixFQUFvRztBQUFBOztBQUNqRyxTQUFPQywyREFBQSxDQUFtRDZCLFlBQW5ELEVBQWlFOUIsV0FBakUsQ0FBUDtBQUNEOztLQUZPZ0MsZ0I7VUFDQy9CLDJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RhZy9baWRdLjI1NmViYzM3MTQzZDFlYTNjYTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbiAgLyoqIFRoZSBqYXZhc2NyaXB0IGBEYXRlYCBhcyBzdHJpbmcuIFR5cGUgcmVwcmVzZW50cyBkYXRlIGFuZCB0aW1lIGFzIHRoZSBJU08gRGF0ZSBzdHJpbmcuICovXG4gIERhdGVUaW1lOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIGhlbGxvOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgcG9zdHM6IEFycmF5PFBvc3Q+O1xuICB0YWdzOiBBcnJheTxUYWc+O1xuICBwb3N0PzogTWF5YmU8UG9zdD47XG4gIHRhZz86IE1heWJlPFRhZz47XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlUYWdBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snSUQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRodW1ibmFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRhZ3M/OiBNYXliZTxBcnJheTxUYWc+PjtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydEYXRlVGltZSddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ0RhdGVUaW1lJ107XG59O1xuXG5leHBvcnQgdHlwZSBUYWcgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVGFnJztcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcG9zdHM/OiBNYXliZTxBcnJheTxQb3N0Pj47XG4gIHBvc3RzTGVuZ3RoPzogTWF5YmU8U2NhbGFyc1snSW50J10+O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGxvZ2luOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xuICB1cGRhdGVQb3N0OiBQb3N0O1xuICBjcmVhdGVQb3N0OiBQb3N0O1xuICBjcmVhdGVUYWc6IFRhZztcbiAgYWRkVGFnUG9zdDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBkZWxldGVUYWdQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGRlbGV0ZVBvc3Q6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgZGVsZXRlVGFnOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVQb3N0QXJncyA9IHtcbiAgaW5wdXQ6IFBvc3RJbnB1dDtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVBvc3RBcmdzID0ge1xuICBpbnB1dDogUG9zdElucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVRhZ0FyZ3MgPSB7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFkZFRhZ1Bvc3RBcmdzID0ge1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0YWdJZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlVGFnUG9zdEFyZ3MgPSB7XG4gIHBvc3RJZDogU2NhbGFyc1snSW50J107XG4gIHRhZ0lkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgcG9zdElkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVUYWdBcmdzID0ge1xuICB0YWdJZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0SW5wdXQgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGVzY3JpcHRpb246IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aHVtYm5haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUmVndWxhckRldGFpbHNGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgJiBQaWNrPFBvc3QsICdpZCcgfCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAndGh1bWJuYWlsJz5cbik7XG5cbmV4cG9ydCB0eXBlIEFkZFRhZ1Bvc3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgcG9zdElkOiBTY2FsYXJzWydJbnQnXTtcbiAgdGFnSWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQWRkVGFnUG9zdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnYWRkVGFnUG9zdCc+XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlUG9zdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiBSZWd1bGFyRGV0YWlsc0ZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlVGFnTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlVGFnTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlVGFnOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1RhZycgfVxuICAgICYgUGljazxUYWcsICdpZCcgfCAndGV4dCc+XG4gICAgJiB7IHBvc3RzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAgICYgUGljazxQb3N0LCAnaWQnIHwgJ3RpdGxlJyB8ICdkZXNjcmlwdGlvbicgfCAndXBkYXRlZEF0JyB8ICdjcmVhdGVkQXQnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZGVsZXRlUG9zdCc+XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVUYWdNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdGFnSWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRGVsZXRlVGFnTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdkZWxldGVUYWcnPlxuKTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBwb3N0SWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0YWdJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVUYWdQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdkZWxldGVUYWdQb3N0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ2luJz5cbik7XG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdsb2dvdXQnPlxuKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIGlucHV0OiBQb3N0SW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgdXBkYXRlUG9zdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiBSZWd1bGFyRGV0YWlsc0ZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIFBpY2s8UXVlcnksICdtZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBQb3N0UXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFBvc3RRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBwb3N0PzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdQb3N0JyB9XG4gICAgJiB7IHRhZ3M/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVGFnJyB9XG4gICAgICAmIFBpY2s8VGFnLCAnaWQnIHwgJ3RleHQnPlxuICAgICk+PiB9XG4gICAgJiBSZWd1bGFyRGV0YWlsc0ZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBQb3N0c1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHBvc3RzOiBBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAmIHsgdGFncz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdUYWcnIH1cbiAgICAgICYgUGljazxUYWcsICdpZCcgfCAndGV4dCc+XG4gICAgKT4+IH1cbiAgICAmIFJlZ3VsYXJEZXRhaWxzRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgVGFnUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFRhZ1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHRhZz86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVGFnJyB9XG4gICAgJiBQaWNrPFRhZywgJ3Bvc3RzTGVuZ3RoJyB8ICdpZCcgfCAndGV4dCc+XG4gICAgJiB7IHBvc3RzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1Bvc3QnIH1cbiAgICAgICYgUGljazxQb3N0LCAnaWQnIHwgJ3RpdGxlJyB8ICdkZXNjcmlwdGlvbicgfCAndXBkYXRlZEF0JyB8ICdjcmVhdGVkQXQnIHwgJ3RodW1ibmFpbCc+XG4gICAgICAmIHsgdGFncz86IE1heWJlPEFycmF5PChcbiAgICAgICAgeyBfX3R5cGVuYW1lPzogJ1RhZycgfVxuICAgICAgICAmIFBpY2s8VGFnLCAnaWQnIHwgJ3RleHQnPlxuICAgICAgKT4+IH1cbiAgICApPj4gfVxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBUYWdzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBUYWdzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgdGFnczogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdUYWcnIH1cbiAgICAmIFBpY2s8VGFnLCAnaWQnIHwgJ3RleHQnIHwgJ3Bvc3RzTGVuZ3RoJz5cbiAgICAmIHsgcG9zdHM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUG9zdCcgfVxuICAgICAgJiBQaWNrPFBvc3QsICdpZCcgfCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCc+XG4gICAgKT4+IH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhckRldGFpbHMgb24gUG9zdCB7XG4gIGlkXG4gIHRpdGxlXG4gIGRlc2NyaXB0aW9uXG4gIGNyZWF0ZWRBdFxuICB1cGRhdGVkQXRcbiAgdGh1bWJuYWlsXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBBZGRUYWdQb3N0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWRkVGFnUG9zdCgkcG9zdElkOiBJbnQhLCAkdGFnSWQ6IEludCEpIHtcbiAgYWRkVGFnUG9zdChwb3N0SWQ6ICRwb3N0SWQsIHRhZ0lkOiAkdGFnSWQpXG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIEFkZFRhZ1Bvc3RNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248QWRkVGFnUG9zdE11dGF0aW9uLCBBZGRUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQWRkVGFnUG9zdE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUFkZFRhZ1Bvc3RNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VBZGRUYWdQb3N0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFthZGRUYWdQb3N0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VBZGRUYWdQb3N0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgcG9zdElkOiAvLyB2YWx1ZSBmb3IgJ3Bvc3RJZCdcbiAqICAgICAgdGFnSWQ6IC8vIHZhbHVlIGZvciAndGFnSWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkZFRhZ1Bvc3RNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPEFkZFRhZ1Bvc3RNdXRhdGlvbiwgQWRkVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPEFkZFRhZ1Bvc3RNdXRhdGlvbiwgQWRkVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzPihBZGRUYWdQb3N0RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEFkZFRhZ1Bvc3RNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBZGRUYWdQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQWRkVGFnUG9zdE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEFkZFRhZ1Bvc3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBZGRUYWdQb3N0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8QWRkVGFnUG9zdE11dGF0aW9uLCBBZGRUYWdQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVQb3N0KCRpbnB1dDogcG9zdElucHV0ISkge1xuICBjcmVhdGVQb3N0KGlucHV0OiAkaW5wdXQpIHtcbiAgICAuLi5SZWd1bGFyRGV0YWlsc1xuICB9XG59XG4gICAgJHtSZWd1bGFyRGV0YWlsc0ZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVBvc3RNdXRhdGlvbiwgQ3JlYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVBvc3RNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVQb3N0TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlUG9zdE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlUG9zdE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlUG9zdE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVQb3N0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVQb3N0TXV0YXRpb24sIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVQb3N0TXV0YXRpb24sIENyZWF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlUG9zdERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVQb3N0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVBvc3RNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlUG9zdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVBvc3RNdXRhdGlvbiwgQ3JlYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVUYWdEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVUYWcoJHRleHQ6IFN0cmluZyEpIHtcbiAgY3JlYXRlVGFnKHRleHQ6ICR0ZXh0KSB7XG4gICAgaWRcbiAgICB0ZXh0XG4gICAgcG9zdHMge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgdXBkYXRlZEF0XG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgQ3JlYXRlVGFnTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVRhZ011dGF0aW9uLCBDcmVhdGVUYWdNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVUYWdNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVUYWdNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDcmVhdGVUYWdNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVRhZ011dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlVGFnTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdGV4dDogLy8gdmFsdWUgZm9yICd0ZXh0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVUYWdNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENyZWF0ZVRhZ011dGF0aW9uLCBDcmVhdGVUYWdNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVUYWdNdXRhdGlvbiwgQ3JlYXRlVGFnTXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVRhZ0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVUYWdNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDcmVhdGVUYWdNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVUYWdNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVUYWdNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVUYWdNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVUYWdNdXRhdGlvbiwgQ3JlYXRlVGFnTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IERlbGV0ZVBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVQb3N0KCRwb3N0SWQ6IEludCEpIHtcbiAgZGVsZXRlUG9zdChwb3N0SWQ6ICRwb3N0SWQpXG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIERlbGV0ZVBvc3RNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248RGVsZXRlUG9zdE11dGF0aW9uLCBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlRGVsZXRlUG9zdE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZURlbGV0ZVBvc3RNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VEZWxldGVQb3N0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtkZWxldGVQb3N0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VEZWxldGVQb3N0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgcG9zdElkOiAvLyB2YWx1ZSBmb3IgJ3Bvc3RJZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVsZXRlUG9zdE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8RGVsZXRlUG9zdE11dGF0aW9uLCBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248RGVsZXRlUG9zdE11dGF0aW9uLCBEZWxldGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KERlbGV0ZVBvc3REb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgRGVsZXRlUG9zdE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURlbGV0ZVBvc3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBEZWxldGVQb3N0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8RGVsZXRlUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVBvc3RNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxEZWxldGVQb3N0TXV0YXRpb24sIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRGVsZXRlVGFnRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRGVsZXRlVGFnKCR0YWdJZDogSW50ISkge1xuICBkZWxldGVUYWcodGFnSWQ6ICR0YWdJZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgRGVsZXRlVGFnTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPERlbGV0ZVRhZ011dGF0aW9uLCBEZWxldGVUYWdNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VEZWxldGVUYWdNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VEZWxldGVUYWdNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VEZWxldGVUYWdNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RlbGV0ZVRhZ011dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlRGVsZXRlVGFnTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdGFnSWQ6IC8vIHZhbHVlIGZvciAndGFnSWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVRhZ011dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8RGVsZXRlVGFnTXV0YXRpb24sIERlbGV0ZVRhZ011dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPERlbGV0ZVRhZ011dGF0aW9uLCBEZWxldGVUYWdNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlVGFnRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ011dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURlbGV0ZVRhZ011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ011dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PERlbGV0ZVRhZ011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ011dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPERlbGV0ZVRhZ011dGF0aW9uLCBEZWxldGVUYWdNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRGVsZXRlVGFnUG9zdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIERlbGV0ZVRhZ1Bvc3QoJHBvc3RJZDogSW50ISwgJHRhZ0lkOiBJbnQhKSB7XG4gIGRlbGV0ZVRhZ1Bvc3QocG9zdElkOiAkcG9zdElkLCB0YWdJZDogJHRhZ0lkKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBEZWxldGVUYWdQb3N0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbiwgRGVsZXRlVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZURlbGV0ZVRhZ1Bvc3RNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VEZWxldGVUYWdQb3N0TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlRGVsZXRlVGFnUG9zdE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGVsZXRlVGFnUG9zdE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlRGVsZXRlVGFnUG9zdE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHBvc3RJZDogLy8gdmFsdWUgZm9yICdwb3N0SWQnXG4gKiAgICAgIHRhZ0lkOiAvLyB2YWx1ZSBmb3IgJ3RhZ0lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWxldGVUYWdQb3N0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxEZWxldGVUYWdQb3N0TXV0YXRpb24sIERlbGV0ZVRhZ1Bvc3RNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxEZWxldGVUYWdQb3N0TXV0YXRpb24sIERlbGV0ZVRhZ1Bvc3RNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlVGFnUG9zdERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBEZWxldGVUYWdQb3N0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRGVsZXRlVGFnUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVRhZ1Bvc3RNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxEZWxldGVUYWdQb3N0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlVGFnUG9zdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPERlbGV0ZVRhZ1Bvc3RNdXRhdGlvbiwgRGVsZXRlVGFnUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCRpZDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKGlkOiAkaWQsIHBhc3N3b3JkOiAkcGFzc3dvcmQpXG59XG4gICAgYDtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9naW5NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dpbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ2luTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dpbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9naW5NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgICAgcGFzc3dvcmQ6IC8vIHZhbHVlIGZvciAncGFzc3dvcmQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KExvZ2luRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PExvZ2luTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dvdXRNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dvdXRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VMb2dvdXRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ291dE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9nb3V0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBVcGRhdGVQb3N0RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gVXBkYXRlUG9zdCgkaWQ6IEludCEsICRpbnB1dDogcG9zdElucHV0ISkge1xuICB1cGRhdGVQb3N0KGlkOiAkaWQsIGlucHV0OiAkaW5wdXQpIHtcbiAgICAuLi5SZWd1bGFyRGV0YWlsc1xuICB9XG59XG4gICAgJHtSZWd1bGFyRGV0YWlsc0ZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFVwZGF0ZVBvc3RNdXRhdGlvbiwgVXBkYXRlUG9zdE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVwZGF0ZVBvc3RNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VVcGRhdGVQb3N0TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVXBkYXRlUG9zdE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdXBkYXRlUG9zdE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlVXBkYXRlUG9zdE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlUG9zdE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8VXBkYXRlUG9zdE11dGF0aW9uLCBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlUG9zdE11dGF0aW9uLCBVcGRhdGVQb3N0TXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVBvc3REb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgVXBkYXRlUG9zdE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVVwZGF0ZVBvc3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVQb3N0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8VXBkYXRlUG9zdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVBvc3RNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVcGRhdGVQb3N0TXV0YXRpb24sIFVwZGF0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lXG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZU1lUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWVRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZU1lUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTWVRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIE1lUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWVRdWVyeT47XG5leHBvcnQgdHlwZSBNZUxhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNZUxhenlRdWVyeT47XG5leHBvcnQgdHlwZSBNZVF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFBvc3REb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBQb3N0KCRpZDogSW50ISkge1xuICBwb3N0KGlkOiAkaWQpIHtcbiAgICAuLi5SZWd1bGFyRGV0YWlsc1xuICAgIHRhZ3Mge1xuICAgICAgaWRcbiAgICAgIHRleHRcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZVBvc3RRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VQb3N0UXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VQb3N0UXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUG9zdFF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxQb3N0UXVlcnksIFBvc3RRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxQb3N0UXVlcnksIFBvc3RRdWVyeVZhcmlhYmxlcz4oUG9zdERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlUG9zdExhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxQb3N0UXVlcnksIFBvc3RRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxQb3N0UXVlcnksIFBvc3RRdWVyeVZhcmlhYmxlcz4oUG9zdERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFBvc3RRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQb3N0UXVlcnk+O1xuZXhwb3J0IHR5cGUgUG9zdExhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQb3N0TGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFBvc3RRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxQb3N0UXVlcnksIFBvc3RRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUG9zdHNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBQb3N0cyB7XG4gIHBvc3RzIHtcbiAgICAuLi5SZWd1bGFyRGV0YWlsc1xuICAgIHRhZ3Mge1xuICAgICAgaWRcbiAgICAgIHRleHRcbiAgICB9XG4gIH1cbn1cbiAgICAke1JlZ3VsYXJEZXRhaWxzRnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZVBvc3RzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlUG9zdHNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVBvc3RzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUG9zdHNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0c1F1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8UG9zdHNRdWVyeSwgUG9zdHNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxQb3N0c1F1ZXJ5LCBQb3N0c1F1ZXJ5VmFyaWFibGVzPihQb3N0c0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlUG9zdHNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8UG9zdHNRdWVyeSwgUG9zdHNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxQb3N0c1F1ZXJ5LCBQb3N0c1F1ZXJ5VmFyaWFibGVzPihQb3N0c0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFBvc3RzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUG9zdHNRdWVyeT47XG5leHBvcnQgdHlwZSBQb3N0c0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQb3N0c0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBQb3N0c1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFBvc3RzUXVlcnksIFBvc3RzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFRhZ0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFRhZygkaWQ6IEludCEpIHtcbiAgdGFnKGlkOiAkaWQpIHtcbiAgICBwb3N0c0xlbmd0aFxuICAgIGlkXG4gICAgdGV4dFxuICAgIHBvc3RzIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHVwZGF0ZWRBdFxuICAgICAgY3JlYXRlZEF0XG4gICAgICB0YWdzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgICAgdGh1bWJuYWlsXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZVRhZ1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVRhZ1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVGFnUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlVGFnUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhZ1F1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8VGFnUXVlcnksIFRhZ1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFRhZ1F1ZXJ5LCBUYWdRdWVyeVZhcmlhYmxlcz4oVGFnRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWdMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8VGFnUXVlcnksIFRhZ1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFRhZ1F1ZXJ5LCBUYWdRdWVyeVZhcmlhYmxlcz4oVGFnRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgVGFnUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVGFnUXVlcnk+O1xuZXhwb3J0IHR5cGUgVGFnTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVRhZ0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBUYWdRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxUYWdRdWVyeSwgVGFnUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFRhZ3NEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBUYWdzIHtcbiAgdGFncyB7XG4gICAgaWRcbiAgICB0ZXh0XG4gICAgcG9zdHNMZW5ndGhcbiAgICBwb3N0cyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBjcmVhdGVkQXRcbiAgICAgIHVwZGF0ZWRBdFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbi8qKlxuICogX191c2VUYWdzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlVGFnc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVGFnc1F1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVRhZ3NRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWdzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxUYWdzUXVlcnksIFRhZ3NRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxUYWdzUXVlcnksIFRhZ3NRdWVyeVZhcmlhYmxlcz4oVGFnc0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlVGFnc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxUYWdzUXVlcnksIFRhZ3NRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxUYWdzUXVlcnksIFRhZ3NRdWVyeVZhcmlhYmxlcz4oVGFnc0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFRhZ3NRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VUYWdzUXVlcnk+O1xuZXhwb3J0IHR5cGUgVGFnc0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VUYWdzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFRhZ3NRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxUYWdzUXVlcnksIFRhZ3NRdWVyeVZhcmlhYmxlcz47Il0sInNvdXJjZVJvb3QiOiIifQ==