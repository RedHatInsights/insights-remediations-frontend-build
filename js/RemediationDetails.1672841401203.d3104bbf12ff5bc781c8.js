"use strict";
(self["webpackChunkinsights_remediations_frontend"] = self["webpackChunkinsights_remediations_frontend"] || []).push([["RemediationDetails"],{

/***/ "./src/Utilities/debug.js":
/*!********************************!*\
  !*** ./src/Utilities/debug.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagination": () => (/* binding */ pagination)
/* harmony export */ });
var debug = localStorage.getItem('remediations:debug') === 'true';
var pagination = debug ? {
  perPageOptions: [1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 100, 200].map(function (i) {
    return {
      title: "".concat(i),
      value: i
    };
  })
} : {};

/***/ }),

/***/ "./src/components/Alerts/UpsellBanner.js":
/*!***********************************************!*\
  !*** ./src/components/Alerts/UpsellBanner.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["onClose"];




var UpsellBanner = function UpsellBanner(_ref) {
  var onClose = _ref.onClose,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Alert, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "info",
    isInline: true,
    title: "Put Insights into action",
    actionClose: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.AlertActionCloseButton, {
      onClose: onClose
    })
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.StackItem, null, "Enable push-button remediation across your hybrid cloud environment with Red Hat Smart Management."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: "https://www.redhat.com/en/technologies/management/smart-management"
  }, "Learn more"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpsellBanner);
UpsellBanner.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* eslint-disable no-console */

UpsellBanner.defaultProps = {
  onClose: function onClose() {
    return undefined;
  }
};

/***/ }),

/***/ "./src/components/DeleteButton.js":
/*!****************************************!*\
  !*** ./src/components/DeleteButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ConfirmationDialog */ "./src/components/ConfirmationDialog.js");
/* harmony import */ var _DeleteButton_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DeleteButton.scss */ "./src/components/DeleteButton.scss");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var DeleteButton = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DeleteButton, _Component);

  var _super = _createSuper(DeleteButton);

  function DeleteButton() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeleteButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      dialogOpen: false
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onButtonClicked", function () {
      _this.setState({
        dialogOpen: true
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onDialogClose", function (result) {
      _this.setState({
        dialogOpen: false
      });

      result && _this.props.onDelete();
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DeleteButton, [{
    key: "render",
    value: function render() {
      var dialogOpen = this.state.dialogOpen;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
        onClick: this.onButtonClicked,
        isDisabled: this.props.isDisabled,
        variant: this.props.variant
      }, this.props.label), dialogOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: this.props.dialogTitle,
        confirmText: this.props.dialogConfirmationText,
        text: this.props.dialogMessage,
        onClose: this.onDialogClose
      }));
    }
  }]);

  return DeleteButton;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

DeleteButton.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  dialogTitle: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  dialogMessage: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  dialogConfirmationText: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func.isRequired),
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)
};
DeleteButton.defaultProps = {
  label: 'Delete',
  variant: 'link'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteButton);

/***/ }),

/***/ "./src/components/Dialogs/TextInputDialog.js":
/*!***************************************************!*\
  !*** ./src/components/Dialogs/TextInputDialog.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextInputDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);




function TextInputDialog(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.value || ''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var title = props.title,
      onCancel = props.onCancel,
      onSubmit = props.onSubmit,
      ariaLabel = props.ariaLabel,
      className = props.className;

  function onChange(value) {
    setValue(value);

    if (props.pattern) {
      setValid(props.pattern.test(value));
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: title,
    isOpen: true,
    onClose: function onClose(event) {
      return onCancel(event);
    },
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "confirm",
      variant: "primary",
      onClick: function onClick() {
        return onSubmit(value);
      },
      isDisabled: !valid,
      ouiaId: "save"
    }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "cancel",
      variant: "secondary",
      onClick: onCancel,
      ouiaId: "cancel"
    }, "Cancel")],
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.small,
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FormGroup, {
    fieldId: "remediation-name",
    helperTextInvalid: "Playbook name has to contain alphanumeric characters",
    isValid: valid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    value: value,
    type: "text",
    onChange: onChange,
    "aria-label": ariaLabel || 'input text',
    autoFocus: true,
    isValid: valid
  })));
}
TextInputDialog.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  ariaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  pattern: prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(RegExp)
};

/***/ }),

/***/ "./src/components/EmptyStates/ActivityTabUpsell.js":
/*!*********************************************************!*\
  !*** ./src/components/EmptyStates/ActivityTabUpsell.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__);


 // TODO: Fill Learn more link

var ActivityTabUpsell = function ActivityTabUpsell() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, {
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.CloudIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
    headingLevel: "h5",
    size: "lg"
  }, "Get more with Find it Fix it capabilities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, "Upgrade to Red Hat Smart Management to remediate all your systems, across regions and geographies directly from Red Hat Insights."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "link",
    component: "a",
    ouiaId: "learn_more",
    href: "https://www.redhat.com/en/technologies/management/smart-management"
  }, "Learn more")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityTabUpsell);

/***/ }),

/***/ "./src/components/EmptyStates/EmptyActions.js":
/*!****************************************************!*\
  !*** ./src/components/EmptyStates/EmptyActions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyActions": () => (/* binding */ EmptyActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities/urls */ "./src/Utilities/urls.js");




var EmptyActions = function EmptyActions(filtered) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Bullseye, {
    className: "pf-u-pt-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, null, filtered.filtered === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
    size: "lg",
    headingLevel: "h5"
  }, "No actions found") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
    size: "lg",
    headingLevel: "h5"
  }, "This playbook is empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, "To add an action, select issues identified in", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: (0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_2__.appUrl)('advisor').toString()
  }, "Recommendations"), ",\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: (0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_2__.appUrl)('compliance').toString()
  }, "Compliance"), " or\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: (0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_2__.appUrl)('vulnerabilities').toString()
  }, "Vulnerability"), "\xA0 and select", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Remediate with Ansible."))));
};
EmptyActions.propTypes = {
  filtered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
};

/***/ }),

/***/ "./src/components/EmptyStates/EmptyActivityTable.js":
/*!**********************************************************!*\
  !*** ./src/components/EmptyStates/EmptyActivityTable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmptyActivityTable_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmptyActivityTable.scss */ "./src/components/EmptyStates/EmptyActivityTable.scss");





var EmptyActivityTable = function EmptyActivityTable() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.Table, {
    "aria-label": "No activity",
    cells: ['Run on', 'Run by', 'Status'],
    ouiaId: "activity-table",
    rows: [{
      cells: [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, {
          className: "rem-c-activity-table__empty"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
          headingLevel: "h5",
          size: "lg"
        }, "No activity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, "Execute this playbook to see a history and summary of the activity.")),
        props: {
          colSpan: 3
        }
      }]
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_2__.TableBody, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyActivityTable);

/***/ }),

/***/ "./src/components/ExecuteButton.js":
/*!*****************************************!*\
  !*** ./src/components/ExecuteButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modals_ExecuteModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals/ExecuteModal */ "./src/components/Modals/ExecuteModal.js");
/* harmony import */ var _ExecuteButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExecuteButton.scss */ "./src/components/ExecuteButton.scss");
/* harmony import */ var _Status_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Status.scss */ "./src/components/Status.scss");


/* eslint-disable camelcase */







var ExecuteButton = function ExecuteButton(_ref) {
  var isLoading = _ref.isLoading,
      isDisabled = _ref.isDisabled,
      disabledStateText = _ref.disabledStateText,
      data = _ref.data,
      getConnectionStatus = _ref.getConnectionStatus,
      remediationId = _ref.remediationId,
      remediationName = _ref.remediationName,
      issueCount = _ref.issueCount,
      runRemediation = _ref.runRemediation,
      etag = _ref.etag,
      remediationStatus = _ref.remediationStatus,
      setEtag = _ref.setEtag,
      setActiveAlert = _ref.setActiveAlert;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      showRefreshMessage = _useState4[0],
      setShowRefreshMessage = _useState4[1];

  var isEnabled = function isEnabled() {
    return  true || 0;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (remediationStatus === 'changed') {
      getConnectionStatus(remediationId);
      setShowRefreshMessage(true);
    } else if (remediationStatus === 'fulfilled') {
      setOpen(false);
    }
  }, [remediationStatus]);

  var buttonWithTooltip = function buttonWithTooltip() {
    return isDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: disabledStateText,
      position: "auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isAriaDisabled: true
    }, "Execute playbook")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        setOpen(true);
        getConnectionStatus(remediationId);
      }
    }, "Execute playbook");
  };

  return isEnabled() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, buttonWithTooltip(), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Modals_ExecuteModal__WEBPACK_IMPORTED_MODULE_3__.ExecuteModal, {
    isOpen: open,
    onClose: function onClose() {
      setShowRefreshMessage(false);
      setOpen(false);
    },
    showRefresh: showRefreshMessage,
    remediationId: remediationId,
    remediationName: remediationName,
    data: data,
    etag: etag,
    isLoading: isLoading,
    issueCount: issueCount,
    runRemediation: runRemediation,
    setEtag: setEtag,
    setActiveAlert: setActiveAlert
  })) : null;
};

ExecuteButton.propTypes = {
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
  getConnectionStatus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  runRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  remediationId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  remediationName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  remediationStatus: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  issueCount: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  etag: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  setEtag: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  disabledStateText: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  setActiveAlert: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
ExecuteButton.defaultProps = {
  data: [],
  isDisabled: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecuteButton);

/***/ }),

/***/ "./src/components/Layouts/IconInline.js":
/*!**********************************************!*\
  !*** ./src/components/Layouts/IconInline.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconInline": () => (/* binding */ IconInline)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconInline_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconInline.scss */ "./src/components/Layouts/IconInline.scss");



var IconInline = function IconInline(_ref) {
  var icon = _ref.icon,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rem-c-icon-inline"
  }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "rem-c-icon-inline__text"
  }, text));
};
IconInline.propTypes = {
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./src/components/Modals/SystemsStatusModal.js":
/*!*****************************************************!*\
  !*** ./src/components/Modals/SystemsStatusModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemsStatusModal": () => (/* binding */ SystemsStatusModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_Registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/Registry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/Registry/Registry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Inventory */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Inventory/InventoryTable.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/ConditionalFilter.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ConditionalFilter */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ConditionalFilter/conditionalFilterConstants.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/TableToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js");
/* harmony import */ var _Utilities_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utilities/urls */ "./src/Utilities/urls.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/reducers */ "./src/store/reducers.js");
/* harmony import */ var _RemediationDetailsSystemDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RemediationDetailsSystemDropdown */ "./src/components/RemediationDetailsSystemDropdown.js");
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ConfirmationDialog */ "./src/components/ConfirmationDialog.js");
/* harmony import */ var _Utilities_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Utilities/model */ "./src/Utilities/model.js");
/* harmony import */ var _Layouts_IconInline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Layouts/IconInline */ "./src/components/Layouts/IconInline.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var SystemsStatusModal = function SystemsStatusModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      issue = _ref.issue,
      remediation = _ref.remediation,
      onDelete = _ref.onDelete;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      deleteDialogOpen = _useState2[0],
      setDeleteDialogOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      system = _useState4[0],
      setSystem = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      systemStatuses = _useState6[0],
      setSystemStatuses = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      pageSize = _useState10[0],
      setPageSize = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      filterText = _useState12[0],
      setFilterText = _useState12[1];

  var inventory = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var _useRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_6__.inventoryUrlBuilder)(issue)),
      urlBuilder = _useRef.current;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var statuses = {};
    issue.systems.map(function (system) {
      statuses[system.id] = system.resolved === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Layouts_IconInline__WEBPACK_IMPORTED_MODULE_11__.IconInline, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, null),
        text: "Remediated"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Layouts_IconInline__WEBPACK_IMPORTED_MODULE_11__.IconInline, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_4__.TimesIcon, null),
        text: "Not remediated"
      });
    });
    setSystemStatuses(statuses);
  }, []); // eslint-disable-next-line react/display-name

  var detailDropdown = function detailDropdown(remediation, issue) {
    return function (system) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_RemediationDetailsSystemDropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
        remediation: remediation,
        issue: issue,
        system: system
      });
    };
  };

  var generateStatus = function generateStatus(id) {
    return systemStatuses[id];
  };

  var onRefresh = function onRefresh(options) {
    if (inventory && inventory.current) {
      setPage(options.page);
      setPageSize(options.per_page);
      inventory.current.onRefreshData(options);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    className: "remediations",
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ModalVariant.large,
    title: "System".concat(issue.systems.length > 1 ? 's' : '', " for action ").concat(issue.description),
    isOpen: isOpen,
    onClose: onClose,
    isFooterLeftAligned: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "rem-c-toolbar__filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onLoad: function onLoad(_ref2) {
      var mergeWithEntities = _ref2.mergeWithEntities,
          INVENTORY_ACTION_TYPES = _ref2.INVENTORY_ACTION_TYPES;
      return (0,_redhat_cloud_services_frontend_components_utilities_Registry__WEBPACK_IMPORTED_MODULE_13__.getRegistry)().register(_objectSpread({}, mergeWithEntities(_store_reducers__WEBPACK_IMPORTED_MODULE_7__["default"].inventoryEntitiesReducer({
        INVENTORY_ACTION_TYPES: INVENTORY_ACTION_TYPES,
        detailDropdown: detailDropdown(remediation, issue),
        urlBuilder: urlBuilder,
        generateStatus: generateStatus
      })())));
    },
    ref: inventory,
    items: lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(issue.systems.filter(function (s) {
      return (0,_Utilities_model__WEBPACK_IMPORTED_MODULE_10__.getSystemName)(s).includes(filterText);
    }), [function (s) {
      return (0,_Utilities_model__WEBPACK_IMPORTED_MODULE_10__.getSystemName)(s);
    }, function (s) {
      return s.id;
    }]),
    onRefresh: onRefresh,
    page: page,
    total: issue.systems.length,
    perPage: pageSize,
    hasCheckbox: false,
    actions: [{
      title: ' Remove system',
      onClick: function onClick(event, rowId, rowData) {
        setSystem(rowData);
        setDeleteDialogOpen(true);
      }
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_15__["default"], {
    items: [{
      value: 'display_name',
      label: 'Name',
      filterValues: {
        placeholder: 'Search by name',
        type: _redhat_cloud_services_frontend_components_ConditionalFilter__WEBPACK_IMPORTED_MODULE_16__.conditionalFilterType.text,
        value: filterText,
        onChange: function onChange(e, selected) {
          return setFilterText(selected);
        }
      }
    }]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOpen: deleteDialogOpen,
    text: "Removing the system ".concat((0,_Utilities_model__WEBPACK_IMPORTED_MODULE_10__.getSystemName)(system), " from the action ").concat(issue.description, "\n                    will remove this system\u2019s remediation from the playbook."),
    onClose: function onClose(value) {
      setDeleteDialogOpen(false);
      value && onDelete(remediation.id, issue.id, system.id);
    }
  }));
};
SystemsStatusModal.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),
  issue: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func)
};

/***/ }),

/***/ "./src/components/RemediationActivityTable.js":
/*!****************************************************!*\
  !*** ./src/components/RemediationActivityTable.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _statusHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statusHelper */ "./src/components/statusHelper.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _RemediationActivityTable_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RemediationActivityTable.scss */ "./src/components/RemediationActivityTable.scss");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var RemediationActivityTable = function RemediationActivityTable(_ref) {
  var remediation = _ref.remediation,
      playbookRuns = _ref.playbookRuns;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  var permission = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_App__WEBPACK_IMPORTED_MODULE_7__.PermissionContext);

  var generateRows = function generateRows(playbookRuns) {
    return playbookRuns.reduce(function (acc, playbooks, i) {
      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(acc), [{
        isOpen: false,
        cells: [{
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
            to: "/".concat(remediation.id, "/").concat(playbooks.id)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_9__["default"], {
            type: "exact",
            date: playbooks.created_at
          })),
          cellFormatters: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.expandable]
        }, "".concat(playbooks.created_by.first_name, " ").concat(playbooks.created_by.last_name), {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_statusHelper__WEBPACK_IMPORTED_MODULE_6__.StatusSummary, {
            executorStatus: (0,_statusHelper__WEBPACK_IMPORTED_MODULE_6__.normalizeStatus)(playbooks.status),
            counts: playbooks.executors.reduce(function (acc, ex) {
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
              canceled: 0,
              acked: 0
            }),
            hasCancel: true,
            remediationName: remediation.name,
            remediationId: remediation.id,
            playbookId: playbooks.id,
            permission: permission
          })
        }]
      }, {
        parent: 2 * i,
        fullWidth: true,
        cells: [{
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Table, {
            "aria-label": "Compact expandable table",
            cells: ['Connection', 'Systems', 'Playbook run status'],
            rows: playbooks.executors.map(function (e) {
              return {
                cells: [{
                  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    to: "/".concat(remediation.id, "/").concat(playbooks.id, "/").concat(e.executor_id)
                  }, e.executor_name)
                }, e.system_count, {
                  title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_statusHelper__WEBPACK_IMPORTED_MODULE_6__.StatusSummary, {
                    executorStatus: (0,_statusHelper__WEBPACK_IMPORTED_MODULE_6__.normalizeStatus)(e.status),
                    counts: e.counts,
                    permission: permission
                  })
                }]
              };
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableBody, null))
        }]
      }]);
    }, []);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (playbookRuns && playbookRuns.length) {
      setRows(function () {
        return generateRows(playbookRuns);
      });
    }
  }, [playbookRuns]);

  var handleOnCollapse = function handleOnCollapse(event, rowId, isOpen) {
    var collapseRows = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rows);

    collapseRows[rowId] = _objectSpread(_objectSpread({}, collapseRows[rowId]), {}, {
      isOpen: isOpen
    });
    setRows(collapseRows);
  };

  var columns = ['Run on', 'Run by', 'Status'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Table, {
    className: "rem-c-activity-table",
    "aria-label": "Collapsible table",
    onCollapse: handleOnCollapse,
    rows: rows,
    cells: columns
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableBody, null));
};

RemediationActivityTable.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  playbookRuns: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemediationActivityTable);

/***/ }),

/***/ "./src/components/RemediationDetailsDropdown.js":
/*!******************************************************!*\
  !*** ./src/components/RemediationDetailsDropdown.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Dialogs_TextInputDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dialogs/TextInputDialog */ "./src/components/Dialogs/TextInputDialog.js");
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfirmationDialog */ "./src/components/ConfirmationDialog.js");
/* harmony import */ var _Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Alerts/PlaybookToastAlerts */ "./src/components/Alerts/PlaybookToastAlerts.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../App */ "./src/App.js");













var playbookNamePattern = /^$|^.*[\w\d]+.*$/;
var EMPTY_NAME = 'Unnamed Playbook';

function RemediationDetailsDropdown(_ref) {
  var remediation = _ref.remediation,
      onRename = _ref.onRename,
      onDelete = _ref.onDelete,
      setActiveAlert = _ref.setActiveAlert;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      renameDialogOpen = _useState4[0],
      setRenameDialogOpen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      deleteDialogOpen = _useState6[0],
      setDeleteDialogOpen = _useState6[1];

  var permission = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_App__WEBPACK_IMPORTED_MODULE_11__.PermissionContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, renameDialogOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Dialogs_TextInputDialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Edit playbook name",
    ariaLabel: "Playbook name",
    value: remediation.name,
    onCancel: function onCancel() {
      return setRenameDialogOpen(false);
    },
    onSubmit: function onSubmit(name) {
      setRenameDialogOpen(false);
      onRename(remediation.id, name);
      setActiveAlert({
        key: (0,_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_9__.generateUniqueId)(),
        title: "Updated playbook name to ".concat(name),
        description: '',
        variant: 'success'
      });
    },
    pattern: playbookNamePattern
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isOpen: deleteDialogOpen,
    title: "Remove playbook?",
    text: "You will not be able to recover this Playbook",
    confirmText: "Remove playbook",
    onClose: function onClose(confirm) {
      setDeleteDialogOpen(false);

      if (confirm) {
        onDelete(remediation.id);
        setActiveAlert({
          key: (0,_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_9__.generateUniqueId)(),
          title: "Deleted playbook ".concat(remediation.name),
          variant: 'success'
        });
      }
    }
  }), permission.permissions.write && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {
    onSelect: function onSelect(f) {
      return f;
    },
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.KebabToggle, {
      onToggle: function onToggle() {
        return setOpen(function (value) {
          return !value;
        });
      }
    }),
    isOpen: open,
    position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.DropdownPosition.right,
    isPlain: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
    onClick: function onClick() {
      return setRenameDialogOpen(true);
    },
    variant: "link"
  }, "Rename"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
    className: " rem-c-button__danger-link",
    onClick: function onClick() {
      return setDeleteDialogOpen(true);
    },
    variant: "link"
  }, "Delete")));
}

RemediationDetailsDropdown.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object.isRequired),
  onRename: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func.isRequired),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func.isRequired),
  setActiveAlert: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func)
};
var connected = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, function (dispatch, _ref2) {
  var history = _ref2.history;
  return {
    onRename: function onRename(id, name) {
      if (!name) {
        name = EMPTY_NAME;
      }

      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.patchRemediation)(id, {
        name: name
      }));
    },
    onDelete: function () {
      var _onDelete = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.deleteRemediation)(id));

              case 2:
                history.push('/');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onDelete(_x) {
        return _onDelete.apply(this, arguments);
      }

      return onDelete;
    }()
  };
})(RemediationDetailsDropdown));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connected);

/***/ }),

/***/ "./src/components/RemediationDetailsSystemDropdown.js":
/*!************************************************************!*\
  !*** ./src/components/RemediationDetailsSystemDropdown.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ConfirmationDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfirmationDialog */ "./src/components/ConfirmationDialog.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _Utilities_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utilities/model */ "./src/Utilities/model.js");
/* harmony import */ var _Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Alerts/PlaybookToastAlerts */ "./src/components/Alerts/PlaybookToastAlerts.js");











function RemediationDetailsSystemDropdown(_ref) {
  var remediation = _ref.remediation,
      issue = _ref.issue,
      system = _ref.system,
      onDelete = _ref.onDelete,
      setActiveAlert = _ref.setActiveAlert;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      deleteDialogOpen = _useState4[0],
      setDeleteDialogOpen = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: deleteDialogOpen,
    text: "This playbook will not address ".concat(issue.description, " on ").concat((0,_Utilities_model__WEBPACK_IMPORTED_MODULE_7__.getSystemName)(system)),
    onClose: function onClose(value) {
      setDeleteDialogOpen(false);
      value && onDelete(remediation.id, issue.id, system.id);
      setActiveAlert({
        key: (0,_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_8__.generateUniqueId)(),
        title: "Removed systems from ".concat(remediation.name),
        description: '',
        variant: 'success'
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    onSelect: function onSelect(f) {
      return f;
    },
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.KebabToggle, {
      onToggle: function onToggle() {
        return setOpen(function (value) {
          return !value;
        });
      }
    }),
    isOpen: open,
    position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.DropdownPosition.right,
    isPlain: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: function onClick() {
      return setDeleteDialogOpen(true);
    },
    variant: "link"
  }, "Remove system")));
}

RemediationDetailsSystemDropdown.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired),
  issue: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired),
  system: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired),
  onDelete: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  setActiveAlert: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
};
var connected = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, function (dispatch) {
  return {
    onDelete: function onDelete(id, issue, system) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.deleteRemediationIssueSystem)(id, issue, system));
    }
  };
})(RemediationDetailsSystemDropdown));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connected);

/***/ }),

/***/ "./src/components/RemediationDetailsTable.js":
/*!***************************************************!*\
  !*** ./src/components/RemediationDetailsTable.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PrimaryToolbar/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/TableToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/TableToolbar/TableToolbar.js");
/* harmony import */ var _Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Alerts/PlaybookToastAlerts */ "./src/components/Alerts/PlaybookToastAlerts.js");
/* harmony import */ var _Utilities_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utilities/model */ "./src/Utilities/model.js");
/* harmony import */ var _Utilities_urls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Utilities/urls */ "./src/Utilities/urls.js");
/* harmony import */ var _RemediationTable_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RemediationTable.scss */ "./src/components/RemediationTable.scss");
/* harmony import */ var _containers_ConnectedComponents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/ConnectedComponents */ "./src/containers/ConnectedComponents.js");
/* harmony import */ var _containers_DeleteButtons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../containers/DeleteButtons */ "./src/containers/DeleteButtons.js");
/* harmony import */ var _SystemForActionButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SystemForActionButton */ "./src/components/SystemForActionButton.js");
/* harmony import */ var _hooks_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/table */ "./src/hooks/table.js");
/* harmony import */ var _Utilities_debug__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Utilities/debug */ "./src/Utilities/debug.js");
/* harmony import */ var _RemediationDetailsTable_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RemediationDetailsTable.scss */ "./src/components/RemediationDetailsTable.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _EmptyStates_EmptyActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./EmptyStates/EmptyActions */ "./src/components/EmptyStates/EmptyActions.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






















function resolutionDescriptionCell(remediation, issue) {
  var url = (0,_Utilities_urls__WEBPACK_IMPORTED_MODULE_10__.buildIssueUrl)(issue.id);

  if (issue.resolutions_available <= 1) {
    return url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      href: url
    }, issue.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), issue.resolution.description)) : issue.resolution.description;
  }

  return url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: url
  }, issue.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), issue.resolution.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_containers_ConnectedComponents__WEBPACK_IMPORTED_MODULE_12__.ConnectResolutionEditButton, {
    issue: issue,
    remediation: remediation
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, issue.resolution.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_containers_ConnectedComponents__WEBPACK_IMPORTED_MODULE_12__.ConnectResolutionEditButton, {
    issue: issue,
    remediation: remediation
  }));
}

function needsRebootCell(needsReboot) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, needsReboot ? 'Required' : 'Not required');
}

function systemsForAction(issue, remediation, title) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SystemForActionButton__WEBPACK_IMPORTED_MODULE_14__.SystemForActionButton, {
    key: issue.id,
    remediation: remediation,
    issue: issue,
    title: title
  });
}

function getResolvedSystems(issue) {
  var count = 0;
  issue.systems.map(function (system) {
    if (system.resolved) {
      count++;
    }
  });
  return count;
}

var SORTING_ITERATEES = [null, // checkboxes
function (i) {
  return i.description;
}, null, // resolution steps
function (i) {
  return i.resolution.needs_reboot;
}, function (i) {
  return i.systems.length;
}, function (i) {
  return (0,_Utilities_model__WEBPACK_IMPORTED_MODULE_9__.getIssueApplication)(i);
}];

var buildRow = function buildRow(remediation) {
  return function (issue) {
    var row = [{
      isOpen: false,
      id: issue.id,
      cells: [{
        title: resolutionDescriptionCell(remediation, issue)
      }, {
        title: needsRebootCell(issue.resolution.needs_reboot)
      }, {
        title: systemsForAction(issue, remediation, "".concat(issue.systems.length))
      }, {
        title: (0,_Utilities_model__WEBPACK_IMPORTED_MODULE_9__.getIssueApplication)(issue),
        props: {
          className: 'rem-m-nowrap'
        }
      }, {
        title: systemsForAction(issue, remediation, "".concat(getResolvedSystems(issue), "/").concat(issue.systems.length, " remediated"))
      }]
    }];
    return row;
  };
};

function RemediationDetailsTable(props) {
  var pagination = (0,_hooks_table__WEBPACK_IMPORTED_MODULE_15__.usePagination)();
  var sorter = (0,_hooks_table__WEBPACK_IMPORTED_MODULE_15__.useSorter)(1, 'asc');
  var filter = (0,_hooks_table__WEBPACK_IMPORTED_MODULE_15__.useFilter)();
  var selector = (0,_hooks_table__WEBPACK_IMPORTED_MODULE_15__.useSelector)();
  var setActiveAlert = props.setActiveAlert;
  var permission = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_App__WEBPACK_IMPORTED_MODULE_18__.PermissionContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      filterText = _useState2[0],
      setFilterText = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      prevRemediationsCount = _useState4[0],
      setPrevRemediationsCount = _useState4[1]; // eslint-disable-line


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    filter.setValue(filterText);
  }, [filterText]);
  sorter.onChange(pagination.reset);
  filter.onChange(pagination.reset);
  var filtered = props.remediation.issues.filter(function (i) {
    return (0,_Utilities_model__WEBPACK_IMPORTED_MODULE_9__.includesIgnoreCase)(i.description, filter.value.trim());
  });
  var sorted = lodash_orderBy__WEBPACK_IMPORTED_MODULE_5___default()(filtered, [SORTING_ITERATEES[sorter.sortBy]], [sorter.sortDir]);
  var paged = sorted.slice(pagination.offset, pagination.offset + pagination.pageSize);
  var rows = lodash_flatMap__WEBPACK_IMPORTED_MODULE_4___default()(paged, buildRow(props.remediation));
  selector.register(rows);
  var selectedIds = selector.getSelectedIds();
  var activeFiltersConfig = {
    filters: filterText.length ? [{
      category: 'Action',
      chips: [{
        name: filterText
      }]
    }] : [],
    onDelete: function onDelete() {
      setFilterText('');
      filter.setValue('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "test"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    filterConfig: {
      items: [{
        label: 'Search actions',
        type: 'text',
        filterValues: {
          id: 'filter-by-string',
          key: 'filter-by-string',
          placeholder: 'Search',
          value: filterText,
          onChange: function onChange(_e, value) {
            setFilterText(value);
          }
        }
      }]
    },
    bulkSelect: {
      items: [{
        title: 'Select all',
        onClick: function onClick() {
          return selector.props.onSelect('page', true, 0);
        }
      }, {
        title: 'Select none',
        onClick: function onClick() {
          return selector.props.onSelect('none');
        }
      }],
      checked: selectedIds.length && filtered.length > selectedIds.length ? null : selectedIds.length,
      count: selectedIds.length,
      onSelect: function onSelect(isSelected, e) {
        return selector.props.onSelect(e, isSelected, -1);
      }
    },
    actionsConfig: {
      actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_containers_DeleteButtons__WEBPACK_IMPORTED_MODULE_13__.DeleteActionsButton, {
        key: props.remediation.id,
        variant: "secondary",
        isDisabled: !selectedIds.length,
        remediation: props.remediation,
        issues: selectedIds,
        afterDelete: function afterDelete() {
          setActiveAlert({
            key: (0,_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_8__.generateUniqueId)(),
            title: "Removed ".concat(selectedIds.length, " actions from ").concat(props.remediation.name),
            description: '',
            variant: 'success'
          });
          selector.reset;
        }
      })]
    },
    pagination: _objectSpread(_objectSpread({}, pagination.props), {}, {
      itemCount: filtered.length
    }),
    activeFiltersConfig: activeFiltersConfig
  }), rows.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.Table, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.TableVariant.compact,
    "aria-label": "Actions",
    canSelectAll: false,
    className: "ins-c-remediation-details-table",
    cells: [{
      title: 'Actions',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.sortable]
    }, {
      title: 'Reboot required',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.sortable]
    }, {
      title: 'Systems',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.sortable]
    }, {
      title: 'Type',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.sortable]
    }, {
      title: 'Status',
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.sortable]
    }],
    rows: rows
  }, sorter.props, permission.permissions.write && _objectSpread({}, selector.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_7__.TableBody, selector.tbodyProps)) : filter.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_EmptyStates_EmptyActions__WEBPACK_IMPORTED_MODULE_19__.EmptyActions, {
    filtered: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_EmptyStates_EmptyActions__WEBPACK_IMPORTED_MODULE_19__.EmptyActions, {
    filtered: false
  }), rows.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_TableToolbar__WEBPACK_IMPORTED_MODULE_21__["default"], {
    isFooter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__.Pagination, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "bottom",
    dropDirection: "up",
    itemCount: filtered.length
  }, pagination.props, _Utilities_debug__WEBPACK_IMPORTED_MODULE_16__.pagination))));
}

RemediationDetailsTable.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object.isRequired),
  status: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object.isRequired),
  setActiveAlert: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemediationDetailsTable);

/***/ }),

/***/ "./src/components/RemediationSummary.js":
/*!**********************************************!*\
  !*** ./src/components/RemediationSummary.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemediationSummary": () => (/* binding */ RemediationSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartDonutUtilization/ChartDonutUtilization.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartLabel/ChartLabel.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "webpack/sharing/consume/default/@patternfly/react-icons/@patternfly/react-icons");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layouts/DescriptionList */ "./src/components/Layouts/DescriptionList.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_statusHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/statusHelper */ "./src/components/statusHelper.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _RemediationSummary_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RemediationSummary.scss */ "./src/components/RemediationSummary.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












var RemediationSummary = function RemediationSummary(_ref) {
  var remediation = _ref.remediation,
      playbookRuns = _ref.playbookRuns,
      switchAutoReboot = _ref.switchAutoReboot,
      context = _ref.context;

  var handleRebootChange = function handleRebootChange(autoReboot) {
    switchAutoReboot(remediation.id, autoReboot);
  };

  var generateNumIssuesReboot = function generateNumIssuesReboot() {
    var count = 0;

    var _iterator = _createForOfIteratorHelper(remediation.issues),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var issue = _step.value;

        if (issue.resolution.needs_reboot) {
          count++;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return count;
  };

  var generateNumRebootString = function generateNumRebootString(num) {
    return "".concat(num, " issue").concat(num === 1 ? '' : 's', " require").concat(num === 1 ? 's' : '', " reboot to remediate");
  };

  var pluralize = function pluralize(number, str) {
    return number === 1 ? "".concat(number, " ").concat(str) : "".concat(number, " ").concat(str, "s");
  };

  var rebootEnabled = function rebootEnabled() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.CheckCircleIcon, {
      className: "rem-c-success"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
      className: "ins-c-remediation-summary__reboot--enabled"
    }, " Enabled "), context.permissions.write && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "link",
      onClick: function onClick() {
        return handleRebootChange(!remediation.auto_reboot);
      }
    }, "Turn off"));
  };

  var rebootDisabled = function rebootDisabled(required) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.OffIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
      className: "ins-c-remediation-summary__reboot--disabled".concat(required ? '--warning' : '')
    }, "Off"), required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.ExclamationTriangleIcon, {
      className: "ins-c-remediation-summary__reboot--required--icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
      className: "ins-c-remediation-summary__reboot--required"
    }, generateNumRebootString(generateNumIssuesReboot()))), context.permissions.write && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "link",
      onClick: function onClick() {
        return handleRebootChange(!remediation.auto_reboot);
      }
    }, "Turn on"));
  };

  var generateAutoRebootStatus = function generateAutoRebootStatus(status, needsReboot) {
    return status ? rebootEnabled() : rebootDisabled(needsReboot);
  };

  var renderAutoReboot = function renderAutoReboot(remediation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "rem-c-playbookSummary__settings",
      title: "Autoreboot"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('ins-c-reboot-status', {
        'ins-c-reboot-status__enabled': remediation.auto_reboot && remediation.needs_reboot
      }, {
        'ins-c-reboot-status__disabled': !remediation.auto_reboot
      }),
      spacer: {
        "default": 'spacer-xl'
      }
    }, generateAutoRebootStatus(remediation.auto_reboot, remediation.needs_reboot))));
  };

  var renderLatestActivity = function renderLatestActivity(playbookRuns) {
    if (playbookRuns.length) {
      var mostRecent = playbookRuns[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        spacer: {
          "default": 'spacer-xl'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        needsPointer: true,
        className: "rem-c-description-list-latest-activity",
        title: "Latest activity"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_statusHelper__WEBPACK_IMPORTED_MODULE_6__.StatusSummary, {
        executorStatus: mostRecent.status,
        counts: mostRecent.executors.reduce(function (acc, ex) {
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
          canceled: 0,
          acked: 0
        }),
        permission: {}
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "rem-c-description-list-latest-activity__date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "relative",
        date: mostRecent.updated_at
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/".concat(mostRecent.remediation_id, "/").concat(mostRecent.id)
      }, "View")));
    }
  };

  var getResolvedCount = function getResolvedCount(issues) {
    var count = 0;
    issues.map(function (i) {
      return i.systems.every(function (s) {
        return s.resolved;
      }) && count++;
    });
    return count;
  };

  var stats = remediation.stats;
  var totalSystems = stats.systemsWithReboot + stats.systemsWithoutReboot;
  var resolvedCount = getResolvedCount(remediation.issues);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Split, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_9__.ChartDonutUtilization, {
    ariaDesc: "Resolved issues count",
    ariaTitle: "Resolved issues chart",
    constrainToVisibleArea: true,
    data: {
      x: 'Resolved',
      y: resolvedCount / remediation.issues.length * 100
    },
    labels: function labels(_ref2) {
      var data = _ref2.data;
      return data.x ? "".concat(data.x, ": ").concat(data.y, "%") : null;
    },
    title: "".concat(resolvedCount, "/").concat(remediation.issues.length),
    subTitle: "Issues resolved",
    subTitleComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__.ChartLabel, {
      y: 102
    }),
    thresholds: [{
      value: 100,
      color: '#3E8635'
    }],
    height: 175,
    width: 175,
    padding: {
      bottom: 20,
      left: 0,
      right: 20,
      top: 20
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SplitItem, {
    className: "ins-c-remediation-summary__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Split, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    spacer: {
      "default": 'spacer-lg'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Total systems"
  }, pluralize(totalSystems, 'system'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, playbookRuns && renderLatestActivity(playbookRuns))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, renderAutoReboot(remediation)))));
};
RemediationSummary.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object.isRequired),
  playbookRuns: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
  switchAutoReboot: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func.isRequired),
  context: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object.isRequired)
};

/***/ }),

/***/ "./src/components/ResolutionEditButton.js":
/*!************************************************!*\
  !*** ./src/components/ResolutionEditButton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResolutionModal_ResolutionStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResolutionModal/ResolutionStep */ "./src/components/ResolutionModal/ResolutionStep.js");






var ResolutionEditButton = function ResolutionEditButton(_ref) {
  var remediation = _ref.remediation,
      issue = _ref.issue,
      onResolutionSelected = _ref.onResolutionSelected,
      getResolutions = _ref.getResolutions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var resolutionStep = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var onModalClose = function onModalClose(result) {
    var _resolutionStep$curre;

    setIsOpen(false);
    var resolution = (_resolutionStep$curre = resolutionStep.current) === null || _resolutionStep$curre === void 0 ? void 0 : _resolutionStep$curre.getSelectedResolution();

    if (result && issue.resolution.id !== resolution.id) {
      onResolutionSelected(remediation.id, issue.id, resolution.id);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Edit"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ModalVariant.medium,
    className: "rem-c-resolution-modal",
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    title: "Edit resolution",
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "confirm",
      variant: "primary",
      onClick: onModalClose
    }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "cancel",
      variant: "secondary",
      onClick: function onClick() {
        return setIsOpen(false);
      }
    }, "Cancel")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResolutionModal_ResolutionStep__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "ResolutionStep",
    issue: issue,
    ref: resolutionStep,
    getResolutions: getResolutions
  })));
};

ResolutionEditButton.propTypes = {
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
  issue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
  onResolutionSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  getResolutions: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResolutionEditButton);

/***/ }),

/***/ "./src/components/ResolutionModal/ResolutionStep.js":
/*!**********************************************************!*\
  !*** ./src/components/ResolutionModal/ResolutionStep.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Reboot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Reboot */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Reboot/Reboot.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _ChooseResolutionModal_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ChooseResolutionModal.scss */ "./src/components/ResolutionModal/ChooseResolutionModal.scss");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var ResolutionStep = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ResolutionStep, _Component);

  var _super = _createSuper(ResolutionStep);

  function ResolutionStep(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResolutionStep);

    _this = _super.call(this, props);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onRadioChange", function (resolution) {
      _this.setState({
        selected: resolution
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "getSelectedResolution", function () {
      return _this.state.selected;
    });

    _this.issue = props.issue;
    _this.state = {
      selected: props.issue.resolution,
      resolutions: false
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ResolutionStep, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
        var resolutions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.getResolutions(this.issue.id);

              case 2:
                resolutions = _context.sent;
                this.setState({
                  resolutions: resolutions.value
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          resolutions = _this$state.resolutions,
          selected = _this$state.selected;
      var resolutionsDisplay;

      if (resolutions) {
        resolutionsDisplay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Form, null, resolutions.resolutions.map(function (resolution) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
            className: "ins-c-resolution-option",
            key: resolution.id
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Radio, {
            label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Stack, {
              className: "ins-c-resolution-choice__details"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, resolution.description), resolution.needs_reboot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_redhat_cloud_services_frontend_components_Reboot__WEBPACK_IMPORTED_MODULE_12__["default"], {
              red: true
            }))),
            "aria-label": resolution.description,
            id: resolution.id,
            name: "radio",
            defaultChecked: resolution.id === selected.id,
            onChange: function onChange() {
              return _this2.onRadioChange(resolution);
            }
          }));
        }))));
      } else {
        resolutionsDisplay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_13__["default"], null)));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Stack, {
        hasGutter: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", null, "Select resolution for this action.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Split, {
        hasGutter: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.Label, null, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__.SplitItem, {
        isFilled: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h1", {
        className: "ins-m-text__bold"
      }, this.issue.description)))), resolutionsDisplay);
    }
  }]);

  return ResolutionStep;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

ResolutionStep.propTypes = {
  issue: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object.isRequired),
  getResolutions: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResolutionStep);

/***/ }),

/***/ "./src/components/SystemForActionButton.js":
/*!*************************************************!*\
  !*** ./src/components/SystemForActionButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemForActionButton": () => (/* binding */ SystemForActionButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _Modals_SystemsStatusModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modals/SystemsStatusModal */ "./src/components/Modals/SystemsStatusModal.js");
/* harmony import */ var _SystemForActionButton_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SystemForActionButton.scss */ "./src/components/SystemForActionButton.scss");







var SystemForActionButton = function SystemForActionButton(_ref) {
  var issue = _ref.issue,
      remediation = _ref.remediation,
      title = _ref.title;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Modals_SystemsStatusModal__WEBPACK_IMPORTED_MODULE_4__.SystemsStatusModal, {
    isOpen: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    issue: issue,
    remediation: remediation,
    onDelete: function onDelete(id, issue, system) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.deleteRemediationIssueSystem)(id, issue, system));
    }
  }));
};
SystemForActionButton.propTypes = {
  issue: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  remediation: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};

/***/ }),

/***/ "./src/components/SystemsTable/RemoveSystemModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SystemsTable/RemoveSystemModal.js ***!
  \**********************************************************/
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
/* harmony import */ var _statusHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../statusHelper */ "./src/components/statusHelper.js");






var RemoveSystemModal = function RemoveSystemModal(_ref) {
  var _selected$;

  var isOpen = _ref.isOpen,
      selected = _ref.selected,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
      remediationName = _ref.remediationName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ModalVariant.medium,
    title: "Remove selected systems from ".concat(remediationName),
    isOpen: isOpen,
    onClose: onClose,
    appendTo: document.getElementsByClassName('remediations')[0],
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "remove-confirm",
      variant: "danger",
      onClick: onConfirm,
      ouiaId: "confirm-delete"
    }, "Remove"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "remove-cancel",
      variant: "link",
      onClick: onClose
    }, "Cancel")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Split, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__.ExclamationTriangleIcon, {
    size: "xl",
    className: "ins-m-alert"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.SplitItem, {
    isFilled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, "This action will remove", ' ', selected.length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, " ", (_selected$ = selected[0]) === null || _selected$ === void 0 ? void 0 : _selected$.display_name, " "), " system") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, " ", selected.length, " "), " systems"), ' ', "from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, remediationName), " Remediation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.StackItem, null, "Removing ", (0,_statusHelper__WEBPACK_IMPORTED_MODULE_3__.pluralize)(selected.length, 'system'), " from this Remediation will remove it from all associated issues in", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, remediationName), " Remediation. Be careful as you can end up with Remediation without any systems.")))));
};

RemoveSystemModal.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    display_name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  })).isRequired,
  remediationName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveSystemModal);

/***/ }),

/***/ "./src/components/SystemsTable/SystemsTable.js":
/*!*****************************************************!*\
  !*** ./src/components/SystemsTable/SystemsTable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Inventory */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Inventory/InventoryTable.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers */ "./src/store/reducers.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-promise-middleware */ "webpack/sharing/consume/default/redux-promise-middleware/redux-promise-middleware");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions */ "./src/actions.js");
/* harmony import */ var _SystemsTable_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SystemsTable.scss */ "./src/components/SystemsTable/SystemsTable.scss");
/* harmony import */ var _RemoveSystemModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RemoveSystemModal */ "./src/components/SystemsTable/RemoveSystemModal.js");
/* harmony import */ var _Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Alerts/PlaybookToastAlerts */ "./src/components/Alerts/PlaybookToastAlerts.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers */ "./src/components/SystemsTable/helpers.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var SystemsTableWrapper = function SystemsTableWrapper(_ref) {
  var remediation = _ref.remediation,
      registry = _ref.registry,
      refreshRemediation = _ref.refreshRemediation,
      setActiveAlert = _ref.setActiveAlert;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var systemsRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var getEntitiesRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(function () {
    return undefined;
  });
  var activeSystem = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(undefined);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var selected = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref2) {
    var entities = _ref2.entities;
    return (entities === null || entities === void 0 ? void 0 : entities.selected) || new Map();
  });
  var loaded = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref3) {
    var entities = _ref3.entities;
    return entities === null || entities === void 0 ? void 0 : entities.loaded;
  });
  var rows = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (_ref4) {
    var entities = _ref4.entities;
    return entities === null || entities === void 0 ? void 0 : entities.rows;
  });

  var onConfirm = function onConfirm() {
    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var selectedSystems, action;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selectedSystems = selected.size > 0 ? Array.from(selected, function (_ref6) {
                var _ref7 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref6, 2),
                    value = _ref7[1];

                return value;
              }) : [_objectSpread({}, activeSystem.current)];
              action = (0,_actions__WEBPACK_IMPORTED_MODULE_10__.deleteSystems)(selectedSystems, remediation);
              dispatch(action);
              _context.next = 5;
              return action.payload;

            case 5:
              refreshRemediation();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();

    activeSystem.current = undefined;
    setActiveAlert({
      key: (0,_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_13__.generateUniqueId)(),
      title: "Removed ".concat(selected.size, " ").concat(selected.size > 1 ? 'systems' : 'system', " from playbook"),
      description: '',
      variant: 'success'
    });
    setIsOpen(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    systemsRef.current = (0,_helpers__WEBPACK_IMPORTED_MODULE_14__.calculateSystems)(remediation);
  }, [remediation.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "compact",
    showTags: true,
    noDetail: true,
    hideFilters: {
      all: true,
      name: false
    },
    tableProps: {
      canSelectAll: false
    },
    columns: function columns(defaultColumns) {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_14__.mergedColumns)(defaultColumns);
    },
    bulkSelect: {
      count: selected ? selected.size : 0,
      items: [{
        title: 'Select none (0)',
        onClick: function onClick() {
          dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.selectEntity)(-1, false));
        }
      }, _objectSpread({}, loaded && rows && rows.length > 0 ? {
        title: "Select page (".concat(rows.length, ")"),
        onClick: function onClick() {
          dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.selectEntity)(0, true));
        }
      } : {})],
      checked: (0,_helpers__WEBPACK_IMPORTED_MODULE_14__.calculateChecked)(rows, selected),
      onSelect: function onSelect(value) {
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.selectEntity)(0, value));
      }
    },
    getEntities: /*#__PURE__*/function () {
      var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(_i, config) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (0,_helpers__WEBPACK_IMPORTED_MODULE_14__.fetchInventoryData)(config, systemsRef.current, getEntitiesRef.current));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref8.apply(this, arguments);
      };
    }(),
    onLoad: function onLoad(_ref9) {
      var _registry$register;

      var INVENTORY_ACTION_TYPES = _ref9.INVENTORY_ACTION_TYPES,
          mergeWithEntities = _ref9.mergeWithEntities,
          api = _ref9.api;
      getEntitiesRef.current = api === null || api === void 0 ? void 0 : api.getEntities;
      registry === null || registry === void 0 ? void 0 : (_registry$register = registry.register) === null || _registry$register === void 0 ? void 0 : _registry$register.call(registry, _objectSpread({}, mergeWithEntities((0,_store_reducers__WEBPACK_IMPORTED_MODULE_6__.remediationSystems)(INVENTORY_ACTION_TYPES))));
    },
    actions: [{
      title: 'Remove system',
      onClick: function onClick(_event, _index, _ref10) {
        var id = _ref10.id,
            display_name = _ref10.display_name;
        activeSystem.current = {
          id: id,
          display_name: display_name,
          issues: remediation.issues.filter(function (issue) {
            return issue.systems.find(function (_ref11) {
              var systemId = _ref11.id;
              return systemId === id;
            });
          })
        };
        setIsOpen(true);
      }
    }]
  }, loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__.Button, {
    variant: "secondary",
    onClick: function onClick() {
      return setIsOpen(true);
    },
    isDisabled: selected.size === 0
  }, "Remove system"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_RemoveSystemModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isOpen: isOpen,
    onConfirm: onConfirm,
    selected: selected.size > 0 ? Array.from(selected, function (_ref12) {
      var _ref13 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref12, 2),
          value = _ref13[1];

      return value;
    }) : [activeSystem.current],
    onClose: function onClose() {
      activeSystem.current = undefined;
      setIsOpen(false);
    },
    remediationName: remediation.name
  }));
};

var SystemsTable = function SystemsTable(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      registry = _useState4[0],
      setRegistry = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setRegistry(new _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_16__["default"]({
      selected: new Map()
    }, [(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_7___default())]));
  }, []);
  return registry ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: registry.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(SystemsTableWrapper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    registry: registry,
    refreshRemediation: function refreshRemediation() {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.loadRemediation)(props.remediation.id));
    },
    setActiveAlert: props.setActiveAlert
  }, props))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null);
};

SystemsTable.propTypes = {
  remediation: prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),
    issues: prop_types__WEBPACK_IMPORTED_MODULE_17___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
      systems: prop_types__WEBPACK_IMPORTED_MODULE_17___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
        id: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),
        display_name: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().string),
        resolved: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool)
      }))
    }))
  })
};
SystemsTableWrapper.propTypes = _objectSpread(_objectSpread({}, SystemsTable.propTypes), {}, {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_17___default().shape({
    register: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func)
  }),
  refreshRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func),
  setActiveAlert: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().func)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemsTable);

/***/ }),

/***/ "./src/containers/ConnectedComponents.js":
/*!***********************************************!*\
  !*** ./src/containers/ConnectedComponents.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectResolutionEditButton": () => (/* binding */ ConnectResolutionEditButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_ResolutionEditButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResolutionEditButton */ "./src/components/ResolutionEditButton.js");





var ConnectResolutionEditButton = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(function (f) {
  return f;
}, function (dispatch) {
  return {
    onResolutionSelected: function () {
      var _onResolutionSelected = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(remediation, issue, resolution) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.patchRemediationIssue)(remediation, issue, resolution));

              case 2:
                dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.refreshRemediation)(remediation));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onResolutionSelected(_x, _x2, _x3) {
        return _onResolutionSelected.apply(this, arguments);
      }

      return onResolutionSelected;
    }(),
    getResolutions: function getResolutions(ruleId) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.getResolutions)(ruleId));
    }
  };
})(_components_ResolutionEditButton__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./src/containers/DeleteButtons.js":
/*!*****************************************!*\
  !*** ./src/containers/DeleteButtons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteRemediationsButton": () => (/* binding */ DeleteRemediationsButton),
/* harmony export */   "DeleteActionsButton": () => (/* binding */ DeleteActionsButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _components_DeleteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DeleteButton */ "./src/components/DeleteButton.js");








var DeleteRemediationsButton = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(function (state, _ref) {
  var remediations = _ref.remediations;
  return {
    dialogMessage: "You will not be able to recover ".concat(remediations.length > 1 ? 'these remediations' : 'this remediation')
  };
}, function (dispatch, _ref2) {
  var remediations = _ref2.remediations;
  return {
    onDelete: function () {
      var _onDelete = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(remediations.map(function (r) {
                  return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.deleteRemediation)(r));
                }));

              case 2:
                dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.loadRemediations)());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onDelete() {
        return _onDelete.apply(this, arguments);
      }

      return onDelete;
    }()
  };
})(_components_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"]));
var DeleteActionsButton = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(function (state, _ref3) {
  var issues = _ref3.issues;
  return {
    label: "Remove action".concat(issues.length > 1 ? 's' : ''),
    dialogTitle: "Remove action".concat(issues.length > 1 ? 's' : ''),
    dialogConfirmationText: "Remove action".concat(issues.length > 1 ? 's' : '')
  };
}, function (dispatch, _ref4) {
  var remediation = _ref4.remediation,
      issues = _ref4.issues,
      afterDelete = _ref4.afterDelete;
  return {
    onDelete: function () {
      var _onDelete2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all(issues.map(function (issueId) {
                  return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.deleteRemediationIssue)(remediation.id, issueId));
                }));

              case 2:
                if (_config__WEBPACK_IMPORTED_MODULE_5__.isBeta) {
                  dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.loadRemediationStatus)(remediation.id));
                }

                afterDelete();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onDelete() {
        return _onDelete2.apply(this, arguments);
      }

      return onDelete;
    }()
  };
})(_components_DeleteButton__WEBPACK_IMPORTED_MODULE_6__["default"]));

/***/ }),

/***/ "./src/containers/ExecuteButtons.js":
/*!******************************************!*\
  !*** ./src/containers/ExecuteButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutePlaybookButton": () => (/* binding */ ExecutePlaybookButton)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _components_ExecuteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExecuteButton */ "./src/components/ExecuteButton.js");




var ExecutePlaybookButton = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(function (_ref) {
  var _ref$connectionStatus = _ref.connectionStatus,
      data = _ref$connectionStatus.data,
      status = _ref$connectionStatus.status,
      etag = _ref$connectionStatus.etag,
      selectedRemediation = _ref.selectedRemediation,
      runRemediation = _ref.runRemediation,
      sources = _ref.sources,
      executable = _ref.executable;
  return {
    data: data,
    isLoading: status !== 'fulfilled',
    issueCount: selectedRemediation.remediation.issues.length,
    etag: etag,
    remediationStatus: runRemediation.status,
    sources: sources,
    executable: executable
  };
}, function (dispatch) {
  return {
    getConnectionStatus: function getConnectionStatus(id) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.getConnectionStatus)(id));
    },
    runRemediation: function runRemediation(id, etag, exclude) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.runRemediation)(id, etag, exclude)).then(function () {
        return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.getPlaybookRuns)(id));
      });
    },
    setEtag: function setEtag(etag) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.setEtag)(etag));
    },
    getEndpoint: function getEndpoint(id) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.getEndpoint)(id));
    },
    checkExecutable: function checkExecutable(id) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.checkExecutable)(id));
    }
  };
})(_components_ExecuteButton__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/routes/RemediationDetails.js":
/*!******************************************!*\
  !*** ./src/routes/RemediationDetails.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./src/api/index.js");
/* harmony import */ var _components_RemediationDetailsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/RemediationDetailsTable */ "./src/components/RemediationDetailsTable.js");
/* harmony import */ var _components_SystemsTable_SystemsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SystemsTable/SystemsTable */ "./src/components/SystemsTable/SystemsTable.js");
/* harmony import */ var _components_RemediationActivityTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/RemediationActivityTable */ "./src/components/RemediationActivityTable.js");
/* harmony import */ var _components_RemediationDetailsDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/RemediationDetailsDropdown */ "./src/components/RemediationDetailsDropdown.js");
/* harmony import */ var _components_statusHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/statusHelper */ "./src/components/statusHelper.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _containers_ExecuteButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/ExecuteButtons */ "./src/containers/ExecuteButtons.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/redux/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var _components_Alerts_UpsellBanner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Alerts/UpsellBanner */ "./src/components/Alerts/UpsellBanner.js");
/* harmony import */ var _components_EmptyStates_ActivityTabUpsell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/EmptyStates/ActivityTabUpsell */ "./src/components/EmptyStates/ActivityTabUpsell.js");
/* harmony import */ var _components_DeniedState__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/DeniedState */ "./src/components/DeniedState.js");
/* harmony import */ var _skeletons_SkeletonTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../skeletons/SkeletonTable */ "./src/skeletons/SkeletonTable.js");
/* harmony import */ var _components_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Alerts/PlaybookToastAlerts */ "./src/components/Alerts/PlaybookToastAlerts.js");
/* harmony import */ var _components_Status_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Status.scss */ "./src/components/Status.scss");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/InvalidObject */ "./node_modules/@redhat-cloud-services/frontend-components/esm/InvalidObject/InvalidObject.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _skeletons_RemediationDetailsSkeleton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../skeletons/RemediationDetailsSkeleton */ "./src/skeletons/RemediationDetailsSkeleton.js");
/* harmony import */ var _components_EmptyStates_EmptyActivityTable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/EmptyStates/EmptyActivityTable */ "./src/components/EmptyStates/EmptyActivityTable.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _RemediationDetails_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./RemediationDetails.scss */ "./src/routes/RemediationDetails.scss");
/* harmony import */ var _components_Alerts_NoReceptorBanner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Alerts/NoReceptorBanner */ "./src/components/Alerts/NoReceptorBanner.js");
/* harmony import */ var _components_RemediationSummary__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/RemediationSummary */ "./src/components/RemediationSummary.js");
































var tabMapper = ['issues', 'systems', 'activity'];

var RemediationDetails = function RemediationDetails(_ref) {
  var match = _ref.match,
      location = _ref.location,
      selectedRemediation = _ref.selectedRemediation,
      selectedRemediationStatus = _ref.selectedRemediationStatus,
      history = _ref.history,
      loadRemediation = _ref.loadRemediation,
      loadRemediationStatus = _ref.loadRemediationStatus,
      switchAutoReboot = _ref.switchAutoReboot,
      playbookRuns = _ref.playbookRuns,
      getPlaybookRuns = _ref.getPlaybookRuns,
      checkExecutable = _ref.checkExecutable,
      executable = _ref.executable;
  var id = match.params.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localStorage.getItem('remediations:bannerStatus') !== 'dismissed'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      upsellBannerVisible = _useState2[0],
      setUpsellBannerVisible = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localStorage.getItem('remediations:receptorBannerStatus') !== 'dismissed'),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      noReceptorBannerVisible = _useState4[0],
      setNoReceptorBannerVisible = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      activeTabKey = _useState6[0],
      setActiveTabKey = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    key: '',
    title: '',
    description: '',
    variant: ''
  }),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      activeToastAlert = _useState8[0],
      setActiveToastAlert = _useState8[1];

  var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_23__.PermissionContext);

  var _useChrome = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_27__["default"])(),
      isFedramp = _useChrome.isFedramp;

  var handleUpsellToggle = function handleUpsellToggle() {
    setUpsellBannerVisible(false);
    localStorage.setItem('remediations:bannerStatus', 'dismissed');
  };

  var handleNoReceptorToggle = function handleNoReceptorToggle() {
    setNoReceptorBannerVisible(false);
    localStorage.setItem('remediations:receptorBannerStatus', 'dismissed');
  };

  var handleTabClick = function handleTabClick(event, tabIndex) {
    setActiveTabKey(tabIndex);
    history.push("?".concat(tabMapper[tabIndex]));
  };

  var getDisabledStateText = function getDisabledStateText() {
    if (!context.permissions.execute) {
      return 'You do not have the required execute permissions to perform this action.';
    } else if (!executable) {
      return 'Your account must be entitled to Smart Management to execute playbooks.';
    }

    return 'Unable to execute playbook.';
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    loadRemediation(id)["catch"](function (e) {
      if (e && e.response && e.response.status === 404) {
        history.push('/');
        return;
      }

      throw e;
    });
    var tabIndex = tabMapper.findIndex(function (item) {
      return item === location.search.split('?')[1];
    });
    setActiveTabKey(tabIndex !== -1 ? tabIndex : 0);
    history.push("?".concat(tabMapper[tabIndex !== -1 ? tabIndex : 0]));

    if (_config__WEBPACK_IMPORTED_MODULE_11__.isBeta) {
      loadRemediationStatus(id);
    }

    checkExecutable(id);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getPlaybookRuns(id);
  }, [getPlaybookRuns]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    playbookRuns;

    if (playbookRuns && playbookRuns.length && (0,_components_statusHelper__WEBPACK_IMPORTED_MODULE_10__.normalizeStatus)(playbookRuns[0].status) === 'running') {
      var interval = setInterval(function () {
        return getPlaybookRuns(id);
      }, 10000);
      return function () {
        clearInterval(interval);
      };
    }
  }, [playbookRuns]);

  var renderActivityState = function renderActivityState(isEntitled, playbookRuns, remediation) {
    if (!isEntitled) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_EmptyStates_ActivityTabUpsell__WEBPACK_IMPORTED_MODULE_15__["default"], null);
    }

    if (Array.isArray(playbookRuns) && playbookRuns.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_RemediationActivityTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        remediation: remediation,
        playbookRuns: playbookRuns
      });
    }

    if (Array.isArray(playbookRuns) && !playbookRuns.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_EmptyStates_EmptyActivityTable__WEBPACK_IMPORTED_MODULE_22__["default"], null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_skeletons_SkeletonTable__WEBPACK_IMPORTED_MODULE_17__["default"], null);
  };

  var status = selectedRemediation.status,
      remediation = selectedRemediation.remediation;

  if (remediation) {
    document.title = "".concat(remediation.name, " | Remediations | Red Hat Insights");
  }

  if (status !== 'fulfilled' && status !== 'rejected') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_skeletons_RemediationDetailsSkeleton__WEBPACK_IMPORTED_MODULE_21__["default"], null);
  }

  if (status === 'rejected') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_28__["default"], null);
  }

  if (status === 'fulfilled') {
    return context.permissions.read === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DeniedState__WEBPACK_IMPORTED_MODULE_16__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "page__remediation-details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_29__["default"], null, activeToastAlert.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_18__["default"], {
      key: activeToastAlert.key,
      title: activeToastAlert.title,
      description: activeToastAlert.description,
      variant: activeToastAlert.variant
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/"
    }, " Remediations ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbItem, {
      isActive: true
    }, " ", remediation.name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Level, {
      className: "rem-l-level"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.LevelItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_30__["default"], {
      title: remediation.name
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.LevelItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Split, {
      hasGutter: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_containers_ExecuteButtons__WEBPACK_IMPORTED_MODULE_12__.ExecutePlaybookButton, {
      isDisabled: !context.permissions.execute || !executable || isFedramp,
      disabledStateText: getDisabledStateText(),
      remediationId: remediation.id,
      remediationName: remediation.name,
      setActiveAlert: setActiveToastAlert
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Button, {
      isDisabled: !remediation.issues.length,
      variant: "secondary",
      onClick: function onClick() {
        (0,_api__WEBPACK_IMPORTED_MODULE_5__.downloadPlaybook)(remediation.id);
        setActiveToastAlert({
          key: (0,_components_Alerts_PlaybookToastAlerts__WEBPACK_IMPORTED_MODULE_18__.generateUniqueId)(),
          title: 'Preparing playbook for download.',
          description: 'Once complete, your download will start automatically.',
          variant: 'info'
        });
      }
    }, "Download playbook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_RemediationDetailsDropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
      remediation: remediation,
      setActiveAlert: setActiveToastAlert
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_RemediationSummary__WEBPACK_IMPORTED_MODULE_26__.RemediationSummary, {
      remediation: remediation,
      playbookRuns: playbookRuns,
      switchAutoReboot: switchAutoReboot,
      context: context
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_31__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Stack, {
      hasGutter: true
    }, !executable && upsellBannerVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Alerts_UpsellBanner__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClose: function onClose() {
        return handleUpsellToggle();
      }
    })), executable && noReceptorBannerVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Alerts_NoReceptorBanner__WEBPACK_IMPORTED_MODULE_25__["default"], {
      onClose: function onClose() {
        return handleNoReceptorToggle();
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.StackItem, {
      className: "ins-c-playbookSummary__tabs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Tabs, {
      activeKey: activeTabKey,
      onSelect: handleTabClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Tab, {
      eventKey: 0,
      title: "Actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_RemediationDetailsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      remediation: remediation,
      status: selectedRemediationStatus,
      setActiveAlert: setActiveToastAlert
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Tab, {
      eventKey: 1,
      title: "Systems"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_SystemsTable_SystemsTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      remediation: remediation,
      setActiveAlert: setActiveToastAlert
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_20__.Tab, {
      eventKey: 2,
      title: "Activity"
    }, renderActivityState(executable, playbookRuns, remediation)))))));
  }
};

RemediationDetails.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_32___default().shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_32___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().string.isRequired)
    })
  }).isRequired,
  location: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object),
  selectedRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object),
  selectedRemediationStatus: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object),
  history: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object.isRequired),
  loadRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func.isRequired),
  loadRemediationStatus: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func.isRequired),
  switchAutoReboot: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func.isRequired),
  deleteRemediation: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func.isRequired),
  executePlaybookBanner: prop_types__WEBPACK_IMPORTED_MODULE_32___default().shape({
    isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().bool)
  }),
  addNotification: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func.isRequired),
  playbookRuns: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().array),
  getPlaybookRuns: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func),
  checkExecutable: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(function (_ref2) {
  var selectedRemediation = _ref2.selectedRemediation,
      selectedRemediationStatus = _ref2.selectedRemediationStatus,
      executePlaybookBanner = _ref2.executePlaybookBanner,
      playbookRuns = _ref2.playbookRuns,
      executable = _ref2.executable;
  return {
    selectedRemediation: selectedRemediation,
    selectedRemediationStatus: selectedRemediationStatus,
    executePlaybookBanner: executePlaybookBanner,
    playbookRuns: playbookRuns.data,
    remediation: selectedRemediation.remediation,
    executable: executable
  };
}, function (dispatch) {
  return {
    loadRemediation: function loadRemediation(id) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__.loadRemediation(id));
    },
    loadRemediationStatus: function loadRemediationStatus(id) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__.loadRemediationStatus(id));
    },
    // eslint-disable-next-line camelcase
    switchAutoReboot: function switchAutoReboot(id, auto_reboot) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__.patchRemediation(id, {
        auto_reboot: auto_reboot
      }));
    },
    deleteRemediation: function deleteRemediation(id) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__.deleteRemediation(id));
    },
    addNotification: function addNotification(content) {
      return dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_13__.addNotification)(content));
    },
    getPlaybookRuns: function getPlaybookRuns(id) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__.getPlaybookRuns(id));
    },
    checkExecutable: function checkExecutable(id) {
      return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__.checkExecutable(id));
    }
  };
})(RemediationDetails)));

/***/ }),

/***/ "./src/skeletons/RemediationDetailsSkeleton.js":
/*!*****************************************************!*\
  !*** ./src/skeletons/RemediationDetailsSkeleton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");
/* harmony import */ var _SkeletonTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkeletonTable */ "./src/skeletons/SkeletonTable.js");
/* harmony import */ var _SkeletonTableToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkeletonTableToolbar */ "./src/skeletons/SkeletonTableToolbar.js");
/* harmony import */ var _SkeletonTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkeletonTabs */ "./src/skeletons/SkeletonTabs.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartDonutUtilization/ChartDonutUtilization.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartLabel/ChartLabel.js");
/* harmony import */ var _components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layouts/DescriptionList */ "./src/components/Layouts/DescriptionList.js");
/* harmony import */ var _RemediationDetailsSkeleton_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RemediationDetailsSkeleton.scss */ "./src/skeletons/RemediationDetailsSkeleton.scss");













var RemediationDetailsSkeleton = function RemediationDetailsSkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "rem-c-page-details__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, " Remediations ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbItem, {
    isActive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Level, {
    className: "rem-l-level"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.LevelItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "rem-s-page-header",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: "md"
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.LevelItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Split, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
    isDisabled: true,
    variant: "link"
  }, "Download playbook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.KebabToggle, {
      isDisabled: true
    }),
    isOpen: false,
    isPlain: true
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemediationSummarySkeleton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.StackItem, {
    className: "ins-c-playbookSummary__tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SkeletonTabs__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SkeletonTableToolbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SkeletonTable__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemediationDetailsSkeleton);

var RemediationSummarySkeleton = function RemediationSummarySkeleton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Split, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_12__.ChartDonutUtilization, {
    ariaDesc: "Resolved issues count",
    ariaTitle: "Resolved issues chart",
    constrainToVisibleArea: true,
    data: {
      x: 'Resolved',
      y: 1
    },
    labels: function labels(_ref) {
      var datum = _ref.datum;
      return datum.x ? "".concat(datum.x, ": ").concat(datum.y, "%") : null;
    },
    title: 'Loading',
    subTitle: "Issues resolved",
    subTitleComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_13__.ChartLabel, {
      y: 102
    }),
    thresholds: [{
      value: 100,
      color: '#3E8635'
    }],
    height: 175,
    width: 175,
    padding: {
      bottom: 20,
      left: 0,
      right: 20,
      top: 20
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, {
    className: "ins-c-remediation-summary__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Split, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FlexItem, {
    spacer: {
      "default": 'spacer-lg'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Total systems"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "md"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SplitItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FlexItem, {
    spacer: {
      "default": 'spacer-lg'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Latest activity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "md"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FlexItem, {
    spacer: {
      "default": 'spacer-lg'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Autoreboot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "md"
  }))))))));
};

/***/ }),

/***/ "./src/skeletons/SkeletonTableToolbar.js":
/*!***********************************************!*\
  !*** ./src/skeletons/SkeletonTableToolbar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/search-icon.js");






var SkeletonTableToolbar = function SkeletonTableToolbar() {
  var items = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle, {
      isDisabled: true,
      splitButtonItems: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DropdownToggleCheckbox, {
        id: "skeleton-dropdown",
        key: "skeleton-dropdown",
        "aria-label": "Loading Select all"
      })],
      id: "skeleton-dropdown-toggle"
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
    value: "Search",
    isDisabled: true,
    name: "skeleton-search",
    id: "skeleton-search",
    type: "search",
    "aria-label": "search loading"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isDisabled: true,
    variant: "control",
    "aria-label": "search button for search input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isDisabled: true,
    variant: "primary"
  }, "Remove action")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
    id: "skeleton-toolbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ToolbarContent, null, " ", items, " "));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonTableToolbar);

/***/ }),

/***/ "./src/skeletons/SkeletonTabs.js":
/*!***************************************!*\
  !*** ./src/skeletons/SkeletonTabs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);



var SkeletonTabs = function SkeletonTabs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    activeKey: 0,
    className: "ins-s-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    eventKey: 0,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TabTitleText, null, "Actions")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    eventKey: 1,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TabTitleText, null, "Systems")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    eventKey: 2,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TabTitleText, null, "Activity")
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonTabs);

/***/ }),

/***/ "./src/components/DeleteButton.scss":
/*!******************************************!*\
  !*** ./src/components/DeleteButton.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/EmptyStates/EmptyActivityTable.scss":
/*!************************************************************!*\
  !*** ./src/components/EmptyStates/EmptyActivityTable.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ExecuteButton.scss":
/*!*******************************************!*\
  !*** ./src/components/ExecuteButton.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Layouts/IconInline.scss":
/*!************************************************!*\
  !*** ./src/components/Layouts/IconInline.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/RemediationActivityTable.scss":
/*!******************************************************!*\
  !*** ./src/components/RemediationActivityTable.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/RemediationDetailsTable.scss":
/*!*****************************************************!*\
  !*** ./src/components/RemediationDetailsTable.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/RemediationSummary.scss":
/*!************************************************!*\
  !*** ./src/components/RemediationSummary.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ResolutionModal/ChooseResolutionModal.scss":
/*!*******************************************************************!*\
  !*** ./src/components/ResolutionModal/ChooseResolutionModal.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SystemForActionButton.scss":
/*!***************************************************!*\
  !*** ./src/components/SystemForActionButton.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/SystemsTable/SystemsTable.scss":
/*!*******************************************************!*\
  !*** ./src/components/SystemsTable/SystemsTable.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/routes/RemediationDetails.scss":
/*!********************************************!*\
  !*** ./src/routes/RemediationDetails.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/RemediationDetails.0cf5658c1f9faee4442086946e631a67.js.map