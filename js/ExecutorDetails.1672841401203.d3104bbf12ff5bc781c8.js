"use strict";
(self["webpackChunkinsights_remediations_frontend"] = self["webpackChunkinsights_remediations_frontend"] || []).push([["ExecutorDetails"],{

/***/ "./src/components/Alerts/RunFailed.js":
/*!********************************************!*\
  !*** ./src/components/Alerts/RunFailed.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Status_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Status.scss */ "./src/components/Status.scss");






var RunFailed = function RunFailed(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, {
    className: "rem-c-failure",
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.ExclamationCircleIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
    headingLevel: "h5",
    size: "lg"
  }, "Run failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, "Playbook failed to run on ", name, ". Connection was lost. Try executing the remediation again, and if the problem persist, constact your system administrator(s)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "link"
  }, "Learn more")));
};

RunFailed.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RunFailed);

/***/ }),

/***/ "./src/components/ExecutorDetails/Columns.js":
/*!***************************************************!*\
  !*** ./src/components/ExecutorDetails/Columns.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _statusHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../statusHelper */ "./src/components/statusHelper.js");
/* harmony import */ var _Utilities_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/urls */ "./src/Utilities/urls.js");



var urlBuilder = (0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_2__.inventoryUrlBuilder)({
  id: 'default'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  key: 'display_name',
  title: 'Name',
  // eslint-disable-next-line
  renderFunc: function renderFunc(name, id, _ref) {
    var fqdn = _ref.fqdn;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: urlBuilder(id)
    }, fqdn || name || id));
  }
}, 'tags', {
  key: 'status',
  title: 'Status',
  // eslint-disable-next-line
  renderFunc: function renderFunc(status) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "rem-c-status-bar"
    }, (0,_statusHelper__WEBPACK_IMPORTED_MODULE_1__.renderStatus)((0,_statusHelper__WEBPACK_IMPORTED_MODULE_1__.normalizeStatus)(status)));
  }
}]);

/***/ }),

/***/ "./src/components/ExecutorDetails/ExecutorDetails.js":
/*!***********************************************************!*\
  !*** ./src/components/ExecutorDetails/ExecutorDetails.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Inventory */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Inventory/InventoryTable.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/ConditionalFilter.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/conditionalFilterConstants.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/reducers */ "./src/store/reducers.js");
/* harmony import */ var _Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Layouts/DescriptionList */ "./src/components/Layouts/DescriptionList.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions */ "./src/actions.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _statusHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../statusHelper */ "./src/components/statusHelper.js");
/* harmony import */ var _SystemDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../SystemDetails */ "./src/components/SystemDetails.js");
/* harmony import */ var _skeletons_ExecutorDetailsSkeleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../skeletons/ExecutorDetailsSkeleton */ "./src/skeletons/ExecutorDetailsSkeleton.js");
/* harmony import */ var _Alerts_RunFailed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Alerts/RunFailed */ "./src/components/Alerts/RunFailed.js");
/* harmony import */ var _ExecutorDetails_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ExecutorDetails.scss */ "./src/components/ExecutorDetails/ExecutorDetails.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../App */ "./src/App.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");
/* harmony import */ var _SystemsTable_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../SystemsTable/helpers */ "./src/components/SystemsTable/helpers.js");
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Columns */ "./src/components/ExecutorDetails/Columns.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



























var refreshInterval;

var ExecutorDetails = function ExecutorDetails(_ref) {
  var _ref$match$params = _ref.match.params,
      executor_id = _ref$match$params.executor_id,
      run_id = _ref$match$params.run_id,
      id = _ref$match$params.id,
      remediation = _ref.remediation,
      playbookRun = _ref.playbookRun,
      playbookRunSystems = _ref.playbookRunSystems,
      playbookRunSystemDetails = _ref.playbookRunSystemDetails,
      getPlaybookRun = _ref.getPlaybookRun,
      getPlaybookRunSystems = _ref.getPlaybookRunSystems,
      getPlaybookRunSystemDetails = _ref.getPlaybookRunSystemDetails,
      onCollapseInventory = _ref.onCollapseInventory,
      loadRemediation = _ref.loadRemediation;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      executor = _useState2[0],
      setExecutor = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      systems = _useState4[0],
      setSystems = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      filter = _useState6[0],
      setFilter = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      pageSize = _useState10[0],
      setPageSize = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      openId = _useState12[0],
      setOpenId = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      firstExpand = _useState14[0],
      setFirstExpand = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      debouncedGetPlaybookRunSystems = _useState16[0],
      setDebounce = _useState16[1];

  var inventory = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var onRefresh = function onRefresh(options) {
    if (inventory && inventory.current) {
      getPlaybookRunSystems(id, run_id, executor_id, options.per_page, options.per_page * (options.page - 1));
      setPage(options.page);
      setPageSize(options.per_page);
      inventory.current.onRefreshData(options);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadRemediation(id);
    getPlaybookRun(id, run_id);
    setDebounce(function () {
      return (0,awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_5__["default"])(getPlaybookRunSystems, 500);
    });
    return function () {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (playbookRun && playbookRun.data) {
      setExecutor(playbookRun.data.executors.find(function (executor) {
        return executor.executor_id === executor_id;
      }) || {});
    }

    if (playbookRunSystems.status !== 'pending') {
      getPlaybookRunSystems(id, run_id, executor_id, pageSize, pageSize * (page - 1), filter);
    }
  }, [playbookRun]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!firstExpand) {
      getPlaybookRun(id, run_id);
    }

    if ((0,_statusHelper__WEBPACK_IMPORTED_MODULE_12__.normalizeStatus)(playbookRunSystemDetails.status) !== 'running' && refreshInterval) {
      clearInterval(refreshInterval);
    }

    setFirstExpand(false);
  }, [playbookRunSystemDetails.status]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setSystems(function () {
      return playbookRunSystems.data.map(function (_ref2) {
        var system_id = _ref2.system_id,
            system_name = _ref2.system_name,
            status = _ref2.status;
        return {
          id: system_id,
          display_name: system_name,
          status: status,
          isOpen: openId === system_id,
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SystemDetails__WEBPACK_IMPORTED_MODULE_13__["default"], {
            systemId: system_id
          })
        };
      });
    });
  }, [playbookRunSystems]);

  var renderInventorycard = function renderInventorycard(status) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Stack, {
      hasGutter: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
      className: "rem-c-card__playbook-log"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_22__["default"], {
      ref: inventory,
      columns: (0,_SystemsTable_helpers__WEBPACK_IMPORTED_MODULE_19__.mergedColumns)(_Columns__WEBPACK_IMPORTED_MODULE_20__["default"]),
      onLoad: function onLoad(_ref3) {
        var INVENTORY_ACTION_TYPES = _ref3.INVENTORY_ACTION_TYPES,
            mergeWithEntities = _ref3.mergeWithEntities;
        return (0,_store__WEBPACK_IMPORTED_MODULE_18__.register)(_objectSpread({}, mergeWithEntities(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["default"].playbookActivityIntentory({
          INVENTORY_ACTION_TYPES: INVENTORY_ACTION_TYPES
        })())));
      },
      items: playbookRunSystems.status !== 'pending' ? systems : [],
      isLoaded: playbookRunSystems.status !== 'pending',
      onRefresh: onRefresh,
      page: page,
      total: playbookRunSystems.meta.total,
      perPage: pageSize,
      hasCheckbox: false,
      expandable: true,
      showTags: true,
      onExpandClick: status === 'running' ? function (_e, _i, isOpen, _ref4) {
        var id = _ref4.id;
        setFirstExpand(true);

        if (isOpen) {
          setOpenId(id);

          if (refreshInterval) {
            clearInterval(refreshInterval);
          }

          getPlaybookRunSystemDetails(remediation.id, run_id, id);
          refreshInterval = setInterval(function () {
            return getPlaybookRunSystemDetails(remediation.id, run_id, id);
          }, 5000);
        } else {
          setOpenId(undefined);
          clearInterval(refreshInterval);
        }

        onCollapseInventory(isOpen, id);
      } : function (_e, _i, isOpen, _ref5) {
        var id = _ref5.id;
        setFirstExpand(true);

        if (isOpen) {
          setOpenId(id);
          getPlaybookRunSystemDetails(remediation.id, run_id, id);
        } else {
          setOpenId(undefined);
        }

        clearInterval(refreshInterval);
        onCollapseInventory(isOpen, id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Toolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_23__["default"], {
      items: [{
        value: 'display_name',
        label: 'Name',
        filterValues: {
          placeholder: 'Filter by name',
          type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_24__.conditionalFilterType.text,
          value: filter,
          onChange: function onChange(e, selected) {
            setFilter(selected);
            setPage(1);
            debouncedGetPlaybookRunSystems(id, run_id, executor_id, pageSize, 0, selected);
          }
        }
      }]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "secondary",
      onClick: function onClick() {
        return (0,_api__WEBPACK_IMPORTED_MODULE_11__.downloadPlaybook)(remediation.id);
      }
    }, "Download playbook")))))))));
  };

  var renderMain = function renderMain(status) {
    return {
      running: renderInventorycard(status),
      success: renderInventorycard(status),
      failure: renderInventorycard(status),
      canceled: renderInventorycard(status),
      epicFailure: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Stack, {
        hasGutter: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.CardHeader, {
        className: "rem-m-card__header-bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
        variant: "secondary",
        onClick: function onClick() {
          return (0,_api__WEBPACK_IMPORTED_MODULE_11__.downloadPlaybook)(remediation.id);
        }
      }, "Download playbook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Alerts_RunFailed__WEBPACK_IMPORTED_MODULE_15__["default"], {
        name: executor.executor_name
      })))))
    }[(0,_statusHelper__WEBPACK_IMPORTED_MODULE_12__.normalizeStatus)(status)];
  };

  var permission = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_17__.PermissionContext);
  return remediation && executor && playbookRun && playbookRun.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, " Remediations ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/".concat(remediation.id)
  }, " ", remediation.name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/".concat(remediation.id, "/").concat(run_id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_26__["default"], {
    type: "exact",
    date: playbookRun.data.created_at
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbItem, {
    isActive: true
  }, " ", executor.executor_name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_27__["default"], {
    title: (0,_statusHelper__WEBPACK_IMPORTED_MODULE_12__.normalizeStatus)(executor.status) === 'Running' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__.InProgressIcon, {
      className: "rem-c-running",
      "aria-label": "connection status"
    }), executor.executor_name) : executor.executor_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Split, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run status"
  }, executor.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_statusHelper__WEBPACK_IMPORTED_MODULE_12__.StatusSummary, {
    executorStatus: executor.status,
    counts: executor.counts,
    permission: permission
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_28__["default"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run by"
  }, "".concat(playbookRun.data.created_by.first_name, " ").concat(playbookRun.data.created_by.last_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "rem-c-playbookSummary__settings",
    title: "Run on"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_26__["default"], {
    type: "exact",
    date: playbookRun.data.created_at
  }))))))), renderMain((0,_statusHelper__WEBPACK_IMPORTED_MODULE_12__.normalizeStatus)(executor.status))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_skeletons_ExecutorDetailsSkeleton__WEBPACK_IMPORTED_MODULE_14__["default"], null);
};

ExecutorDetails.propTypes = {
  match: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  playbookRun: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  playbookRunSystems: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  playbookRunSystemDetails: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  getPlaybookRun: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().func),
  getPlaybookRunSystems: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().func),
  getPlaybookRunSystemDetails: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().func),
  onCollapseInventory: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().func),
  loadRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().func)
};
ExecutorDetails.defaultProps = {
  remediation: {}
};
var connected = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(function (_ref6) {
  var playbookRuns = _ref6.playbookRuns,
      playbookRun = _ref6.playbookRun,
      playbookRunSystems = _ref6.playbookRunSystems,
      playbookRunSystemDetails = _ref6.playbookRunSystemDetails,
      selectedRemediation = _ref6.selectedRemediation;
  return {
    playbookRuns: playbookRuns.data,
    playbookRun: playbookRun,
    playbookRunSystemDetails: playbookRunSystemDetails,
    playbookRunSystems: playbookRunSystems,
    remediation: selectedRemediation.remediation
  };
}, function (dispatch) {
  return {
    getPlaybookRuns: function getPlaybookRuns(id) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.getPlaybookRuns)(id));
    },
    getPlaybookRun: function getPlaybookRun(id, runId) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.getPlaybookRun)(id, runId));
    },
    getPlaybookRunSystems: function getPlaybookRunSystems(remediationId, runId, executorId, limit, offset, ansibleHost) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.getPlaybookRunSystems)(remediationId, runId, executorId, limit, offset, ansibleHost));
    },
    getPlaybookRunSystemDetails: function getPlaybookRunSystemDetails(remediationId, runId, systemId) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.getPlaybookRunSystemDetails)(remediationId, runId, systemId));
    },
    onCollapseInventory: function onCollapseInventory(isOpen, id) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.expandInventoryTable)(id, isOpen));
    },
    loadRemediation: function loadRemediation(id) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.loadRemediation)(id));
    }
  };
})(ExecutorDetails);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connected);

/***/ }),

/***/ "./src/components/RemediationsLogViewer.js":
/*!*************************************************!*\
  !*** ./src/components/RemediationsLogViewer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_log_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-log-viewer */ "./node_modules/@patternfly/react-log-viewer/dist/esm/LogViewer/LogViewer.js");
/* harmony import */ var _patternfly_react_log_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-log-viewer */ "./node_modules/@patternfly/react-log-viewer/dist/esm/LogViewer/LogViewerSearch.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);





var RemediationsLogViewer = function RemediationsLogViewer(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_log_viewer__WEBPACK_IMPORTED_MODULE_2__.LogViewer, {
    data: data,
    toolbar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_log_viewer__WEBPACK_IMPORTED_MODULE_3__.LogViewerSearch, {
      placeholder: "Search"
    }))))
  });
};

RemediationsLogViewer.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemediationsLogViewer);

/***/ }),

/***/ "./src/components/SystemDetails.js":
/*!*****************************************!*\
  !*** ./src/components/SystemDetails.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/light */ "./node_modules/react-syntax-highlighter/dist/esm/light.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_languages_hljs_yaml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/languages/hljs/yaml */ "./node_modules/react-syntax-highlighter/dist/esm/languages/hljs/yaml.js");
/* harmony import */ var _RemediationsLogViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemediationsLogViewer */ "./src/components/RemediationsLogViewer.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SystemDetails_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SystemDetails.scss */ "./src/components/SystemDetails.scss");
/* eslint-disable camelcase */










react_syntax_highlighter_dist_esm_light__WEBPACK_IMPORTED_MODULE_5__["default"].registerLanguage('yaml', react_syntax_highlighter_dist_esm_languages_hljs_yaml__WEBPACK_IMPORTED_MODULE_6__["default"]);

var PlaybookSystemDetails = function PlaybookSystemDetails(_ref) {
  var systemId = _ref.systemId,
      playbookRunSystemDetails = _ref.playbookRunSystemDetails;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Title, {
    headingLevel: "h4",
    size: "xl",
    className: "rem-c-title-job-output"
  }, "Playbook log"), systemId && systemId === playbookRunSystemDetails.system_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RemediationsLogViewer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: playbookRunSystemDetails.console
  }), playbookRunSystemDetails.status === 'running' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rem-l-playbook-running"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Spinner, {
    size: "lg",
    "aria-valuetext": "playbook in progress",
    className: "ins-c-spinner__playbook-running"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "lg"
  }));
};

PlaybookSystemDetails.propTypes = {
  systemId: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  console: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  playbookRunSystemDetails: prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    system_id: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    status: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    console: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)
  })
};
PlaybookSystemDetails.defaultProps = {
  playbookRunSystemDetails: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (_ref2) {
  var playbookRunSystemDetails = _ref2.playbookRunSystemDetails;
  return {
    playbookRunSystemDetails: playbookRunSystemDetails
  };
})(PlaybookSystemDetails));

/***/ }),

/***/ "./src/skeletons/ExecutorDetailsSkeleton.js":
/*!**************************************************!*\
  !*** ./src/skeletons/ExecutorDetailsSkeleton.js ***!
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









var ExecutorDetailsSkeleton = function ExecutorDetailsSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, {
    isActive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    hasGutter: true
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
    title: "Run by"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: "lg"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
    className: "rem-m-card__header-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, null, "Download playbook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SkeletonTable__WEBPACK_IMPORTED_MODULE_1__["default"], null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutorDetailsSkeleton);

/***/ }),

/***/ "./src/components/ExecutorDetails/ExecutorDetails.scss":
/*!*************************************************************!*\
  !*** ./src/components/ExecutorDetails/ExecutorDetails.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SystemDetails.scss":
/*!*******************************************!*\
  !*** ./src/components/SystemDetails.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ExecutorDetails.dfc157aeef52bbd1d1abe19a3bb9e386.js.map