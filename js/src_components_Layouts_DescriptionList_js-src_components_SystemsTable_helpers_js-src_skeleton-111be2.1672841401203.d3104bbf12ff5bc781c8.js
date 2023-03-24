"use strict";
(self["webpackChunkinsights_remediations_frontend"] = self["webpackChunkinsights_remediations_frontend"] || []).push([["src_components_Layouts_DescriptionList_js-src_components_SystemsTable_helpers_js-src_skeleton-111be2"],{

/***/ "./src/Utilities/model.js":
/*!********************************!*\
  !*** ./src/Utilities/model.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIssuePrefix": () => (/* binding */ getIssuePrefix),
/* harmony export */   "getIssueApplication": () => (/* binding */ getIssueApplication),
/* harmony export */   "getSystemName": () => (/* binding */ getSystemName),
/* harmony export */   "formatUser": () => (/* binding */ formatUser),
/* harmony export */   "includesIgnoreCase": () => (/* binding */ includesIgnoreCase),
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT)
/* harmony export */ });
function getIssuePrefix(id) {
  return id.split(':')[0];
}
function getIssueApplication(_ref) {
  var id = _ref.id;

  switch (getIssuePrefix(id)) {
    case 'advisor':
      return 'Advisor';

    case 'ssg':
      return 'Compliance';

    case 'vulnerabilities':
      return 'Vulnerability';

    case 'patch-advisory':
      return 'Patch';

    default:
      return 'Unknown';
  }
}
/* eslint-disable camelcase */

function getSystemName(_ref2) {
  var display_name = _ref2.display_name,
      hostname = _ref2.hostname,
      id = _ref2.id;

  if (display_name) {
    return display_name;
  }

  if (hostname) {
    return hostname;
  }

  return id;
}
function formatUser(user) {
  return "".concat(user.first_name, " ").concat(user.last_name);
}
function includesIgnoreCase(text, included) {
  return text.toLowerCase().includes(included.toLowerCase());
}
var DATE_FORMAT = 'DD MMM YYYY, hh:mm UTC';

/***/ }),

/***/ "./src/Utilities/urls.js":
/*!*******************************!*\
  !*** ./src/Utilities/urls.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGroup": () => (/* binding */ getGroup),
/* harmony export */   "buildInventoryUrl": () => (/* binding */ buildInventoryUrl),
/* harmony export */   "getInventoryTabForIssue": () => (/* binding */ getInventoryTabForIssue),
/* harmony export */   "inventoryUrlBuilder": () => (/* binding */ inventoryUrlBuilder),
/* harmony export */   "buildIssueUrl": () => (/* binding */ buildIssueUrl),
/* harmony export */   "appUrl": () => (/* binding */ appUrl)
/* harmony export */ });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/Utilities/model.js");

 // Get the current group since we can be mounted at two urls

function getGroup() {
  var pathName = window.location.pathname.split('/');

  if (pathName[1] === 'beta') {
    return pathName[2];
  }

  return pathName[1];
}
function buildInventoryUrl(systemId, tab) {
  return appUrl('inventory').segment(systemId).segment(tab).toString();
}
function getInventoryTabForIssue(_ref) {
  var id = _ref.id;

  switch ((0,_model__WEBPACK_IMPORTED_MODULE_1__.getIssuePrefix)(id)) {
    case 'advisor':
      return 'advisor';

    case 'vulnerabilities':
      return 'vulnerabilities';

    case 'ssg':
      return 'compliance';

    case 'patch-advisory':
      return 'patch';

    default:
      return 'general_information';
  }
}
function inventoryUrlBuilder(issue) {
  var tab = getInventoryTabForIssue(issue);
  var base = appUrl('inventory').toString(); // intentionally not using urijs here to optimize for large number of systems

  return function (systemId) {
    return "".concat(base, "/").concat(systemId, "?appName=").concat(tab);
  };
}
function buildIssueUrl(id) {
  var parts = id.split(':');

  switch (parts[0]) {
    case 'advisor':
      return appUrl(parts[0]).segment('recommendations').segment(parts[1]).toString();

    case 'vulnerabilities':
      return appUrl(parts[0]).segment('cves').segment(parts[1]).toString();

    case 'patch-advisory':
      return appUrl(parts[0]).segment('advisories').segment(parts[1] + ':' + parts[2]).toString();

    default:
      return null;
  }
}
function appUrl(app) {
  switch (app) {
    case 'advisor':
      return urijs__WEBPACK_IMPORTED_MODULE_0___default()(document.baseURI).segment('insights').segment('advisor');

    case 'vulnerabilities':
      return urijs__WEBPACK_IMPORTED_MODULE_0___default()(document.baseURI).segment('insights').segment('vulnerability');

    case 'compliance':
    case 'ssg':
      return urijs__WEBPACK_IMPORTED_MODULE_0___default()(document.baseURI).segment('insights').segment('compliance');

    case 'inventory':
      return urijs__WEBPACK_IMPORTED_MODULE_0___default()(document.baseURI).segment(getGroup()).segment('inventory');

    case 'patch-advisory':
      return urijs__WEBPACK_IMPORTED_MODULE_0___default()(document.baseURI).segment('insights').segment('patch');

    default:
      throw new Error("Unknown app: ".concat(app));
  }
}

/***/ }),

/***/ "./src/components/Layouts/DescriptionList.js":
/*!***************************************************!*\
  !*** ./src/components/Layouts/DescriptionList.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DescriptionList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DescriptionList.scss */ "./src/components/Layouts/DescriptionList.scss");



var _excluded = ["title", "className", "children", "isBold", "hasGutter", "needsPointer"];





var DescriptionList = function DescriptionList(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      isBold = _ref.isBold,
      hasGutter = _ref.hasGutter,
      needsPointer = _ref.needsPointer,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  var descriptionListClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('rem-c-description-list__description', (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, 'rem-c-description-list__description--bold', isBold), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, 'rem-c-description-list__description--withGutter', hasGutter), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, 'rem-c-description-list__description--needsPointer', needsPointer));
  var mainClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'rem-c-description-list');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("dl", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: mainClasses
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("dt", {
    className: "rem-c-description-list__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("b", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("dd", {
    className: descriptionListClasses
  }, " ", children, " "));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptionList);
DescriptionList.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any),
  isBold: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  hasGutter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  needsPointer: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};

/***/ }),

/***/ "./src/components/SystemsTable/Columns.js":
/*!************************************************!*\
  !*** ./src/components/SystemsTable/Columns.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inventoryColumns": () => (/* binding */ inventoryColumns),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IssuesColumn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssuesColumn */ "./src/components/SystemsTable/IssuesColumn.js");
/* harmony import */ var _RebootColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RebootColumn */ "./src/components/SystemsTable/RebootColumn.js");



var Issues = {
  key: 'issues',
  title: 'Issues',
  // eslint-disable-next-line react/display-name
  renderFunc: function renderFunc(issues, id, _ref) {
    var display_name = _ref.display_name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IssuesColumn__WEBPACK_IMPORTED_MODULE_1__["default"], {
      issues: issues,
      id: id,
      display_name: display_name
    });
  },
  props: {
    width: 15,
    isStatic: true
  }
};
var RebootRequired = {
  key: 'rebootRequired',
  title: 'Reboot required',
  // eslint-disable-next-line react/display-name
  renderFunc: function renderFunc(rebootRequired) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RebootColumn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rebootRequired: rebootRequired
    });
  },
  props: {
    width: 15,
    isStatic: true
  }
};
var inventoryColumns = ['display_name', 'tags', 'system_profile'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([Issues, RebootRequired]);

/***/ }),

/***/ "./src/components/SystemsTable/IssuesColumn.js":
/*!*****************************************************!*\
  !*** ./src/components/SystemsTable/IssuesColumn.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RebootColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RebootColumn */ "./src/components/SystemsTable/RebootColumn.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utilities_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utilities/urls */ "./src/Utilities/urls.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_7__);









var issueType = {
  advisor: 'Advisor recommendation',
  vulnerabilities: 'Vulnerability',
  'patch-advisory': 'Patch advisory'
};

var sortByIndex = function sortByIndex(issue) {
  return [issue.description, issue.resolution.needs_reboot, issueType === null || issueType === void 0 ? void 0 : issueType[issue.id.split(':')[0]], issue.resolved];
};

var IssuesColumn = function IssuesColumn(_ref) {
  var issues = _ref.issues,
      status = _ref.status,
      display_name = _ref.display_name;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    index: 0,
    direction: 'asc'
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      sortByConfig = _useState2[0],
      setSortByConfig = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var StatusIcon = status ? _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__.CheckIcon : _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__.TimesIcon;
  var sortedIssues = lodash_sortBy__WEBPACK_IMPORTED_MODULE_7___default()(issues, function (sortIssue) {
    return sortByIndex(sortIssue)[sortByConfig.index];
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    isInline: true,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, issues.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.medium,
    title: "Actions for system ".concat(display_name),
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.Table, {
    variant: "compact",
    "aria-label": "Issues table for ".concat(display_name),
    rows: (sortByConfig.direction === 'asc' ? sortedIssues : sortedIssues.reverse()).map(function (issue) {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
          variant: "link",
          isInline: true,
          href: (0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_6__.buildIssueUrl)(issue.id)
        }, issue.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, issue.resolution.description))
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RebootColumn__WEBPACK_IMPORTED_MODULE_4__["default"], {
          rebootRequired: issue.resolution.needs_reboot
        }))
      }, (issueType === null || issueType === void 0 ? void 0 : issueType[issue.id.split(':')[0]]) || 'Unknown', {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StatusIcon, null), ' ', issue.resolved ? 'Remediated' : 'Not remediated')
      }];
    }),
    cells: [{
      title: 'Action',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.sortable]
    }, {
      title: 'Reboot required',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.sortable, (0,_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.cellWidth)(20)]
    }, {
      title: 'Type',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.sortable, (0,_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.cellWidth)(15)]
    }, {
      title: 'Status',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.sortable, (0,_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.cellWidth)(20)]
    }],
    sortBy: sortByConfig,
    onSort: function onSort(_e, index, direction) {
      return setSortByConfig({
        index: index,
        direction: direction
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_3__.TableBody, null))));
};

IssuesColumn.propTypes = {
  issues: prop_types__WEBPACK_IMPORTED_MODULE_8___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape()),
  rebootRequired: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  display_name: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssuesColumn);

/***/ }),

/***/ "./src/components/SystemsTable/RebootColumn.js":
/*!*****************************************************!*\
  !*** ./src/components/SystemsTable/RebootColumn.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);




var RebootColumn = function RebootColumn(_ref) {
  var rebootRequired = _ref.rebootRequired;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, rebootRequired ? 'Required' : 'Not required'));
};

RebootColumn.propTypes = {
  rebootRequired: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RebootColumn);

/***/ }),

/***/ "./src/components/SystemsTable/helpers.js":
/*!************************************************!*\
  !*** ./src/components/SystemsTable/helpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateChecked": () => (/* binding */ calculateChecked),
/* harmony export */   "calculateSystems": () => (/* binding */ calculateSystems),
/* harmony export */   "fetchInventoryData": () => (/* binding */ fetchInventoryData),
/* harmony export */   "mergedColumns": () => (/* binding */ mergedColumns)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Columns */ "./src/components/SystemsTable/Columns.js");




var _excluded = ["page"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var calculateChecked = function calculateChecked() {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var selected = arguments.length > 1 ? arguments[1] : undefined;
  return rows.every(function (_ref) {
    var id = _ref.id;
    return selected === null || selected === void 0 ? void 0 : selected.has(id);
  }) ? rows.length > 0 : rows.some(function (_ref2) {
    var id = _ref2.id;
    return selected === null || selected === void 0 ? void 0 : selected.has(id);
  }) && null;
};
var calculateSystems = function calculateSystems(remediation) {
  var _remediation$issues;

  return (remediation === null || remediation === void 0 ? void 0 : (_remediation$issues = remediation.issues) === null || _remediation$issues === void 0 ? void 0 : _remediation$issues.reduce(function (acc, curr) {
    var _curr$systems;

    curr === null || curr === void 0 ? void 0 : (_curr$systems = curr.systems) === null || _curr$systems === void 0 ? void 0 : _curr$systems.forEach(function (host) {
      var found = acc.find(function (_ref3) {
        var id = _ref3.id;
        return host.id === id;
      });
      var issue = {
        id: curr.id,
        resolution: curr.resolution,
        description: curr.description
      };

      if (found) {
        found.issues = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(found.issues), [_objectSpread(_objectSpread({}, issue), {}, {
          resolved: found.resolved
        })]);
        found.rebootRequired = found.issues.some(function (_ref4) {
          var resolution = _ref4.resolution;
          return resolution === null || resolution === void 0 ? void 0 : resolution.needs_reboot;
        });
      } else {
        var _curr$resolution;

        acc.push(_objectSpread(_objectSpread({}, host), {}, {
          issues: [_objectSpread(_objectSpread({}, issue), {}, {
            resolved: host.resolved
          })],
          rebootRequired: curr === null || curr === void 0 ? void 0 : (_curr$resolution = curr.resolution) === null || _curr$resolution === void 0 ? void 0 : _curr$resolution.needs_reboot
        }));
      }
    });
    return acc;
  }, [])) || [];
};
var fetchInventoryData = /*#__PURE__*/function () {
  var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
    var _ref5,
        systems,
        getEntities,
        _ref5$page,
        page,
        config,
        currSystems,
        data,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref5 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            systems = _args.length > 1 ? _args[1] : undefined;
            getEntities = _args.length > 2 ? _args[2] : undefined;
            _ref5$page = _ref5.page, page = _ref5$page === void 0 ? 0 : _ref5$page, config = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, _excluded);
            currSystems = systems.filter(function (_ref7) {
              var _config$filters;

              var display_name = _ref7.display_name;
              return (_config$filters = config.filters) !== null && _config$filters !== void 0 && _config$filters.hostnameOrId ? display_name.includes(config.filters.hostnameOrId) : true;
            });
            _context.next = 7;
            return getEntities(currSystems.slice((page - 1) * config.per_page, page * config.per_page).map(function (_ref8) {
              var id = _ref8.id;
              return id;
            }), _objectSpread(_objectSpread({}, config), {}, {
              hasItems: true
            }), true);

          case 7:
            data = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, data), {}, {
              page: page,
              results: data.results.map(function (host) {
                return _objectSpread(_objectSpread({}, currSystems.find(function (_ref9) {
                  var id = _ref9.id;
                  return id === host.id;
                })), host);
              }),
              total: currSystems.length
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchInventoryData() {
    return _ref6.apply(this, arguments);
  };
}();
var mergedColumns = function mergedColumns(defaultColumns) {
  return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultColumns.filter(function (column) {
    return _Columns__WEBPACK_IMPORTED_MODULE_5__.inventoryColumns.includes(column.key);
  })), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_Columns__WEBPACK_IMPORTED_MODULE_5__["default"]));
};

/***/ }),

/***/ "./src/skeletons/SkeletonTable.js":
/*!****************************************!*\
  !*** ./src/skeletons/SkeletonTable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/TableToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Spinner */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Spinner/Spinner.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_EmptyTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/EmptyTable */ "./node_modules/@redhat-cloud-services/frontend-components/esm/EmptyTable/EmptyTable.js");
/* harmony import */ var _SkeletonTable_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SkeletonTable.scss */ "./src/skeletons/SkeletonTable.scss");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var SkeletonTable = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SkeletonTable, _React$Component);

  var _super = _createSuper(SkeletonTable);

  function SkeletonTable(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SkeletonTable);

    _this = _super.call(this, props);
    _this.state = {
      columns: [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "xs"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "sm"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "sm"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "md"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "sm"
        })
      }],
      rows: [[{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "md"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "xs"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "xs"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "md"
        })
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: "md"
        })
      }]]
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SkeletonTable, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          columns = _this$state.columns,
          rows = _this$state.rows;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.Table, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        cells: columns,
        rows: rows,
        "aria-label": "Loading",
        variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.TableVariant.compact
      }, this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.TableHeader, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_EmptyTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
        centered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isFooter: true,
        className: "rem-c-skeleton-table__footer rem-m-align-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: "sm"
      })));
    }
  }]);

  return SkeletonTable;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonTable);

/***/ }),

/***/ "./src/components/Layouts/DescriptionList.scss":
/*!*****************************************************!*\
  !*** ./src/components/Layouts/DescriptionList.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Status.scss":
/*!************************************!*\
  !*** ./src/components/Status.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/skeletons/RemediationDetailsSkeleton.scss":
/*!*******************************************************!*\
  !*** ./src/skeletons/RemediationDetailsSkeleton.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/skeletons/SkeletonTable.scss":
/*!******************************************!*\
  !*** ./src/skeletons/SkeletonTable.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_components_Layouts_DescriptionList_js-src_components_SystemsTable_helpers_js-src_skeleton-111be2.f2710503dd20855addba69f15b200eac.js.map