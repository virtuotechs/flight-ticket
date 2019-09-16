webpackHotUpdate("static\\development\\pages\\ticketBooking.js",{

/***/ "./pages/ticketBooking.js":
/*!********************************!*\
  !*** ./pages/ticketBooking.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var sort_json_array__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sort-json-array */ "./node_modules/sort-json-array/index.js");
/* harmony import */ var sort_json_array__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sort_json_array__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! currency-symbol-map */ "./node_modules/currency-symbol-map/currency-symbol-map.js");
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var datetime_difference__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! datetime-difference */ "./node_modules/datetime-difference/index.js");
/* harmony import */ var datetime_difference__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(datetime_difference__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-numeric-input */ "./node_modules/react-numeric-input/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_29__);













var _jsxFileName = "D:\\react projects\\flight_ticket\\pages\\ticketBooking.js";













 //Auto complete imports



 // Auto complete

var languages = __webpack_require__(/*! ../data/countries.json */ "./data/countries.json");

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  if (value.length <= 3) {
    var regex = new RegExp('^' + escapedValue, 'i');
    return languages.filter(function (language) {
      return regex.test(language.PlaceId);
    });
  } else {
    var _regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(function (language) {
      return _regex.test(language.CityName);
    });
  }
}

function getSuggestionValue(suggestion) {
  return "".concat(suggestion.CityName, " - ").concat(suggestion.PlaceName, " (").concat(suggestion.PlaceId, ")");
}

function renderSuggestion(suggestion, _ref) {
  var query = _ref.query;
  var suggestionText = "".concat(suggestion.CityName, " - ").concat(suggestion.PlaceName, " (").concat(suggestion.PlaceId, ")");
  var suggestionCountry = "".concat(suggestion.CountryId);
  var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_28___default()(suggestionText, query);
  var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_29___default()(suggestionText, matches);
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: 'suggestion-content ' + suggestion.twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "autocomplete-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    className: "fa fa-fighter-jet autocomplete-flight-img",
    alt: "Flight",
    src: "static/images/flight.png",
    width: "25px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), parts.map(function (part, index) {
    var className = part.highlight ? 'highlight' : null;
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: className,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, part.text);
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
    className: "country-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, suggestionCountry)));
}

var MyAutosuggest =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(MyAutosuggest, _React$Component);

  function MyAutosuggest(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MyAutosuggest);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(MyAutosuggest).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "onChange", function (_, _ref2) {
      var newValue = _ref2.newValue;
      var _this$props = _this.props,
          id = _this$props.id,
          onChange = _this$props.onChange;

      _this.setState({
        value: newValue
      });

      onChange(id, newValue);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "onSuggestionsFetchRequested", function (_ref3) {
      var value = _ref3.value;

      _this.setState({
        suggestions: getSuggestions(value)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _this.state = {
      value: _this.props.value,
      suggestions: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MyAutosuggest, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          placeholder = _this$props2.placeholder;

      var _ref4 = this.state || this.props,
          value = _ref4.value,
          suggestions = _ref4.suggestions;

      var inputProps = {
        placeholder: placeholder,
        value: value,
        onChange: this.onChange
      };
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_27___default.a, {
        id: id,
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        inputProps: inputProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      });
    }
  }]);

  return MyAutosuggest;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

var TicketBooking = function TicketBooking(flights) {
  var changeMonthDate = function changeMonthDate(dt) {
    var date1 = dt.split('-');
    var newDate = date1[1] + '-' + date1[0] + '-' + date1[2];
    var date = new Date(newDate);
    return date;
  };

  var node = react__WEBPACK_IMPORTED_MODULE_13___default.a.createRef(); // State initialisation

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(flights.request),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      requestData = _useState2[0],
      setRequestData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(flights.flights.data.recommendation),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
      jsondata = _useState4[0],
      setJsondata = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(flights.flights.data.recommendation),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
      flightData = _useState6[0],
      setFlightData = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
      popup = _useState8[0],
      setPopup = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState9, 2),
      fullDrop = _useState10[0],
      setFullDrop = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.searchType),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState11, 2),
      searchType = _useState12[0],
      setSearchtype = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.isDirectFlight),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState13, 2),
      isDirectFlight = _useState14[0],
      setDirectflight = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.segments[0].departureLocationCode),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState15, 2),
      departureLocationCode = _useState16[0],
      setDeparturelocationcode = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.segments[0].arrivalLocationCode),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState17, 2),
      arrivalLocationCode = _useState18[0],
      setArrivallocationcode = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.departureLocationName),
      _useState20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState19, 2),
      departureLocationName = _useState20[0],
      setDepartureLocationName = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.arrivalLocationName),
      _useState22 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState21, 2),
      arrivalLocationName = _useState22[0],
      setArrivalLocationName = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.preferedFlightClass),
      _useState24 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState23, 2),
      preferedFlightClass = _useState24[0],
      setPreferedflightclass = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(changeMonthDate(requestData.segments[0].departureDate)),
      _useState26 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState25, 2),
      departureDate = _useState26[0],
      setDeparturedate = _useState26[1];

  var _ref5 = searchType == 2 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(changeMonthDate(requestData.segments[0].returnDate)) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(null),
      _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref5, 2),
      returnDate = _ref6[0],
      setReturndate = _ref6[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.adultCount),
      _useState28 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState27, 2),
      adultCount = _useState28[0],
      setAdultcount = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(requestData.childCount),
      _useState30 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState29, 2),
      childCount = _useState30[0],
      setchildCount = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState32 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState31, 2),
      departure_err = _useState32[0],
      setDeparture_err = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState34 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState33, 2),
      arrival_err = _useState34[0],
      setArrival_err = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState36 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState35, 2),
      adults_err = _useState36[0],
      setAdults_err = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState38 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState37, 2),
      child_err = _useState38[0],
      setChild_err = _useState38[1];

  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState40 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState39, 2),
      departureDate_err = _useState40[0],
      setDeparturedate_err = _useState40[1];

  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState42 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState41, 2),
      returnDate_err = _useState42[0],
      setReturndate_err = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState44 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState43, 2),
      sortToggler = _useState44[0],
      setSortToggler = _useState44[1];

  var _useState45 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState46 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState45, 2),
      filterToggler = _useState46[0],
      setFilterToggler = _useState46[1];

  var _useState47 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])('Best'),
      _useState48 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState47, 2),
      sortOption = _useState48[0],
      setSortOption = _useState48[1];

  var _useState49 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState50 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState49, 2),
      fetchLoading = _useState50[0],
      setFetchLoading = _useState50[1];

  var _useState51 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState52 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState51, 2),
      fetchLoading1 = _useState52[0],
      setFetchLoading1 = _useState52[1];

  var _useState53 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState54 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState53, 2),
      localLoading = _useState54[0],
      setLocalLoading = _useState54[1];

  var check_nonstop = jsondata != undefined ? jsondata.filter(function (x) {
    return x.flightLeg[0].flightDetails.stopOvers == '0';
  }).length : 0;

  var _ref7 = check_nonstop > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref7, 2),
      nonstop = _ref8[0],
      setnonstop = _ref8[1];

  var check_onestop = jsondata != undefined ? jsondata.filter(function (x) {
    return x.flightLeg[0].flightDetails.stopOvers == '1';
  }).length : 0;

  var _ref9 = check_onestop > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref9, 2),
      onestop = _ref10[0],
      setonestop = _ref10[1];

  var check_twostop = jsondata != undefined ? jsondata.filter(function (x) {
    return x.flightLeg[0].flightDetails.stopOvers == '2';
  }).length : 0;

  var _ref11 = check_twostop > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref11, 2),
      twostop = _ref12[0],
      settwostop = _ref12[1];

  var check_departure1 = jsondata != undefined ? jsondata.filter(function (x) {
    return x.flightLeg[0].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200;
  }).length : 0;

  var _ref13 = check_departure1 > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref13, 2),
      departure1 = _ref14[0],
      setdeparture1 = _ref14[1];

  var check_departure2 = jsondata != undefined ? jsondata.filter(function (x) {
    return x.flightLeg[0].flightDetails.departureTime >= 1800;
  }).length : 0;

  var _ref15 = check_departure2 > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref15, 2),
      departure2 = _ref16[0],
      setdeparture2 = _ref16[1];

  var check_departure3 = jsondata != undefined ? jsondata.filter(function (x) {
    return x.flightLeg[0].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800;
  }).length : 0;

  var _ref17 = check_departure3 > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref17, 2),
      departure3 = _ref18[0],
      setdeparture3 = _ref18[1];

  var check_return1 = jsondata != undefined ? requestData.searchType == 2 ? jsondata.filter(function (x) {
    return x.flightLeg[1].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200;
  }).length : null : 0;

  var _ref19 = check_return1 > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref19, 2),
      return1 = _ref20[0],
      setreturn1 = _ref20[1];

  var check_return2 = jsondata != undefined ? requestData.searchType == 2 ? jsondata.filter(function (x) {
    return x.flightLeg[1].flightDetails.departureTime >= 1800;
  }).length : null : 0;

  var _ref21 = check_return2 > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref22 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref21, 2),
      return2 = _ref22[0],
      setreturn2 = _ref22[1];

  var check_return3 = jsondata != undefined ? requestData.searchType == 2 ? jsondata.filter(function (x) {
    return x.flightLeg[1].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800;
  }).length : null : 0;

  var _ref23 = check_return3 > 0 ? Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true) : Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _ref24 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref23, 2),
      return3 = _ref24[0],
      setreturn3 = _ref24[1];

  var _useState55 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(''),
      _useState56 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState55, 2),
      flightId = _useState56[0],
      setFlightId = _useState56[1];

  var _useState57 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(''),
      _useState58 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState57, 2),
      airlineName = _useState58[0],
      setAirlineName = _useState58[1];

  var _useState59 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(true),
      _useState60 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState59, 2),
      airlinesCheck = _useState60[0],
      setAirlinesCheck = _useState60[1];

  console.log(jsondata);

  var handleChange = function handleChange(date) {
    setDepartureDate(date);
    setReturnDate(date);
  };

  var handleChange1 = function handleChange1(date) {
    setReturnDate(date);
  };

  var changePlace = function changePlace() {
    setDepartureLocationName(arrivalLocationName);
    setArrivalLocationName(departureLocationName);
  };

  var TimeSplit = function TimeSplit(time) {
    time = time.replace(/(..?)/g, '$1:').slice(0, -1);
    return time;
  };

  var handlesortToggler = function handlesortToggler() {
    setSortToggler(true);
    setFilterToggler(false);
  };

  var handleFilterToggler = function handleFilterToggler() {
    setFilterToggler(true);
    setSortToggler(false);
  };

  var handleScrollToElement = function handleScrollToElement(event) {
    $(window).scroll(function () {
      var sticky = $('.filtering-row.row'),
          scroll = $(window).scrollTop();
      if (scroll >= 400) sticky.addClass('fixed');else sticky.removeClass('fixed');
    });
  };

  var StopName = function StopName(stop) {
    if (stop == 0) {
      return "Non-stop";
    } else if (stop == 1) {
      return "1 stop";
    } else if (stop == 2) {
      return "2 stops";
    }
  };

  var StopClassName = function StopClassName(stop) {
    if (stop == 1) {
      return "onestop";
    } else if (stop == 2) {
      return "twostop";
    }
  };

  var CalculateDuration = function CalculateDuration(duration) {
    duration = TimeSplit(duration);
    var duration1 = duration.split(":");
    var duration_str = duration1[0] + "h " + duration1[1] + "m";
    return duration_str;
  };

  var ViaCityName = function ViaCityName(cityname) {
    cityname = cityname.split("(");
    return cityname[0];
  };

  var fastestDuration = function fastestDuration() {
    var fastest_duration = Math.min.apply(Math, flightData.map(function (o) {
      return o.flightLeg[0].flightDetails.totalFlyingHours;
    }));
    fastest_duration = fastest_duration.toString();

    if (fastest_duration.length <= 3) {
      fastest_duration = "0" + fastest_duration;
    }

    return CalculateDuration(fastest_duration);
  };

  var fastestPrice = function fastestPrice() {
    var fastest_duration = Math.min.apply(Math, flightData.map(function (o) {
      return o.flightLeg[0].flightDetails.totalFlyingHours;
    }));
    var fastest_price = flightData.filter(function (price) {
      return price.flightLeg[0].flightDetails.totalFlyingHours == fastest_duration;
    });
    fastest_price = fastest_price[0].totalFare;
    return fastest_price;
  };

  var cheapestDuration = function cheapestDuration() {
    var cheapest_price = Math.min.apply(Math, flightData.map(function (o) {
      return o.totalFare;
    }));
    var cheapest_duration = flightData.filter(function (price) {
      return price.totalFare == cheapest_price;
    });
    cheapest_duration = cheapest_duration[0].flightLeg[0].flightDetails.totalFlyingHours;
    return CalculateDuration(cheapest_duration);
  };

  var cheapestPrice = function cheapestPrice() {
    var cheapest_price = Math.min.apply(Math, flightData.map(function (o) {
      return o.totalFare;
    }));
    return cheapest_price;
  };

  var bestDuration = function bestDuration() {
    var best_price = flightData.sort(function (obj1, obj2) {
      return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
    });
    return CalculateDuration(best_price[0].flightLeg[0].flightDetails.totalFlyingHours);
  };

  var bestPrice = function bestPrice() {
    var best_price = flightData.sort(function (obj1, obj2) {
      return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
    });
    return best_price[0].totalFare;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    window.addEventListener('scroll', handleScrollToElement);
  });

  var uniqueAirlines = function uniqueAirlines() {
    var categories = flightData != undefined ? Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_3___default.a(flightData.map(function (newdata) {
      return newdata.marketingAirlineNames;
    }))) : null;
    return categories;
  };

  var showFlightDetails = function showFlightDetails(id) {
    setFlightId(id);
    setFetchLoading1(true);
    next_router__WEBPACK_IMPORTED_MODULE_24___default.a.push({
      pathname: '/ticketdetails',
      query: {
        "id": id,
        "adultCount": requestData.adultCount,
        "childCount": requestData.childCount,
        "infantCount": requestData.infantCount,
        "isDirectFlight": requestData.isDirectFlight,
        "isPlusOrMinus3Days": requestData.isPlusOrMinus3Days,
        "searchType": searchType,
        "preferedFlightClass": requestData.preferedFlightClass,
        "departureLocationCode": requestData.segments[0].departureLocationCode,
        "departureDate": requestData.segments[0].departureDate,
        "arrivalLocationCode": requestData.segments[0].arrivalLocationCode,
        "returnDate": requestData.searchType == 2 ? requestData.segments[0].returnDate : null,
        "departureTime": requestData.segments[0].departureTime,
        "returnTime": requestData.searchType == 2 ? requestData.segments[0].returnTime : 0,
        "PageIndex": "1",
        "PageSize": "50",
        "departureLocationName": requestData.departureLocationName,
        "arrivalLocationName": requestData.arrivalLocationName
      }
    });
  };

  var handleSortOptions = function handleSortOptions(e) {
    setSortOption(e.target.value);

    if (e.target.value == "Best") {
      setLocalLoading(true);
      setTimeout(function () {
        var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
          return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
        });

        setJsondata(new_array);
        setLocalLoading(false);
      }, 1000);
    } else if (e.target.value == "Cheapest First") {
      setLocalLoading(true);
      setTimeout(function () {
        var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
          return obj1.totalFare - obj2.totalFare;
        });

        setJsondata(new_array);
        setLocalLoading(false);
      }, 1000);
    } else if (e.target.value == "Fastest First") {
      setLocalLoading(true);
      setTimeout(function () {
        var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
          return obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
        });

        setJsondata(new_array);
        setLocalLoading(false);
      }, 1000);
    } else if (e.target.value == "Outbound: Departure Time") {
      setLocalLoading(true);
      setTimeout(function () {
        var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
          return obj1.flightLeg[0].flightDetails.departureTime - obj2.flightLeg[0].flightDetails.departureTime;
        });

        setJsondata(new_array);
        setLocalLoading(false);
      }, 1000);
    } else if (e.target.value == "Airline") {
      setLocalLoading(true);
      setTimeout(function () {
        var new_array = sort_json_array__WEBPACK_IMPORTED_MODULE_17___default()(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata), "marketingAirlineNames", "asc");
        setJsondata(new_array);
        setLocalLoading(false);
      }, 1000);
    } else if (e.target.value == "Stops") {
      setLocalLoading(true);
      setTimeout(function () {
        var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
          return obj1.flightLeg[0].flightDetails.stopOvers - obj2.flightLeg[0].flightDetails.stopOvers;
        });

        setJsondata(new_array);
        setLocalLoading(false);
      }, 1000);
    }
  };

  var handleSortBest = function handleSortBest() {
    setSortOption("Best");
    setLocalLoading(true);
    setTimeout(function () {
      var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
        return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
      });

      setJsondata(new_array);
      setLocalLoading(false);
    }, 1000);
  };

  var handleSortCheapest = function handleSortCheapest() {
    setSortOption("Cheapest First");
    setLocalLoading(true);
    setTimeout(function () {
      var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
        return obj1.totalFare - obj2.totalFare;
      });

      setJsondata(new_array);
      setLocalLoading(false);
    }, 1000);
  };

  var handleSortFastest = function handleSortFastest() {
    setSortOption("Fastest First");
    setLocalLoading(true);
    setTimeout(function () {
      var new_array = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(jsondata).sort(function (obj1, obj2) {
        return obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
      });

      setJsondata(new_array);
      setLocalLoading(false);
    }, 1000);
  };

  var filtercname = function filtercname(text) {
    var filter_text = text.trim();
    filter_text = filter_text.split("-");
    return filter_text[0];
  };

  var preferedclassname = function preferedclassname(classname) {
    if (classname == "1") {
      return "Any";
    } else if (classname == "2") {
      return "Business";
    } else if (classname == "3") {
      return "Economy";
    } else if (classname == "4") {
      return "First Class";
    } else if (classname == "5") {
      return "PremiumOrEconomy";
    } else if (classname == "6") {
      return "PremiumAndEconomy";
    }
  };

  var changeSearchType = function changeSearchType(e) {
    setSearchType(e.target.value);
    setReturnDate(departureDate);
    console.log(searchType);
  };

  function filterAirline(_x) {
    return _filterAirline.apply(this, arguments);
  }

  function _filterAirline() {
    _filterAirline = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(airname) {
      var response, airways_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(airname);
              setAirlineName(airname);
              setAirlinesCheck(!airlinesCheck);

              if (!(airlineName == '')) {
                _context.next = 16;
                break;
              }

              setLocalLoading(true);
              _context.next = 7;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response;

            case 10:
              airways_flights = _context.sent;
              setLocalLoading(false);
              airways_flights = airways_flights.data.recommendation.filter(function (item) {
                return item.marketingAirlineNames != airname;
              });
              setJsondata(airways_flights);
              _context.next = 25;
              break;

            case 16:
              setLocalLoading(true);
              _context.next = 19;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 19:
              response = _context.sent;
              _context.next = 22;
              return response;

            case 22:
              airways_flights = _context.sent;
              setLocalLoading(false);
              setJsondata(airways_flights.data.recommendation);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _filterAirline.apply(this, arguments);
  }

  function filternonstop() {
    return _filternonstop.apply(this, arguments);
  }

  function _filternonstop() {
    _filternonstop = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var response, nonstop_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLocalLoading(true);
              setnonstop(!nonstop);

              if (!nonstop) {
                _context2.next = 14;
                break;
              }

              _context2.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response;

            case 8:
              nonstop_flights = _context2.sent;
              setLocalLoading(false);
              nonstop_flights = nonstop_flights.data.recommendation.filter(function (item) {
                return item.flightLeg[0].flightDetails.stopOvers != '0';
              });
              setJsondata(nonstop_flights);
              _context2.next = 22;
              break;

            case 14:
              _context2.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context2.sent;
              _context2.next = 19;
              return response;

            case 19:
              nonstop_flights = _context2.sent;
              setLocalLoading(false);
              setJsondata(nonstop_flights.data.recommendation);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _filternonstop.apply(this, arguments);
  }

  function filteronestop() {
    return _filteronestop.apply(this, arguments);
  }

  function _filteronestop() {
    _filteronestop = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var response, onestop_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLocalLoading(true);
              setonestop(!onestop);

              if (!onestop) {
                _context3.next = 14;
                break;
              }

              _context3.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response;

            case 8:
              onestop_flights = _context3.sent;
              setLocalLoading(false);
              onestop_flights = onestop_flights.data.recommendation.filter(function (item) {
                return item.flightLeg[0].flightDetails.stopOvers != '1';
              });
              setJsondata(onestop_flights);
              _context3.next = 22;
              break;

            case 14:
              _context3.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context3.sent;
              _context3.next = 19;
              return response;

            case 19:
              onestop_flights = _context3.sent;
              setLocalLoading(false);
              setJsondata(onestop_flights.data.recommendation);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _filteronestop.apply(this, arguments);
  }

  function filtertwostop() {
    return _filtertwostop.apply(this, arguments);
  }

  function _filtertwostop() {
    _filtertwostop = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var response, twostop_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setLocalLoading(true);
              settwostop(!twostop);

              if (!twostop) {
                _context4.next = 14;
                break;
              }

              _context4.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context4.sent;
              _context4.next = 8;
              return response;

            case 8:
              twostop_flights = _context4.sent;
              setLocalLoading(false);
              twostop_flights = twostop_flights.data.recommendation.filter(function (item) {
                return item.flightLeg[0].flightDetails.stopOvers != '2';
              });
              setJsondata(twostop_flights);
              _context4.next = 22;
              break;

            case 14:
              _context4.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context4.sent;
              _context4.next = 19;
              return response;

            case 19:
              twostop_flights = _context4.sent;
              setLocalLoading(false);
              setJsondata(twostop_flights.data.recommendation);

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _filtertwostop.apply(this, arguments);
  }

  function filterdeparture1() {
    return _filterdeparture.apply(this, arguments);
  }

  function _filterdeparture() {
    _filterdeparture = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var response, departure1_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setLocalLoading(true);
              setdeparture1(!departure1);

              if (!departure1) {
                _context5.next = 14;
                break;
              }

              _context5.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response;

            case 8:
              departure1_flights = _context5.sent;
              setLocalLoading(false);
              departure1_flights = departure1_flights.data.recommendation.filter(function (item) {
                return !(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[0].flightDetails.departureTime) >= 600 && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[0].flightDetails.departureTime) <= 1200);
              });
              setJsondata(departure1_flights);
              _context5.next = 22;
              break;

            case 14:
              _context5.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context5.sent;
              _context5.next = 19;
              return response;

            case 19:
              departure1_flights = _context5.sent;
              setLocalLoading(false);
              setJsondata(departure1_flights.data.recommendation);

            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _filterdeparture.apply(this, arguments);
  }

  function filterdeparture2() {
    return _filterdeparture2.apply(this, arguments);
  }

  function _filterdeparture2() {
    _filterdeparture2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var response, departure2_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setLocalLoading(true);
              setdeparture2(!departure2);

              if (!departure2) {
                _context6.next = 14;
                break;
              }

              _context6.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context6.sent;
              _context6.next = 8;
              return response;

            case 8:
              departure2_flights = _context6.sent;
              setLocalLoading(false);
              departure2_flights = departure2_flights.data.recommendation.filter(function (item) {
                return !(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[0].flightDetails.departureTime) >= 1800);
              });
              setJsondata(departure2_flights);
              _context6.next = 22;
              break;

            case 14:
              _context6.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context6.sent;
              _context6.next = 19;
              return response;

            case 19:
              departure2_flights = _context6.sent;
              setLocalLoading(false);
              setJsondata(departure2_flights.data.recommendation);

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _filterdeparture2.apply(this, arguments);
  }

  function filterdeparture3() {
    return _filterdeparture3.apply(this, arguments);
  }

  function _filterdeparture3() {
    _filterdeparture3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      var response, departure3_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              setLocalLoading(true);
              setdeparture3(!departure3);

              if (!departure3) {
                _context7.next = 14;
                break;
              }

              _context7.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context7.sent;
              _context7.next = 8;
              return response;

            case 8:
              departure3_flights = _context7.sent;
              setLocalLoading(false);
              departure3_flights = departure3_flights.data.recommendation.filter(function (item) {
                return !(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[0].flightDetails.departureTime) >= 1200 && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[0].flightDetails.departureTime) <= 1800);
              });
              setJsondata(departure3_flights);
              _context7.next = 22;
              break;

            case 14:
              _context7.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context7.sent;
              _context7.next = 19;
              return response;

            case 19:
              departure3_flights = _context7.sent;
              setLocalLoading(false);
              setJsondata(departure3_flights.data.recommendation);

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _filterdeparture3.apply(this, arguments);
  }

  function filterreturn1() {
    return _filterreturn.apply(this, arguments);
  }

  function _filterreturn() {
    _filterreturn = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
      var response, return1_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              setLocalLoading(true);
              setreturn1(!return1);

              if (!return1) {
                _context8.next = 14;
                break;
              }

              _context8.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context8.sent;
              _context8.next = 8;
              return response;

            case 8:
              return1_flights = _context8.sent;
              setLocalLoading(false);
              return1_flights = return1_flights.data.recommendation.filter(function (item) {
                return !(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[1].flightDetails.departureTime) >= 600 && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[1].flightDetails.departureTime) <= 1200);
              });
              setJsondata(return1_flights);
              _context8.next = 22;
              break;

            case 14:
              _context8.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context8.sent;
              _context8.next = 19;
              return response;

            case 19:
              return1_flights = _context8.sent;
              setLocalLoading(false);
              setJsondata(return1_flights.data.recommendation);

            case 22:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _filterreturn.apply(this, arguments);
  }

  function filterreturn2() {
    return _filterreturn2.apply(this, arguments);
  }

  function _filterreturn2() {
    _filterreturn2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
      var response, return2_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              setLocalLoading(true);
              setreturn2(!return2);

              if (!return2) {
                _context9.next = 14;
                break;
              }

              _context9.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context9.sent;
              _context9.next = 8;
              return response;

            case 8:
              return2_flights = _context9.sent;
              setLocalLoading(false);
              return2_flights = return2_flights.data.recommendation.filter(function (item) {
                return !(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[1].flightDetails.departureTime) >= 1800);
              });
              setJsondata(return2_flights);
              _context9.next = 22;
              break;

            case 14:
              _context9.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context9.sent;
              _context9.next = 19;
              return response;

            case 19:
              return2_flights = _context9.sent;
              setLocalLoading(false);
              setJsondata(return2_flights.data.recommendation);

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return _filterreturn2.apply(this, arguments);
  }

  function filterreturn3() {
    return _filterreturn3.apply(this, arguments);
  }

  function _filterreturn3() {
    _filterreturn3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
      var response, return3_flights;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              setLocalLoading(true);
              setreturn3(!return3);

              if (!return3) {
                _context10.next = 14;
                break;
              }

              _context10.next = 5;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 5:
              response = _context10.sent;
              _context10.next = 8;
              return response;

            case 8:
              return3_flights = _context10.sent;
              setLocalLoading(false);
              return3_flights = return3_flights.data.recommendation.filter(function (item) {
                return !(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[1].flightDetails.departureTime) >= 1200 && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.flightLeg[1].flightDetails.departureTime) <= 1800);
              });
              setJsondata(return3_flights.data.recommendation);
              _context10.next = 22;
              break;

            case 14:
              _context10.next = 16;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(requestData);

            case 16:
              response = _context10.sent;
              _context10.next = 19;
              return response;

            case 19:
              return3_flights = _context10.sent;
              setLocalLoading(false);
              setJsondata(return3_flights);

            case 22:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return _filterreturn3.apply(this, arguments);
  }

  var handleRadio = function handleRadio(e) {
    console.log(e.target.value);
    setSearchtype(e.target.value);
  };

  var handleendChange = function handleendChange(date) {
    setReturndate(date);
  };

  var handlestartChange = function handlestartChange(date) {
    setDeparturedate(date);
    setReturndate(date);
  };

  var changedirectFlight = function changedirectFlight() {
    setDirectflight(!isDirectFlight);
  };

  var changeClass = function changeClass(e) {
    setPreferedflightclass(e.target.value);
  };

  var adultChanged = function adultChanged(e) {
    if (e <= 9) {
      setAdults_err(false);
      setAdultcount(e);
    } else {
      setAdults_err(true);
      setAdultcount(1);
    }
  };

  var childChanged = function childChanged(e) {
    if (e <= 9) {
      setChild_err(false);
      setchildCount(e);
    } else {
      setChild_err(true);
      setchildCount(0);
    }
  }; //   Dropdown


  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    document.addEventListener("click", handleOutsideClick);
    document.removeEventListener("click", handleOutsideClick);
  });

  var handlepopup = function handlepopup() {
    setPopup(!popup);
  };

  var handleOutsideClick = function handleOutsideClick(e) {
    if (node.current && node.current.contains(event.target)) {
      setPopup(false);
    }
  };

  var onChangeLocation = function onChangeLocation(id, suggestion, value) {
    if (id == "countries1") {
      var suggestion = suggestion.trim();
      setDepartureLocationName(suggestion);
      var length = suggestion.length;
      var exact_match = suggestion.substring(length - 4, length - 1);
      exact_match = exact_match.trim();
      setDeparturelocationcode(exact_match);
    } else if (id == "countries2") {
      var suggestion = suggestion.trim();
      setArrivalLocationName(suggestion);
      var length = suggestion.length;
      var exact_match = suggestion.substring(length - 4, length - 1);
      exact_match = exact_match.trim();
      setArrivallocationcode(exact_match);
    }
  };

  function localSearch() {
    return _localSearch.apply(this, arguments);
  }

  function _localSearch() {
    _localSearch = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11() {
      var request, localreq, response, json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              setFetchLoading(true);
              setLocalLoading(true);
              request = {
                "adultCount": adultCount,
                "childCount": childCount,
                "infantCount": "0",
                "isDirectFlight": isDirectFlight,
                "isPlusOrMinus3Days": requestData.isPlusOrMinus3Days,
                "searchType": searchType,
                "preferedFlightClass": preferedFlightClass,
                "segments": [{
                  "departureLocationCode": departureLocationCode,
                  "departureDate": dateformat__WEBPACK_IMPORTED_MODULE_19___default()(departureDate, "dd-mm-yyyy"),
                  "arrivalLocationCode": arrivalLocationCode,
                  "returnDate": searchType == 2 ? dateformat__WEBPACK_IMPORTED_MODULE_19___default()(returnDate, "dd-mm-yyyy") : null,
                  "departureTime": requestData.segments[0].departureTime,
                  "returnTime": searchType == 2 ? requestData.segments[0].returnTime : null
                }],
                "paging": {
                  "PageIndex": requestData.paging.PageIndex,
                  "PageSize": requestData.paging.PageSize
                }
              };
              localreq = {
                "adultCount": adultCount,
                "childCount": childCount,
                "infantCount": requestData.infantCount,
                "isDirectFlight": isDirectFlight,
                "isPlusOrMinus3Days": requestData.isPlusOrMinus3Days,
                "searchType": searchType,
                "preferedFlightClass": preferedFlightClass,
                "departureLocationName": departureLocationName,
                "arrivalLocationName": arrivalLocationName,
                "segments": [{
                  "departureLocationCode": departureLocationCode,
                  "departureDate": dateformat__WEBPACK_IMPORTED_MODULE_19___default()(departureDate, "dd-mm-yyyy"),
                  "arrivalLocationCode": arrivalLocationCode,
                  "returnDate": searchType == 2 ? dateformat__WEBPACK_IMPORTED_MODULE_19___default()(returnDate, "dd-mm-yyyy") : null,
                  "departureTime": requestData.segments[0].departureTime,
                  "returnTime": searchType == 2 ? requestData.segments[0].returnTime : null
                }],
                "paging": {
                  "PageIndex": requestData.paging.PageIndex,
                  "PageSize": requestData.paging.PageSize
                }
              };
              setRequestData(localreq);
              _context11.next = 7;
              return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(request);

            case 7:
              response = _context11.sent;
              _context11.next = 10;
              return response;

            case 10:
              json = _context11.sent;
              console.log(json);
              setJsondata(json.data.recommendation);
              console.log("local JSON: ", jsondata);
              setFlightData(json.data.recommendation);
              setLocalLoading(false);
              setFetchLoading(false); //     var check_nonstop = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '0').length) : 0;
              //    setnonstop(check_nonstop>0 ? true : false);
              //     var check_onestop = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '1').length) : 0;
              //     setonestop(check_onestop>0 ? true : false);
              //     var check_twostop = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '2').length) : 0;
              //     settwostop(check_twostop>0 ? true : false);
              //     var check_departure1 = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200).length) : 0;
              //     setdeparture1(check_departure1>0 ? true: false);
              //     var check_departure2 = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 1800).length) : 0;
              //     setdeparture2(check_departure2>0 ? true : false);
              //     var check_departure3 = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800).length) : 0;
              //     setdeparture3(check_departure3>0 ? true : false);
              //     var check_return1 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200).length) : null) : 0;
              //     setreturn1(check_return1>0 ? true : false);
              //     var check_return2 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 1800).length) : null):0;
              //     setreturn2(check_return2>0 ? true : false);
              //     var check_return3 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800).length) : null) : 0;
              //     setreturn3(check_return3>0 ? true : false);                   

            case 17:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));
    return _localSearch.apply(this, arguments);
  }

  if (jsondata !== undefined) {
    var currencyCode = flights.flights.data.currencyCode;
    var total_response = jsondata.length;
  }

  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "bg-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    className: "margin-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    style: {
      padding: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "passanger-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    className: "passanger-static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    sm: 6,
    md: 8,
    lg: 8,
    style: {
      padding: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "d_flex",
    onClick: function onClick() {
      return setFullDrop(!fullDrop);
    },
    style: {
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "fa fa-search search-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "fromtoplace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850
    },
    __self: this
  }, departureLocationName, " \xA0\xA0- \xA0\xA0", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850
    },
    __self: this
  }), arrivalLocationName)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
    style: {
      position: 'relative',
      paddingLeft: '55px',
      top: '-1.5em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852
    },
    __self: this
  }, adultCount, " traveller \xA0\xA0| \xA0\xA0", preferedclassname(preferedFlightClass))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 6,
    sm: 3,
    md: 2,
    lg: 2,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "smallText d_flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    className: "img_calendar",
    src: "static/images/calendar.svg",
    width: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: this
  }), "\xA0\xA0", dateformat__WEBPACK_IMPORTED_MODULE_19___default()(departureDate, "ddd d,yyyy"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 6,
    sm: 3,
    md: 2,
    lg: 2,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859
    },
    __self: this
  }, searchType == 2 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "smallText d_flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860
    },
    __self: this
  }, " -", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    className: "img_calendar",
    src: "static/images/calendar.svg",
    width: "20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861
    },
    __self: this
  }), "\xA0\xA0", dateformat__WEBPACK_IMPORTED_MODULE_19___default()(returnDate, "ddd d,yyyy"), " ") : null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    hidden: !fullDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    className: "fulldrop-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    name: "searchType",
    defaultValue: "1",
    className: "radio_btn",
    inline: true,
    label: "One Way",
    type: "radio",
    defaultChecked: searchType == '1',
    onClick: handleRadio,
    id: "inline-radio-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    name: "searchType",
    defaultValue: "2",
    className: "radio_btn",
    inline: true,
    label: "Round Trip",
    defaultChecked: searchType == '2',
    type: "radio",
    onClick: handleRadio,
    id: "inline-radio-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 9,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 4,
    sm: 6,
    className: "less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880
    },
    __self: this
  }, "From"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "select_box2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(MyAutosuggest, {
    id: "countries1",
    onChange: onChangeLocation,
    value: departureLocationName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882
    },
    __self: this
  }), departure_err ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887
    },
    __self: this
  }, "Departure Location required") : null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    name: "add_near_airport",
    inline: true,
    label: "Add Nearby Airports",
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 4,
    sm: 6,
    className: "less-padleft less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898
    },
    __self: this
  }, "To"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "select_box2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(MyAutosuggest, {
    id: "countries2",
    onChange: onChangeLocation,
    value: arrivalLocationName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900
    },
    __self: this
  }), arrival_err ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905
    },
    __self: this
  }, "Arrival Location required") : null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    name: "add_near_airport",
    inline: true,
    label: "Add Nearby Airports",
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 6,
    md: 6,
    className: "less-padleft less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918
    },
    __self: this
  }, "Departure"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: "departureDate",
    className: "form-control",
    showMonthDropdown: true,
    showYearDropdown: true,
    dateFormat: "dd/MM/yyyy",
    selected: departureDate,
    minDate: moment__WEBPACK_IMPORTED_MODULE_25___default()().toDate(),
    onChange: handlestartChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921
    },
    __self: this
  }), departureDate_err ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930
    },
    __self: this
  }, "Departure date is required") : null))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 6,
    className: "less-padleft less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936
    },
    __self: this
  }, "Return"), searchType == 2 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: "returnDate",
    className: "form-control",
    dateFormat: "dd/MM/yyyy",
    showMonthDropdown: true,
    showYearDropdown: true,
    selected: returnDate,
    minDate: new Date(departureDate),
    onChange: handleendChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940
    },
    __self: this
  }), returnDate_err ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950
    },
    __self: this
  }, "Return date is required") : null) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "date-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952
    },
    __self: this
  }, "(One way)"))))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 3,
    sm: 4,
    className: "less-padleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964
    },
    __self: this
  }, "Cabin Class & Travellers"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    ref: node,
    className: "traveldet-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    onClick: handlepopup,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967
    },
    __self: this
  }, adultCount, " Adult, ", preferedclassname(preferedFlightClass))), popup && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "traveldet-popdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 12,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    className: "label-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973
    },
    __self: this
  }, "Cabin class"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "",
    style: {
      "float": 'right',
      color: '#17d8cf'
    },
    onClick: function onClick() {
      return setPopup(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "fa fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "select_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control, {
    as: "select",
    name: "oneway_preferedFlightClass",
    onChange: changeClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977
    },
    __self: this
  }, "Any"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978
    },
    __self: this
  }, "Business"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 979
    },
    __self: this
  }, "Economy"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980
    },
    __self: this
  }, "First Class"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981
    },
    __self: this
  }, "PremiumOrEconomy"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982
    },
    __self: this
  }, "PremiumAndEconomy"))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    className: "label-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990
    },
    __self: this
  }, "Adults"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_26___default.a, {
    mobile: true,
    name: "adultCount",
    className: "number-input form-control",
    value: adultCount,
    min: 1,
    max: 9,
    step: 1,
    onChange: adultChanged,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992
    },
    __self: this
  }), adults_err ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "err-msg red-err",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993
    },
    __self: this
  }, "Put value between 1-9") : null))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "agelimit-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998
    },
    __self: this
  }, "16+ years"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
    className: "label-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004
    },
    __self: this
  }, "Children"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_26___default.a, {
    mobile: true,
    name: "childCount",
    className: "number-input form-control",
    value: childCount,
    min: 0,
    max: 9,
    step: 1,
    onChange: childChanged,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006
    },
    __self: this
  }), child_err ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "err-msg red-err",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007
    },
    __self: this
  }, "Put value between 0-9") : null))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "agelimit-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012
    },
    __self: this
  }, "0-15 years"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "age-instr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017
    },
    __self: this
  }, "Your age at time of travel must be valid for the age category booked. Airlines have restrictions on under 18s travelling alone.", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018
    },
    __self: this
  }), "Age limits and policies fo r travelling with children may vary so please check with the airline before booking."))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "label-skyblue",
    onClick: function onClick() {
      return setPopup(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024
    },
    __self: this
  }, "Done"))))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    lg: 12,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "mb-3 right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    name: "isDirectFlight",
    label: "Direct Flight Only",
    type: "checkbox",
    value: "false",
    defaultChecked: isDirectFlight,
    onClick: changedirectFlight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
    className: "form-control search-btnmargin",
    variant: "danger",
    disabled: fetchLoading,
    onClick: localSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042
    },
    __self: this
  }, fetchLoading && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: "fa fa-refresh fa-spin",
    style: {
      marginRight: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1044
    },
    __self: this
  }), fetchLoading && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049
    },
    __self: this
  }, "Please wait!"), !fetchLoading && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050
    },
    __self: this
  }, "SEARCH FLIGHTS")))))))))))), jsondata != undefined ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "mobile-filterscreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "visible-xs filter-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    className: "filtering-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    xs: 12,
    lg: 12,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1071
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    onClick: handleFilterToggler,
    className: "mob-togglehead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072
    },
    __self: this
  }, "Filter ")))), filterToggler ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "datas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1081
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "bold-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082
    },
    __self: this
  }, "Filter by:"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
    variant: "outline-danger",
    style: {
      "float": 'right'
    },
    onClick: function onClick() {
      setSortToggler(false);
      setFilterToggler(false);
      setFilterToggler(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083
    },
    __self: this
  }, "Done")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089
    },
    __self: this
  }, "Stops")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "Non-stop",
    name: "stop1",
    value: nonstop,
    onClick: filternonstop,
    defaultChecked: nonstop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "1stop",
    name: "stop2",
    value: onestop,
    onClick: filteronestop,
    defaultChecked: onestop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "2 Stops",
    name: "stop3",
    value: twostop,
    onClick: filtertwostop,
    defaultChecked: twostop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104
    },
    __self: this
  }, "Departure from ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "filter-cname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104
    },
    __self: this
  }, filtercname(requestData.departureLocationName)))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "6AM - 12 Noon",
    value: departure1,
    onClick: filterdeparture1,
    defaultChecked: departure1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "After 6PM",
    value: departure2,
    onClick: filterdeparture2,
    defaultChecked: departure2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "12 Noon - 6PM",
    value: departure3,
    onClick: filterdeparture3,
    defaultChecked: departure3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112
    },
    __self: this
  }))))), requestData.searchType == 2 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120
    },
    __self: this
  }, "Departure from ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "filter-cname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120
    },
    __self: this
  }, filtercname(requestData.arrivalLocationName)))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "6AM - 12 Noon",
    value: return1,
    onClick: filterreturn1,
    defaultChecked: return1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "After 6PM",
    value: return2,
    onClick: filterreturn2,
    defaultChecked: return2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "12 Noon - 6PM",
    value: return3,
    onClick: filterreturn3,
    defaultChecked: return3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128
    },
    __self: this
  }))))) : null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139
    },
    __self: this
  }, "Airlines"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145
    },
    __self: this
  }, total_response > 0 && jsondata != undefined ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147
    },
    __self: this
  }, uniqueAirlines().map(function (airname) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
      type: "checkbox",
      value: airname,
      label: airname,
      key: i,
      defaultChecked: airlineName != airname || airlinesCheck,
      onClick: function onClick() {
        return filterAirline(airname);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1147
      },
      __self: this
    });
  }), " ") : null)))))))) : null) : null, localLoading ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    src: "static/images/loader1.gif",
    height: "50",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161
    },
    __self: this
  }), "Loading") : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161
    },
    __self: this
  }, jsondata !== undefined ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "filter-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    md: 12,
    lg: 10,
    xl: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    md: 3,
    className: "hidden-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "filter_Set",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172
    },
    __self: this
  }, "Stops"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
    className: "pink-text",
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "Non-stop",
    name: "stop1",
    value: nonstop,
    onClick: filternonstop,
    defaultChecked: nonstop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "1 Stop",
    name: "stop2",
    value: onestop,
    onClick: filteronestop,
    defaultChecked: onestop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "2 Stops",
    name: "stop3",
    value: twostop,
    onClick: filtertwostop,
    defaultChecked: twostop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "filter_Set",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190
    },
    __self: this
  }, "Departure from ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "filter-cname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190
    },
    __self: this
  }, filtercname(departureLocationName))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
    className: "pink-text",
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "6 AM - 12 Noon",
    value: departure1,
    onClick: filterdeparture1,
    defaultChecked: departure1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "After 6 PM",
    value: departure2,
    onClick: filterdeparture2,
    defaultChecked: departure2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "12 Noon - 6 PM",
    value: departure3,
    onClick: filterdeparture3,
    defaultChecked: departure3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1200
    },
    __self: this
  }))))), requestData.searchType == 2 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "filter_Set",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208
    },
    __self: this
  }, "Departure from ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "filter-cname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208
    },
    __self: this
  }, filtercname(arrivalLocationName))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
    className: "pink-text",
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "6 AM - 12 Noon",
    value: return1,
    onClick: filterreturn1,
    defaultChecked: return1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "After 6 PM",
    value: return2,
    onClick: filterreturn2,
    defaultChecked: return2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
    type: "checkbox",
    label: "12 Noon - 6 PM",
    value: return3,
    onClick: filterreturn3,
    defaultChecked: return3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218
    },
    __self: this
  }))))) : null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "filter_Set",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    className: "small_txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225
    },
    __self: this
  }, "Airlines"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
    className: "pink-text",
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232
    },
    __self: this
  }, jsondata != undefined && total_response > 0 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234
    },
    __self: this
  }, uniqueAirlines().map(function (airname) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Check, {
      type: "checkbox",
      value: airname,
      label: airname,
      key: i,
      defaultChecked: airlineName != airname || airlinesCheck,
      onClick: function onClick() {
        return filterAirline(airname);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1234
      },
      __self: this
    });
  }), " ") : null))))), total_response > 0 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    lg: 7,
    md: 7,
    sm: 5,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1246
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1247
    },
    __self: this
  }, total_response, " results sorted by ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1247
    },
    __self: this
  }, sortOption))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    lg: 5,
    md: 5,
    sm: 6,
    xs: 6,
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "select_box outline",
    style: {
      "float": 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control, {
    as: "select",
    name: "sortoptions",
    defaultValue: sortOption,
    onChange: handleSortOptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "0",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1252
    },
    __self: this
  }, "Sort by"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "Best",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1253
    },
    __self: this
  }, "Best"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "Cheapest First",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254
    },
    __self: this
  }, "Cheapest First"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "Fastest First",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1255
    },
    __self: this
  }, "Fastest First"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "Outbound: Departure Time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1256
    },
    __self: this
  }, "Outbound: Departure Time"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "Airline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1257
    },
    __self: this
  }, "Airline"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("option", {
    value: "Stops",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1258
    },
    __self: this
  }, "Stops"))))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "filter_sort",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 4,
    sm: 4,
    className: sortOption == "Best" ? 'filter_tab text-center active' : 'filter_tab text-center',
    "data-tip": true,
    "data-for": "best",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1267
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    onClick: handleSortBest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1268
    },
    __self: this
  }, "Best", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1268
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1269
    },
    __self: this
  }, currency_symbol_map__WEBPACK_IMPORTED_MODULE_20___default()(currencyCode), " ", bestPrice()), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270
    },
    __self: this
  }), bestDuration())), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18___default.a, {
    id: "best",
    place: "top",
    type: "light",
    effect: "solid",
    "aria-haspopup": "true",
    role: "example",
    className: "tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }, "We think these flights offer the best combination of ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }, "price"), " and ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }, "speed"), ". We may also consider factors like ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }), "number of stops and mount of hassle.")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 4,
    sm: 4,
    className: sortOption == "Cheapest First" ? 'filter_tab text-center active' : 'filter_tab text-center',
    "data-tip": true,
    "data-for": "cheapest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    onClick: handleSortCheapest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276
    },
    __self: this
  }, "Cheapest", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1277
    },
    __self: this
  }, currency_symbol_map__WEBPACK_IMPORTED_MODULE_20___default()(currencyCode), " ", cheapestPrice()), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1278
    },
    __self: this
  }), cheapestDuration())), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18___default.a, {
    id: "cheapest",
    place: "top",
    type: "light",
    effect: "solid",
    "aria-haspopup": "true",
    role: "example",
    className: "tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281
    },
    __self: this
  }, "Sort by Cheatpest Price.")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 4,
    sm: 4,
    className: sortOption == "Fastest First" ? 'filter_tab text-center active' : 'filter_tab text-center',
    "data-tip": true,
    "data-for": "fastest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    onClick: handleSortFastest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284
    },
    __self: this
  }, "Fastest", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285
    },
    __self: this
  }, currency_symbol_map__WEBPACK_IMPORTED_MODULE_20___default()(currencyCode), " ", fastestPrice(), " "), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1286
    },
    __self: this
  }), fastestDuration())), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_18___default.a, {
    id: "fastest",
    place: "top",
    type: "light",
    effect: "solid",
    "aria-haspopup": "true",
    role: "example",
    className: "tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1288
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1289
    },
    __self: this
  }, "Sort by Shortest Duration.")))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "custom-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1295
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "container",
    style: {
      padding: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "sort-title d_flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 8,
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", {
    className: "bold-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1300
    },
    __self: this
  }, "Smart value Flights"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1301
    },
    __self: this
  }, "Popularity based on customer preference, duration & price")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    xs: 4,
    sm: 4,
    className: "text-right",
    style: {
      borderLeft: '1px solid #d5cece'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "topright-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1304
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("big", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1305
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "pink-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1305
    },
    __self: this
  }, "Chepeast Starting at")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1306
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "top-currency",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1307
    },
    __self: this
  }, currency_symbol_map__WEBPACK_IMPORTED_MODULE_20___default()(currencyCode), "\xA0", cheapestPrice()))))))), jsondata.map(function (resultData) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      className: "sort-box",
      key: resultData.recommendationRefNo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1321
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      sm: 9,
      style: {
        padding: '10px',
        borderRight: '1px dashed #03A9F4'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1322
      },
      __self: this
    }, resultData.totalFare == cheapestPrice() ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
      className: "pink-button cheap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1323
      },
      __self: this
    }, "CHEAPEST") : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
      className: "pink-button cheap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1323
      },
      __self: this
    }, "VALUE FOR MONEY"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      className: "travel-timing",
      style: {
        marginTop: '6px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1325
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      md: 12,
      sm: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1326
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1327
      },
      __self: this
    }, "Departure"), " | ", dateformat__WEBPACK_IMPORTED_MODULE_19___default()(changeMonthDate(resultData.flightLeg[0].flightDetails.departureDate), "ddd, mmm d"), " | ", resultData.flightLeg[0].flightDetails.operatingAirlineName)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1330
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 3,
      sm: 4,
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1331
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      className: "sort-countryname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1332
      },
      __self: this
    }, resultData.marketingAirlineNames)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 9,
      sm: 8,
      className: "flight-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1334
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1335
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1336
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: "start-time text-right",
      htmlFor: "test" + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1337
      },
      __self: this
    }, TimeSplit(resultData.flightLeg[0].flightDetails.departureTime), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      className: "mini-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1339
      },
      __self: this
    }, resultData.flightLeg[0].flightDetails.departureLocationCode))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 4,
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1342
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: "hrs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "mini-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1344
      },
      __self: this
    }, CalculateDuration(resultData.flightLeg[0].flightDetails.totalFlyingHours)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "line_jet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1345
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: StopClassName(resultData.flightLeg[0].flightDetails.stopOvers),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1346
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "mini-text sky-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1347
      },
      __self: this
    }, StopName(resultData.flightLeg[0].flightDetails.stopOvers), " ", resultData.flightLeg[0].flightDetails.stopOvers > 0 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1347
      },
      __self: this
    }, " via ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "via-city",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1347
      },
      __self: this
    }, ViaCityName(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalLocationName)), " ") : null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
      className: "fa fa-fighter-jet autocomplete-flight-img",
      alt: "Flight",
      src: "static/images/flight.png",
      width: "16px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1348
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1351
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: "start-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1352
      },
      __self: this
    }, TimeSplit(resultData.flightLeg[0].flightDetails.arrivalTime), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      className: "mini-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1354
      },
      __self: this
    }, resultData.flightLeg[0].flightDetails.arrivalLocationCode)))))), requestData.searchType == 2 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1362
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      className: "travel-timing",
      style: {
        marginTop: '6px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1363
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      md: 12,
      sm: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1364
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1365
      },
      __self: this
    }, "Return"), " | ", dateformat__WEBPACK_IMPORTED_MODULE_19___default()(changeMonthDate(resultData.flightLeg[1].flightDetails.departureDate), "ddd, mmm d"), " | ", resultData.flightLeg[1].flightDetails.operatingAirlineName)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1368
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 3,
      sm: 4,
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1369
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      className: "sort-countryname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1370
      },
      __self: this
    }, resultData.marketingAirlineNames)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 9,
      sm: 8,
      className: "flight-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1372
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1373
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1374
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: "start-time text-right",
      htmlFor: "test" + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1375
      },
      __self: this
    }, TimeSplit(resultData.flightLeg[1].flightDetails.departureTime), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      className: "mini-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1377
      },
      __self: this
    }, resultData.flightLeg[1].flightDetails.departureLocationCode))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 4,
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1380
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: "hrs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1381
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "mini-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1382
      },
      __self: this
    }, CalculateDuration(resultData.flightLeg[1].flightDetails.totalFlyingHours)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "line_jet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1383
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: StopClassName(resultData.flightLeg[1].flightDetails.stopOvers),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1384
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "mini-text sky-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1385
      },
      __self: this
    }, StopName(resultData.flightLeg[1].flightDetails.stopOvers), resultData.flightLeg[1].flightDetails.stopOvers > 0 ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1385
      },
      __self: this
    }, " via ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "via-city",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1385
      },
      __self: this
    }, ViaCityName(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalLocationName)), " ") : null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
      className: "fa fa-fighter-jet autocomplete-flight-img",
      alt: "Flight",
      src: "static/images/flight.png",
      width: "16px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1386
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      xs: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1389
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: "start-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1390
      },
      __self: this
    }, TimeSplit(resultData.flightLeg[1].flightDetails.arrivalTime), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      className: "mini-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1392
      },
      __self: this
    }, resultData.flightLeg[1].flightDetails.arrivalLocationCode)))))), " ") : null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      sm: 3,
      className: "text-center set_bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1400
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "sort-currency",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1401
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "deals_no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1402
      },
      __self: this
    }, "8 deals"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1404
      },
      __self: this
    }), currency_symbol_map__WEBPACK_IMPORTED_MODULE_20___default()(currencyCode), "\xA0", resultData.totalFare), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
      className: "bpk-button",
      onClick: function onClick() {
        return showFlightDetails(resultData.recommendationRefNo);
      },
      disabled: resultData.recommendationRefNo == flightId ? fetchLoading : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1413
      },
      __self: this
    }, resultData.recommendationRefNo == flightId ? fetchLoading1 && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
      className: "fa fa-refresh fa-spin",
      style: {
        marginRight: "5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1416
      },
      __self: this
    }) : null, resultData.recommendationRefNo == flightId ? fetchLoading1 && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1421
      },
      __self: this
    }, "Loading") : null, resultData.recommendationRefNo == flightId ? !fetchLoading1 && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1422
      },
      __self: this
    }, "Select") : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1422
      },
      __self: this
    }, "Select"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      className: "flight-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1426
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      sm: 12,
      className: "text-center grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1427
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1428
      },
      __self: this
    }, "Cabin Baggage Only Flights"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
      className: "flight-details bottom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1431
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
      sm: 8,
      xs: 7,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1432
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1433
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1434
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
      className: "green-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1435
      },
      __self: this
    }, "8.5", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1435
      },
      __self: this
    }, "/10")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1436
      },
      __self: this
    }, " Non-refundable"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
      className: "fa fa-angle-down",
      "aria-hidden": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1437
      },
      __self: this
    }), " |", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1438
      },
      __self: this
    }, "Seat varies by flight segment")))));
  })) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1446
    },
    __self: this
  }, "No data found"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: 12,
    md: 12,
    lg: 2,
    xl: 2,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1452
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1453
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 4,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1454
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "ad-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1455
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1456
    },
    __self: this
  }, "Place for ad"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 4,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1459
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "ad-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1460
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1461
    },
    __self: this
  }, "Place for ad"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: 4,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1464
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "ad-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1465
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1466
    },
    __self: this
  }, "Place for ad")))))))) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "nodata-msg text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1473
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    src: "static/images/nodata2.png",
    className: "img img-responsive",
    style: {
      height: '200px',
      width: '250px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1474
    },
    __self: this
  })), " ")));
};

TicketBooking.getInitialProps =
/*#__PURE__*/
function () {
  var _ref26 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12(_ref25) {
    var _ref25$query, adultCount, childCount, infantCount, isDirectFlight, isPlusOrMinus3Days, searchType, preferedFlightClass, departureLocationCode, departureDate, arrivalLocationCode, returnDate, departureTime, returnTime, PageIndex, PageSize, departureLocationName, arrivalLocationName, request, res, json;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _ref25$query = _ref25.query, adultCount = _ref25$query.adultCount, childCount = _ref25$query.childCount, infantCount = _ref25$query.infantCount, isDirectFlight = _ref25$query.isDirectFlight, isPlusOrMinus3Days = _ref25$query.isPlusOrMinus3Days, searchType = _ref25$query.searchType, preferedFlightClass = _ref25$query.preferedFlightClass, departureLocationCode = _ref25$query.departureLocationCode, departureDate = _ref25$query.departureDate, arrivalLocationCode = _ref25$query.arrivalLocationCode, returnDate = _ref25$query.returnDate, departureTime = _ref25$query.departureTime, returnTime = _ref25$query.returnTime, PageIndex = _ref25$query.PageIndex, PageSize = _ref25$query.PageSize, departureLocationName = _ref25$query.departureLocationName, arrivalLocationName = _ref25$query.arrivalLocationName;
            request = {
              "adultCount": adultCount,
              "childCount": childCount,
              "infantCount": infantCount,
              "isDirectFlight": isDirectFlight,
              "isPlusOrMinus3Days": isPlusOrMinus3Days,
              "searchType": searchType,
              "preferedFlightClass": preferedFlightClass,
              "segments": [{
                "departureLocationCode": departureLocationCode,
                "departureDate": departureDate,
                "arrivalLocationCode": arrivalLocationCode,
                "returnDate": searchType == 2 ? returnDate : null,
                "departureTime": departureTime,
                "returnTime": searchType == 2 ? returnTime : null
              }],
              "paging": {
                "PageIndex": PageIndex,
                "PageSize": PageSize
              }
            };
            _context12.next = 4;
            return Object(_api__WEBPACK_IMPORTED_MODULE_23__["getFlights"])(request);

          case 4:
            res = _context12.sent;
            _context12.next = 7;
            return res;

          case 7:
            json = _context12.sent;
            return _context12.abrupt("return", {
              flights: json,
              request: {
                "adultCount": adultCount,
                "childCount": childCount,
                "infantCount": infantCount,
                "isDirectFlight": isDirectFlight,
                "isPlusOrMinus3Days": isPlusOrMinus3Days,
                "searchType": searchType,
                "preferedFlightClass": preferedFlightClass,
                "departureLocationName": departureLocationName,
                "arrivalLocationName": arrivalLocationName,
                "segments": [{
                  "departureLocationCode": departureLocationCode,
                  "departureDate": departureDate,
                  "arrivalLocationCode": arrivalLocationCode,
                  "returnDate": searchType == 2 ? returnDate : null,
                  "departureTime": departureTime,
                  "returnTime": searchType == 2 ? returnTime : null
                }],
                "paging": {
                  "PageIndex": PageIndex,
                  "PageSize": PageSize
                }
              }
            });

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x2) {
    return _ref26.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (TicketBooking);

/***/ })

})
//# sourceMappingURL=ticketBooking.js.3cf8bfbf364ea2c02938.hot-update.js.map