(self["webpackChunkinsights_remediations_frontend"] = self["webpackChunkinsights_remediations_frontend"] || []).push([["src_modules_RemediationsModal_index_js-webpack_sharing_consume_default_scalprum_react-core_sc-8c64f8"],{

/***/ "./src/Utilities/http.js":
/*!*******************************!*\
  !*** ./src/Utilities/http.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doGet": () => (/* binding */ doGet),
/* harmony export */   "doPost": () => (/* binding */ doPost),
/* harmony export */   "doPatch": () => (/* binding */ doPatch),
/* harmony export */   "doDelete": () => (/* binding */ doDelete)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HEADERS = {
  'Content-Type': 'application/json; charset=utf-8'
};

var HttpError = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(HttpError, _Error);

  var _super = _createSuper(HttpError);

  function HttpError(description) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HttpError);

    _this = _super.call(this, 'Error communicating with the server');
    _this.description = description;
    return _this;
  }

  return HttpError;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Error));

function checkResponse(_x) {
  return _checkResponse.apply(this, arguments);
}

function _checkResponse() {
  _checkResponse = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(r) {
    var data, error;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!r.ok) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", r);

          case 2:
            if (!(r.status === 401)) {
              _context.next = 5;
              break;
            }

            window.insights.chrome.auth.logout();
            return _context.abrupt("return");

          case 5:
            if (!r.headers.get('content-type').includes('application/json')) {
              _context.next = 20;
              break;
            }

            // let's try to extract some more info
            data = false;
            _context.prev = 7;
            _context.next = 10;
            return r.json();

          case 10:
            data = _context.sent;
            _context.next = 15;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](7);

          case 15:
            if (!(data.errors && data.errors.length)) {
              _context.next = 20;
              break;
            }

            error = data.errors[0];

            if (!(error.details && error.details.name)) {
              _context.next = 19;
              break;
            }

            throw new HttpError("".concat(error.title, " (").concat(error.details.name, ")"));

          case 19:
            throw new HttpError(error.title);

          case 20:
            throw new HttpError("Unexpected response code ".concat(r.status));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 13]]);
  }));
  return _checkResponse.apply(this, arguments);
}

function json(_x2) {
  return _json.apply(this, arguments);
}

function _json() {
  _json = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2(r) {
    var type;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (r) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            type = r.headers.get('content-type');

            if (type.includes('application/json')) {
              _context2.next = 5;
              break;
            }

            throw new HttpError("Unexpected response type (".concat(type, ") returned"));

          case 5:
            return _context2.abrupt("return", r.json());

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _json.apply(this, arguments);
}

function doFetch(uri) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var opts = _objectSpread({
    credentials: 'same-origin',
    method: method
  }, options);

  if (headers) {
    opts.headers = headers;
  }

  if (data) {
    opts.body = JSON.stringify(data);
  }

  return fetch(uri, opts);
}

function doGet(uri) {
  return doFetch(uri.toString()).then(checkResponse).then(json);
}
function doPost(uri, data) {
  return doFetch(uri, 'POST', data, HEADERS).then(checkResponse).then(json);
}
function doPatch(uri, data) {
  return doFetch(uri, 'PATCH', data, HEADERS).then(checkResponse);
}
function doDelete(uri) {
  return doFetch(uri, 'DELETE').then(checkResponse);
}

/***/ }),

/***/ "./src/Utilities/utils.js":
/*!********************************!*\
  !*** ./src/Utilities/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "CAN_REMEDIATE": () => (/* binding */ CAN_REMEDIATE),
/* harmony export */   "AUTO_REBOOT": () => (/* binding */ AUTO_REBOOT),
/* harmony export */   "HAS_MULTIPLES": () => (/* binding */ HAS_MULTIPLES),
/* harmony export */   "SELECT_PLAYBOOK": () => (/* binding */ SELECT_PLAYBOOK),
/* harmony export */   "SELECTED_RESOLUTIONS": () => (/* binding */ SELECTED_RESOLUTIONS),
/* harmony export */   "MANUAL_RESOLUTION": () => (/* binding */ MANUAL_RESOLUTION),
/* harmony export */   "EXISTING_PLAYBOOK_SELECTED": () => (/* binding */ EXISTING_PLAYBOOK_SELECTED),
/* harmony export */   "EXISTING_PLAYBOOK": () => (/* binding */ EXISTING_PLAYBOOK),
/* harmony export */   "SYSTEMS": () => (/* binding */ SYSTEMS),
/* harmony export */   "RESOLUTIONS": () => (/* binding */ RESOLUTIONS),
/* harmony export */   "ISSUES_MULTIPLE": () => (/* binding */ ISSUES_MULTIPLE),
/* harmony export */   "TOGGLE_BULK_SELECT": () => (/* binding */ TOGGLE_BULK_SELECT),
/* harmony export */   "getGroup": () => (/* binding */ getGroup),
/* harmony export */   "getEnvUrl": () => (/* binding */ getEnvUrl),
/* harmony export */   "getBaseUri": () => (/* binding */ getBaseUri),
/* harmony export */   "remediationUrl": () => (/* binding */ remediationUrl),
/* harmony export */   "dedupeArray": () => (/* binding */ dedupeArray),
/* harmony export */   "pluralize": () => (/* binding */ pluralize),
/* harmony export */   "buildRows": () => (/* binding */ buildRows),
/* harmony export */   "onCollapse": () => (/* binding */ onCollapse),
/* harmony export */   "getResolution": () => (/* binding */ getResolution),
/* harmony export */   "createNotification": () => (/* binding */ createNotification),
/* harmony export */   "submitRemediation": () => (/* binding */ submitRemediation),
/* harmony export */   "entitySelected": () => (/* binding */ entitySelected),
/* harmony export */   "loadEntitiesFulfilled": () => (/* binding */ loadEntitiesFulfilled),
/* harmony export */   "changeBulkSelect": () => (/* binding */ changeBulkSelect),
/* harmony export */   "sortByAttr": () => (/* binding */ sortByAttr),
/* harmony export */   "fetchSystemsInfo": () => (/* binding */ fetchSystemsInfo),
/* harmony export */   "splitArray": () => (/* binding */ splitArray),
/* harmony export */   "getPlaybookSystems": () => (/* binding */ getPlaybookSystems),
/* harmony export */   "inventoryEntitiesReducer": () => (/* binding */ inventoryEntitiesReducer),
/* harmony export */   "shortenIssueId": () => (/* binding */ shortenIssueId),
/* harmony export */   "getIssuesMultiple": () => (/* binding */ getIssuesMultiple),
/* harmony export */   "matchPermissions": () => (/* binding */ matchPermissions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./src/api/index.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_RemediationsModal_common_SystemsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/RemediationsModal/common/SystemsTable */ "./src/modules/RemediationsModal/common/SystemsTable.js");




var _excluded = ["id"],
    _excluded2 = ["id"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function capitalize(string) {
  return "".concat(string.charAt(0).toUpperCase() + string.slice(1));
}
/* eslint-disable camelcase */









var CAN_REMEDIATE = 'remediations:remediation:write';
var AUTO_REBOOT = 'auto-reboot';
var HAS_MULTIPLES = 'has-multiples';
var SELECT_PLAYBOOK = 'select-playbook';
var SELECTED_RESOLUTIONS = 'selected-resolutions';
var MANUAL_RESOLUTION = 'manual-resolution';
var EXISTING_PLAYBOOK_SELECTED = 'existing-playbook-selected';
var EXISTING_PLAYBOOK = 'existing-playbook';
var SYSTEMS = 'systems';
var RESOLUTIONS = 'resolutions';
var ISSUES_MULTIPLE = 'issues-multiple';
var TOGGLE_BULK_SELECT = 'toggle-bulk-select'; // Get the current group since we can be mounted at two urls

var getGroup = function getGroup() {
  return window.location.pathname.split('/').filter(function (s) {
    return s !== 'beta' && s.length > 0;
  }).shift();
};
var getEnvUrl = function getEnvUrl() {
  var pathName = window.location.pathname.split('/');
  return pathName[1] === 'beta' ? 'beta/' : '';
};
var getBaseUri = function getBaseUri() {
  return "".concat(document.baseURI.replace('beta/', '')).concat(getEnvUrl());
};
var remediationUrl = function remediationUrl(id) {
  return "".concat(getBaseUri()).concat(getGroup(), "/remediations").concat(id ? "/".concat(id) : '');
};
var dedupeArray = function dedupeArray(array) {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(new Set(array));
};
var pluralize = function pluralize(count, str, fallback) {
  return count !== 1 ? fallback || str + 's' : str;
};

var sortRecords = function sortRecords(records, sortByState) {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(records).sort(function (a, b) {
    var key = Object.keys(a)[sortByState.index - 1];
    return (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0) * (sortByState.direction === 'desc' ? -1 : 1);
  });
};

var buildRows = function buildRows(records, sortByState, showAlternate, allSystemsNamed) {
  return sortRecords(records, sortByState).reduce(function (acc, curr, index) {
    var _curr$systems, _curr$systems2;

    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), [{
      isOpen: false,
      cells: [{
        title: curr.action
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          key: "".concat(index, "-description")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
          key: "".concat(index, "-resolution")
        }, curr.resolution), showAlternate && curr.alternate > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
          key: "".concat(index, "-alternate")
        }, curr.alternate, " alternate", ' ', pluralize(curr.alternate, 'resolution')))
      }, {
        title: curr.needsReboot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, "Required") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, "Not required")
      }, {
        title: ((_curr$systems = curr.systems) === null || _curr$systems === void 0 ? void 0 : _curr$systems.length) || 0,
        props: {
          isOpen: false
        }
      }]
    }], (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(((_curr$systems2 = curr.systems) === null || _curr$systems2 === void 0 ? void 0 : _curr$systems2.length) > 0 ? [{
      parent: index * 2,
      fullWidth: true,
      allSystemsNamed: allSystemsNamed.filter(function (system) {
        return curr.systems.includes(system.id);
      }),
      allSystems: curr.systems,
      cells: [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)),
        props: {
          colSpan: 5,
          className: 'pf-m-no-padding'
        }
      }]
    }] : []));
  }, []);
};

var buildSystemRow = function buildSystemRow() {
  var allSystemsNamed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var allSystems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_modules_RemediationsModal_common_SystemsTable__WEBPACK_IMPORTED_MODULE_12__.SystemsTableWithContext, {
    allSystemsNamed: allSystemsNamed,
    allSystems: allSystems,
    disabledColumns: ['updated']
  }));
};

var onCollapse = function onCollapse(event, rowKey, isOpen, rows, setRows) {
  var temp = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(rows);

  rows[rowKey].isOpen = isOpen;
  temp[rowKey + 1].cells = [{
    title: buildSystemRow(rows[rowKey + 1].allSystemsNamed, rows[rowKey + 1].allSystems)
  }];
  setRows(temp);
};
var getResolution = function getResolution(issueId, formValues) {
  var _formValues$RESOLUTIO;

  var issueResolutions = ((_formValues$RESOLUTIO = formValues[RESOLUTIONS].find(function (r) {
    return r.id === issueId;
  })) === null || _formValues$RESOLUTIO === void 0 ? void 0 : _formValues$RESOLUTIO.resolutions) || [];

  if (formValues[MANUAL_RESOLUTION] && issueId in formValues[SELECTED_RESOLUTIONS]) {
    return issueResolutions.filter(function (r) {
      return r.id === formValues[SELECTED_RESOLUTIONS][issueId];
    });
  }

  if (formValues[EXISTING_PLAYBOOK_SELECTED]) {
    var _formValues$EXISTING_, _formValues$EXISTING_2;

    var existing = (_formValues$EXISTING_ = formValues[EXISTING_PLAYBOOK]) === null || _formValues$EXISTING_ === void 0 ? void 0 : (_formValues$EXISTING_2 = _formValues$EXISTING_.issues) === null || _formValues$EXISTING_2 === void 0 ? void 0 : _formValues$EXISTING_2.find(function (i) {
      return i.id === issueId;
    });

    if (existing) {
      return issueResolutions.filter(function (r) {
        return r.id === existing.resolution.id;
      });
    }
  }

  return issueResolutions;
};
function createNotification(id, name, isNewSwitch) {
  var verb = isNewSwitch ? 'created' : 'updated';
  return {
    variant: 'success',
    title: "Playbook ".concat(verb),
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "You have successfully ", verb, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
      href: remediationUrl(id)
    }, name), "."),
    dismissable: true
  };
}
var submitRemediation = function submitRemediation(formValues, data, basePath, setState) {
  var percent = 1;
  setState({
    percent: percent
  });
  var issues = data.issues.map(function (_ref) {
    var _formValues$EXISTING_3, _formValues$EXISTING_4, _formValues$EXISTING_5, _formValues$EXISTING_6, _getResolution, _getResolution$;

    var id = _ref.id;
    var playbookSystems = ((_formValues$EXISTING_3 = formValues[EXISTING_PLAYBOOK]) === null || _formValues$EXISTING_3 === void 0 ? void 0 : (_formValues$EXISTING_4 = _formValues$EXISTING_3.issues) === null || _formValues$EXISTING_4 === void 0 ? void 0 : (_formValues$EXISTING_5 = _formValues$EXISTING_4.find(function (i) {
      return i.id === id;
    })) === null || _formValues$EXISTING_5 === void 0 ? void 0 : (_formValues$EXISTING_6 = _formValues$EXISTING_5.systems) === null || _formValues$EXISTING_6 === void 0 ? void 0 : _formValues$EXISTING_6.map(function (s) {
      return s.id;
    })) || [];
    return {
      id: id,
      resolution: (_getResolution = getResolution(id, formValues)) === null || _getResolution === void 0 ? void 0 : (_getResolution$ = _getResolution[0]) === null || _getResolution$ === void 0 ? void 0 : _getResolution$.id,
      systems: dedupeArray([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(formValues[EXISTING_PLAYBOOK_SELECTED] ? [] : playbookSystems), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(formValues[SYSTEMS][id] || [])))
    };
  }).filter(function (issue) {
    return issue.systems.length > 0;
  });
  var interval = setInterval(function () {
    percent < 99 && setState({
      percent: ++percent
    });
  }, (issues.length + Object.keys(formValues[SYSTEMS]).length) / 10);
  var add = {
    issues: issues,
    systems: []
  };

  var _ref2 = formValues[EXISTING_PLAYBOOK] || {},
      id = _ref2.id;

  var isUpdate = formValues[EXISTING_PLAYBOOK_SELECTED];
  (isUpdate && _api__WEBPACK_IMPORTED_MODULE_7__.patchRemediation(id, {
    add: add,
    auto_reboot: formValues[AUTO_REBOOT]
  }, basePath) || _api__WEBPACK_IMPORTED_MODULE_7__.createRemediation({
    name: formValues[SELECT_PLAYBOOK],
    add: add,
    auto_reboot: formValues[AUTO_REBOOT]
  }, basePath)).then(function (_ref3) {
    var _data$onRemediationCr;

    var id = _ref3.id;
    setState({
      id: id,
      percent: 100
    });
    data === null || data === void 0 ? void 0 : (_data$onRemediationCr = data.onRemediationCreated) === null || _data$onRemediationCr === void 0 ? void 0 : _data$onRemediationCr.call(data, {
      remediation: {
        id: id,
        name: name
      },
      getNotification: function getNotification() {
        return createNotification(id, formValues[SELECT_PLAYBOOK], !isUpdate);
      }
    });
  })["catch"](function () {
    setState({
      failed: true
    });
  })["finally"](function () {
    return clearInterval(interval);
  });
};
var entitySelected = function entitySelected(state, _ref4) {
  var payload = _ref4.payload;
  var selected = state.selected || [];

  if (payload.selected) {
    selected = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(selected), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(payload.id === 0 ? state.rows.map(function (row) {
      return row.id;
    }) : [payload.id]));
  } else {
    if (payload.id === 0) {
      var rowsIds = state.rows.map(function (row) {
        return row.id;
      });
      selected = selected.filter(function (item) {
        return !rowsIds.includes(item);
      });
    } else {
      selected = payload.id === -1 ? [] : selected.filter(function (item) {
        return item !== payload.id;
      });
    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    selected: selected
  });
};
var loadEntitiesFulfilled = function loadEntitiesFulfilled(state, allSystems, sortBy) {
  var selected = state.selected || [];

  if (!state.selected) {
    selected = allSystems ? allSystems : state.rows.map(function (row) {
      return row.id;
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    selected: selected,
    rows: sortByAttr(state.rows.map(function (_ref5) {
      var _selected;

      var id = _ref5.id,
          row = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, _excluded);

      return _objectSpread(_objectSpread({
        id: id
      }, row), {}, {
        selected: !!((_selected = selected) !== null && _selected !== void 0 && _selected.includes(id))
      });
    }), 'display_name', (sortBy === null || sortBy === void 0 ? void 0 : sortBy.direction) || 'asc'),
    sortBy: sortBy
  });
};
var changeBulkSelect = function changeBulkSelect(state, action) {
  var removeSelected = !action.payload;

  if (!removeSelected) {
    state.selected = dedupeArray([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(state.selected), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(state.rows.map(function (row) {
      return row.id;
    }))));
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    selected: removeSelected ? [] : state.selected,
    rows: state.rows.map(function (_ref6) {
      var id = _ref6.id,
          row = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref6, _excluded2);

      return _objectSpread(_objectSpread({
        id: id
      }, row), {}, {
        selected: !removeSelected
      });
    })
  });
};
var sortByAttr = function sortByAttr(systems, attribute, direction) {
  return Array.isArray(systems) ? systems.sort(function (a, b) {
    return (a[attribute] > b[attribute] && 1 || -1) * (direction === 'asc' ? 1 : -1);
  }) : [];
};
var fetchSystemsInfo = /*#__PURE__*/function () {
  var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(config) {
    var _config$orderDirectio, _config$filters, _config$filters$hostn;

    var sortableColumns,
        allSystemsNamed,
        getEntities,
        isSortingValid,
        hostnameOrId,
        systems,
        sliced,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sortableColumns = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
            allSystemsNamed = _args.length > 2 && _args[2] !== undefined ? _args[2] : [];
            getEntities = _args.length > 3 ? _args[3] : undefined;
            isSortingValid = sortableColumns.includes(config.orderBy);
            config.orderBy = isSortingValid ? config.orderBy : undefined;
            config.orderDirection = isSortingValid ? (_config$orderDirectio = config.orderDirection) === null || _config$orderDirectio === void 0 ? void 0 : _config$orderDirectio.toLowerCase() : undefined;
            allSystemsNamed = sortByAttr(allSystemsNamed, 'name', config.orderDirection);
            hostnameOrId = config === null || config === void 0 ? void 0 : (_config$filters = config.filters) === null || _config$filters === void 0 ? void 0 : (_config$filters$hostn = _config$filters.hostnameOrId) === null || _config$filters$hostn === void 0 ? void 0 : _config$filters$hostn.toLowerCase();
            systems = hostnameOrId ? allSystemsNamed.reduce(function (acc, curr) {
              return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(curr.name.toLowerCase().includes(hostnameOrId) ? [curr.id] : []));
            }, []) : allSystemsNamed.map(function (system) {
              return system.id;
            });
            sliced = systems.slice((config.page - 1) * config.per_page, config.page * config.per_page);

            if (!(sliced.length > 0)) {
              _context.next = 16;
              break;
            }

            _context.next = 13;
            return getEntities(sliced, _objectSpread(_objectSpread({}, config), {}, {
              hasItems: true,
              page: 1
            }), true);

          case 13:
            _context.t0 = _context.sent;
            _context.next = 17;
            break;

          case 16:
            _context.t0 = {};

          case 17:
            data = _context.t0;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, data), {}, {
              results: sortByAttr(data.results, 'display_name', config.orderDirection)
            })), {}, {
              total: systems.length,
              page: config.page,
              per_page: config.per_page,
              orderBy: config.orderBy,
              orderDirection: config.orderDirection,
              sortBy: {
                key: config.orderBy,
                direction: config.orderDirection
              }
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchSystemsInfo(_x) {
    return _ref7.apply(this, arguments);
  };
}();
var splitArray = function splitArray(inputArray, perChunk) {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(new Array(Math.ceil(inputArray.length / perChunk))).map(function (_item, key) {
    return inputArray.slice(key * perChunk, (key + 1) * perChunk);
  });
};
var getPlaybookSystems = function getPlaybookSystems(playbook) {
  var _playbook$issues;

  return playbook && lodash_uniqWith__WEBPACK_IMPORTED_MODULE_8___default()((_playbook$issues = playbook.issues) === null || _playbook$issues === void 0 ? void 0 : _playbook$issues.reduce(function (acc, curr) {
    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(curr.systems.map(function (system) {
      return {
        id: system.id,
        name: system.display_name
      };
    })));
  }, []), (lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default())) || [];
};
var inventoryEntitiesReducer = function inventoryEntitiesReducer(allSystems, _ref8) {
  var _applyReducerHash;

  var LOAD_ENTITIES_FULFILLED = _ref8.LOAD_ENTITIES_FULFILLED;
  return (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_10__.applyReducerHash)((_applyReducerHash = {
    SELECT_ENTITY: function SELECT_ENTITY(state, action) {
      return entitySelected(state, action);
    }
  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_applyReducerHash, LOAD_ENTITIES_FULFILLED, function (state, _ref9) {
    var payload = _ref9.payload;
    return loadEntitiesFulfilled(state, allSystems, {
      key: payload.orderBy,
      direction: payload.orderDirection
    });
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_applyReducerHash, TOGGLE_BULK_SELECT, changeBulkSelect), _applyReducerHash));
};
var shortenIssueId = function shortenIssueId(issueId) {
  var _issueId$split, _issueId$split$slice;

  return (issueId === null || issueId === void 0 ? void 0 : (_issueId$split = issueId.split('|')) === null || _issueId$split === void 0 ? void 0 : (_issueId$split$slice = _issueId$split.slice(-1)) === null || _issueId$split$slice === void 0 ? void 0 : _issueId$split$slice[0]) || issueId;
};
var getIssuesMultiple = function getIssuesMultiple() {
  var issues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var systems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var resolutions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return issues.map(function (issue) {
    var _resolutions$find;

    var issueResolutions = ((_resolutions$find = resolutions.find(function (r) {
      return r.id === issue.id;
    })) === null || _resolutions$find === void 0 ? void 0 : _resolutions$find.resolutions) || [];

    var _ref10 = (issueResolutions === null || issueResolutions === void 0 ? void 0 : issueResolutions[0]) || {},
        description = _ref10.description,
        needsReboot = _ref10.needs_reboot;

    return {
      action: issues.find(function (i) {
        return i.id === issue.id;
      }).description,
      resolution: description,
      needsReboot: needsReboot,
      systems: dedupeArray([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(issue.systems || []), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(systems))),
      id: issue.id,
      alternate: (issueResolutions === null || issueResolutions === void 0 ? void 0 : issueResolutions.length) - 1
    };
  }).filter(function (record) {
    return record.alternate > 0;
  });
};
var matchPermissions = function matchPermissions(permissionA, permissionB) {
  var segmentsA = permissionA.split(':');
  var segmentsB = permissionB.split(':');

  if (segmentsA.length !== segmentsB.length) {
    return false;
  }

  return segmentsA.every(function (segmentA, index) {
    return segmentA === segmentsB[index] || segmentA === '*' || segmentsB[index] === '*';
  });
};

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRemediationStatus": () => (/* binding */ getRemediationStatus),
/* harmony export */   "getHosts": () => (/* binding */ getHosts),
/* harmony export */   "remediations": () => (/* binding */ remediations),
/* harmony export */   "resolutions": () => (/* binding */ resolutions),
/* harmony export */   "sources": () => (/* binding */ sources),
/* harmony export */   "downloadPlaybook": () => (/* binding */ downloadPlaybook),
/* harmony export */   "getIsReceptorConfigured": () => (/* binding */ getIsReceptorConfigured),
/* harmony export */   "deleteSystemsFromRemediation": () => (/* binding */ deleteSystemsFromRemediation),
/* harmony export */   "createRemediation": () => (/* binding */ createRemediation),
/* harmony export */   "patchRemediation": () => (/* binding */ patchRemediation),
/* harmony export */   "getRemediations": () => (/* binding */ getRemediations),
/* harmony export */   "getRemediation": () => (/* binding */ getRemediation),
/* harmony export */   "getResolutionsBatch": () => (/* binding */ getResolutionsBatch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "webpack/sharing/consume/default/axios/axios?7885");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/remediations-client */ "./node_modules/@redhat-cloud-services/remediations-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redhat_cloud_services_sources_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/sources-client */ "./node_modules/@redhat-cloud-services/sources-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_sources_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_sources_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utilities_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Utilities/http */ "./src/Utilities/http.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_13__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





/*
 * TODO: replace these with generated clients
 */




function url() {
  var url = urijs__WEBPACK_IMPORTED_MODULE_13___default()(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE).segment('remediations');

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (segment) {
    return url.segment(segment);
  });
  return url;
}

var getRemediationStatus = function getRemediationStatus(id) {
  return (0,_Utilities_http__WEBPACK_IMPORTED_MODULE_12__.doGet)(url(id, 'status'));
};
function getHosts() {
  return (0,_Utilities_http__WEBPACK_IMPORTED_MODULE_12__.doGet)('/api/inventory/v1/hosts');
}
/*
 * end of TODO
 */

var HttpError = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(HttpError, _Error);

  var _super = _createSuper(HttpError);

  function HttpError(description) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HttpError);

    _this = _super.call(this, 'Error communicating with the server');
    _this.description = description;
    return _this;
  }

  return HttpError;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Error));

function authInterceptor(_x) {
  return _authInterceptor.apply(this, arguments);
}

function _authInterceptor() {
  _authInterceptor = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(config) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.insights.chrome.auth.getUser();

          case 2:
            return _context.abrupt("return", config);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _authInterceptor.apply(this, arguments);
}

function responseDataInterceptor(response) {
  if (response.data) {
    return _objectSpread(_objectSpread({}, response.data), {}, {
      etag: response.headers.etag
    });
  }

  return response;
}

function interceptor401(err) {
  if (!err) {
    return;
  }

  if (err.response && err.response.status === 401) {
    window.insights.chrome.auth.logout();
    return false;
  }

  throw err;
}

function errorInterceptor(err) {
  if (!err) {
    return;
  }

  if (err.response && err.response.data && err.response.data.errors && err.response.data.errors.length) {
    var error = err.response.data.errors[0];

    if (error.details && error.details.name) {
      throw new HttpError("".concat(error.title, " (").concat(error.details.name, ")"));
    }

    throw new HttpError(error.title);
  }

  throw err;
}

var instance = axios__WEBPACK_IMPORTED_MODULE_9___default().create();
instance.interceptors.request.use(authInterceptor);
instance.interceptors.response.use(responseDataInterceptor);
instance.interceptors.response.use(null, interceptor401);
instance.interceptors.response.use(null, errorInterceptor);
var remediations = new _redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10__.RemediationsApi(undefined, _config__WEBPACK_IMPORTED_MODULE_8__.API_BASE, instance);
var resolutions = new _redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10__.ResolutionsApi(undefined, _config__WEBPACK_IMPORTED_MODULE_8__.API_BASE, instance);
var sources = new _redhat_cloud_services_sources_client__WEBPACK_IMPORTED_MODULE_11__.DefaultApi(undefined, _config__WEBPACK_IMPORTED_MODULE_8__.SOURCES_BASE, instance);
function downloadPlaybook(selectedIds) {
  return new Promise(function (resolve, reject) {
    var tab = selectedIds.length > 1 ? new _redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10__.RemediationsApiAxiosParamCreator().downloadPlaybooks(selectedIds).then(function (value) {
      return window.open(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE + value.url);
    }) : new _redhat_cloud_services_remediations_client__WEBPACK_IMPORTED_MODULE_10__.RemediationsApiAxiosParamCreator().getRemediationPlaybook(selectedIds[0]).then(function (value) {
      return window.open(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE + value.url);
    });

    if (!tab) {
      return reject();
    }

    var handle = setInterval(function () {
      if (tab.closed) {
        clearInterval(handle);
        resolve();
      }
    }, 500);
  });
}
function getIsReceptorConfigured() {
  return (0,_Utilities_http__WEBPACK_IMPORTED_MODULE_12__.doGet)("".concat(window.location.origin, "/api/sources/v2.0/endpoints?filter[receptor_node][not_nil]"));
}
function deleteSystemsFromRemediation(systems, remediation) {
  return Promise.all(systems.flatMap(function (system) {
    return system.issues.map(function (issue) {
      return remediations.deleteRemediationIssueSystem(remediation.id, issue.id, system.id);
    });
  }));
}

function checkResponse(r) {
  if (!r.ok) {
    var error = new Error("Unexpected response code ".concat(r.status));
    error.statusCode = r.status;
    throw error;
  }

  return r;
}

function json(r) {
  checkResponse(r);
  return r.json();
}

var headers = Object.freeze({
  'Content-Type': 'application/json; charset=utf-8'
});
function createRemediation(data) {
  var uri = new (urijs__WEBPACK_IMPORTED_MODULE_13___default())(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE).segment('remediations').toString();
  return fetch(uri, {
    headers: headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data)
  }).then(json);
}
function patchRemediation(id, data) {
  var uri = new (urijs__WEBPACK_IMPORTED_MODULE_13___default())(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE).segment('remediations').segment(id).toString();
  return fetch(uri, {
    headers: headers,
    credentials: 'include',
    method: 'PATCH',
    body: JSON.stringify(data)
  }).then(checkResponse);
}
function getRemediations() {
  var uri = new (urijs__WEBPACK_IMPORTED_MODULE_13___default())(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE).segment('remediations').query({
    limit: 200
  }).toString();
  return fetch(uri, {
    credentials: 'include'
  }).then(json);
}
function getRemediation(id) {
  var uri = new (urijs__WEBPACK_IMPORTED_MODULE_13___default())(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE).segment('remediations').segment(id).toString();
  return fetch(uri, {
    credentials: 'include'
  }).then(json);
}
function getResolutionsBatch(issues) {
  var uri = new (urijs__WEBPACK_IMPORTED_MODULE_13___default())(_config__WEBPACK_IMPORTED_MODULE_8__.API_BASE).segment('resolutions').toString();
  return fetch(uri, {
    headers: headers,
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      issues: issues
    })
  }).then(json);
}

/***/ }),

/***/ "./src/api/inventory.js":
/*!******************************!*\
  !*** ./src/api/inventory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVENTORY_API_BASE": () => (/* binding */ INVENTORY_API_BASE),
/* harmony export */   "hosts": () => (/* binding */ hosts),
/* harmony export */   "getHostsById": () => (/* binding */ getHostsById)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/interceptors/interceptors.js");
/* harmony import */ var _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redhat-cloud-services/host-inventory-client */ "./node_modules/@redhat-cloud-services/host-inventory-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_0__);


var INVENTORY_API_BASE = '/api/inventory/v1';
var hosts = new _redhat_cloud_services_host_inventory_client__WEBPACK_IMPORTED_MODULE_0__.HostsApi(undefined, INVENTORY_API_BASE, _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_1__["default"]);
function getHostsById(systems, _ref) {
  var page = _ref.page,
      perPage = _ref.perPage;
  return hosts.apiHostGetHostById(systems, undefined, perPage, page);
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE": () => (/* binding */ API_BASE),
/* harmony export */   "SOURCES_BASE": () => (/* binding */ SOURCES_BASE),
/* harmony export */   "isBeta": () => (/* binding */ isBeta)
/* harmony export */ });
var _insights, _insights$chrome;

var API_BASE = '/api/remediations/v1';
var SOURCES_BASE = '/api/sources/v2.0';
var isBeta = (_insights = insights) === null || _insights === void 0 ? void 0 : (_insights$chrome = _insights.chrome) === null || _insights$chrome === void 0 ? void 0 : _insights$chrome.isBeta;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "SEARCH_DEBOUNCE_DELAY": () => (/* binding */ SEARCH_DEBOUNCE_DELAY),
/* harmony export */   "FETCH_SELECTED_HOSTS": () => (/* binding */ FETCH_SELECTED_HOSTS),
/* harmony export */   "FETCH_RESOLUTIONS": () => (/* binding */ FETCH_RESOLUTIONS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/keyBy */ "./node_modules/lodash/keyBy.js");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__);



var asyncActions = lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default()(['LOAD_REMEDIATIONS', 'CREATE_REMEDIATIONS', 'LOAD_REMEDIATION', 'LOAD_REMEDIATION_STATUS', 'REFRESH_REMEDIATION', 'PATCH_REMEDIATION', 'DELETE_REMEDIATION', 'DELETE_REMEDIATION_ISSUE', 'DELETE_REMEDIATION_ISSUE_SYSTEM', 'PATCH_REMEDIATION_ISSUE', 'GET_RESOLUTIONS', 'GET_CONNECTION_STATUS', 'RUN_REMEDIATION', 'EXECUTE_PLAYBOOK_BANNER', 'RUN_REMEDIATION', 'GET_PLAYBOOK_RUNS', 'GET_PLAYBOOK_RUN', 'GET_PLAYBOOK_RUN_SYSTEMS', 'GET_PLAYBOOK_RUN_SYSTEM_DETAILS', 'CANCEL_PLAYBOOK_RUNS', 'GET_ENDPOINT', 'CHECK_EXECUTABLE'], function (a) {
  return [a, "".concat(a, "_PENDING"), "".concat(a, "_FULFILLED"), "".concat(a, "_REJECTED")];
});
var actions = ['SET_ETAG', 'EXPAND_INVENTORY_TABLE', 'SELECT_ENTITY'];
var ACTION_TYPES = lodash_keyBy__WEBPACK_IMPORTED_MODULE_1___default()([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(asyncActions), actions), function (k) {
  return k;
});
var SEARCH_DEBOUNCE_DELAY = 500;
var FETCH_SELECTED_HOSTS = 'FETCH_SELECTED_HOSTS';
var FETCH_RESOLUTIONS = 'FETCH_RESOLUTIONS';

/***/ }),

/***/ "./src/modules/RemediationsModal/RemediationsWizard.js":
/*!*************************************************************!*\
  !*** ./src/modules/RemediationsModal/RemediationsWizard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemediationWizard": () => (/* binding */ RemediationWizard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _store_actions_host_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/host-actions */ "./src/store/actions/host-actions.js");
/* harmony import */ var _store_actions_resolution_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/resolution-actions */ "./src/store/actions/resolution-actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-promise-middleware */ "webpack/sharing/consume/default/redux-promise-middleware/redux-promise-middleware");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _store_reducers_host_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/reducers/host-reducer */ "./src/store/reducers/host-reducer.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/keyBy */ "./node_modules/lodash/keyBy.js");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_driven_forms_react_form_renderer_form_renderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/esm/form-renderer/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_form_template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/esm/form-template/index.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schema */ "./src/modules/RemediationsModal/schema.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_wizard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/wizard */ "./node_modules/@data-driven-forms/pf4-component-mapper/esm/wizard/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_text_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/text-field */ "./node_modules/@data-driven-forms/pf4-component-mapper/esm/text-field/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/esm/component-types/index.js");
/* harmony import */ var _steps_selectPlaybook__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./steps/selectPlaybook */ "./src/modules/RemediationsModal/steps/selectPlaybook.js");
/* harmony import */ var _steps_reviewSystems__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./steps/reviewSystems */ "./src/modules/RemediationsModal/steps/reviewSystems.js");
/* harmony import */ var _steps_reviewActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./steps/reviewActions */ "./src/modules/RemediationsModal/steps/reviewActions.js");
/* harmony import */ var _steps_issueResolution__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./steps/issueResolution */ "./src/modules/RemediationsModal/steps/issueResolution.js");
/* harmony import */ var _steps_review__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./steps/review */ "./src/modules/RemediationsModal/steps/review.js");
/* harmony import */ var _store_reducers_resolutions_reducer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../store/reducers/resolutions-reducer */ "./src/store/reducers/resolutions-reducer.js");
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var _steps_progress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./steps/progress */ "./src/modules/RemediationsModal/steps/progress.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



























var initialState = {
  submitted: false,
  id: undefined,
  percent: 0,
  failed: false,
  formValues: undefined
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'schema':
      return _objectSpread(_objectSpread({}, state), {}, {
        schema: action.payload
      });

    case 'state':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      throw new Error();
  }
};

var RemediationWizard = function RemediationWizard(_ref) {
  var _data$issues, _ref2, _objectSpread2;

  var setOpen = _ref.setOpen,
      data = _ref.data,
      basePath = _ref.basePath,
      registry = _ref.registry;
  var allSystems = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.dedupeArray)((_data$issues = data.issues) === null || _data$issues === void 0 ? void 0 : _data$issues.reduce(function (acc, curr) {
    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(curr.systems || []));
  }, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(data.systems || []))));
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(reducer, initialState),
      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      _setState = _useReducer2[1];

  var issuesById = lodash_keyBy__WEBPACK_IMPORTED_MODULE_12___default()(data.issues, function (issue) {
    return issue.id;
  });

  var fetchHostNames = function fetchHostNames() {
    var systems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var perChunk = 50;
    var chunks = (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.splitArray)(systems, perChunk);
    chunks.forEach(function (chunk) {
      dispatch((0,_store_actions_host_actions__WEBPACK_IMPORTED_MODULE_6__.fetchHostsById)(chunk, {
        page: 1,
        perPage: perChunk
      }));
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    _setState({
      type: 'schema',
      payload: (0,_schema__WEBPACK_IMPORTED_MODULE_15__["default"])(data.issues)
    });

    registry.register({
      hostReducer: (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__.applyReducerHash)(_store_reducers_host_reducer__WEBPACK_IMPORTED_MODULE_10__["default"], _store_reducers_host_reducer__WEBPACK_IMPORTED_MODULE_10__.hostsInitialState),
      resolutionsReducer: (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__.applyReducerHash)(_store_reducers_resolutions_reducer__WEBPACK_IMPORTED_MODULE_25__["default"], _store_reducers_resolutions_reducer__WEBPACK_IMPORTED_MODULE_25__.resolutionsInitialState)
    });
    dispatch((0,_store_actions_resolution_actions__WEBPACK_IMPORTED_MODULE_7__.fetchResolutions)(data.issues));
    fetchHostNames(allSystems.current);
  }, []);
  var mapperExtension = {
    'select-playbook': {
      component: _steps_selectPlaybook__WEBPACK_IMPORTED_MODULE_20__["default"],
      issues: data.issues,
      systems: data.systems,
      allSystems: allSystems.current
    },
    'review-systems': {
      component: _steps_reviewSystems__WEBPACK_IMPORTED_MODULE_21__["default"],
      issues: data.issues,
      systems: data.systems || [],
      allSystems: allSystems.current,
      registry: registry
    },
    'review-actions': {
      component: _steps_reviewActions__WEBPACK_IMPORTED_MODULE_22__["default"],
      issues: data.issues
    },
    'issue-resolution': {
      component: _steps_issueResolution__WEBPACK_IMPORTED_MODULE_23__["default"]
    },
    review: {
      component: _steps_review__WEBPACK_IMPORTED_MODULE_24__["default"],
      data: data,
      issuesById: issuesById
    }
  };
  var validatorMapper = {
    'validate-systems': function validateSystems() {
      return function (value) {
        return value && Object.values(value).filter(function (value) {
          return (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(value) !== undefined;
        }).length ? undefined : 'At least one system must be selected. Actions must be associated to a system to be added to a playbook.';
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, state.schema && !state.submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_data_driven_forms_react_form_renderer_form_renderer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    schema: state.schema,
    subscription: {
      values: true
    },
    FormTemplate: function FormTemplate(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_data_driven_forms_pf4_component_mapper_form_template__WEBPACK_IMPORTED_MODULE_14__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        showFormControls: false
      }));
    },
    initialValues: (_ref2 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.RESOLUTIONS, []), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.ISSUES_MULTIPLE, []), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.SYSTEMS, {}), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.MANUAL_RESOLUTION, true), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.SELECTED_RESOLUTIONS, {}), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, _Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.EXISTING_PLAYBOOK_SELECTED, false), _ref2),
    componentMapper: _objectSpread((_objectSpread2 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread2, _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_19__["default"].WIZARD, {
      component: _data_driven_forms_pf4_component_mapper_wizard__WEBPACK_IMPORTED_MODULE_16__["default"],
      className: 'remediations',
      'data-ouia-component-id': 'remediation-wizard'
    }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread2, _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_19__["default"].TEXT_FIELD, _data_driven_forms_pf4_component_mapper_text_field__WEBPACK_IMPORTED_MODULE_18__["default"]), _objectSpread2), mapperExtension),
    validatorMapper: validatorMapper,
    onSubmit: function onSubmit(formValues) {
      _setState({
        type: 'state',
        payload: {
          submitted: true,
          formValues: formValues
        }
      });

      (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.submitRemediation)(formValues, data, basePath, function (payload) {
        return _setState({
          type: 'state',
          payload: payload
        });
      });
    },
    onCancel: function onCancel() {
      return setOpen(false);
    }
  }) : null, state.submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_17__.Modal, {
    isOpen: true,
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_17__.ModalVariant.large,
    showClose: false,
    className: "remediations",
    hasNoBodyWrapper: true,
    "aria-describedby": "wiz-modal-description",
    "aria-labelledby": "wiz-modal-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_17__.Wizard, {
    className: "remediations",
    title: 'Remediate with Ansible',
    description: 'Add actions to an Ansible Playbook',
    steps: [{
      name: 'progress',
      component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_steps_progress__WEBPACK_IMPORTED_MODULE_27__["default"], {
        onClose: function onClose() {
          _setState({
            type: 'state',
            payload: {
              submitted: false,
              id: undefined,
              failed: false,
              formValues: undefined
            }
          });
        },
        title: 'Adding items to the playbook',
        setOpen: setOpen,
        submitRemediation: function submitRemediation() {
          return (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_26__.submitRemediation)(state.formValues, data, basePath, function (payload) {
            return _setState({
              type: 'state',
              payload: payload
            });
          });
        },
        setState: function setState(payload) {
          return _setState({
            type: 'state',
            payload: payload
          });
        },
        state: state
      }),
      isFinishedStep: true
    }],
    onClose: function onClose() {
      _setState({
        type: 'state',
        payload: {
          submitted: false,
          id: undefined,
          failed: false,
          formValues: undefined
        }
      });

      setOpen(false);
    }
  })) : null);
};
RemediationWizard.propTypes = {
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_28___default().func.isRequired),
  data: prop_types__WEBPACK_IMPORTED_MODULE_28___default().shape({
    issues: prop_types__WEBPACK_IMPORTED_MODULE_28___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_28___default().shape({
      description: (prop_types__WEBPACK_IMPORTED_MODULE_28___default().string),
      id: (prop_types__WEBPACK_IMPORTED_MODULE_28___default().string)
    })),
    systems: prop_types__WEBPACK_IMPORTED_MODULE_28___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_28___default().string)),
    onRemediationCreated: (prop_types__WEBPACK_IMPORTED_MODULE_28___default().func)
  }).isRequired,
  basePath: (prop_types__WEBPACK_IMPORTED_MODULE_28___default().string),
  registry: prop_types__WEBPACK_IMPORTED_MODULE_28___default().shape({
    register: (prop_types__WEBPACK_IMPORTED_MODULE_28___default().func)
  }).isRequired
};

var RemediationWizardWithContext = function RemediationWizardWithContext(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      registry = _useState2[0],
      setRegistry = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setRegistry(function () {
      return new _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_29__["default"]({}, [(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_9___default())]);
    });
  }, []);
  return registry !== null && registry !== void 0 && registry.store ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: registry.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(RemediationWizard, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    registry: registry
  }))) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemediationWizardWithContext);

/***/ }),

/***/ "./src/modules/RemediationsModal/common/ProgressBar.js":
/*!*************************************************************!*\
  !*** ./src/modules/RemediationsModal/common/ProgressBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Progress */ "./node_modules/@patternfly/react-core/dist/js/components/Progress/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1__);




var ProgressBar = function ProgressBar(_ref) {
  var percent = _ref.percent,
      failed = _ref.failed;
  var variant;
  var title;

  if (percent === 100) {
    title = 'Completed';
    variant = _patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1__.ProgressVariant.success;
  } else if (failed) {
    title = 'Error';
    variant = _patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1__.ProgressVariant.danger;
  } else {
    title = 'In progress';
    variant = _patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1__.ProgressVariant.info;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_js_components_Progress__WEBPACK_IMPORTED_MODULE_1__.Progress, {
    id: 'finished-create-remediation',
    value: percent,
    title: title,
    variant: variant
  });
};

ProgressBar.propTypes = {
  percent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  failed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./src/modules/RemediationsModal/common/SystemsTable.js":
/*!**************************************************************!*\
  !*** ./src/modules/RemediationsModal/common/SystemsTable.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemsTableWithContext": () => (/* binding */ SystemsTableWithContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-promise-middleware */ "webpack/sharing/consume/default/redux-promise-middleware/redux-promise-middleware");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Inventory/InventoryTable */ "./node_modules/@redhat-cloud-services/frontend-components/Inventory/InventoryTable.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_Inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var _systemsTable_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./systemsTable.scss */ "./src/modules/RemediationsModal/common/systemsTable.scss");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var SystemsTable = function SystemsTable(_ref) {
  var registry = _ref.registry,
      allSystemsNamed = _ref.allSystemsNamed,
      allSystems = _ref.allSystems,
      hasCheckbox = _ref.hasCheckbox,
      disabledColumns = _ref.disabledColumns,
      bulkSelect = _ref.bulkSelect;
  var inventory = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  var sortableColumns = ['display_name'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_redhat_cloud_services_frontend_components_Inventory_InventoryTable__WEBPACK_IMPORTED_MODULE_7___default()), {
    hideFilters: {
      tags: true,
      registeredWith: true,
      stale: true
    },
    columns: function columns(_columns) {
      return _columns.reduce(function (acc, curr) {
        return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(acc), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(!disabledColumns.includes(curr.key) ? [_objectSpread(_objectSpread({}, curr), {}, {
          props: _objectSpread(_objectSpread({}, curr.props || {}), {}, {
            isStatic: !sortableColumns.includes(curr.key)
          })
        })] : []));
      }, []);
    },
    noDetail: true,
    variant: "compact",
    hasCheckbox: hasCheckbox,
    showTags: true,
    bulkSelect: bulkSelect,
    onRefresh: function onRefresh(options) {
      return inventory.current.onRefreshData(options);
    },
    ref: inventory,
    getEntities: function getEntities(_i, config, showTags, defaultGetEntities) {
      return (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.fetchSystemsInfo)(config, sortableColumns, allSystemsNamed, defaultGetEntities);
    },
    onLoad: function onLoad(_ref2) {
      var mergeWithEntities = _ref2.mergeWithEntities,
          INVENTORY_ACTION_TYPES = _ref2.INVENTORY_ACTION_TYPES;
      registry.register(mergeWithEntities((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.inventoryEntitiesReducer)(allSystems, INVENTORY_ACTION_TYPES)));
    },
    tableProps: {
      canSelectAll: false
    }
  });
};

SystemsTable.defaultProps = {
  disabledColumns: [],
  hasCheckbox: false
};
SystemsTable.propTypes = {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_10___default().instanceOf(_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__["default"]).isRequired,
  allSystemsNamed: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)
  })).isRequired,
  allSystems: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)).isRequired,
  hasCheckbox: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  disabledColumns: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)),
  bulkSelect: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)
};
var SystemsTableWithContext = function SystemsTableWithContext(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      registry = _useState2[0],
      setRegistry = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setRegistry(function () {
      return new _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_11__["default"]({}, [(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_6___default())]);
    });
  }, []);
  return registry !== null && registry !== void 0 && registry.store ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: registry.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "pf-u-pl-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(SystemsTable, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    registry: registry
  })))) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemsTable);

/***/ }),

/***/ "./src/modules/RemediationsModal/index.js":
/*!************************************************!*\
  !*** ./src/modules/RemediationsModal/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _RemediationsWizard__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _RemediationsWizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemediationsWizard */ "./src/modules/RemediationsModal/RemediationsWizard.js");


/***/ }),

/***/ "./src/modules/RemediationsModal/schema.js":
/*!*************************************************!*\
  !*** ./src/modules/RemediationsModal/schema.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectPlaybookFields": () => (/* binding */ selectPlaybookFields),
/* harmony export */   "reviewActionsFields": () => (/* binding */ reviewActionsFields),
/* harmony export */   "reviewActionsNextStep": () => (/* binding */ reviewActionsNextStep),
/* harmony export */   "issueResolutionNextStep": () => (/* binding */ issueResolutionNextStep),
/* harmony export */   "reviewSystemsNextStep": () => (/* binding */ reviewSystemsNextStep),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/esm/component-types/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_validator_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/esm/validator-types/index.js");
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/utils */ "./src/Utilities/utils.js");




var selectPlaybookFields = [{
  name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SELECT_PLAYBOOK,
  component: 'select-playbook',
  validate: [{
    type: _data_driven_forms_react_form_renderer_validator_types__WEBPACK_IMPORTED_MODULE_2__["default"].PATTERN,
    pattern: /^$|^.*[\w\d]+.*$/
  }, {
    type: _data_driven_forms_react_form_renderer_validator_types__WEBPACK_IMPORTED_MODULE_2__["default"].REQUIRED
  }]
}, {
  name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK_SELECTED,
  component: _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT_FIELD,
  hideField: true
}, {
  name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK,
  component: _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT_FIELD,
  hideField: true
}, {
  name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.RESOLUTIONS,
  component: _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT_FIELD,
  hideField: true
}];
var reviewActionsFields = [{
  name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.MANUAL_RESOLUTION,
  component: 'review-actions'
}];
var reviewActionsNextStep = function reviewActionsNextStep(values) {
  var _filteredIssues$;

  var filteredIssues = values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK_SELECTED] ? values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.ISSUES_MULTIPLE].filter(function (issue) {
    return !values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK].issues.some(function (i) {
      return i.id === issue.id;
    }) && Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS]).includes(issue.id);
  }) : values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.ISSUES_MULTIPLE].filter(function (issue) {
    return Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS]).includes(issue.id);
  });
  return values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.MANUAL_RESOLUTION] ? (_filteredIssues$ = filteredIssues[0]) === null || _filteredIssues$ === void 0 ? void 0 : _filteredIssues$.id : 'review';
};
var issueResolutionNextStep = function issueResolutionNextStep(values, issue) {
  var _filteredIssues$slice;

  var filteredIssues = values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK_SELECTED] ? values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.ISSUES_MULTIPLE].filter(function (issue) {
    return !values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK].issues.some(function (i) {
      return i.id === issue.id && Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS]).includes(issue.id);
    });
  }) : values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.ISSUES_MULTIPLE].filter(function (issue) {
    return Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS]).includes(issue.id);
  });
  return ((_filteredIssues$slice = filteredIssues.slice(filteredIssues.findIndex(function (i) {
    return i.id === issue.id;
  }) + 1, filteredIssues.length)[0]) === null || _filteredIssues$slice === void 0 ? void 0 : _filteredIssues$slice.id) || 'review';
};
var reviewSystemsNextStep = function reviewSystemsNextStep(values) {
  var filteredIssues = values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK_SELECTED] ? values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.ISSUES_MULTIPLE].filter(function (issue) {
    return !values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.EXISTING_PLAYBOOK].issues.some(function (i) {
      return i.id === issue.id && Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS]).includes(issue.id);
    });
  }) : values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.ISSUES_MULTIPLE].filter(function (issue) {
    return Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS]).includes(issue.id);
  });
  return filteredIssues.length > 0 ? 'actions' : 'review';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (issues) {
  return {
    fields: [{
      component: _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_1__["default"].WIZARD,
      name: 'remediations-wizard',
      isDynamic: true,
      inModal: true,
      showTitles: true,
      title: 'Remediate with Ansible',
      description: 'Add actions to an Ansible Playbook',
      fields: [{
        name: 'playbook',
        title: 'Select playbook',
        fields: selectPlaybookFields,
        nextStep: 'systems'
      }, {
        name: 'systems',
        title: 'Review systems',
        fields: [{
          name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SYSTEMS,
          component: 'review-systems',
          validate: [{
            type: 'validate-systems'
          }]
        }],
        nextStep: function nextStep(_ref) {
          var values = _ref.values;
          return reviewSystemsNextStep(values);
        }
      }, {
        name: 'actions',
        title: 'Review and edit actions',
        fields: reviewActionsFields,
        nextStep: function nextStep(_ref2) {
          var values = _ref2.values;
          return reviewActionsNextStep(values, issues);
        }
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((issues === null || issues === void 0 ? void 0 : issues.map(function (issue) {
        return {
          name: issue.id,
          title: (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.shortenIssueId)(issue.id),
          showTitle: false,
          fields: [{
            name: issue.id,
            component: 'issue-resolution',
            issue: issue
          }, {
            name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.SELECTED_RESOLUTIONS,
            component: _data_driven_forms_react_form_renderer_component_types__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT_FIELD,
            hideField: true
          }],
          nextStep: function nextStep(_ref3) {
            var values = _ref3.values;
            return issueResolutionNextStep(values, issue);
          },
          substepOf: 'Choose actions'
        };
      })) || []), [{
        name: 'review',
        title: 'Remediation review',
        fields: [{
          name: _Utilities_utils__WEBPACK_IMPORTED_MODULE_3__.AUTO_REBOOT,
          component: 'review'
        }]
      }])
    }]
  };
});

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/fetchError.js":
/*!***********************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/fetchError.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-field-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-field-api/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_tokens_dist_js_global_palette_red_100__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-tokens/dist/js/global_palette_red_100 */ "./node_modules/@patternfly/react-tokens/dist/js/global_palette_red_100.js");







var FetchError = function FetchError(props) {
  var resolutionsCount = props.resolutionsCount;

  var _useFieldApi = (0,_data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_1__["default"])(props),
      input = _useFieldApi.input;

  input.valid = false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyState, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateVariant.small,
    "data-component-ouia-id": "wizard-fetch-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateIcon, {
    color: _patternfly_react_tokens_dist_js_global_palette_red_100__WEBPACK_IMPORTED_MODULE_4__["default"].value,
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircleIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
    headingLevel: "h4",
    size: "lg"
  }, "Unexpected error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateBody, null, "Please try again later.", ' ', resolutionsCount !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hint: No resolutions for selected issues.")));
};

FetchError.propTypes = {
  resolutionsCount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchError);

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/issueResolution.js":
/*!****************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/issueResolution.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-form-api/index.js");
/* harmony import */ var _issueResolution_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issueResolution.scss */ "./src/modules/RemediationsModal/steps/issueResolution.scss");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/differenceWith */ "./node_modules/lodash/differenceWith.js");
/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceWith__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var IssueResolution = function IssueResolution(_ref) {
  var _resolutions$find;

  var issue = _ref.issue;
  var formOptions = (0,_data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var resolutions = formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.RESOLUTIONS];
  var systems = formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS][issue.id] || [];
  var issueResolutions = ((_resolutions$find = resolutions.find(function (r) {
    return r.id === issue.id;
  })) === null || _resolutions$find === void 0 ? void 0 : _resolutions$find.resolutions) || [];
  var uniqueResolutions = lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6___default()(issueResolutions, 'id');
  var removedResolutions = lodash_differenceWith__WEBPACK_IMPORTED_MODULE_7___default()(issueResolutions, uniqueResolutions, (lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default()));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    hasGutter: true,
    "data-component-ouia-id": "wizard-issue-resolution"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Title, {
    headingLevel: "h2"
  }, "Choose action: ".concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.shortenIssueId)(issue.id)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.StackItem, null, removedResolutions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.StackItem, {
    className: "pf-u-mb-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Alert, {
    variant: "warning",
    isInline: true,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Text, null, "There ", (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.pluralize)(removedResolutions.length, 'was', 'were'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Popover, {
      "aria-label": "Resolution duplicates popover",
      bodyContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, removedResolutions.map(function (resolution, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
          key: key
        }, resolution.description);
      }))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "link",
      isInline: true
    }, removedResolutions.length), ' ', (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.pluralize)(removedResolutions.length, 'resolution'))), ' ', "removed due to duplication")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Text, null, "Review the possible resolution steps and select which to add to your playbook."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Text, {
    className: "ins-c-remediations-action-description"
  }, issue.action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Text, {
    className: "ins-c-remediations-action-description"
  }, "Resolution affects ".concat(systems.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.pluralize)(systems.length, 'system'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "ins-c-resolution-container"
  }, uniqueResolutions.map(function (resolution, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "ins-c-resolution-option",
      sm: 12,
      md: 6,
      lg: 4,
      xl: 3,
      key: resolution.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Tile, {
      onClick: function onClick() {
        return formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SELECTED_RESOLUTIONS, _objectSpread(_objectSpread({}, formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SELECTED_RESOLUTIONS]), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, issue.id, resolution.id)));
      },
      isSelected: formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SELECTED_RESOLUTIONS][issue.id] ? formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SELECTED_RESOLUTIONS][issue.id] === resolution.id : index === 0,
      title: resolution.description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.TextContent, {
      className: "pf-u-pt-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Text, {
      className: "pf-u-mb-sm ins-c-playbook-description"
    }, "Resolution from \"", issue.id.split(/:|\|/)[1], "\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "ins-c-reboot-required"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Text, {
      component: "span"
    }, resolution.needs_reboot ? 'Reboot required' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Reboot ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "not"), " required"))))));
  }))));
};

IssueResolution.propTypes = {
  issue: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    action: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    alternate: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    systems: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().string))
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueResolution);

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/progress.js":
/*!*********************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/progress.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ProgressBar */ "./src/modules/RemediationsModal/common/ProgressBar.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var _progress_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.scss */ "./src/modules/RemediationsModal/steps/progress.scss");


var _PropTypes$shape;









var Progress = function Progress(_ref) {
  var onClose = _ref.onClose,
      setOpen = _ref.setOpen,
      submitRemediation = _ref.submitRemediation,
      setState = _ref.setState,
      state = _ref.state;
  var _percent$failed$syste = {
    percent: state.percent,
    failed: state.failed,
    systems: (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.dedupeArray)(Object.values(state.formValues[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS]).flat()),
    issues: Object.keys(state.formValues[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS]),
    playbook: {
      name: state.formValues[_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SELECT_PLAYBOOK],
      id: state.id
    }
  },
      percent = _percent$failed$syste.percent,
      failed = _percent$failed$syste.failed,
      systems = _percent$failed$syste.systems,
      issues = _percent$failed$syste.issues,
      playbook = _percent$failed$syste.playbook;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyState, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateVariant.large,
    "data-component-ouia-id": "wizard-progress"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateIcon, {
    className: "pf-u-mb-lg pf-u-mt-sm",
    color: failed ? 'var(--pf-global--danger-color--100)' : percent === 100 ? 'var(--pf-global--success-color--100)' : undefined,
    icon: failed ? _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.ExclamationCircleIcon : percent === 100 ? _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.CheckCircleIcon : _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.InProgressIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
    headingLevel: "h1",
    size: "lg"
  }, failed ? 'Error: Unable to add items to playbook' : percent === 100 ? 'Items added to playbook' : 'Adding items to the playbook'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateBody, {
    className: "pf-c-progress-bar pf-u-mt-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_common_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percent: percent,
    failed: failed
  })), (failed || percent === 100) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateBody, {
    className: "pf-c-progress-message"
  }, failed ? 'Please try again.' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "".concat(issues.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.pluralize)(issues.length, 'action'), " affecting \n                        ").concat(systems.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.pluralize)(systems.length, 'system'), " \n                        ").concat(issues.length > 1 ? 'were' : 'was', " added to the playbook "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.remediationUrl)(playbook.id)
  }, playbook.name), ".")), percent === 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateBody, {
    className: "pf-c-progress-message-description pf-u-mb-md"
  }, "You can remediate these systems directly from Insights by enabling", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "pf-u-py-0 pf-u-px-xs",
    variant: "link",
    ouiaId: "CloudConnectorButton",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.ExternalLinkAltIcon, null),
    iconPosition: "right",
    isSmall: true,
    onClick: function onClick() {
      return window.location.href = "".concat(window.location.origin, "/").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.getEnvUrl)(), "settings/connector");
    }
  }, "Cloud Connector"), "on eligible systems."), failed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "pf-u-mt-md pf-u-mb-sm",
    variant: "primary",
    ouiaId: "TryAgainButton",
    onClick: function onClick() {
      setState({
        failed: false,
        percent: 0
      });
      submitRemediation(false);
    }
  }, "Try again"), percent === 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "pf-u-mt-md pf-u-mb-sm",
    variant: "primary",
    ouiaId: "ReturnToAppButton",
    onClick: function onClick() {
      onClose();
      setOpen(false);
    }
  }, "Return to application"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.EmptyStateSecondaryActions, null, failed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    ouiaId: "BackToWizardButton",
    onClick: function onClick() {
      onClose();
    }
  }, "Go back to the wizard"), percent === 100 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    component: "a",
    ouiaId: "OpenPlaybookButton",
    href: (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.remediationUrl)(playbook.id),
    onClick: function onClick() {
      onClose();
      setOpen(false);
    }
  }, "Open playbook ", playbook.name)));
};

Progress.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  submitRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  setState: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  state: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    percent: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number.isRequired),
    failed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool.isRequired),
    formValues: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape((_PropTypes$shape = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PropTypes$shape, _Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SELECT_PLAYBOOK, (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_PropTypes$shape, _Utilities_utils__WEBPACK_IMPORTED_MODULE_5__.SYSTEMS, prop_types__WEBPACK_IMPORTED_MODULE_7___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)))), _PropTypes$shape))
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/review.js":
/*!*******************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/review.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-field-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-field-api/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-form-api/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _review_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review.scss */ "./src/modules/RemediationsModal/steps/review.scss");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Review = function Review(props) {
  var formOptions = (0,_data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var selectedPlaybook = formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.EXISTING_PLAYBOOK];
  var existingPlaybookSelected = formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.EXISTING_PLAYBOOK_SELECTED];
  var systems = formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.SYSTEMS];

  var _props$data = _objectSpread(_objectSpread({}, props), {}, {
    data: _objectSpread(_objectSpread({}, props.data), {}, {
      issues: props.data.issues.filter(function (issue) {
        var _systems$issue$id;

        return ((_systems$issue$id = systems[issue.id]) === null || _systems$issue$id === void 0 ? void 0 : _systems$issue$id.length) > 0;
      })
    })
  }),
      data = _props$data.data,
      issuesById = _props$data.issuesById;

  var _useFieldApi = (0,_data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_3__["default"])(props),
      input = _useFieldApi.input;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    index: undefined,
    direction: undefined
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      sortByState = _useState2[0],
      setSortByState = _useState2[1];

  var allSystemsNamed = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref) {
    var hosts = _ref.hostReducer.hosts;
    return (hosts === null || hosts === void 0 ? void 0 : hosts.map(function (host) {
      return {
        id: host.id,
        name: host.display_name
      };
    })) || [];
  });
  var records = data.issues.map(function (issue) {
    var issueResolutions = (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.getResolution)(issue.id, formOptions.getState().values);

    var _ref2 = (issueResolutions === null || issueResolutions === void 0 ? void 0 : issueResolutions[0]) || {},
        description = _ref2.description,
        needsReboot = _ref2.needs_reboot;

    return {
      action: issuesById[issue.id].description,
      resolution: description,
      needsReboot: needsReboot,
      systems: systems[issue.id]
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    input.onChange(input.value !== '' ? input.value : existingPlaybookSelected && selectedPlaybook.auto_reboot || records.some(function (record) {
      return record.needsReboot;
    }));
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.buildRows)(records, sortByState, false, allSystemsNamed)),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setRows((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.buildRows)(records, sortByState, false, allSystemsNamed));
  }, [sortByState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Stack, {
    hasGutter: true,
    "data-component-ouia-id": "wizard-review"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, null, "Issues listed below will be added to the playbook", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.SELECT_PLAYBOOK]), "."))), records.some(function (r) {
    return r.needsReboot;
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: "ins-c-playbook-reboot-required"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_6__.ExclamationTriangleIcon, null), " A system reboot is required to remediate selected issues"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, null, "The playbook ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, formOptions.getState().values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.SELECT_PLAYBOOK]), input.value ? ' does' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "ins-c-remediation-danger-text"
  }, " does not"), ' ', "auto reboot systems."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
    variant: "link",
    isInline: true,
    onClick: function onClick() {
      return input.onChange(!input.value);
    }
  }, "Turn ", input.value ? 'off' : 'on', " autoreboot")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Table, {
    "aria-label": "Actions",
    className: "ins-c-remediation-summary-table",
    variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableVariant.compact,
    cells: [{
      title: 'Action',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.sortable]
    }, {
      title: 'Resolution',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.sortable]
    }, {
      title: 'Reboot required',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.sortable]
    }, {
      title: 'Systems',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.sortable],
      cellFormatters: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.expandable]
    }],
    rows: rows,
    onSort: function onSort(event, index, direction) {
      return setSortByState({
        index: index,
        direction: direction
      });
    },
    onCollapse: function onCollapse(event, rowKey, isOpen) {
      return (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.onCollapse)(event, rowKey, isOpen, rows, setRows);
    },
    sortBy: sortByState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableHeader, {
    noWrap: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableBody, null)));
};

Review.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape({
    issues: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
    systems: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
    onRemediationCreated: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func)
  }).isRequired,
  issuesById: prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string), prop_types__WEBPACK_IMPORTED_MODULE_11___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)
  }))).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/reviewActions.js":
/*!**************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/reviewActions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-field-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-field-api/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-form-api/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var _reviewActions_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviewActions.scss */ "./src/modules/RemediationsModal/steps/reviewActions.scss");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ReviewActions = function ReviewActions(props) {
  var formOptions = (0,_data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var values = formOptions.getState().values;
  var issues = props.issues.filter(function (issue) {
    return Object.keys(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.SYSTEMS]).includes(issue.id);
  });

  var _useFieldApi = (0,_data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_4__["default"])(props),
      input = _useFieldApi.input;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    index: undefined,
    direction: undefined
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      sortByState = _useState2[0],
      setSortByState = _useState2[1];

  var allSystemsNamed = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref) {
    var hosts = _ref.hostReducer.hosts;
    return (hosts === null || hosts === void 0 ? void 0 : hosts.map(function (host) {
      return {
        id: host.id,
        name: host.display_name
      };
    })) || [];
  });
  var multiples = (values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.EXISTING_PLAYBOOK_SELECTED] ? values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.ISSUES_MULTIPLE].filter(function (issue) {
    return !values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.EXISTING_PLAYBOOK].issues.some(function (i) {
      return i.id === issue.id;
    });
  }) : values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.ISSUES_MULTIPLE]).map(function (issue) {
    return _objectSpread(_objectSpread({}, issue), {}, {
      systems: values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.SYSTEMS][issue.id]
    });
  }).filter(function (record) {
    var _record$systems;

    return (record === null || record === void 0 ? void 0 : (_record$systems = record.systems) === null || _record$systems === void 0 ? void 0 : _record$systems.length) > 0;
  });

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.buildRows)(multiples, sortByState, true, allSystemsNamed)),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setRows((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.buildRows)(multiples, sortByState, true, allSystemsNamed));
  }, [sortByState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Stack, {
    hasGutter: true,
    "data-component-ouia-id": "wizard-review-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, null, "You have selected", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, "".concat(issues.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.pluralize)(issues.length, 'item'))), " to remediate.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, multiples.length, " of", ' ', "".concat(issues.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.pluralize)(issues.length, 'item'))), multiples.length !== 1 ? ' allow' : ' allows', " for you to chose from multiple resolution steps."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Radio, {
    label: "Review and/or change the resolution steps for ".concat(multiples.length !== 1 ? 'these' : 'this', "\n                         ").concat(multiples.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.pluralize)(multiples.length, 'action'), "."),
    id: "change",
    name: "radio",
    isChecked: input.value,
    onChange: function onChange() {
      return input.onChange(true);
    }
  }), issues.length - multiples.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: "rem-c-choose-actions-description"
  }, "The ".concat(issues.length - multiples.length, " other selected ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.pluralize)(issues.length - multiples.length, 'issue'), " \n                    ").concat(issues.length - multiples.length !== 1 ? 'do' : 'does', " not have multiple resolution options."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Table, {
    "aria-label": "Actions",
    className: "ins-c-remediation-summary-table",
    variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.TableVariant.compact,
    onCollapse: function onCollapse(event, rowKey, isOpen) {
      return (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_8__.onCollapse)(event, rowKey, isOpen, rows, setRows);
    },
    cells: [{
      title: 'Action',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.sortable]
    }, {
      title: 'Resolution',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.sortable]
    }, {
      title: 'Reboot required',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.sortable]
    }, {
      title: 'Systems',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.sortable],
      cellFormatters: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.expandable]
    }],
    rows: rows,
    onSort: function onSort(event, index, direction) {
      return setSortByState({
        index: index,
        direction: direction
      });
    },
    sortBy: sortByState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.TableHeader, {
    noWrap: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.TableBody, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Radio, {
    label: 'Accept all recommended resolution steps for all actions',
    id: "accept",
    name: "radio",
    isChecked: !input.value,
    onChange: function onChange() {
      return input.onChange(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: "rem-c-choose-actions-description"
  }, "You may modify reboot status to manual reboot in the next step, or from the playbook.")));
};

ReviewActions.propTypes = {
  issues: prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)
  })).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewActions);

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/reviewSystems.js":
/*!**************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/reviewSystems.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-field-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-field-api/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-form-api/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_SystemsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/SystemsTable */ "./src/modules/RemediationsModal/common/SystemsTable.js");
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var _reviewSystems_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reviewSystems.scss */ "./src/modules/RemediationsModal/steps/reviewSystems.scss");



var _excluded = ["issues", "systems", "allSystems", "registry"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable camelcase */














var ReviewSystems = function ReviewSystems(_ref) {
  var _formOptions$getState;

  var issues = _ref.issues,
      systems = _ref.systems,
      allSystems = _ref.allSystems,
      registry = _ref.registry,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  var _useFieldApi = (0,_data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_4__["default"])(props),
      input = _useFieldApi.input;

  var formOptions = (0,_data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var error = (_formOptions$getState = formOptions.getState().errors) === null || _formOptions$getState === void 0 ? void 0 : _formOptions$getState.systems;
  var rowsLength = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref2) {
    var entities = _ref2.entities;
    return ((entities === null || entities === void 0 ? void 0 : entities.rows) || []).length;
  });
  var selected = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref3) {
    var entities = _ref3.entities;
    return (entities === null || entities === void 0 ? void 0 : entities.selected) || [];
  });
  var loaded = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref4) {
    var entities = _ref4.entities;
    return entities === null || entities === void 0 ? void 0 : entities.loaded;
  });
  var allSystemsNamed = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref5) {
    var hosts = _ref5.hostReducer.hosts;
    return (hosts === null || hosts === void 0 ? void 0 : hosts.map(function (host) {
      return {
        id: host.id,
        name: host.display_name
      };
    })) || [];
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var value = issues === null || issues === void 0 ? void 0 : issues.reduce(function (acc, curr) {
      var tempSystems = (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_12__.dedupeArray)([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(systems), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(curr.systems || []))).filter(function (id) {
        return selected === null || selected === void 0 ? void 0 : selected.includes(id);
      });
      return _objectSpread(_objectSpread({}, acc), tempSystems.length > 0 ? (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, curr.id, tempSystems) : {});
    }, {});

    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default()(input.value, value)) {
      input.onChange(value);
    }
  }, [selected]);

  var onSelectRows = function onSelectRows(value) {
    dispatch({
      type: _Utilities_utils__WEBPACK_IMPORTED_MODULE_12__.TOGGLE_BULK_SELECT,
      payload: value
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    hasGutter: true,
    "data-component-ouia-id": "wizard-review-systems"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Text, null, "Review and optionally exclude systems from your selection."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_common_SystemsTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
    registry: registry,
    allSystemsNamed: allSystemsNamed,
    allSystems: allSystems,
    hasCheckbox: true,
    bulkSelect: {
      id: 'select-systems',
      count: selected.length,
      items: [{
        title: 'Select none (0)',
        onClick: function onClick() {
          return onSelectRows(false);
        }
      }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(loaded && rowsLength > 0 ? [{
        title: "Select page (".concat(rowsLength, ")"),
        onClick: function onClick() {
          return onSelectRows(true);
        }
      }] : [])),
      checked: selected.length > 0,
      onSelect: function onSelect(value) {
        return onSelectRows(value);
      }
    },
    onSelectRows: true
  }))), error && loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_9__.ExclamationCircleIcon, {
    className: "ins-c-remediations-error pf-u-mr-sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "ins-c-remediations-error"
  }, error)));
};

ReviewSystems.propTypes = {
  issues: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)
  })).isRequired,
  systems: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)).isRequired,
  allSystems: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)).isRequired,
  registry: prop_types__WEBPACK_IMPORTED_MODULE_14___default().instanceOf(_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_15__["default"]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewSystems);

/***/ }),

/***/ "./src/modules/RemediationsModal/steps/selectPlaybook.js":
/*!***************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/selectPlaybook.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-field-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-field-api/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/esm/use-form-api/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fetchError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchError */ "./src/modules/RemediationsModal/steps/fetchError.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/differenceWith */ "./node_modules/lodash/differenceWith.js");
/* harmony import */ var lodash_differenceWith__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceWith__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utilities_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Utilities/utils */ "./src/Utilities/utils.js");
/* harmony import */ var _selectPlaybook_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selectPlaybook.scss */ "./src/modules/RemediationsModal/steps/selectPlaybook.scss");



















var SelectPlaybook = function SelectPlaybook(props) {
  var issues = props.issues,
      systems = props.systems,
      allSystems = props.allSystems;

  var _useFieldApi = (0,_data_driven_forms_react_form_renderer_use_field_api__WEBPACK_IMPORTED_MODULE_5__["default"])(props),
      input = _useFieldApi.input;

  var formOptions = (0,_data_driven_forms_react_form_renderer_use_form_api__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var values = formOptions.getState().values;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      existingRemediations = _useState2[0],
      setExistingRemediations = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK_SELECTED]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      existingPlaybookSelected = _useState4[0],
      setExistingPlaybookSelected = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK_SELECTED] ? '' : input.value),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      newPlaybookName = _useState6[0],
      setNewPlaybookName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      selectedPlaybook = _useState8[0],
      setSelectedPlaybook = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      isLoadingRemediation = _useState10[0],
      setIsLoadingRemediation = _useState10[1];

  var errors = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref) {
    var resolutionsReducer = _ref.resolutionsReducer;
    return (resolutionsReducer === null || resolutionsReducer === void 0 ? void 0 : resolutionsReducer.errors) || [];
  }, react_redux__WEBPACK_IMPORTED_MODULE_8__.shallowEqual);
  var warnings = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref2) {
    var resolutionsReducer = _ref2.resolutionsReducer;
    return (resolutionsReducer === null || resolutionsReducer === void 0 ? void 0 : resolutionsReducer.warnings) || [];
  }, react_redux__WEBPACK_IMPORTED_MODULE_8__.shallowEqual);
  var resolutions = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref3) {
    var resolutionsReducer = _ref3.resolutionsReducer;
    return (resolutionsReducer === null || resolutionsReducer === void 0 ? void 0 : resolutionsReducer.resolutions) || [];
  }, react_redux__WEBPACK_IMPORTED_MODULE_8__.shallowEqual);
  var isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref4) {
    var resolutionsReducer = _ref4.resolutionsReducer;
    return resolutionsReducer === null || resolutionsReducer === void 0 ? void 0 : resolutionsReducer.isLoading;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _yield$api$getRemedia, existingRemediations;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api__WEBPACK_IMPORTED_MODULE_7__.getRemediations();

              case 2:
                _yield$api$getRemedia = _context.sent;
                existingRemediations = _yield$api$getRemedia.data;
                setExistingRemediations(existingRemediations);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var _differenceWith;

    if (((_differenceWith = lodash_differenceWith__WEBPACK_IMPORTED_MODULE_11___default()(resolutions, values[_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.RESOLUTIONS], (lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default()))) === null || _differenceWith === void 0 ? void 0 : _differenceWith.length) > 0) {
      formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.RESOLUTIONS, resolutions);
      formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.ISSUES_MULTIPLE, (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.getIssuesMultiple)(issues, systems, resolutions));
    }
  });
  return errors.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Stack, {
    hasGutter: true,
    "data-component-ouia-id": "wizard-select-playbook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, warnings.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Alert, {
    variant: "warning",
    isInline: true,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Text, null, "There ", (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.pluralize)(warnings.length, 'was', 'were'), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Popover, {
      "aria-label": "Resolution error popover",
      bodyContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, warnings.map(function (warning, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
          key: key
        }, warning);
      }))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
      variant: "link",
      isInline: true
    }, warnings.length), ' ', (0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.pluralize)(warnings.length, 'error'))), ' ', "while fetching resolutions for your issues!", ' ')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Text, null, "You selected", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, "".concat(allSystems.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.pluralize)(allSystems.length, 'system')), ' '), "to remediate with Ansible, which in total includes", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, "".concat(issues === null || issues === void 0 ? void 0 : issues.length, " ").concat((0,_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.pluralize)(issues === null || issues === void 0 ? void 0 : issues.length, 'issue')), " "), (issues === null || issues === void 0 ? void 0 : issues.length) !== resolutions.length && !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, "of which ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, resolutions.length, " ")) : 'which', ' ', "can be remediated by Ansible."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
    sm: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Radio, {
    label: existingRemediations ? "Add to existing playbook (".concat(existingRemediations.length, ")") : 'Add to existing playbook',
    "aria-label": "Add to existing playbook",
    id: "existing",
    name: "radio",
    isDisabled: !existingRemediations || !existingRemediations.length,
    defaultChecked: existingPlaybookSelected,
    onChange: function onChange() {
      setExistingPlaybookSelected(true);
      formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK_SELECTED, true);
      input.onChange((selectedPlaybook === null || selectedPlaybook === void 0 ? void 0 : selectedPlaybook.name) || '');
      formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK, selectedPlaybook);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
    sm: 12,
    md: 6,
    lg: 4
  }, existingRemediations && !isLoadingRemediation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.FormSelect, {
    onChange: function onChange(val) {
      setIsLoadingRemediation(true);
      _api__WEBPACK_IMPORTED_MODULE_7__.getRemediation(val).then(function (remediation) {
        setSelectedPlaybook(remediation);
        setIsLoadingRemediation(false);
        existingPlaybookSelected && input.onChange(remediation.name);
        existingPlaybookSelected && formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK, remediation);
      });
    },
    value: (selectedPlaybook === null || selectedPlaybook === void 0 ? void 0 : selectedPlaybook.id) || '',
    "aria-label": "Select an existing playbook"
  }, existingRemediations !== null && existingRemediations !== void 0 && existingRemediations.length ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.FormSelectOption, {
    key: "select-playbook-placeholder",
    value: "",
    label: "Select playbook",
    isDisabled: true
  })].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(existingRemediations.map(function (_ref5) {
    var id = _ref5.id,
        name = _ref5.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.FormSelectOption, {
      key: id,
      value: id,
      label: name
    });
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.FormSelectOption, {
    key: "empty",
    value: "empty",
    label: "No existing playbooks"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_15__.SkeletonSize.lg
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
    sm: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Radio, {
    label: "Create new playbook",
    "aria-label": "Create new playbook",
    id: "new",
    name: "radio",
    defaultChecked: !existingPlaybookSelected,
    onChange: function onChange() {
      setExistingPlaybookSelected(false);
      formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK_SELECTED, false);
      input.onChange(newPlaybookName);
      formOptions.change(_Utilities_utils__WEBPACK_IMPORTED_MODULE_13__.EXISTING_PLAYBOOK, undefined);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
    sm: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.FormGroup, {
    fieldId: "remediation-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.TextInput, {
    type: "text",
    value: newPlaybookName,
    onChange: function onChange(val) {
      setNewPlaybookName(val);
      existingPlaybookSelected || input.onChange(val);
    },
    "aria-label": "Name your playbook",
    autoFocus: true
  })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_fetchError__WEBPACK_IMPORTED_MODULE_9__["default"], null);
};

SelectPlaybook.propTypes = {
  issues: prop_types__WEBPACK_IMPORTED_MODULE_16___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_16___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string)
  })).isRequired,
  systems: prop_types__WEBPACK_IMPORTED_MODULE_16___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_16___default().string)).isRequired,
  allSystems: prop_types__WEBPACK_IMPORTED_MODULE_16___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_16___default().string)).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectPlaybook);

/***/ }),

/***/ "./src/store/actions/host-actions.js":
/*!*******************************************!*\
  !*** ./src/store/actions/host-actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchHostsById": () => (/* binding */ fetchHostsById)
/* harmony export */ });
/* harmony import */ var _api_inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/inventory */ "./src/api/inventory.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");


var fetchHostsById = function fetchHostsById(systems) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.FETCH_SELECTED_HOSTS,
    payload: _api_inventory__WEBPACK_IMPORTED_MODULE_0__.getHostsById(systems, options)
  };
};

/***/ }),

/***/ "./src/store/actions/resolution-actions.js":
/*!*************************************************!*\
  !*** ./src/store/actions/resolution-actions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchResolutions": () => (/* binding */ fetchResolutions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_5__);







var batchResolutions = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(issues) {
    var result, _transform, _transform2, resolutions, warnings;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _api__WEBPACK_IMPORTED_MODULE_3__.getResolutionsBatch(issues.map(function (i) {
              return i.id;
            }));

          case 3:
            result = _context.sent;
            _transform = lodash_transform__WEBPACK_IMPORTED_MODULE_5___default()(result, function (_ref2, value, key) {
              var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
                  resolutions = _ref3[0],
                  errors = _ref3[1];

              if (!value) {
                errors.push("Issue ".concat(key, " does not have Ansible support"));
              } else {
                resolutions.push(value);
              }

              return [resolutions, errors];
            }, [[], []]), _transform2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_transform, 2), resolutions = _transform2[0], warnings = _transform2[1];
            return _context.abrupt("return", {
              resolutions: resolutions,
              warnings: warnings
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              errors: ['Error obtaining resolution information. Please try again later.']
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function batchResolutions(_x) {
    return _ref.apply(this, arguments);
  };
}();

var fetchResolutions = function fetchResolutions() {
  var issues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_4__.FETCH_RESOLUTIONS,
    payload: batchResolutions(issues)
  };
};

/***/ }),

/***/ "./src/store/reducers/host-reducer.js":
/*!********************************************!*\
  !*** ./src/store/reducers/host-reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hostsInitialState": () => (/* binding */ hostsInitialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");



var _$concat$$concat;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Initial State

var hostsInitialState = {
  isLoading: false,
  hosts: []
};

var setLoadingState = function setLoadingState(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: true
  });
};

var setHosts = function setHosts(state, _ref) {
  var payload = _ref.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    hosts: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.hosts), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(payload.results || [])),
    isLoading: false
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_$concat$$concat = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_$concat$$concat, "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.FETCH_SELECTED_HOSTS, "_FULFILLED"), setHosts), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_$concat$$concat, "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.FETCH_SELECTED_HOSTS, "_PENDING"), setLoadingState), _$concat$$concat);

/***/ }),

/***/ "./src/store/reducers/resolutions-reducer.js":
/*!***************************************************!*\
  !*** ./src/store/reducers/resolutions-reducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolutionsInitialState": () => (/* binding */ resolutionsInitialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");


var _$concat$$concat;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // Initial State

var resolutionsInitialState = {
  isLoading: false,
  resolutions: undefined
};

var setLoadingState = function setLoadingState(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: true
  });
};

var setResolutions = function setResolutions(state, _ref) {
  var payload = _ref.payload;
  return _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {
    isLoading: false
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_$concat$$concat = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_$concat$$concat, "".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.FETCH_RESOLUTIONS, "_FULFILLED"), setResolutions), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_$concat$$concat, "".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.FETCH_RESOLUTIONS, "_PENDING"), setLoadingState), _$concat$$concat);

/***/ }),

/***/ "./src/modules/RemediationsModal/common/systemsTable.scss":
/*!****************************************************************!*\
  !*** ./src/modules/RemediationsModal/common/systemsTable.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/RemediationsModal/steps/issueResolution.scss":
/*!******************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/issueResolution.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/RemediationsModal/steps/progress.scss":
/*!***********************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/progress.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/RemediationsModal/steps/review.scss":
/*!*********************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/review.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/RemediationsModal/steps/reviewActions.scss":
/*!****************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/reviewActions.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/RemediationsModal/steps/reviewSystems.scss":
/*!****************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/reviewSystems.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/RemediationsModal/steps/selectPlaybook.scss":
/*!*****************************************************************!*\
  !*** ./src/modules/RemediationsModal/steps/selectPlaybook.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?e6c7":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4c8a":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_modules_RemediationsModal_index_js-webpack_sharing_consume_default_scalprum_react-core_sc-8c64f8.e89f95fef735d34ee67ba3dec9390bf0.js.map