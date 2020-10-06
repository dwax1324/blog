webpackHotUpdate_N_E("pages/tag/[id]",{

/***/ "./pages/tag/[id].tsx":
/*!****************************!*\
  !*** ./pages/tag/[id].tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/withApollo */ "./utils/withApollo.ts");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_EditDeleteButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/EditDeleteButtons */ "./components/EditDeleteButtons.tsx");
/* harmony import */ var _utils_useGetIntId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/useGetIntId */ "./utils/useGetIntId.ts");
var _this = undefined,
    _jsxFileName = "/home/develop/blog/client/pages/tag/[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Home = function Home() {
  _s();

  var _me$data;

  var id = Object(_utils_useGetIntId__WEBPACK_IMPORTED_MODULE_7__["useGetIntId"])();

  var _useTagQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useTagQuery"])({
    variables: {
      id: id
    }
  }),
      data = _useTagQuery.data,
      loading = _useTagQuery.loading;

  var me = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useMeQuery"])();

  if (!loading && !data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }
    }, "sorry, somthing happend");
  }

  var ME = (_me$data = me.data) === null || _me$data === void 0 ? void 0 : _me$data.me;
  return data.tag.posts ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3184585384",
    __self: _this
  }, "@media screen and (max-width:768px){.index-image{width:90% !important;}.index-card{width:100% !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3AvYmxvZy9jbGllbnQvcGFnZXMvdGFnL1tpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCK0IsQUFLb0MsQUFHRixxQkFGdkIsQ0FHQSIsImZpbGUiOiIvaG9tZS9kZXZlbG9wL2Jsb2cvY2xpZW50L3BhZ2VzL3RhZy9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlTWVRdWVyeSwgdXNlUG9zdHNRdWVyeSwgdXNlVGFnUXVlcnksIHVzZVRhZ3NRdWVyeSB9IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3dpdGhBcG9sbG9cIlxuaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIlxuaW1wb3J0IEVkaXREZWxldGVCdXR0b25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VkaXREZWxldGVCdXR0b25zXCJcbmltcG9ydCB7IHVzZUdldEludElkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXNlR2V0SW50SWQnXG5cbmludGVyZmFjZSBob21lUHJvcHMgeyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluZm8ge1xuICAgIGRhdGE6IHN0cmluZ1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSB1c2VHZXRJbnRJZCgpXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VUYWdRdWVyeSh7XG4gICAgICAgIHZhcmlhYmxlczogeyBpZDogaWQgfVxuICAgIH0pXG4gICAgY29uc3QgbWUgPSB1c2VNZVF1ZXJ5KClcblxuICAgIGlmICghbG9hZGluZyAmJiAhZGF0YSkge1xuICAgICAgICByZXR1cm4gPGRpdj5zb3JyeSwgc29tdGhpbmcgaGFwcGVuZDwvZGl2PlxuICAgIH1cbiAgICBjb25zdCBNRSA9IG1lLmRhdGE/Lm1lXG4gICAgcmV0dXJuIGRhdGEudGFnLnBvc3RzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcbiAgICAgICAgICAuaW5kZXgtaW1hZ2V7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZGV4LWNhcmR7XG4gICAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5kZXgtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbmRleC1pbWFnZVwiIHNyYz1cIi9tYWluLmpwZ1wiIHc9XCI3NSVcIiBoPVwiNzUlXCIgbXQ9XCI1MHB4XCIgbWI9XCI1MHB4XCIgbWF4Vz1cIjEwMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICB3PVwiNzUlXCJcbiAgICAgICAgICAgICAgICAgICAgaD1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyB3cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiZmxleC1lbmRcIixcblxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5kZXgtY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgZ3JleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93PVwiIDFweCAxcHggMXB4IGdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIjJweCAycHggNXB4IHJnYmEoMCwwLDAsMC41KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD1cIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI0NSVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCI1NSVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPVwiMyVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPVwiNDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiLzppZFwiIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugb2JqZWN0Rml0PVwiY292ZXJcIiBzcmM9e3Bvc3QudGh1bWJuYWlsfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1heFdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIxMDBweFwiIH19IGFsdD1cInRodW1uYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZWRpdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3Bvc3QudGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY3Vyc29yPVwicG9pbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3Bvc3QuY3JlYXRlZEF0LnNsaWNlKDAsIDEwKX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3PVwiODAlXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXBvc3QudGFncyA/IFwiIFwiIDogKHBvc3QudGFncy5tYXAoKHQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi86aWRcIiBhcz17YC90YWcvJHt0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIGJvcmRlcj1cIjFweCBzb2xpZCAjMzMzXCIgYm9yZGVyUmFkaXVzPVwiNXB4XCIgbT1cIjVweFwiIHA9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0LnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge01FID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdERlbGV0ZUJ1dHRvbnMgdGl0bGU9e3Bvc3QudGl0bGV9IHBvc3RJZD17cGFyc2VJbnQocG9zdC5pZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShIb21lKVxuIl19 */\n/*@ sourceURL=/home/develop/blog/client/pages/tag/[id].tsx */"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: "index-container",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "index-image",
    src: "/main.jpg",
    w: "75%",
    h: "75%",
    mt: "50px",
    mb: "50px",
    maxW: "1000px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    w: "75%",
    h: "auto",
    style: {
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      flexFlow: "row wrap",
      alignContent: "flex-end"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, data.posts.map(function (post) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      className: "index-card",
      borderRadius: "5px",
      border: "1px solid grey",
      shadow: " 1px 1px 1px grey",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      p: "20px",
      w: "45%",
      h: "55%",
      ml: "3%",
      mb: "40px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
      textAlign: "center",
      maxWidth: "550px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/:id",
      as: "/post/".concat(post.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      objectFit: "cover",
      src: post.thumbnail,
      style: {
        borderRadius: "50%",
        maxWidth: "100px",
        height: "100px"
      },
      alt: "thumnail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 37
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      className: "editTitle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 41
      }
    }, post.title)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      cursor: "pointer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 33
      }
    }, post.createdAt.slice(0, 10))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      w: "80%",
      justifyContent: "center",
      display: "flex",
      flexWrap: "wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }
    }, !post.tags ? " " : post.tags.map(function (t) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/:id",
        as: "/tag/".concat(t.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 37
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 41
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
        textAlign: "center",
        border: "1px solid #333",
        borderRadius: "5px",
        m: "5px",
        p: "5px",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 45
        }
      }, t.text)));
    })), ME ? __jsx(_components_EditDeleteButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: post.title,
      postId: parseInt(post.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 33
      }
    }) : '');
  })))) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  });
};

_s(Home, "gsrsRF8fkeN9eLczXFTcC9pYEak=", false, function () {
  return [_utils_useGetIntId__WEBPACK_IMPORTED_MODULE_7__["useGetIntId"], _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useTagQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useMeQuery"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_4__["withApollo"])({
  ssr: true
})(Home));

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFnLy50c3giXSwibmFtZXMiOlsiSG9tZSIsImlkIiwidXNlR2V0SW50SWQiLCJ1c2VUYWdRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwibWUiLCJ1c2VNZVF1ZXJ5IiwiTUUiLCJ0YWciLCJwb3N0cyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJmbGV4RmxvdyIsImFsaWduQ29udGVudCIsIm1hcCIsInBvc3QiLCJ0aHVtYm5haWwiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsImhlaWdodCIsInRpdGxlIiwiY3JlYXRlZEF0Iiwic2xpY2UiLCJ0YWdzIiwidCIsInRleHQiLCJwYXJzZUludCIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxJQUFrQixHQUFHLFNBQXJCQSxJQUFxQixHQUFNO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLEVBQUUsR0FBR0Msc0VBQVcsRUFBdEI7O0FBRDZCLHFCQUVIQyxzRUFBVyxDQUFDO0FBQ2xDQyxhQUFTLEVBQUU7QUFBRUgsUUFBRSxFQUFFQTtBQUFOO0FBRHVCLEdBQUQsQ0FGUjtBQUFBLE1BRXJCSSxJQUZxQixnQkFFckJBLElBRnFCO0FBQUEsTUFFZkMsT0FGZSxnQkFFZkEsT0FGZTs7QUFLN0IsTUFBTUMsRUFBRSxHQUFHQyxxRUFBVSxFQUFyQjs7QUFFQSxNQUFJLENBQUNGLE9BQUQsSUFBWSxDQUFDRCxJQUFqQixFQUF1QjtBQUNuQixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQVA7QUFDSDs7QUFDRCxNQUFNSSxFQUFFLGVBQUdGLEVBQUUsQ0FBQ0YsSUFBTiw2Q0FBRyxTQUFTRSxFQUFw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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFGUjtBQTRGSCxDQXZHRDs7R0FBTUQsSTtVQUNTRSw4RCxFQUNlQyw4RCxFQUdmSyw2RDs7O0tBTFRSLEk7QUF5R1NnQyxtSUFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQmpDLElBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFnL1tpZF0uZjRkYjUyNWU1YjlmZTNmZmM0ZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlTWVRdWVyeSwgdXNlUG9zdHNRdWVyeSwgdXNlVGFnUXVlcnksIHVzZVRhZ3NRdWVyeSB9IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3dpdGhBcG9sbG9cIlxuaW1wb3J0IHsgQm94LCBUZXh0LCBJbWFnZSwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIlxuaW1wb3J0IEVkaXREZWxldGVCdXR0b25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0VkaXREZWxldGVCdXR0b25zXCJcbmltcG9ydCB7IHVzZUdldEludElkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXNlR2V0SW50SWQnXG5cbmludGVyZmFjZSBob21lUHJvcHMgeyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEluZm8ge1xuICAgIGRhdGE6IHN0cmluZ1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gICAgY29uc3QgaWQgPSB1c2VHZXRJbnRJZCgpXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VUYWdRdWVyeSh7XG4gICAgICAgIHZhcmlhYmxlczogeyBpZDogaWQgfVxuICAgIH0pXG4gICAgY29uc3QgbWUgPSB1c2VNZVF1ZXJ5KClcblxuICAgIGlmICghbG9hZGluZyAmJiAhZGF0YSkge1xuICAgICAgICByZXR1cm4gPGRpdj5zb3JyeSwgc29tdGhpbmcgaGFwcGVuZDwvZGl2PlxuICAgIH1cbiAgICBjb25zdCBNRSA9IG1lLmRhdGE/Lm1lXG4gICAgcmV0dXJuIGRhdGEudGFnLnBvc3RzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcbiAgICAgICAgICAuaW5kZXgtaW1hZ2V7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZGV4LWNhcmR7XG4gICAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5kZXgtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbmRleC1pbWFnZVwiIHNyYz1cIi9tYWluLmpwZ1wiIHc9XCI3NSVcIiBoPVwiNzUlXCIgbXQ9XCI1MHB4XCIgbWI9XCI1MHB4XCIgbWF4Vz1cIjEwMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICB3PVwiNzUlXCJcbiAgICAgICAgICAgICAgICAgICAgaD1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyB3cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiZmxleC1lbmRcIixcblxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEucG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5kZXgtY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgZ3JleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93PVwiIDFweCAxcHggMXB4IGdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIjJweCAycHggNXB4IHJnYmEoMCwwLDAsMC41KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcD1cIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI0NSVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCI1NSVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPVwiMyVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPVwiNDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNTUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiLzppZFwiIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugb2JqZWN0Rml0PVwiY292ZXJcIiBzcmM9e3Bvc3QudGh1bWJuYWlsfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1heFdpZHRoOiBcIjEwMHB4XCIsIGhlaWdodDogXCIxMDBweFwiIH19IGFsdD1cInRodW1uYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZWRpdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3Bvc3QudGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY3Vyc29yPVwicG9pbnRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e3Bvc3QuY3JlYXRlZEF0LnNsaWNlKDAsIDEwKX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3PVwiODAlXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXBvc3QudGFncyA/IFwiIFwiIDogKHBvc3QudGFncy5tYXAoKHQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi86aWRcIiBhcz17YC90YWcvJHt0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIGJvcmRlcj1cIjFweCBzb2xpZCAjMzMzXCIgYm9yZGVyUmFkaXVzPVwiNXB4XCIgbT1cIjVweFwiIHA9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0LnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge01FID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdERlbGV0ZUJ1dHRvbnMgdGl0bGU9e3Bvc3QudGl0bGV9IHBvc3RJZD17cGFyc2VJbnQocG9zdC5pZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShIb21lKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==