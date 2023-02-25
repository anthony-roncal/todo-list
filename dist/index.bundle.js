"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./chevron-down.svg */ "./src/chevron-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --zinc-50: #fafafa;\n    --zinc-100: #f4f4f5;\n    --zinc-200: #e4e4e7;\n    --zinc-300: #d4d4d8;\n    --zinc-400: #a1a1aa;\n    --zinc-500: #71717a;\n    --zinc-600: #52525b;\n    --zinc-700: #3f3f46;\n    --zinc-800: #27272a;\n    --zinc-900: #18181b;\n    --primary: #7dd3fc;\n    --primary-dark: #38bdf8;\n    --primary-light: #bae6fd;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 50px 1fr;\n    margin: 0;\n    height: 100vh;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n    display: flex;\n    grid-column: 1 / 3;\n    background-color: var(--primary);\n    color: var(--zinc-800);\n    align-items: center;\n    font-size: 20px;\n    padding-left: 20px;\n}\n\n.sidebar,\n.content,\n.add-project-field,\n.add-todo-field,\n.todo-item,\n.show-add-project-form-btn,\n.add-project-cancel-btn,\n.chevron,\n.expanded,\n.todo-item.expanded:hover,\n.expanded > .chevron,\n.todo-item.expanded:hover > .chevron,\n.cancel-details-btn {\n    background-color: var(--zinc-50);\n    color: var(--zinc-800);\n}\n\n.sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    height: 100%;\n    border-right: 1px solid var(--zinc-200);\n}\n\n.projects-ul {\n    width: 95%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.todo-ul {\n    width: 75%;\n    margin-left: 10px;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: var(--zinc-200);\n}\n\n.add-project-field,\n.add-todo-field {\n    width: 100%;\n    outline: none;\n    box-shadow: 0 2px 2px var(--zinc-300);\n}\n\n.show-add-project-form-btn,\n.show-add-todo-form-btn {\n    color: var(--zinc-600);\n}\n\n.show-add-todo-form-btn,\n.add-todo-cancel-btn {\n    background-color: var(--zinc-200);\n}\n\n.show-add-todo-form-btn:hover {\n    background-color: var(--zinc-300);\n}\n\n.show-add-project-form-btn,\n.show-add-todo-form-btn {\n    width: 100%;\n    text-align: left;\n}\n\n.project-item:hover,\n.show-add-project-form-btn:hover,\n.todo-item:hover,\n.todo-item:hover > .chevron {\n    background-color: var(--zinc-100);\n    color: var(--zinc-900);\n}\n\n.current-project,\n.current-project:hover,\n.current-project > .delete-project,\n.add-project-btn,\n.add-todo-btn,\n.save-details-btn,\n.edit-details-btn {\n    background-color: var(--primary);\n    color: var(--zinc-800);\n}\n\n.add-project-btn:hover,\n.add-todo-btn:hover,\n.save-details-btn:hover,\n.edit-details-btn {\n    background-color: var(--primary-dark);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.current-project:hover > .delete-project:hover {\n    background-color: var(--primary-dark);\n}\n\n.content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n}\n\nli,\nbutton,\n.add-project-field,\n.add-todo-field {\n    box-sizing: border-box;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n}\n\n.project-item {\n    display: flex;\n    align-content: center;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.todo-item {\n    display: grid;\n    grid-template-columns: 1fr 30px;\n    grid-template-rows: 30px 1fr;\n    align-items: center;\n    box-shadow: 0 2px 2px var(--zinc-300);\n}\n\n.project-item,\n.todo-item,\n.add-project-field,\n.add-todo-field {\n    margin-bottom: 10px;\n}\n\n.expanded {\n    box-shadow: 0 2px 2px var(--zinc-300);\n}\n\n.project-item:hover > .delete-project,\n.todo-item:hover > .delete-todo,\n.todo-item:hover > .chevron {\n    display: block;\n}\n\n.delete-project,\n.delete-todo {\n    display: none;\n    background-color: var(--zinc-100);\n    border-radius: 5px;\n    padding: 1px 10px;\n    margin: 0;\n}\n\n.delete-todo:hover,\n.delete-project:hover {\n    background-color: var(--zinc-200);\n}\n\ninput[type=checkbox] {\n    margin: 0 10px;\n}\n\ninput[type=checkbox]:checked + label.strikethrough {\n    text-decoration: line-through;\n}\n\n.chevron {\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 0;  \n    height: 25px;\n    align-self: center;\n    grid-template-columns: 2 / 3;\n}\n\n.rotate {\n    rotate: 180deg;\n}\n\n.checkbox-title-container > label,\nbutton,\n.checkbox-title-container,\n.project-item {\n    cursor: pointer;\n}\n\n.todo-details-form {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 10px;\n    margin-top: 10px;\n    padding-left: 20px;\n    align-items: center;\n}\n\n.todo-details-form > label {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--zinc-600);\n    text-align: right;\n    \n}\n\n.todo-details-form > input, \n.todo-details-form > textarea, \n.todo-details-form > select {\n    grid-template-columns: 2 / 3;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: var(--zinc-800);\n}\n\n.todo-details-form > textarea {\n    resize: vertical;\n}\n\n .todo-details-form > *:disabled {\n    border: 1px solid var(--zinc-300);\n    background-color: var(--zinc-50);\n }\n\n .todo-details-form > *:enabled {\n    border: 1px solid var(--zinc-500);\n    background-color: var(--zinc-50);\n }\n\n .todo-details-form > div {\n    grid-column: 1 / 3;\n }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,SAAS;IACT,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;;;;;;;;;;;;;IAaI,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,uCAAuC;AAC3C;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,iCAAiC;AACrC;;AAEA;;IAEI,WAAW;IACX,aAAa;IACb,qCAAqC;AACzC;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;;IAEI,WAAW;IACX,gBAAgB;AACpB;;AAEA;;;;IAII,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;;;;;;;IAOI,gCAAgC;IAChC,sBAAsB;AAC1B;;AAEA;;;;IAII,qCAAqC;AACzC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;;;;IAII,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;;;;IAII,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;;IAGI,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;AACb;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;AACA,yDAA2C;IACvC,4BAA4B;IAC5B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,cAAc;AAClB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2CAA2C;IAC3C,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,iBAAiB;;AAErB;;AAEA;;;IAGI,4BAA4B;IAC5B,eAAe;IACf,yCAAyC;IACzC,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;CAEC;IACG,iCAAiC;IACjC,gCAAgC;CACnC;;CAEA;IACG,iCAAiC;IACjC,gCAAgC;CACnC;;CAEA;IACG,kBAAkB;CACrB","sourcesContent":[":root {\n    --zinc-50: #fafafa;\n    --zinc-100: #f4f4f5;\n    --zinc-200: #e4e4e7;\n    --zinc-300: #d4d4d8;\n    --zinc-400: #a1a1aa;\n    --zinc-500: #71717a;\n    --zinc-600: #52525b;\n    --zinc-700: #3f3f46;\n    --zinc-800: #27272a;\n    --zinc-900: #18181b;\n    --primary: #7dd3fc;\n    --primary-dark: #38bdf8;\n    --primary-light: #bae6fd;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 50px 1fr;\n    margin: 0;\n    height: 100vh;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n    display: flex;\n    grid-column: 1 / 3;\n    background-color: var(--primary);\n    color: var(--zinc-800);\n    align-items: center;\n    font-size: 20px;\n    padding-left: 20px;\n}\n\n.sidebar,\n.content,\n.add-project-field,\n.add-todo-field,\n.todo-item,\n.show-add-project-form-btn,\n.add-project-cancel-btn,\n.chevron,\n.expanded,\n.todo-item.expanded:hover,\n.expanded > .chevron,\n.todo-item.expanded:hover > .chevron,\n.cancel-details-btn {\n    background-color: var(--zinc-50);\n    color: var(--zinc-800);\n}\n\n.sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    height: 100%;\n    border-right: 1px solid var(--zinc-200);\n}\n\n.projects-ul {\n    width: 95%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.todo-ul {\n    width: 75%;\n    margin-left: 10px;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: var(--zinc-200);\n}\n\n.add-project-field,\n.add-todo-field {\n    width: 100%;\n    outline: none;\n    box-shadow: 0 2px 2px var(--zinc-300);\n}\n\n.show-add-project-form-btn,\n.show-add-todo-form-btn {\n    color: var(--zinc-600);\n}\n\n.show-add-todo-form-btn,\n.add-todo-cancel-btn {\n    background-color: var(--zinc-200);\n}\n\n.show-add-todo-form-btn:hover {\n    background-color: var(--zinc-300);\n}\n\n.show-add-project-form-btn,\n.show-add-todo-form-btn {\n    width: 100%;\n    text-align: left;\n}\n\n.project-item:hover,\n.show-add-project-form-btn:hover,\n.todo-item:hover,\n.todo-item:hover > .chevron {\n    background-color: var(--zinc-100);\n    color: var(--zinc-900);\n}\n\n.current-project,\n.current-project:hover,\n.current-project > .delete-project,\n.add-project-btn,\n.add-todo-btn,\n.save-details-btn,\n.edit-details-btn {\n    background-color: var(--primary);\n    color: var(--zinc-800);\n}\n\n.add-project-btn:hover,\n.add-todo-btn:hover,\n.save-details-btn:hover,\n.edit-details-btn {\n    background-color: var(--primary-dark);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.current-project:hover > .delete-project:hover {\n    background-color: var(--primary-dark);\n}\n\n.content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n}\n\nli,\nbutton,\n.add-project-field,\n.add-todo-field {\n    box-sizing: border-box;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n}\n\n.project-item {\n    display: flex;\n    align-content: center;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.todo-item {\n    display: grid;\n    grid-template-columns: 1fr 30px;\n    grid-template-rows: 30px 1fr;\n    align-items: center;\n    box-shadow: 0 2px 2px var(--zinc-300);\n}\n\n.project-item,\n.todo-item,\n.add-project-field,\n.add-todo-field {\n    margin-bottom: 10px;\n}\n\n.expanded {\n    box-shadow: 0 2px 2px var(--zinc-300);\n}\n\n.project-item:hover > .delete-project,\n.todo-item:hover > .delete-todo,\n.todo-item:hover > .chevron {\n    display: block;\n}\n\n.delete-project,\n.delete-todo {\n    display: none;\n    background-color: var(--zinc-100);\n    border-radius: 5px;\n    padding: 1px 10px;\n    margin: 0;\n}\n\n.delete-todo:hover,\n.delete-project:hover {\n    background-color: var(--zinc-200);\n}\n\ninput[type=checkbox] {\n    margin: 0 10px;\n}\n\ninput[type=checkbox]:checked + label.strikethrough {\n    text-decoration: line-through;\n}\n\n.chevron {\nbackground-image: url('./chevron-down.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 0;  \n    height: 25px;\n    align-self: center;\n    grid-template-columns: 2 / 3;\n}\n\n.rotate {\n    rotate: 180deg;\n}\n\n.checkbox-title-container > label,\nbutton,\n.checkbox-title-container,\n.project-item {\n    cursor: pointer;\n}\n\n.todo-details-form {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 10px;\n    margin-top: 10px;\n    padding-left: 20px;\n    align-items: center;\n}\n\n.todo-details-form > label {\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--zinc-600);\n    text-align: right;\n    \n}\n\n.todo-details-form > input, \n.todo-details-form > textarea, \n.todo-details-form > select {\n    grid-template-columns: 2 / 3;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: var(--zinc-800);\n}\n\n.todo-details-form > textarea {\n    resize: vertical;\n}\n\n .todo-details-form > *:disabled {\n    border: 1px solid var(--zinc-300);\n    background-color: var(--zinc-50);\n }\n\n .todo-details-form > *:enabled {\n    border: 1px solid var(--zinc-500);\n    background-color: var(--zinc-50);\n }\n\n .todo-details-form > div {\n    grid-column: 1 / 3;\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _viewController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewController */ "./src/viewController.js");





// init projects and currentProject in localStorage
if(!JSON.parse(localStorage.getItem('projects'))) {
    localStorage.setItem('projects', JSON.stringify(''));
}
if(!JSON.parse(localStorage.getItem('currentProject'))) {
    localStorage.setItem('currentProject', JSON.stringify('0'));
}
let projects = (Array.from(JSON.parse(localStorage.getItem('projects'))));
let currentProject = Number.parseInt(JSON.parse(localStorage.getItem('currentProject')));

if(projects.length === 0) {
    const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(0, "To-Do");
    projects.push(defaultProject);
    populateStorage();
}

// init viewController
const view = (0,_viewController__WEBPACK_IMPORTED_MODULE_3__["default"])(projects, currentProject);

// add event listeners
addProjectEventListeners();
addTodoEventListeners();

document.querySelector('.show-add-project-form-btn').addEventListener('click', toggleAddProjectForm);
document.querySelector('.add-project-cancel-btn').addEventListener('click', toggleAddProjectForm);

document.querySelector('.add-project-btn').addEventListener('click', addProject);
document.querySelector('.add-project-field').addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        addProject();
    }
});

document.querySelector('.show-add-todo-form-btn').addEventListener('click', toggleAddTodoForm);
document.querySelector('.add-todo-cancel-btn').addEventListener('click', toggleAddTodoForm);

document.querySelector('.add-todo-btn').addEventListener('click', addTodo);
document.querySelector('.add-todo-field').addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        addTodo();
    }
});

function addProjectEventListeners() {
    document.querySelectorAll('.project-item').forEach(item => item.addEventListener('click', selectProject));
    document.querySelectorAll('.delete-project').forEach(btn => btn.addEventListener('click', deleteItem));
}

function selectProject(e) {
    console.log('selectProject');
    currentProject = Array.from(e.target.parentNode.children).indexOf(e.target);
    view.updateCurrentProject(currentProject);
    view.updateTodos(projects[currentProject]);
    addTodoEventListeners();
    populateStorage();
}

function addTodoEventListeners() {
    document.querySelectorAll('input[type=checkbox]').forEach(checkbox => checkbox.addEventListener('click', completeTodo));
    document.querySelectorAll('.todo-item').forEach(todoItem => todoItem.addEventListener('click', toggleShowTodoDetails));
    document.querySelectorAll('.edit-details-btn').forEach(editBtn => editBtn.addEventListener('click', toggleTodoEditMode));
    document.querySelectorAll('.save-details-btn').forEach(saveBtn => saveBtn.addEventListener('click', saveTodoEdit));
    document.querySelectorAll('.cancel-details-btn').forEach(cancelBtn => cancelBtn.addEventListener('click', toggleTodoEditMode));
    document.querySelectorAll('.delete-todo').forEach(btn => btn.addEventListener('click', deleteItem));
}

function addProject() {
    console.log('addProject');
    const addProjectFieldValue = document.querySelector('.add-project-field').value.toString().trim();
    if(addProjectFieldValue) {
        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(projects.length, addProjectFieldValue);
        projects.push(newProject);
        view.toggleAddProjectForm();
        view.updateProjects(currentProject);
        addProjectEventListeners();
        populateStorage();
    }
} 

function addTodo() {
    console.log('addTodo');
    const addTodoFieldValue = document.querySelector('.add-todo-field').value.toString().trim();
    if(addTodoFieldValue) {
        const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(addTodoFieldValue);
        projects[currentProject].todos.push(newTodo);
        view.toggleAddTodoForm();
        view.updateTodos(projects[currentProject]);
        addTodoEventListeners();
        populateStorage();
    }
}

function toggleAddProjectForm() {
    console.log('toggleAddProjectForm');
    view.toggleAddProjectForm();
}

function toggleAddTodoForm() {
    console.log('toggleAddTodoForm');
    view.toggleAddTodoForm();
}

function completeTodo(e) {
    console.log('completeTodo');
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    projects[currentProject].todos[index].complete = !projects[currentProject].todos[index].complete;
    populateStorage();
}

function toggleShowTodoDetails(e) {
    console.log('toggleShowTodoDetails');
    view.toggleShowTodoDetails(e);
}

function toggleTodoEditMode(e) {
    console.log('toggleTodoEditMode');
    view.toggleTodoEditMode(e);
}

function saveTodoEdit(e) {
    e.preventDefault();
    let index = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    // console.log(projects[currentProject].todos[index]);

    var formData = new FormData(Array.from(document.querySelectorAll('.todo-ul form'))[index]);
    for (var pair of formData.entries()) {
        projects[currentProject].todos[index][pair[0]] = pair[1];
    }
    console.log(projects[currentProject].todos[index]);
    view.updateTodos(projects[currentProject]);
    addTodoEventListeners();
    populateStorage();
}

function deleteItem(e) {
    console.log('deleteItem');
    let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    (e.target.classList[0] === "delete-project") ? projects.splice(index, 1) : projects[currentProject].removeToDo(index);
    view.removeItem(e);
    populateStorage();
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('currentProject', JSON.stringify(currentProject));
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
function Project(id, title) {
    let todos = [];

    function addToDo(todo) {
        this.todos.push(todo);
        this.todos.sort(function(a, b) { 
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
    }

    function removeToDo(index) {
        if(index < todos.length) {
            todos.splice(index, 1);
        } else {
            alert("Attempting to remove an invalid to-do");
        }
    }

    return {
        id: id,
        title: title,
        todos: todos,
        addToDo,
        removeToDo
    }
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(title, description, dueDate, priority, notes) {
    return {
        title: title, 
        description: description, 
        dueDate: dueDate, 
        priority: priority, 
        notes: notes, 
        complete: false
    };
};

/***/ }),

/***/ "./src/viewController.js":
/*!*******************************!*\
  !*** ./src/viewController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ viewController)
/* harmony export */ });
function viewController(projectsArray, currentProject) {
    const header = document.createElement('header');
    const title = document.createElement('p');
    const sidebar = document.createElement('div');
    const projectsList = document.createElement('ul');
    const content = document.createElement('div');
    const todoList = document.createElement('ul');
    
    const showAddProjectFormBtn = document.createElement('button');
    const addProjectField = document.createElement('input');
    const addProjectContainer = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    const addProjectCancelBtn = document.createElement('button');

    const showAddTodoFormBtn = document.createElement('button');
    const addTodoField = document.createElement('input');
    const addTodoContainer = document.createElement('div');
    const addTodoBtn = document.createElement('button');
    const addTodoCancelBtn = document.createElement('button');

    (function init() {
        header.appendChild(title);
        title.textContent = 'Odin To-Do List';

        // init sidebar with projects
        sidebar.classList.add('sidebar');
        updateProjects(currentProject);
        projectsList.classList.add('projects-ul');
        sidebar.appendChild(projectsList);

        // init hidden add project form
        showAddProjectFormBtn.textContent = '+ Add new project';
        showAddProjectFormBtn.classList.add('show-add-project-form-btn');
        
        addProjectField.setAttribute('type', 'text');
        addProjectField.classList.add('add-project-field', 'hidden');
        
        addProjectBtn.textContent = 'Add project';
        addProjectBtn.classList.add('add-project-btn');
        
        addProjectCancelBtn.textContent = 'X';
        addProjectCancelBtn.classList.add('add-project-cancel-btn');

        addProjectContainer.classList.add('add-project-container', 'hidden');
        
        addProjectContainer.append(addProjectBtn, addProjectCancelBtn);
        projectsList.append(addProjectField, showAddProjectFormBtn, addProjectContainer);

        // init content with todos
        content.classList.add('content');
        todoList.classList.add('todo-ul');
        updateTodos(projectsArray[currentProject]);

        // init hidden add todo form
        showAddTodoFormBtn.textContent = '+ Add new to-do';
        showAddTodoFormBtn.classList.add('show-add-todo-form-btn');

        addTodoField.setAttribute('type', 'text');
        addTodoField.classList.add('add-todo-field', 'hidden');

        addTodoBtn.textContent = 'Add to-do';
        addTodoBtn.classList.add('add-todo-btn');

        addTodoCancelBtn.textContent = 'X';
        addTodoCancelBtn.classList.add('add-todo-cancel-btn');

        addTodoContainer.classList.add('add-todo-container', 'hidden');

        addTodoContainer.append(addTodoBtn, addTodoCancelBtn);
        todoList.append(addTodoField, showAddTodoFormBtn, addTodoContainer);

        document.body.append(header, sidebar, content);
    })();

    function updateCurrentProject(currentProject) {
        // update selected project
        let projectListItems = document.querySelectorAll('.project-item');
        projectListItems.forEach(project => {
            if(project.classList.contains('current-project')) {
                project.classList.remove('current-project');
            }
        });
        projectListItems[currentProject].classList.toggle('current-project');
    }

    function updateProjects(currentProject) {
        // remove old Projects
        Array.from(projectsList.children).forEach(project => {
            projectsList.removeChild(project);
        });
        // add new Projects
        projectsArray.forEach(project => {
            const projectListItem = document.createElement('li');
            projectListItem.classList.add('project-item');
            projectListItem.textContent = project.title;
            if(project.id === currentProject) {
                projectListItem.classList.toggle('current-project');
            }
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-project');
            deleteBtn.textContent = 'X';

            projectListItem.appendChild(deleteBtn);

            projectsList.append(projectListItem, addProjectField, showAddProjectFormBtn, addProjectContainer);
        });
    }

    function toggleAddProjectForm() {
        addProjectField.classList.toggle('hidden');
        addProjectField.focus();
        addProjectField.select();

        addProjectContainer.classList.toggle('hidden');
        showAddProjectFormBtn.classList.toggle('hidden');
        addProjectField.value = '';
    }

    function toggleShowTodoDetails(e) {
        if(e.target.classList.contains('checkbox-title-container') || e.target.classList.contains('strikethrough') || e.target.classList.contains('chevron')) {
            var detailsContainer;
            switch(e.target.nodeName) {
                case 'DIV': 
                    detailsContainer = e.target.parentNode.children[2];
                    break;
                case 'LABEL':
                    detailsContainer = e.target.parentNode.parentNode.children[2];
                    break;
                case 'BUTTON':
                    detailsContainer = e.target.parentNode.children[2];
                    break;
            }
            detailsContainer.classList.toggle('hidden');
            detailsContainer.parentNode.classList.toggle('expanded');
            // rotate chevron
            detailsContainer.parentNode.children[1].classList.toggle('rotate');
            // hide checkbox and title
            // detailsContainer.parentNode.children[0].classList.toggle('hidden');
        }
    }

    function toggleTodoEditMode(e) {
        const formElements = e.target.parentNode.parentNode.children;
        Array.from(formElements).forEach(element => element.disabled = !element.disabled);
        if(e.target.classList.contains('edit-details-btn')) {
            e.target.classList.toggle('hidden');
            e.target.parentNode.children[1].classList.toggle('hidden');
            e.target.parentNode.children[2].classList.toggle('hidden');
        }
        if(e.target.classList.contains('cancel-details-btn')) {
            e.target.classList.toggle('hidden');
            e.target.parentNode.children[0].classList.toggle('hidden');
            e.target.parentNode.children[1].classList.toggle('hidden');
        }
    }

    function toggleAddTodoForm() {
        addTodoField.classList.toggle('hidden');
        addTodoField.focus();
        addTodoField.select();

        addTodoContainer.classList.toggle('hidden');
        showAddTodoFormBtn.classList.toggle('hidden');
        addTodoField.value = '';
    }

    function updateTodos(project) {
        // remove old Todos
        Array.from(todoList.children).forEach(todo => {
            todoList.removeChild(todo);
        });
        project.todos.forEach(todo => {
            const todoListItem = document.createElement('li');
            todoListItem.classList.add('todo-item');

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            (todo.complete) ? checkbox.checked = true : checkbox.checked = false;
            checkbox.classList.add(todo.priority);

            const todoTitle = document.createElement('label');
            todoTitle.textContent = todo.title;
            todoTitle.classList.add('strikethrough');

            const checkboxTitlecontainer = document.createElement('div');
            checkboxTitlecontainer.classList.add('checkbox-title-container')
            checkboxTitlecontainer.append(checkbox, todoTitle);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-todo');
            deleteBtn.textContent = 'X';

            const chevron = document.createElement('button');
            chevron.classList.add('chevron');

            // todo details/edit form
            const todoDetailsContainer = document.createElement('form');
            todoDetailsContainer.classList.add('todo-details-form', 'hidden');
            
            const todoTitleLabel = document.createElement('label');
            todoTitleLabel.textContent = 'To-do';
            const todoTitleInput = document.createElement('input');
            todoTitleInput.setAttribute('type', 'text');
            todoTitleInput.id = 'title';
            todoTitleInput.setAttribute('name', 'title');
            todoTitleInput.value = todo.title;
            
            const todoDescriptionLabel = document.createElement('label');
            todoDescriptionLabel.textContent = 'Description';
            const todoDescriptionInput = document.createElement('textarea');
            todoDescriptionInput.id = 'description';
            todoDescriptionInput.setAttribute('name', 'description');
            if (todo.description) {
                todoDescriptionInput.value = todo.description;
            }
            
            const todoDueDateLabel = document.createElement('label');
            todoDueDateLabel.textContent = 'Due date';
            const todoDueDateInput = document.createElement('input');
            todoDueDateInput.id = 'dueDate';
            todoDueDateInput.setAttribute('type', 'date');
            todoDueDateInput.setAttribute('name', 'dueDate');
            todoDueDateInput.value = todo.dueDate;
            
            const todoPriorityLabel = document.createElement('label');
            todoPriorityLabel.textContent = 'Priority';
            const todoPriorityInput = document.createElement('select');
            todoPriorityInput.id = 'priority';
            todoPriorityInput.setAttribute('name', 'priority');
            const lowPriorityOption = document.createElement('option');
            lowPriorityOption.value = 'low';
            lowPriorityOption.textContent = 'low';
            const medPriorityOption = document.createElement('option');
            medPriorityOption.selected = 'selected';
            medPriorityOption.value = 'medium';
            medPriorityOption.textContent = 'medium';
            const highPriorityOption = document.createElement('option');
            highPriorityOption.value = 'high';
            highPriorityOption.textContent = 'high';
            
            const todoNotesLabel = document.createElement('label');
            todoNotesLabel.textContent = 'Notes';
            const todoNotesInput = document.createElement('textarea');
            todoNotesInput.id = 'notes';
            todoNotesInput.setAttribute('name', 'notes');
            if(todo.notes) {
                todoNotesInput.value = todo.notes;
            }

            const formButtonsContainer = document.createElement('div');
            const editDetailsBtn = document.createElement('button');
            editDetailsBtn.textContent = 'Edit';
            editDetailsBtn.classList.add('edit-details-btn');
            editDetailsBtn.setAttribute('type', 'button');
            const saveDetailsBtn = document.createElement('button');
            saveDetailsBtn.textContent = 'Save changes';
            saveDetailsBtn.classList.add('save-details-btn', 'hidden');
            saveDetailsBtn.setAttribute('type', 'submit');
            const cancelDetailsBtn = document.createElement('button');
            cancelDetailsBtn.textContent = 'X';
            cancelDetailsBtn.classList.add('cancel-details-btn', 'hidden');
            cancelDetailsBtn.setAttribute('type', 'button');

            todoPriorityInput.append(lowPriorityOption, medPriorityOption, highPriorityOption);
            todoPriorityInput.value = todo.priority;


            formButtonsContainer.append(editDetailsBtn, saveDetailsBtn, cancelDetailsBtn);

            todoDetailsContainer.append(todoTitleLabel, todoTitleInput, 
                todoDescriptionLabel, todoDescriptionInput, 
                todoDueDateLabel, todoDueDateInput, 
                todoPriorityLabel, todoPriorityInput,
                todoNotesLabel, todoNotesInput,
                formButtonsContainer
            );

            Array.from(todoDetailsContainer.children).forEach(element => {
                if((element.nodeName === 'INPUT') || (element.nodeName === 'TEXTAREA') || (element.nodeName === 'SELECT')) {
                    element.disabled = true;
                }
            })

            todoListItem.append(checkboxTitlecontainer, chevron, todoDetailsContainer); // deleteBtn
            todoList.appendChild(todoListItem);
        });
        todoList.append(addTodoField, showAddTodoFormBtn, addTodoContainer);
        content.appendChild(todoList);
    }

    function removeItem(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

    return {
        updateProjects,
        updateCurrentProject,
        toggleAddProjectForm,
        toggleShowTodoDetails,
        toggleTodoEditMode,
        toggleAddTodoForm,
        updateTodos,
        removeItem
    }
};

/***/ }),

/***/ "./src/chevron-down.svg":
/*!******************************!*\
  !*** ./src/chevron-down.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da1d4548b671a011dfa4.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RKZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYix3RkFBd0Y7QUFDeEY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3Q29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9jaGV2cm9uLWRvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXppbmMtNTA6ICNmYWZhZmE7XFxuICAgIC0temluYy0xMDA6ICNmNGY0ZjU7XFxuICAgIC0temluYy0yMDA6ICNlNGU0ZTc7XFxuICAgIC0temluYy0zMDA6ICNkNGQ0ZDg7XFxuICAgIC0temluYy00MDA6ICNhMWExYWE7XFxuICAgIC0temluYy01MDA6ICM3MTcxN2E7XFxuICAgIC0temluYy02MDA6ICM1MjUyNWI7XFxuICAgIC0temluYy03MDA6ICMzZjNmNDY7XFxuICAgIC0temluYy04MDA6ICMyNzI3MmE7XFxuICAgIC0temluYy05MDA6ICMxODE4MWI7XFxuICAgIC0tcHJpbWFyeTogIzdkZDNmYztcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzOGJkZjg7XFxuICAgIC0tcHJpbWFyeS1saWdodDogI2JhZTZmZDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXppbmMtODAwKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyLFxcbi5jb250ZW50LFxcbi5hZGQtcHJvamVjdC1maWVsZCxcXG4uYWRkLXRvZG8tZmllbGQsXFxuLnRvZG8taXRlbSxcXG4uc2hvdy1hZGQtcHJvamVjdC1mb3JtLWJ0bixcXG4uYWRkLXByb2plY3QtY2FuY2VsLWJ0bixcXG4uY2hldnJvbixcXG4uZXhwYW5kZWQsXFxuLnRvZG8taXRlbS5leHBhbmRlZDpob3ZlcixcXG4uZXhwYW5kZWQgPiAuY2hldnJvbixcXG4udG9kby1pdGVtLmV4cGFuZGVkOmhvdmVyID4gLmNoZXZyb24sXFxuLmNhbmNlbC1kZXRhaWxzLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtNTApO1xcbiAgICBjb2xvcjogdmFyKC0temluYy04MDApO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXppbmMtMjAwKTtcXG59XFxuXFxuLnByb2plY3RzLXVsIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRvZG8tdWwge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jLTIwMCk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1maWVsZCxcXG4uYWRkLXRvZG8tZmllbGQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHZhcigtLXppbmMtMzAwKTtcXG59XFxuXFxuLnNob3ctYWRkLXByb2plY3QtZm9ybS1idG4sXFxuLnNob3ctYWRkLXRvZG8tZm9ybS1idG4ge1xcbiAgICBjb2xvcjogdmFyKC0temluYy02MDApO1xcbn1cXG5cXG4uc2hvdy1hZGQtdG9kby1mb3JtLWJ0bixcXG4uYWRkLXRvZG8tY2FuY2VsLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtMjAwKTtcXG59XFxuXFxuLnNob3ctYWRkLXRvZG8tZm9ybS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jLTMwMCk7XFxufVxcblxcbi5zaG93LWFkZC1wcm9qZWN0LWZvcm0tYnRuLFxcbi5zaG93LWFkZC10b2RvLWZvcm0tYnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIsXFxuLnNob3ctYWRkLXByb2plY3QtZm9ybS1idG46aG92ZXIsXFxuLnRvZG8taXRlbTpob3ZlcixcXG4udG9kby1pdGVtOmhvdmVyID4gLmNoZXZyb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jLTEwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS16aW5jLTkwMCk7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3QsXFxuLmN1cnJlbnQtcHJvamVjdDpob3ZlcixcXG4uY3VycmVudC1wcm9qZWN0ID4gLmRlbGV0ZS1wcm9qZWN0LFxcbi5hZGQtcHJvamVjdC1idG4sXFxuLmFkZC10b2RvLWJ0bixcXG4uc2F2ZS1kZXRhaWxzLWJ0bixcXG4uZWRpdC1kZXRhaWxzLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBjb2xvcjogdmFyKC0temluYy04MDApO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyLFxcbi5hZGQtdG9kby1idG46aG92ZXIsXFxuLnNhdmUtZGV0YWlscy1idG46aG92ZXIsXFxuLmVkaXQtZGV0YWlscy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0OmhvdmVyID4gLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpLFxcbmJ1dHRvbixcXG4uYWRkLXByb2plY3QtZmllbGQsXFxuLmFkZC10b2RvLWZpZWxkIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCB2YXIoLS16aW5jLTMwMCk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0sXFxuLnRvZG8taXRlbSxcXG4uYWRkLXByb2plY3QtZmllbGQsXFxuLmFkZC10b2RvLWZpZWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHZhcigtLXppbmMtMzAwKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5kZWxldGUtcHJvamVjdCxcXG4udG9kby1pdGVtOmhvdmVyID4gLmRlbGV0ZS10b2RvLFxcbi50b2RvLWl0ZW06aG92ZXIgPiAuY2hldnJvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QsXFxuLmRlbGV0ZS10b2RvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYy0xMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5kZWxldGUtdG9kbzpob3ZlcixcXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jLTIwMCk7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbC5zdHJpa2V0aHJvdWdoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5jaGV2cm9uIHtcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDsgIFxcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyIC8gMztcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICAgIHJvdGF0ZTogMTgwZGVnO1xcbn1cXG5cXG4uY2hlY2tib3gtdGl0bGUtY29udGFpbmVyID4gbGFiZWwsXFxuYnV0dG9uLFxcbi5jaGVja2JveC10aXRsZS1jb250YWluZXIsXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tZGV0YWlscy1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tZGV0YWlscy1mb3JtID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB2YXIoLS16aW5jLTYwMCk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBcXG59XFxuXFxuLnRvZG8tZGV0YWlscy1mb3JtID4gaW5wdXQsIFxcbi50b2RvLWRldGFpbHMtZm9ybSA+IHRleHRhcmVhLCBcXG4udG9kby1kZXRhaWxzLWZvcm0gPiBzZWxlY3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIgLyAzO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0temluYy04MDApO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLWZvcm0gPiB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiAudG9kby1kZXRhaWxzLWZvcm0gPiAqOmRpc2FibGVkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0temluYy0zMDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jLTUwKTtcXG4gfVxcblxcbiAudG9kby1kZXRhaWxzLWZvcm0gPiAqOmVuYWJsZWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS16aW5jLTUwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtNTApO1xcbiB9XFxuXFxuIC50b2RvLWRldGFpbHMtZm9ybSA+IGRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixTQUFTO0lBQ1QsYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7Ozs7Ozs7OztJQWFJLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7O0lBSUksaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7OztJQU9JLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7SUFJSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTs7OztJQUlJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7Ozs7SUFJSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0FBQ0EseURBQTJDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7OztJQUlJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJDQUEyQztJQUMzQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7O0FBRXJCOztBQUVBOzs7SUFHSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0NBRUM7SUFDRyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0NBQ25DOztDQUVBO0lBQ0csaUNBQWlDO0lBQ2pDLGdDQUFnQztDQUNuQzs7Q0FFQTtJQUNHLGtCQUFrQjtDQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0temluYy01MDogI2ZhZmFmYTtcXG4gICAgLS16aW5jLTEwMDogI2Y0ZjRmNTtcXG4gICAgLS16aW5jLTIwMDogI2U0ZTRlNztcXG4gICAgLS16aW5jLTMwMDogI2Q0ZDRkODtcXG4gICAgLS16aW5jLTQwMDogI2ExYTFhYTtcXG4gICAgLS16aW5jLTUwMDogIzcxNzE3YTtcXG4gICAgLS16aW5jLTYwMDogIzUyNTI1YjtcXG4gICAgLS16aW5jLTcwMDogIzNmM2Y0NjtcXG4gICAgLS16aW5jLTgwMDogIzI3MjcyYTtcXG4gICAgLS16aW5jLTkwMDogIzE4MTgxYjtcXG4gICAgLS1wcmltYXJ5OiAjN2RkM2ZjO1xcbiAgICAtLXByaW1hcnktZGFyazogIzM4YmRmODtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjYmFlNmZkO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBjb2xvcjogdmFyKC0temluYy04MDApO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnNpZGViYXIsXFxuLmNvbnRlbnQsXFxuLmFkZC1wcm9qZWN0LWZpZWxkLFxcbi5hZGQtdG9kby1maWVsZCxcXG4udG9kby1pdGVtLFxcbi5zaG93LWFkZC1wcm9qZWN0LWZvcm0tYnRuLFxcbi5hZGQtcHJvamVjdC1jYW5jZWwtYnRuLFxcbi5jaGV2cm9uLFxcbi5leHBhbmRlZCxcXG4udG9kby1pdGVtLmV4cGFuZGVkOmhvdmVyLFxcbi5leHBhbmRlZCA+IC5jaGV2cm9uLFxcbi50b2RvLWl0ZW0uZXhwYW5kZWQ6aG92ZXIgPiAuY2hldnJvbixcXG4uY2FuY2VsLWRldGFpbHMtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYy01MCk7XFxuICAgIGNvbG9yOiB2YXIoLS16aW5jLTgwMCk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0temluYy0yMDApO1xcbn1cXG5cXG4ucHJvamVjdHMtdWwge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9kby11bCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtMjAwKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZpZWxkLFxcbi5hZGQtdG9kby1maWVsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggdmFyKC0temluYy0zMDApO1xcbn1cXG5cXG4uc2hvdy1hZGQtcHJvamVjdC1mb3JtLWJ0bixcXG4uc2hvdy1hZGQtdG9kby1mb3JtLWJ0biB7XFxuICAgIGNvbG9yOiB2YXIoLS16aW5jLTYwMCk7XFxufVxcblxcbi5zaG93LWFkZC10b2RvLWZvcm0tYnRuLFxcbi5hZGQtdG9kby1jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYy0yMDApO1xcbn1cXG5cXG4uc2hvdy1hZGQtdG9kby1mb3JtLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtMzAwKTtcXG59XFxuXFxuLnNob3ctYWRkLXByb2plY3QtZm9ybS1idG4sXFxuLnNob3ctYWRkLXRvZG8tZm9ybS1idG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlcixcXG4uc2hvdy1hZGQtcHJvamVjdC1mb3JtLWJ0bjpob3ZlcixcXG4udG9kby1pdGVtOmhvdmVyLFxcbi50b2RvLWl0ZW06aG92ZXIgPiAuY2hldnJvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtMTAwKTtcXG4gICAgY29sb3I6IHZhcigtLXppbmMtOTAwKTtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCxcXG4uY3VycmVudC1wcm9qZWN0OmhvdmVyLFxcbi5jdXJyZW50LXByb2plY3QgPiAuZGVsZXRlLXByb2plY3QsXFxuLmFkZC1wcm9qZWN0LWJ0bixcXG4uYWRkLXRvZG8tYnRuLFxcbi5zYXZlLWRldGFpbHMtYnRuLFxcbi5lZGl0LWRldGFpbHMtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGNvbG9yOiB2YXIoLS16aW5jLTgwMCk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIsXFxuLmFkZC10b2RvLWJ0bjpob3ZlcixcXG4uc2F2ZS1kZXRhaWxzLWJ0bjpob3ZlcixcXG4uZWRpdC1kZXRhaWxzLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3Q6aG92ZXIgPiAuZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGksXFxuYnV0dG9uLFxcbi5hZGQtcHJvamVjdC1maWVsZCxcXG4uYWRkLXRvZG8tZmllbGQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHZhcigtLXppbmMtMzAwKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSxcXG4udG9kby1pdGVtLFxcbi5hZGQtcHJvamVjdC1maWVsZCxcXG4uYWRkLXRvZG8tZmllbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggdmFyKC0temluYy0zMDApO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyID4gLmRlbGV0ZS1wcm9qZWN0LFxcbi50b2RvLWl0ZW06aG92ZXIgPiAuZGVsZXRlLXRvZG8sXFxuLnRvZG8taXRlbTpob3ZlciA+IC5jaGV2cm9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCxcXG4uZGVsZXRlLXRvZG8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jLTEwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvOmhvdmVyLFxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtMjAwKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsLnN0cmlrZXRocm91Z2gge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmNoZXZyb24ge1xcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9jaGV2cm9uLWRvd24uc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwOyAgXFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIgLyAzO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgcm90YXRlOiAxODBkZWc7XFxufVxcblxcbi5jaGVja2JveC10aXRsZS1jb250YWluZXIgPiBsYWJlbCxcXG5idXR0b24sXFxuLmNoZWNrYm94LXRpdGxlLWNvbnRhaW5lcixcXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLWZvcm0gPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHZhcigtLXppbmMtNjAwKTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIFxcbn1cXG5cXG4udG9kby1kZXRhaWxzLWZvcm0gPiBpbnB1dCwgXFxuLnRvZG8tZGV0YWlscy1mb3JtID4gdGV4dGFyZWEsIFxcbi50b2RvLWRldGFpbHMtZm9ybSA+IHNlbGVjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMiAvIDM7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS16aW5jLTgwMCk7XFxufVxcblxcbi50b2RvLWRldGFpbHMtZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuIC50b2RvLWRldGFpbHMtZm9ybSA+ICo6ZGlzYWJsZWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS16aW5jLTMwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMtNTApO1xcbiB9XFxuXFxuIC50b2RvLWRldGFpbHMtZm9ybSA+ICo6ZW5hYmxlZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXppbmMtNTAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYy01MCk7XFxuIH1cXG5cXG4gLnRvZG8tZGV0YWlscy1mb3JtID4gZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgdmlld0NvbnRyb2xsZXIgZnJvbSAnLi92aWV3Q29udHJvbGxlcic7XG5cbi8vIGluaXQgcHJvamVjdHMgYW5kIGN1cnJlbnRQcm9qZWN0IGluIGxvY2FsU3RvcmFnZVxuaWYoIUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoJycpKTtcbn1cbmlmKCFKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdCcpKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KCcwJykpO1xufVxubGV0IHByb2plY3RzID0gKEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpKTtcbmxldCBjdXJyZW50UHJvamVjdCA9IE51bWJlci5wYXJzZUludChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdCcpKSk7XG5cbmlmKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgwLCBcIlRvLURvXCIpO1xuICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufVxuXG4vLyBpbml0IHZpZXdDb250cm9sbGVyXG5jb25zdCB2aWV3ID0gdmlld0NvbnRyb2xsZXIocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0KTtcblxuLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuYWRkUHJvamVjdEV2ZW50TGlzdGVuZXJzKCk7XG5hZGRUb2RvRXZlbnRMaXN0ZW5lcnMoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctYWRkLXByb2plY3QtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFkZFByb2plY3RGb3JtKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1jYW5jZWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0Rm9ybSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZpZWxkJykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1hZGQtdG9kby1mb3JtLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWRkVG9kb0Zvcm0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWNhbmNlbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFkZFRvZG9Gb3JtKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9kbyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZmllbGQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICBhZGRUb2RvKCk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RFdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wcm9qZWN0JykuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlSXRlbSkpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0UHJvamVjdCcpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGUudGFyZ2V0KTtcbiAgICB2aWV3LnVwZGF0ZUN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICB2aWV3LnVwZGF0ZVRvZG9zKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XSk7XG4gICAgYWRkVG9kb0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9FdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmZvckVhY2goY2hlY2tib3ggPT4gY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wbGV0ZVRvZG8pKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJykuZm9yRWFjaCh0b2RvSXRlbSA9PiB0b2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNob3dUb2RvRGV0YWlscykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWRldGFpbHMtYnRuJykuZm9yRWFjaChlZGl0QnRuID0+IGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVUb2RvRWRpdE1vZGUpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2F2ZS1kZXRhaWxzLWJ0bicpLmZvckVhY2goc2F2ZUJ0biA9PiBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRvZG9FZGl0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbmNlbC1kZXRhaWxzLWJ0bicpLmZvckVhY2goY2FuY2VsQnRuID0+IGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVRvZG9FZGl0TW9kZSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG9kbycpLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUl0ZW0pKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zb2xlLmxvZygnYWRkUHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFByb2plY3RGaWVsZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZpZWxkJykudmFsdWUudG9TdHJpbmcoKS50cmltKCk7XG4gICAgaWYoYWRkUHJvamVjdEZpZWxkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdHMubGVuZ3RoLCBhZGRQcm9qZWN0RmllbGRWYWx1ZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHZpZXcudG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbiAgICAgICAgdmlldy51cGRhdGVQcm9qZWN0cyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGFkZFByb2plY3RFdmVudExpc3RlbmVycygpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiBhZGRUb2RvKCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRUb2RvJyk7XG4gICAgY29uc3QgYWRkVG9kb0ZpZWxkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZmllbGQnKS52YWx1ZS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBpZihhZGRUb2RvRmllbGRWYWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gVG9kbyhhZGRUb2RvRmllbGRWYWx1ZSk7XG4gICAgICAgIHByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgICAgICB2aWV3LnRvZ2dsZUFkZFRvZG9Gb3JtKCk7XG4gICAgICAgIHZpZXcudXBkYXRlVG9kb3MocHJvamVjdHNbY3VycmVudFByb2plY3RdKTtcbiAgICAgICAgYWRkVG9kb0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWRkUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc29sZS5sb2coJ3RvZ2dsZUFkZFByb2plY3RGb3JtJyk7XG4gICAgdmlldy50b2dnbGVBZGRQcm9qZWN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVBZGRUb2RvRm9ybSgpIHtcbiAgICBjb25zb2xlLmxvZygndG9nZ2xlQWRkVG9kb0Zvcm0nKTtcbiAgICB2aWV3LnRvZ2dsZUFkZFRvZG9Gb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVG9kbyhlKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbXBsZXRlVG9kbycpO1xuICAgIGxldCBpbmRleCA9IEFycmF5LmZyb20oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udG9kb3NbaW5kZXhdLmNvbXBsZXRlID0gIXByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS50b2Rvc1tpbmRleF0uY29tcGxldGU7XG4gICAgcG9wdWxhdGVTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNob3dUb2RvRGV0YWlscyhlKSB7XG4gICAgY29uc29sZS5sb2coJ3RvZ2dsZVNob3dUb2RvRGV0YWlscycpO1xuICAgIHZpZXcudG9nZ2xlU2hvd1RvZG9EZXRhaWxzKGUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2RvRWRpdE1vZGUoZSkge1xuICAgIGNvbnNvbGUubG9nKCd0b2dnbGVUb2RvRWRpdE1vZGUnKTtcbiAgICB2aWV3LnRvZ2dsZVRvZG9FZGl0TW9kZShlKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRvZG9FZGl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGluZGV4ID0gQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udG9kb3NbaW5kZXhdKTtcblxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLXVsIGZvcm0nKSlbaW5kZXhdKTtcbiAgICBmb3IgKHZhciBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICBwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0udG9kb3NbaW5kZXhdW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbY3VycmVudFByb2plY3RdLnRvZG9zW2luZGV4XSk7XG4gICAgdmlldy51cGRhdGVUb2Rvcyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdF0pO1xuICAgIGFkZFRvZG9FdmVudExpc3RlbmVycygpO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVJdGVtKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlSXRlbScpO1xuICAgIGxldCBpbmRleCA9IEFycmF5LmZyb20oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwiZGVsZXRlLXByb2plY3RcIikgPyBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpIDogcHJvamVjdHNbY3VycmVudFByb2plY3RdLnJlbW92ZVRvRG8oaW5kZXgpO1xuICAgIHZpZXcucmVtb3ZlSXRlbShlKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2plY3QpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KGlkLCB0aXRsZSkge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gYWRkVG9Ebyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgdGhpcy50b2Rvcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvRG8oaW5kZXgpIHtcbiAgICAgICAgaWYoaW5kZXggPCB0b2Rvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkF0dGVtcHRpbmcgdG8gcmVtb3ZlIGFuIGludmFsaWQgdG8tZG9cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgdG9kb3M6IHRvZG9zLFxuICAgICAgICBhZGRUb0RvLFxuICAgICAgICByZW1vdmVUb0RvXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsIFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgICAgICBub3Rlczogbm90ZXMsIFxuICAgICAgICBjb21wbGV0ZTogZmFsc2VcbiAgICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWV3Q29udHJvbGxlcihwcm9qZWN0c0FycmF5LCBjdXJyZW50UHJvamVjdCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3Qgc2hvd0FkZFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnN0IHNob3dBZGRUb2RvRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFkZFRvZG9GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhZGRUb2RvQ2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAoZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnT2RpbiBUby1EbyBMaXN0JztcblxuICAgICAgICAvLyBpbml0IHNpZGViYXIgd2l0aCBwcm9qZWN0c1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHMoY3VycmVudFByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdWwnKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4gICAgICAgIC8vIGluaXQgaGlkZGVuIGFkZCBwcm9qZWN0IGZvcm1cbiAgICAgICAgc2hvd0FkZFByb2plY3RGb3JtQnRuLnRleHRDb250ZW50ID0gJysgQWRkIG5ldyBwcm9qZWN0JztcbiAgICAgICAgc2hvd0FkZFByb2plY3RGb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3ctYWRkLXByb2plY3QtZm9ybS1idG4nKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFByb2plY3RGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBhZGRQcm9qZWN0RmllbGQuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtZmllbGQnLCAnaGlkZGVuJyk7XG4gICAgICAgIFxuICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBwcm9qZWN0JztcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFByb2plY3RDYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGFkZFByb2plY3RDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtY2FuY2VsLWJ0bicpO1xuXG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtY29udGFpbmVyJywgJ2hpZGRlbicpO1xuICAgICAgICBcbiAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmQoYWRkUHJvamVjdEJ0biwgYWRkUHJvamVjdENhbmNlbEJ0bik7XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmQoYWRkUHJvamVjdEZpZWxkLCBzaG93QWRkUHJvamVjdEZvcm1CdG4sIGFkZFByb2plY3RDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGluaXQgY29udGVudCB3aXRoIHRvZG9zXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLXVsJyk7XG4gICAgICAgIHVwZGF0ZVRvZG9zKHByb2plY3RzQXJyYXlbY3VycmVudFByb2plY3RdKTtcblxuICAgICAgICAvLyBpbml0IGhpZGRlbiBhZGQgdG9kbyBmb3JtXG4gICAgICAgIHNob3dBZGRUb2RvRm9ybUJ0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBuZXcgdG8tZG8nO1xuICAgICAgICBzaG93QWRkVG9kb0Zvcm1CdG4uY2xhc3NMaXN0LmFkZCgnc2hvdy1hZGQtdG9kby1mb3JtLWJ0bicpO1xuXG4gICAgICAgIGFkZFRvZG9GaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBhZGRUb2RvRmllbGQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tZmllbGQnLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9ICdBZGQgdG8tZG8nO1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWJ0bicpO1xuXG4gICAgICAgIGFkZFRvZG9DYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGFkZFRvZG9DYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY2FuY2VsLWJ0bicpO1xuXG4gICAgICAgIGFkZFRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY29udGFpbmVyJywgJ2hpZGRlbicpO1xuXG4gICAgICAgIGFkZFRvZG9Db250YWluZXIuYXBwZW5kKGFkZFRvZG9CdG4sIGFkZFRvZG9DYW5jZWxCdG4pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmQoYWRkVG9kb0ZpZWxkLCBzaG93QWRkVG9kb0Zvcm1CdG4sIGFkZFRvZG9Db250YWluZXIpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgc2lkZWJhciwgY29udGVudCk7XG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIC8vIHVwZGF0ZSBzZWxlY3RlZCBwcm9qZWN0XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpO1xuICAgICAgICBwcm9qZWN0TGlzdEl0ZW1zLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtc1tjdXJyZW50UHJvamVjdF0uY2xhc3NMaXN0LnRvZ2dsZSgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBQcm9qZWN0c1xuICAgICAgICBBcnJheS5mcm9tKHByb2plY3RzTGlzdC5jaGlsZHJlbikuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCBuZXcgUHJvamVjdHNcbiAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBpZihwcm9qZWN0LmlkID09PSBjdXJyZW50UHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50LXByb2plY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kKHByb2plY3RMaXN0SXRlbSwgYWRkUHJvamVjdEZpZWxkLCBzaG93QWRkUHJvamVjdEZvcm1CdG4sIGFkZFByb2plY3RDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgYWRkUHJvamVjdEZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBhZGRQcm9qZWN0RmllbGQuZm9jdXMoKTtcbiAgICAgICAgYWRkUHJvamVjdEZpZWxkLnNlbGVjdCgpO1xuXG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIHNob3dBZGRQcm9qZWN0Rm9ybUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkUHJvamVjdEZpZWxkLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2hvd1RvZG9EZXRhaWxzKGUpIHtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveC10aXRsZS1jb250YWluZXInKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0cmlrZXRocm91Z2gnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZXZyb24nKSkge1xuICAgICAgICAgICAgdmFyIGRldGFpbHNDb250YWluZXI7XG4gICAgICAgICAgICBzd2l0Y2goZS50YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdESVYnOiBcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0xBQkVMJzpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblsyXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQlVUVE9OJzpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgLy8gcm90YXRlIGNoZXZyb25cbiAgICAgICAgICAgIGRldGFpbHNDb250YWluZXIucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICAgICAgICAgIC8vIGhpZGUgY2hlY2tib3ggYW5kIHRpdGxlXG4gICAgICAgICAgICAvLyBkZXRhaWxzQ29udGFpbmVyLnBhcmVudE5vZGUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUb2RvRWRpdE1vZGUoZSkge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICAgIEFycmF5LmZyb20oZm9ybUVsZW1lbnRzKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5kaXNhYmxlZCA9ICFlbGVtZW50LmRpc2FibGVkKTtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWRldGFpbHMtYnRuJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwtZGV0YWlscy1idG4nKSkge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUFkZFRvZG9Gb3JtKCkge1xuICAgICAgICBhZGRUb2RvRmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFRvZG9GaWVsZC5mb2N1cygpO1xuICAgICAgICBhZGRUb2RvRmllbGQuc2VsZWN0KCk7XG5cbiAgICAgICAgYWRkVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgc2hvd0FkZFRvZG9Gb3JtQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBhZGRUb2RvRmllbGQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb2Rvcyhwcm9qZWN0KSB7XG4gICAgICAgIC8vIHJlbW92ZSBvbGQgVG9kb3NcbiAgICAgICAgQXJyYXkuZnJvbSh0b2RvTGlzdC5jaGlsZHJlbikuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKHRvZG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRvZG9MaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAodG9kby5jb21wbGV0ZSkgPyBjaGVja2JveC5jaGVja2VkID0gdHJ1ZSA6IGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQodG9kby5wcmlvcml0eSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZXRocm91Z2gnKTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hUaXRsZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hUaXRsZWNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC10aXRsZS1jb250YWluZXInKVxuICAgICAgICAgICAgY2hlY2tib3hUaXRsZWNvbnRhaW5lci5hcHBlbmQoY2hlY2tib3gsIHRvZG9UaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZXZyb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpO1xuXG4gICAgICAgICAgICAvLyB0b2RvIGRldGFpbHMvZWRpdCBmb3JtXG4gICAgICAgICAgICBjb25zdCB0b2RvRGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGV0YWlscy1mb3JtJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0b2RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUby1kbyc7XG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgaWYgKHRvZG8uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdG9kb0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbG93UHJpb3JpdHlPcHRpb24udmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgIGxvd1ByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ2xvdyc7XG4gICAgICAgICAgICBjb25zdCBtZWRQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbWVkUHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSAnc2VsZWN0ZWQnO1xuICAgICAgICAgICAgbWVkUHJpb3JpdHlPcHRpb24udmFsdWUgPSAnbWVkaXVtJztcbiAgICAgICAgICAgIG1lZFByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eU9wdGlvbi52YWx1ZSA9ICdoaWdoJztcbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9ICdoaWdoJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kb05vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdG9kb05vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuICAgICAgICAgICAgY29uc3QgdG9kb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgdG9kb05vdGVzSW5wdXQuaWQgPSAnbm90ZXMnO1xuICAgICAgICAgICAgdG9kb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25vdGVzJyk7XG4gICAgICAgICAgICBpZih0b2RvLm5vdGVzKSB7XG4gICAgICAgICAgICAgICAgdG9kb05vdGVzSW5wdXQudmFsdWUgPSB0b2RvLm5vdGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZWRpdERldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXREZXRhaWxzQnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgZWRpdERldGFpbHNCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1kZXRhaWxzLWJ0bicpO1xuICAgICAgICAgICAgZWRpdERldGFpbHNCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZURldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHNhdmVEZXRhaWxzQnRuLnRleHRDb250ZW50ID0gJ1NhdmUgY2hhbmdlcyc7XG4gICAgICAgICAgICBzYXZlRGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKCdzYXZlLWRldGFpbHMtYnRuJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgc2F2ZURldGFpbHNCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgY29uc3QgY2FuY2VsRGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2FuY2VsRGV0YWlsc0J0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGNhbmNlbERldGFpbHNCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWRldGFpbHMtYnRuJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgY2FuY2VsRGV0YWlsc0J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eUlucHV0LmFwcGVuZChsb3dQcmlvcml0eU9wdGlvbiwgbWVkUHJpb3JpdHlPcHRpb24sIGhpZ2hQcmlvcml0eU9wdGlvbik7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG5cblxuICAgICAgICAgICAgZm9ybUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGVkaXREZXRhaWxzQnRuLCBzYXZlRGV0YWlsc0J0biwgY2FuY2VsRGV0YWlsc0J0bik7XG5cbiAgICAgICAgICAgIHRvZG9EZXRhaWxzQ29udGFpbmVyLmFwcGVuZCh0b2RvVGl0bGVMYWJlbCwgdG9kb1RpdGxlSW5wdXQsIFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkxhYmVsLCB0b2RvRGVzY3JpcHRpb25JbnB1dCwgXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGVMYWJlbCwgdG9kb0R1ZURhdGVJbnB1dCwgXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwsIHRvZG9Qcmlvcml0eUlucHV0LFxuICAgICAgICAgICAgICAgIHRvZG9Ob3Rlc0xhYmVsLCB0b2RvTm90ZXNJbnB1dCxcbiAgICAgICAgICAgICAgICBmb3JtQnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0b2RvRGV0YWlsc0NvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZigoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgfHwgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHx8IChlbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdG9kb0xpc3RJdGVtLmFwcGVuZChjaGVja2JveFRpdGxlY29udGFpbmVyLCBjaGV2cm9uLCB0b2RvRGV0YWlsc0NvbnRhaW5lcik7IC8vIGRlbGV0ZUJ0blxuICAgICAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZChhZGRUb2RvRmllbGQsIHNob3dBZGRUb2RvRm9ybUJ0biwgYWRkVG9kb0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlUHJvamVjdHMsXG4gICAgICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LFxuICAgICAgICB0b2dnbGVBZGRQcm9qZWN0Rm9ybSxcbiAgICAgICAgdG9nZ2xlU2hvd1RvZG9EZXRhaWxzLFxuICAgICAgICB0b2dnbGVUb2RvRWRpdE1vZGUsXG4gICAgICAgIHRvZ2dsZUFkZFRvZG9Gb3JtLFxuICAgICAgICB1cGRhdGVUb2RvcyxcbiAgICAgICAgcmVtb3ZlSXRlbVxuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9