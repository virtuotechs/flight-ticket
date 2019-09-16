webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-numeric-input */ "./node_modules/react-numeric-input/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! autosuggest-highlight/match */ "./node_modules/autosuggest-highlight/match/index.js");
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! autosuggest-highlight/parse */ "./node_modules/autosuggest-highlight/parse/index.js");
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "D:\\react projects\\flight_ticket\\pages\\Home.js";





 //Number Input

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
  var matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_16___default()(suggestionText, query);
  var parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_17___default()(suggestionText, matches);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: 'suggestion-content ' + suggestion.twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "autocomplete-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "fa fa-fighter-jet autocomplete-flight-img",
    alt: "Flight",
    src: "static/images/flight.png",
    width: "25px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), parts.map(function (part, index) {
    var className = part.highlight ? 'highlight' : null;
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: className,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, part.text);
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
    className: "country-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, suggestionCountry)));
}

var MyAutosuggest =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyAutosuggest, _React$Component);

  function MyAutosuggest() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyAutosuggest);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyAutosuggest).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChange", function (_, _ref2) {
      var newValue = _ref2.newValue;
      var _this$props = _this.props,
          id = _this$props.id,
          onChange = _this$props.onChange;

      _this.setState({
        value: newValue
      });

      onChange(id, newValue);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSuggestionsFetchRequested", function (_ref3) {
      var value = _ref3.value;

      _this.setState({
        suggestions: getSuggestions(value)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _this.state = {
      value: '',
      suggestions: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyAutosuggest, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          placeholder = _this$props2.placeholder;
      var _this$state = this.state,
          value = _this$state.value,
          suggestions = _this$state.suggestions;
      var inputProps = {
        placeholder: placeholder,
        value: value,
        onChange: this.onChange
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_15___default.a, {
        id: id,
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        inputProps: inputProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      });
    }
  }]);

  return MyAutosuggest;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // Index Page


var Home = function Home() {
  var adultCountref = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
  var childCountref = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
  var node = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef(); //states

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showAnn = _useState2[0],
      setShowAnn = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      round = _useState4[0],
      setRound = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      multi = _useState6[0],
      setMulti = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(2),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      searchType = _useState8[0],
      setSearchtype = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      isDirectFlight = _useState10[0],
      setDirectflight = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      fetchLoading = _useState12[0],
      setFetchLoading = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      popup = _useState14[0],
      setPopup = _useState14[1]; //round trip states


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
      departureLocationCode = _useState16[0],
      setDeparturelocationcode = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState17, 2),
      arrivalLocationCode = _useState18[0],
      setArrivallocationcode = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      _useState20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState19, 2),
      departureLocationName = _useState20[0],
      setDepartureLocationName = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      _useState22 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState21, 2),
      arrivalLocationName = _useState22[0],
      setArrivalLocationName = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(1),
      _useState24 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState23, 2),
      preferedFlightClass = _useState24[0],
      setPreferedflightclass = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(new Date()),
      _useState26 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState25, 2),
      departureDate = _useState26[0],
      setDeparturedate = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(new Date()),
      _useState28 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState27, 2),
      returnDate = _useState28[0],
      setReturndate = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(1),
      _useState30 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState29, 2),
      adultCount = _useState30[0],
      setAdultcount = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(0),
      _useState32 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState31, 2),
      childCount = _useState32[0],
      setchildCount = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState34 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState33, 2),
      departure_err = _useState34[0],
      setDeparture_err = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState36 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState35, 2),
      arrival_err = _useState36[0],
      setArrival_err = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState38 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState37, 2),
      adults_err = _useState38[0],
      setAdults_err = _useState38[1];

  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState40 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState39, 2),
      child_err = _useState40[0],
      setChild_err = _useState40[1];

  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState42 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState41, 2),
      departureDate_err = _useState42[0],
      setDeparturedate_err = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState44 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState43, 2),
      returnDate_err = _useState44[0],
      setReturndate_err = _useState44[1];

  var showAnother = function showAnother(e) {
    setShowAnn(true);
  };

  var handleRadio = function handleRadio(e) {
    console.log(e.target.value);
    setSearchtype(e.target.value);
  }; // const handlemulti = (date) => {
  // 	setRound(false);
  // 	setOneway(false);
  // 	setMulti(true);
  // 	setSearchtype(3);
  // }


  var handleendChange = function handleendChange(date) {
    setReturndate(date);
  };

  var handlestartChange = function handlestartChange(date) {
    setDeparturedate(date);
    setReturndate(date);
  };

  var changedirectFlight = function changedirectFlight(e) {
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
  };

  var flightDetails = function flightDetails(e) {
    e.preventDefault();

    if (adultCount < 1 || adultCount == null) {
      setAdults_err(!adults_err);
    }

    if (childCount < 0 || childCount == null) {
      setChild_err(!child_err);
    }

    if (departureLocationCode == "") {
      setDeparture_err(!departure_err);
    }

    if (arrivalLocationCode == "") {
      setArrival_err(!arrival_err);
    }

    console.log("Departure date: ", dateformat__WEBPACK_IMPORTED_MODULE_12___default()(departureDate, "dd-mm-yyyy"));
    console.log("Return date: ", dateformat__WEBPACK_IMPORTED_MODULE_12___default()(returnDate, "dd-mm-yyyy"));
    console.log("Adult count: ", adultCount);
    console.log("child count", childCount);
    console.log("Location1: ", departureLocationCode);
    console.log("Location2: ", arrivalLocationCode);
    console.log("prefered class: ", preferedFlightClass);
    console.log("direct flight", isDirectFlight);
    console.log("search type: ", searchType);
    console.log("Location name1: ", departureLocationName);
    console.log("Location name2: ", arrivalLocationName);

    if (departureLocationCode != "" && arrivalLocationCode != "" && adultCount != null && childCount != null) {
      setFetchLoading(true);
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
        pathname: '/ticketBooking',
        query: {
          "adultCount": adultCount,
          "childCount": childCount,
          "infantCount": "0",
          "isDirectFlight": isDirectFlight,
          "isPlusOrMinus3Days": "false",
          "searchType": searchType,
          "preferedFlightClass": preferedFlightClass,
          "departureLocationCode": departureLocationCode,
          "departureDate": dateformat__WEBPACK_IMPORTED_MODULE_12___default()(departureDate, "dd-mm-yyyy"),
          "arrivalLocationCode": arrivalLocationCode,
          "returnDate": searchType == 2 ? dateformat__WEBPACK_IMPORTED_MODULE_12___default()(returnDate, "dd-mm-yyyy") : null,
          "departureTime": "Any",
          "returnTime": searchType == 2 ? "Any" : "0",
          "PageIndex": "1",
          "PageSize": "50",
          "departureLocationName": departureLocationName,
          "arrivalLocationName": arrivalLocationName
        }
      });
    }
  };

  var onChangeLocation = function onChangeLocation(id, suggestion) {
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
  }; //   Dropdown


  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
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
  }; // end dropdown 


  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
    className: "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Discover"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
    className: "title_flight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "flight_img",
    src: "static/images/airplane-flight.svg",
    width: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), " Flights"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "flight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Check, {
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
      lineNumber: 340
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Check, {
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
      lineNumber: 341
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    hidden: !round,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 9,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 6,
    className: "less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, "From"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyAutosuggest, {
    id: "countries1",
    onChange: onChangeLocation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }), departure_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, "Departure Location required") : null)), ['checkbox'].map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      key: "inline-".concat(type),
      className: "checkbox-custom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Check, {
      name: "add_near_airport",
      inline: true,
      label: "Add Nearby Airports",
      type: type,
      id: "inline-".concat(type, "-1"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 6,
    className: "less-padleft less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "To"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyAutosuggest, {
    id: "countries2",
    onChange: onChangeLocation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }), arrival_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Arrival Location required") : null)), ['checkbox'].map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      key: "inline-".concat(type),
      className: "checkbox-custom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Check, {
      name: "add_near_airport",
      inline: true,
      label: "Add Nearby Airports",
      type: type,
      id: "inline-".concat(type, "-1"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 6,
    md: 6,
    className: "less-padleft less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "Departure"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "departureDate",
    className: "form-control",
    showMonthDropdown: true,
    showYearDropdown: true,
    dateFormat: "dd/MM/yyyy",
    selected: departureDate,
    minDate: moment__WEBPACK_IMPORTED_MODULE_13___default()().toDate(),
    onChange: handlestartChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }), departureDate_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, "Departure date is required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 6,
    className: "less-padleft less-padright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "Return"), searchType == 2 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 411
    },
    __self: this
  }), returnDate_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "Return date is required") : null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "date-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "(One way)"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 3,
    sm: 4,
    className: "less-padleft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, "Cabin Class & Travellers"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    ref: node,
    className: "traveldet-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    onClick: handlepopup,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "popup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, adultCount, " Adult, ", preferedclassname(preferedFlightClass))), popup && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "traveldet-popdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 12,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    className: "label-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, "Cabin class"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "",
    style: {
      "float": 'right',
      color: '#17d8cf',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setPopup(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "fa fa-times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    as: "select",
    name: "oneway_preferedFlightClass",
    onChange: changeClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, "Any"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, "Business"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "Economy"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, "First Class"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "PremiumOrEconomy"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, "PremiumAndEconomy"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    className: "label-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, "Adults"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
      lineNumber: 463
    },
    __self: this
  }), adults_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg red-err",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, "Put value between 1-9") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "agelimit-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, "16+ years"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    className: "label-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }, "Children"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
      lineNumber: 477
    },
    __self: this
  }), child_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg red-err",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, "Put value between 0-9") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 6,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "agelimit-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, "0-15 years"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "age-instr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, "Your age at time of travel must be valid for the age category booked. Airlines have restrictions on under 18s travelling alone.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }), "Age limits and policies fo r travelling with children may vary so please check with the airline before booking."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 12,
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "label-skyblue",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setPopup(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }, "Done"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    lg: 12,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "checkbox-custom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "mb-3 right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Check, {
    name: "isDirectFlight",
    inline: true,
    label: "Direct Flight Only",
    type: "checkbox",
    id: "inline-check-1",
    defaultChecked: isDirectFlight,
    defaultValue: isDirectFlight,
    onClick: changedirectFlight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "form-control search-btnmargin",
    variant: "danger",
    onClick: flightDetails,
    disabled: fetchLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, fetchLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "fa fa-refresh fa-spin",
    style: {
      marginRight: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }), fetchLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "Please wait!"), !fetchLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, "SEARCH FLIGHTS")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    hidden: !multi,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, "From"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, departure_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, "Departure Location required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, "To"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, arrival_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, "Arrival Location required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, "Depature"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "fa fa-calendar",
    src: "static/images/calendar.svg",
    width: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "departureDate",
    className: "form-control",
    showMonthDropdown: true,
    showYearDropdown: true,
    dateFormat: "dd/MM/yyyy",
    selected: departureDate,
    onChange: handlestartChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }), departureDate_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, "Departure date is required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, "From"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }, departure_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }, "Departure Location required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }, "To"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }, arrival_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Arrival Location required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, "Depature"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "fa fa-calendar",
    src: "static/images/calendar.svg",
    width: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "departureDate",
    className: "form-control",
    showMonthDropdown: true,
    showYearDropdown: true,
    dateFormat: "dd/MM/yyyy",
    selected: departureDate,
    onChange: handlestartChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }), departureDate_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, "Departure date is required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    hidden: !showAnn,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    style: {
      padding: '0 15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }, "From"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: this
  }, departure_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: this
  }, "Departure Location required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, "To"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744
    },
    __self: this
  }, arrival_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772
    },
    __self: this
  }, "Arrival Location required") : null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }, "Depature"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "fa fa-calendar",
    src: "static/images/calendar.svg",
    width: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "departureDate",
    className: "form-control",
    showMonthDropdown: true,
    showYearDropdown: true,
    dateFormat: "dd/MM/yyyy",
    selected: departureDate,
    onChange: handlestartChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: this
  }), departureDate_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789
    },
    __self: this
  }, "Departure date is required") : null))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 4,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "form-control",
    variant: "danger",
    onClick: showAnother,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: this
  }, "ADD ANOTHER FLIGHT")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 8,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 3,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: this
  }, "Cabin Class"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "select_box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    as: "select",
    name: "preferedFlightClass",
    onChange: changeClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "0",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806
    },
    __self: this
  }, "Select"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }, "Any"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: this
  }, "Business"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809
    },
    __self: this
  }, "Economy"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }, "First Class"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, "PremiumOrEconomy"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
    value: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: this
  }, "PremiumAndEconomy"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 9,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821
    },
    __self: this
  }, "Adults (16+)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "number",
    ref: adultCountref,
    name: "adultCount",
    min: "1",
    max: "9",
    step: "1",
    defaultValue: adultCount,
    className: "form-control",
    onChange: adultChanged,
    readOnly: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }), adults_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825
    },
    __self: this
  }, "Adults counting atleast have 1") : null)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "exampleForm.ControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
    },
    __self: this
  }, "Children"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "number",
    ref: childCountref,
    name: "childCount",
    min: "0",
    max: "9",
    step: "1",
    defaultValue: childCount,
    className: "form-control",
    onChange: childChanged,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835
    },
    __self: this
  }), child_err ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "err-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836
    },
    __self: this
  }, "Invalid counting") : null)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
    href: "/ticketBooking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "form-control",
    variant: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, "SEARCH FLIGHTS")))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
    className: "nextBG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 1,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 10,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xl: 3,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 6,
    className: "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "img_round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: this
  }, "01"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "static/images/image02.jpg",
    width: "100%",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867
    },
    __self: this
  }, "BEST PRICE GUARANTEE"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: this
  }, "\" Offical ticket agent. No refund, ticket renewed. \"")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xl: 3,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 6,
    className: "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871
    },
    __self: this
  }, "02"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "img_round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "static/images/image01.jpg",
    width: "100%",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875
    },
    __self: this
  }, "PLEASE FLIGHT TICKET"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876
    },
    __self: this
  }, "\" Convenient payment and very safe, intelligent booking system. \" ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xl: 3,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 6,
    className: "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "img_round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880
    },
    __self: this
  }, "03"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "static/images/image03.jpg",
    width: "100%",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883
    },
    __self: this
  }, "CUSTOMER CARE 24/7"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884
    },
    __self: this
  }, "\" Cheap Domestic Flights, International Cheap Flights. \"")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xl: 3,
    lg: 6,
    md: 6,
    sm: 6,
    xs: 6,
    className: "service",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "img_round",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888
    },
    __self: this
  }, "04"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "static/images/image04.jpg",
    width: "100%",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891
    },
    __self: this
  }, "THOUGHTFUL SERVICE"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892
    },
    __self: this
  }, "\" Support Free Support Related Information. \"")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 1,
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7adc4a3680c6ea26e250.hot-update.js.map