"use strict";
(self["webpackChunkinsights_remediations_frontend"] = self["webpackChunkinsights_remediations_frontend"] || []).push([["src_modules_RemediationsModal_NoDataModal_js"],{

/***/ "./src/modules/RemediationsModal/NoDataModal.js":
/*!******************************************************!*\
  !*** ./src/modules/RemediationsModal/NoDataModal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoDataModal": () => (/* binding */ NoDataModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);



var NoDataModal = function NoDataModal(_ref) {
  var isOpen = _ref.isOpen,
      setOpen = _ref.setOpen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ModalVariant.small,
    title: "Remediate with Ansible",
    isOpen: isOpen,
    onClose: function onClose() {
      return setOpen(false);
    },
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "confirm",
      variant: "primary",
      onClick: function onClick() {
        return setOpen(false);
      }
    }, "Back to Insights")]
  }, "None of the selected issues can be remediated with Ansible.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "To remediate these issues, review the manual remediation steps associated with each.");
};
NoDataModal.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoDataModal);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_modules_RemediationsModal_NoDataModal_js.52efc7782c696566f66b4e498efd1c26.js.map