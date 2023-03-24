"use strict";
(self["webpackChunkinsights_remediations_frontend"] = self["webpackChunkinsights_remediations_frontend"] || []).push([["ActivityDetails"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/EmptyTable/EmptyTable.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/EmptyTable/EmptyTable.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EmptyTable_EmptyTable_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EmptyTable/EmptyTable.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/EmptyTable/EmptyTable.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var EmptyTable = function (_a) {
    var _b;
    var centered = _a.centered, className = _a.className, children = _a.children, props = __rest(_a, ["centered", "className", "children"]);
    var emptyTableClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ins-c-table__empty', (_b = {}, _b["is-centered"] = centered, _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: emptyTableClasses }, props),
        ' ',
        children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyTable);
//# sourceMappingURL=EmptyTable.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/ */ "./node_modules/@patternfly/react-core/dist/esm/helpers/OUIA/ouia.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TableToolbar_TableToolbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TableToolbar/TableToolbar.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





function generateCount(results) {
    if (results > 1 || results < 1) {
        return "".concat(results, " Results");
    }
    else {
        return "".concat(results, " Result");
    }
}
var TableToolbar = function (_a) {
    var _b;
    var _c = _a.isFooter, isFooter = _c === void 0 ? false : _c, results = _a.results, className = _a.className, selected = _a.selected, children = _a.children, ouiaId = _a.ouiaId, _d = _a.ouiaSafe, ouiaSafe = _d === void 0 ? true : _d, props = __rest(_a, ["isFooter", "results", "className", "selected", "children", "ouiaId", "ouiaSafe"]);
    var tableToolbarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('ins-c-table__toolbar', (_b = {}, _b["ins-m-footer"] = isFooter, _b), className);
    var ouiaComponentType = 'RHI/TableToolbar';
    var ouiaFinalId = (0,_patternfly_react_core___WEBPACK_IMPORTED_MODULE_4__.useOUIAId)(ouiaComponentType, ouiaId, ouiaSafe);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, __assign({ className: tableToolbarClasses, "data-ouia-component-type": ouiaComponentType, "data-ouia-component-id": ouiaFinalId, "data-ouia-safe": ouiaSafe }, props), children),
        ((results && results >= 0) || (selected && selected >= 0)) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ins-c-table__toolbar-results" },
            results && results >= 0 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ins-c-table__toolbar-results-count" },
                " ",
                generateCount(results),
                " "),
            selected && selected >= 0 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ins-c-table__toolbar-results-selected" },
                " ",
                selected,
                " Selected ")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableToolbar);
//# sourceMappingURL=TableToolbar.js.map

/***/ }),

/***/ "./src/components/ActivityDetails.js":
/*!*******************************************!*\
  !*** ./src/components/ActivityDetails.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layouts/DescriptionList */ "./src/components/Layouts/DescriptionList.js");
/* harmony import */ var _containers_CancelButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/CancelButton */ "./src/containers/CancelButton.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _Status_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Status.scss */ "./src/components/Status.scss");
/* harmony import */ var _statusHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./statusHelper */ "./src/components/statusHelper.js");
/* harmony import */ var _skeletons_ActivityDetailsSkeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../skeletons/ActivityDetailsSkeleton */ "./src/skeletons/ActivityDetailsSkeleton.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _ActivityDetails_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ActivityDetails.scss */ "./src/components/ActivityDetails.scss");
/* eslint-disable camelcase */



















var ActivityDetail = function ActivityDetail(_ref) {
  var _ref$match$params = _ref.match.params,
      id = _ref$match$params.id,
      run_id = _ref$match$params.run_id,
      remediation = _ref.remediation,
      playbookRun = _ref.playbookRun,
      getPlaybookRun = _ref.getPlaybookRun,
      getPlaybookRuns = _ref.getPlaybookRuns,
      loadRemediation = _ref.loadRemediation;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadRemediation(id);
    getPlaybookRuns(id);
    getPlaybookRun(id, run_id);
  }, []);
  var permission = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_12__.PermissionContext);

  var isDebug = function isDebug() {
    return localStorage.getItem('remediations:debug') === 'true';
  };

  return remediation && playbookRun && playbookRun.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, " Remediations ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/".concat(remediation.id)
  }, " ", remediation.name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, {
    isActive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "exact",
    date: playbookRun.data.created_at
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: (0,_statusHelper__WEBPACK_IMPORTED_MODULE_10__.normalizeStatus)(playbookRun.data.status) === 'running' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__.InProgressIcon, {
      className: "rem-c-running",
      "aria-label": "connection status"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_15__["default"], {
      type: "exact",
      date: playbookRun.data.created_at
    }), isDebug() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_CancelButton__WEBPACK_IMPORTED_MODULE_7__.CancelButton, {
      remediationName: remediation.name,
      remediationId: remediation.id,
      playbookId: playbookRun.data.id
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_15__["default"], {
      type: "exact",
      date: playbookRun.data.created_at
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Split, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run on"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "exact",
    date: playbookRun.data.created_at
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run by"
  }, "".concat(playbookRun.data.created_by.first_name, " ").concat(playbookRun.data.created_by.last_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_statusHelper__WEBPACK_IMPORTED_MODULE_10__.StatusSummary, {
    executorStatus: playbookRun.data.status,
    counts: playbookRun.data.executors.reduce(function (acc, ex) {
      return {
        pending: acc.pending + ex.counts.pending,
        running: acc.running + ex.counts.running,
        success: acc.success + ex.counts.success,
        failure: acc.failure + ex.counts.failure,
        canceled: acc.canceled + ex.counts.canceled,
        acked: acc.acked + ex.counts.acked
      };
    }, {
      pending: 0,
      running: 0,
      success: 0,
      failure: 0,
      canceled: 0
    }),
    permission: permission
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
    className: "rem-m-card__header-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Title, {
    headingLevel: "h4",
    size: "xl"
  }, "Results by connection")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.Table, {
    "aria-label": "Collapsible table",
    rows: playbookRun.data.executors.map(function (e) {
      return {
        cells: [{
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/".concat(remediation.id, "/").concat(playbookRun.data.id, "/").concat(e.executor_id)
          }, e.executor_name)
        }, e.system_count, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_statusHelper__WEBPACK_IMPORTED_MODULE_10__.StatusSummary, {
            executorStatus: (0,_statusHelper__WEBPACK_IMPORTED_MODULE_10__.normalizeStatus)(e.status),
            counts: e.counts,
            permission: permission
          })
        }]
      };
    }),
    cells: [{
      title: 'Connection'
    }, {
      title: 'Systems'
    }, {
      title: 'Playbook run status'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_4__.TableBody, null))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_skeletons_ActivityDetailsSkeleton__WEBPACK_IMPORTED_MODULE_11__["default"], null);
};

ActivityDetail.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  issue: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  playbookRun: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  getPlaybookRun: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  getPlaybookRuns: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  loadRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  match: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object)
};
ActivityDetail.defaultProps = {};
var connected = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (_ref2) {
  var playbookRun = _ref2.playbookRun,
      selectedRemediation = _ref2.selectedRemediation;
  return {
    playbookRun: playbookRun,
    remediation: selectedRemediation.remediation
  };
}, function (dispatch) {
  return {
    getPlaybookRun: function getPlaybookRun(id, runId) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.getPlaybookRun)(id, runId));
    },
    getPlaybookRuns: function getPlaybookRuns(remediationId) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.getPlaybookRuns)(remediationId));
    },
    loadRemediation: function loadRemediation(id) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__.loadRemediation)(id));
    }
  };
})(ActivityDetail);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connected); // export default ActivityDetail;

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

/***/ "./src/skeletons/ActivityDetailsSkeleton.js":
/*!**************************************************!*\
  !*** ./src/skeletons/ActivityDetailsSkeleton.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _SkeletonTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkeletonTable */ "./src/skeletons/SkeletonTable.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layouts/DescriptionList */ "./src/components/Layouts/DescriptionList.js");
/* harmony import */ var _RemediationDetailsSkeleton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemediationDetailsSkeleton.scss */ "./src/skeletons/RemediationDetailsSkeleton.scss");









var ActivityDetailsSkeleton = function ActivityDetailsSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, {
    isActive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    gutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "lg"
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Split, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run on"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run by"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    className: "rem-m-card__header-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
    headingLevel: "h4",
    size: "xl"
  }, "Results by connection")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SkeletonTable__WEBPACK_IMPORTED_MODULE_1__["default"], null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityDetailsSkeleton);

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

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/EmptyTable/EmptyTable.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/EmptyTable/EmptyTable.css ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ActivityDetails.scss":
/*!*********************************************!*\
  !*** ./src/components/ActivityDetails.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
//# sourceMappingURL=../sourcemaps/ActivityDetails.2841018b64f0d652a01719b0e07a05d8.js.map