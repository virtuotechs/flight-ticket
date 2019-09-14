import React, { useState,useEffect } from 'react';
import Layout from '../components/layout';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import sortJsonArray from 'sort-json-array';
import ReactTooltip from 'react-tooltip';
import dateFormat from 'dateformat';
import getSymbolFromCurrency from 'currency-symbol-map'
import datetimeDifference from "datetime-difference";
import 'isomorphic-fetch';
import {getFlights} from '../api';
import Router from 'next/router';
import moment from 'moment';

//Auto complete imports
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

// Auto complete
const languages = require('../data/countries.json');
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
    if(value.length <= 3)
	{
		const regex = new RegExp('^' + escapedValue, 'i');
		return languages.filter(language => regex.test(language.PlaceId));
	}
	else
	{
		const regex = new RegExp('^' + escapedValue, 'i');
		return languages.filter(language => regex.test(language.CityName));
	}
  }

  function getSuggestionValue(suggestion) {
    return `${suggestion.CityName} - ${suggestion.PlaceName} (${suggestion.PlaceId})`;
  }
  
  function renderSuggestion(suggestion, { query }) {
	const suggestionText = `${suggestion.CityName} - ${suggestion.PlaceName} (${suggestion.PlaceId})`;
	const suggestionCountry = `${suggestion.CountryId}`;
	const matches = AutosuggestHighlightMatch(suggestionText,query);
	const parts = AutosuggestHighlightParse(suggestionText, matches);
	return (
		<span className={'suggestion-content ' + suggestion.twitter}>
		  <span className="autocomplete-name">
		  <img className='fa fa-fighter-jet autocomplete-flight-img' alt="Flight" src='static/images/flight.png' width='25px'></img>
			{
			  parts.map((part, index) => {
				const className = part.highlight ? 'highlight' : null;
	
				return (
				  <span className={className} key={index}>{part.text}</span>
				);
			  })
			}
			<br/><small className="country-name">{suggestionCountry}</small>
		  </span>
		</span>
	  );
  }
  
  class MyAutosuggest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.value,
        suggestions: []
      };    
    }
  
    onChange = (_, { newValue }) => {
      const { id, onChange } = this.props;
      this.setState({
        value: newValue
      });
      
      onChange(id, newValue);
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { id, placeholder } = this.props;
	  const { value, suggestions } = this.state || this.props;
      const inputProps = {
        placeholder,
        value,
        onChange: this.onChange
      };
      
      return (		
        <Autosuggest
          id={id}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} 
        /> 
      );
    }
  }

const TicketBooking = (flights) => {

            const changeMonthDate = (dt) => {
                var date1 = dt.split('-')
                var newDate = date1[1] + '-' + date1[0] + '-' + date1[2];
                var date = new Date(newDate);
                return (date);
            }

            // State initialisation
            const [requestData,setRequestData] = useState(flights.request);
            const [jsondata,setJsondata] = useState(flights.flights.data.recommendation);     
            const [flightData,setFlightData] = useState(flights.flights.data.recommendation);  
            const [searchType,setSearchType] = useState(requestData.searchType); 
            const [departureDate,setDepartureDate] =useState(changeMonthDate(requestData.segments[0].departureDate));
            const [returnDate,setReturnDate] = requestData.searchType == 2 || searchType == 2 ? useState(changeMonthDate(requestData.segments[0].returnDate)) : useState(null);
            const [departureLocationCode,setDeparturelocationcode] = useState(requestData.segments[0].departureLocationCode);
	        const [arrivalLocationCode,setArrivallocationcode] = useState(requestData.segments[0].arrivalLocationCode);
            const [departureLocationName,setDepartureLocationName] = useState(requestData.departureLocationName);
            const [arrivalLocationName,setArrivalLocationName] = useState(requestData.arrivalLocationName)
            const [sortToggler,setSortToggler]=useState(false);
            const [filterToggler,setFilterToggler]=useState(false);
            const [sortOption,setSortOption]=useState('Best');  
            const [fetchLoading,setFetchLoading] = useState(false);
            const [localLoading,setLocalLoading] = useState(false);

            var check_nonstop = jsondata!= undefined ? jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '0').length : 0;
            const [nonstop,setnonstop] = check_nonstop>0 ? useState(true) : useState(false);
            var check_onestop = jsondata!= undefined ? jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '1').length : 0;
            const [onestop,setonestop] = check_onestop>0 ? useState(true) : useState(false);
            var check_twostop = jsondata!= undefined ? jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '2').length: 0;
            const [twostop,settwostop] = check_twostop>0 ? useState(true) : useState(false);
            var check_departure1 = jsondata!= undefined ? jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200).length: 0;
            const [departure1,setdeparture1] = check_departure1>0 ? useState(true) : useState(false);
            var check_departure2 = jsondata!= undefined ? jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 1800).length : 0;
            const [departure2,setdeparture2] = check_departure2>0 ? useState(true) : useState(false);
            var check_departure3 = jsondata!= undefined ? jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800).length : 0;
            const [departure3,setdeparture3] = check_departure3>0 ? useState(true) : useState(false);            
            var check_return1 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200).length) : null):0;
            const [return1,setreturn1] = check_return1>0 ? useState(true) : useState(false);
            var check_return2 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 1800).length) : null) : 0;
            const [return2,setreturn2] = check_return2>0 ? useState(true) : useState(false);
            var check_return3 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800).length) : null ) : 0;
            const [return3,setreturn3] = check_return3>0 ? useState(true) : useState(false);
            
            const [flightId,setFlightId] = useState('');
            const [airlineName,setAirlineName] = useState('');
            const [airlinesCheck,setAirlinesCheck] = useState(true);

            console.log(jsondata);

            const handleChange = (date) => {
                setDepartureDate(date);
                setReturnDate(date);
            }
            
            const handleChange1 = (date) => {
                setReturnDate(date);
            }

            const changePlace = () => {
                setDepartureLocationName(arrivalLocationName);
                setArrivalLocationName(departureLocationName);
            }
            const TimeSplit = (time) => {
                time = time.replace(/(..?)/g, '$1:').slice(0, -1)
                return (time);
            }

            const handlesortToggler = () => {
                setSortToggler(true);
                setFilterToggler(false);
            }

            const handleFilterToggler = () => {
                setFilterToggler(true);
                setSortToggler(false);
            }

            const handleScrollToElement = (event) => {        
                $(window).scroll(function () {
                    var sticky = $('.filtering-row.row'),
                        scroll = $(window).scrollTop();

                    if (scroll >= 400) sticky.addClass('fixed');
                    else sticky.removeClass('fixed');
                });
            }

            const StopName = (stop) => {
                if(stop == 0)
                {
                    return "Non-stop";
                }
                else if(stop == 1)  
                {
                    return "1 stop";
                }
                else if(stop == 2)
                {
                    return "2 stops";
                }
            }
            const StopClassName = (stop) => {
                if(stop == 1)  
                {
                    return "onestop";
                }
                else if(stop == 2)
                {
                    return "twostop";
                }
            }
            const CalculateDuration = (duration) => {
                duration = TimeSplit(duration);
                var duration1 = duration.split(":");
                var duration_str = duration1[0]+"h "+duration1[1]+"m";
                return duration_str;
            }

            const ViaCityName = (cityname) => {
                cityname = cityname.split("(");
                return cityname[0];
            }
        const fastestDuration = () =>
        {
            var fastest_duration = Math.min.apply(Math,flightData.map(function (o) { return o.flightLeg[0].flightDetails.totalFlyingHours; }))
            fastest_duration = fastest_duration.toString();
            if(fastest_duration.length <=3)
            {
                fastest_duration = "0"+fastest_duration;
            }
            return CalculateDuration(fastest_duration);
        }
        const fastestPrice = () =>
        {
            var fastest_duration = Math.min.apply(Math,flightData.map(function (o) { return o.flightLeg[0].flightDetails.totalFlyingHours; })) 
            var fastest_price =  flightData.filter(function(price) { return price.flightLeg[0].flightDetails.totalFlyingHours == fastest_duration});
            fastest_price = fastest_price[0].totalFare;
            return fastest_price;
        }
        const cheapestDuration = () =>
        {
            var cheapest_price = Math.min.apply(Math,flightData.map(function (o) { return o.totalFare;}))
            var cheapest_duration =  flightData.filter(function(price) { return price.totalFare == cheapest_price});
            cheapest_duration = cheapest_duration[0].flightLeg[0].flightDetails.totalFlyingHours;
            return CalculateDuration(cheapest_duration);
        }
        const cheapestPrice = () =>
        {
            var cheapest_price = Math.min.apply(Math,flightData.map(function (o) { return o.totalFare;}))
            return cheapest_price;
        }
        const bestDuration = () =>
        {
        var best_price = flightData.sort(function(obj1, obj2) {
            return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
        });
        return CalculateDuration(best_price[0].flightLeg[0].flightDetails.totalFlyingHours);
        }
        const bestPrice = () =>
        {
        var best_price = flightData.sort(function(obj1, obj2) {
            return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
        });
        return best_price[0].totalFare;
        }
        useEffect(() => {
                window.addEventListener('scroll', handleScrollToElement);
            });
        const uniqueAirlines = () => {
            const categories = flightData!= undefined ? [...new Set(flightData.map(newdata => newdata.marketingAirlineNames))] : null;
            return categories;
        }
        const showFlightDetails = (id) =>
        {
            setFlightId(id);
            setFetchLoading(true);
            Router.push({
				pathname: '/ticketdetails',
				query: {
                    "id":id,
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
					"returnDate": requestData.searchType == 2 ? requestData.segments[0].returnDate: null,
					"departureTime": requestData.segments[0].departureTime,
					"returnTime": requestData.searchType == 2 ? requestData.segments[0].returnTime : 0,
					"PageIndex": "1",
					"PageSize": "50",
					"departureLocationName": requestData.departureLocationName,
					"arrivalLocationName": requestData.arrivalLocationName
					}
				}) 	
        }
        // const GetSortOrder = (prop) => {  
        //     return function(a, b) {  
        //         var aVal = a[prop], bVal = b[prop]
        //         console.log(aVal," --- ",bVal);
        //         if (aVal > bVal) {  
        //             return 1;  
        //         } else if (aVal < bVal) {  
        //             return -1;  
        //         }  
        //         return 0;  
        //     }  
        // }  

        const handleSortOptions = (e) => {
            setSortOption(e.target.value);
            if(e.target.value == "Best")
            {   
                setLocalLoading(true);
                setTimeout(() => {
                    const new_array = [...jsondata].sort(function(obj1, obj2) {
                         return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
                     });
                    setJsondata(new_array);
                    setLocalLoading(false);
                },1000);
            }
            else if(e.target.value == "Cheapest First")
            {
                setLocalLoading(true);
                setTimeout(() => {
                        const new_array = [...jsondata].sort(function (obj1, obj2) {
                         return obj1.totalFare - obj2.totalFare;
                         });
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
            }
            else if(e.target.value == "Fastest First")
            {
                setLocalLoading(true);
                setTimeout(() => {
                    const new_array = [...jsondata].sort(function (obj1, obj2) {
                    return obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
                    });
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
            }
            else if(e.target.value == "Outbound: Departure Time")
            {
                setLocalLoading(true);
                setTimeout(() => {
                    const new_array = [...jsondata].sort(function (obj1, obj2) {
                    return obj1.flightLeg[0].flightDetails.departureTime - obj2.flightLeg[0].flightDetails.departureTime;
                });
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
            }
            else if(e.target.value == "Airline")
            {
                setLocalLoading(true);
                setTimeout(() => {
                const new_array = sortJsonArray([...jsondata], "marketingAirlineNames", "asc");
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
            }
            else if(e.target.value == "Stops")
            {
                setLocalLoading(true);
                setTimeout(() => {
                    const new_array = [...jsondata].sort(function (obj1, obj2) {
                    return obj1.flightLeg[0].flightDetails.stopOvers - obj2.flightLeg[0].flightDetails.stopOvers;
                });
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
            }
        }
            const handleSortBest = () => {
                setSortOption("Best");
                setLocalLoading(true);
                setTimeout(() => {
                    const new_array = [...jsondata].sort(function(obj1, obj2) {
                         return obj1.totalFare - obj2.totalFare && obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
                     });
                    setJsondata(new_array);
                    setLocalLoading(false);
                },1000);
            }
            const handleSortCheapest = () => {
                setSortOption("Cheapest First");
                setLocalLoading(true);
                setTimeout(() => {
                        const new_array = [...jsondata].sort(function (obj1, obj2) {
                         return obj1.totalFare - obj2.totalFare;
                         });
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
            }
            const handleSortFastest = () => {
                setSortOption("Fastest First");
                setLocalLoading(true);
                setTimeout(() => {
                    const new_array = [...jsondata].sort(function (obj1, obj2) {
                    return obj1.flightLeg[0].flightDetails.totalFlyingHours - obj2.flightLeg[0].flightDetails.totalFlyingHours;
                    });
                setJsondata(new_array);
                setLocalLoading(false);
                },1000);
               
            }
            const filtercname = (text) => {
                var filter_text = text.trim();
                filter_text = filter_text.split("-");
                return filter_text[0];
            }
            const preferedclassname = (classname) => {
                if(classname == "1")
                {
                    return "Any";
                }
                else if(classname == "2")
                {
                    return "Business";
                }
                else if(classname == "3")
                {
                    return "Economy";
                }
                else if(classname == "4")
                {
                    return "First Class";
                }
                else if(classname == "5")
                {
                    return "PremiumOrEconomy";
                }
                else if(classname == "6")
                {
                    return "PremiumAndEconomy";
                }
            }
            const changeSearchType = (e) => {
                setSearchType(e.target.value);
                setReturnDate(departureDate);
                console.log(searchType);
            }
            async function filterAirline(airname){
                console.log(airname);
                setAirlineName(airname);
                setAirlinesCheck(!airlinesCheck);
                if(airlineName=='')
                {
                    setLocalLoading(true);
                    var response = await getFlights(requestData);
                    var airways_flights = await response;
                    setLocalLoading(false);
                    airways_flights = airways_flights.data.recommendation.filter(item => item.marketingAirlineNames != airname)
                    setJsondata(airways_flights);
                }
                else
                {
                    setLocalLoading(true);
                    var response = await getFlights(requestData);
                    var airways_flights = await response;
                    setLocalLoading(false);
                    setJsondata(airways_flights.data.recommendation);
                }
            }
            async function filternonstop() {
                setLocalLoading(true);
                setnonstop(!nonstop);
                if(nonstop)
                {
                    var response = await getFlights(requestData);
                    var nonstop_flights = await response;
                    setLocalLoading(false);
                    nonstop_flights = nonstop_flights.data.recommendation.filter(item => item.flightLeg[0].flightDetails.stopOvers != '0' )
                    setJsondata(nonstop_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var nonstop_flights = await response;
                    setLocalLoading(false);
                    setJsondata(nonstop_flights.data.recommendation);
                }
            }

            async function filteronestop(){
                setLocalLoading(true);
                setonestop(!onestop);
                if(onestop)
                {
                    var response = await getFlights(requestData);
                    var onestop_flights = await response;
                    setLocalLoading(false);
                    onestop_flights = onestop_flights.data.recommendation.filter(item => item.flightLeg[0].flightDetails.stopOvers != '1' )
                    setJsondata(onestop_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var onestop_flights = await response;
                    setLocalLoading(false);
                    setJsondata(onestop_flights.data.recommendation);
                }
            }
            async function filtertwostop(){
                setLocalLoading(true);
                settwostop(!twostop);
                if(twostop)
                {
                    var response = await getFlights(requestData);
                    var twostop_flights = await response;
                    setLocalLoading(false);
                    twostop_flights = twostop_flights.data.recommendation.filter(item => item.flightLeg[0].flightDetails.stopOvers != '2' )                
                    setJsondata(twostop_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var twostop_flights = await response;
                    setLocalLoading(false);
                    setJsondata(twostop_flights.data.recommendation);
                }
            }
            async function filterdeparture1(){
                setLocalLoading(true);
                setdeparture1(!departure1);
                if(departure1)
                {
                    var response = await getFlights(requestData);
                    var departure1_flights = await response;
                    setLocalLoading(false);
                    departure1_flights = departure1_flights.data.recommendation.filter(item => !(parseInt(item.flightLeg[0].flightDetails.departureTime) >= 600 && parseInt(item.flightLeg[0].flightDetails.departureTime) <= 1200));
                    setJsondata(departure1_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var departure1_flights = await response;
                    setLocalLoading(false);
                    setJsondata(departure1_flights.data.recommendation);
                }
            }
            async function filterdeparture2(){
                setLocalLoading(true);
                setdeparture2(!departure2);
                if(departure2)
                {
                    var response = await getFlights(requestData);
                    var departure2_flights = await response;
                    setLocalLoading(false);
                    departure2_flights = departure2_flights.data.recommendation.filter(item => !(parseInt(item.flightLeg[0].flightDetails.departureTime) >= 1800));
                    setJsondata(departure2_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var departure2_flights = await response;
                    setLocalLoading(false);
                    setJsondata(departure2_flights.data.recommendation);
                }
            }
            async function filterdeparture3(){
                setLocalLoading(true);
                setdeparture3(!departure3);
                if(departure3)
                {
                    var response = await getFlights(requestData);
                    var departure3_flights = await response;
                    setLocalLoading(false);
                    departure3_flights = departure3_flights.data.recommendation.filter(item => !(parseInt(item.flightLeg[0].flightDetails.departureTime) >= 1200 && parseInt(item.flightLeg[0].flightDetails.departureTime) <= 1800));
                    setJsondata(departure3_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var departure3_flights = await response;
                    setLocalLoading(false);
                    setJsondata(departure3_flights.data.recommendation);
                }
            }
            async function filterreturn1(){
                setLocalLoading(true);
                setreturn1(!return1);
                if(return1)
                {
                    var response = await getFlights(requestData);
                    var return1_flights = await response;
                    setLocalLoading(false);
                    return1_flights = return1_flights.data.recommendation.filter(item => !(parseInt(item.flightLeg[1].flightDetails.departureTime) >= 600 && parseInt(item.flightLeg[1].flightDetails.departureTime) <= 1200));
                    setJsondata(return1_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var return1_flights = await response;
                    setLocalLoading(false);
                    setJsondata(return1_flights.data.recommendation);
                }
            }
            async function filterreturn2(){
                setLocalLoading(true);
                setreturn2(!return2);
                if(return2)
                {
                    var response = await getFlights(requestData);
                    var return2_flights = await response;
                    setLocalLoading(false);
                    return2_flights = return2_flights.data.recommendation.filter(item => !(parseInt(item.flightLeg[1].flightDetails.departureTime) >= 1800));
                    setJsondata(return2_flights);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var return2_flights = await response;
                    setLocalLoading(false);
                    setJsondata(return2_flights.data.recommendation);
                }
            }
            async function filterreturn3(){
                setLocalLoading(true);
                setreturn3(!return3);
                if(return3)
                {
                    var response = await getFlights(requestData);
                    var return3_flights = await response;
                    setLocalLoading(false);
                    return3_flights = return3_flights.data.recommendation.filter(item => !(parseInt(item.flightLeg[1].flightDetails.departureTime) >= 1200 && parseInt(item.flightLeg[1].flightDetails.departureTime) <= 1800));
                    setJsondata(return3_flights.data.recommendation);
                }
                else
                {
                    var response = await getFlights(requestData);
                    var return3_flights = await response;
                    setLocalLoading(false);
                    setJsondata(return3_flights);
                }
            }
            const onChangeHome = (id, suggestion,value) => {                
                if(id=="countries1")
                {		
                    var suggestion = suggestion.trim();
                    setDepartureLocationName(suggestion);
                    var length = suggestion.length;
                    var exact_match = suggestion.substring(length - 4, length-1);
                    exact_match = exact_match.trim();
                    setDeparturelocationcode(exact_match);
                }
                else if(id=="countries2")
                {
                    var suggestion = suggestion.trim();
                    setArrivalLocationName(suggestion);
                    var length = suggestion.length;
                    var exact_match = suggestion.substring(length - 4, length-1);
                    exact_match = exact_match.trim();
                    setArrivallocationcode(exact_match);
                }
            } 
            async function localSearch() {
                setFetchLoading(true);
                setLocalLoading(true);
                const request = {
                    "adultCount": requestData.adultCount,
                    "childCount": requestData.childCount,
                    "infantCount": requestData.infantCount,
                    "isDirectFlight": requestData.isDirectFlight,
                    "isPlusOrMinus3Days": requestData.isPlusOrMinus3Days,
                    "searchType": searchType,
                    "preferedFlightClass": requestData.preferedFlightClass,
                        "segments": [
                        {   
                            "departureLocationCode": departureLocationCode,
                            "departureDate": dateFormat(departureDate, "dd-mm-yyyy"),
                            "arrivalLocationCode": arrivalLocationCode,
                            "returnDate": requestData.searchType == 2 ? dateFormat(returnDate, "dd-mm-yyyy") : null,
                            "departureTime": requestData.segments[0].departureTime,
                            "returnTime": requestData.searchType == 2 ? requestData.segments[0].returnTime : null
                        }
                    ],
                    "paging": {
                        "PageIndex": requestData.paging.PageIndex,
                        "PageSize": requestData.paging.PageSize
                    }};
                    const localreq = {
                        "adultCount": requestData.adultCount,
                        "childCount": requestData.childCount,
                        "infantCount": requestData.infantCount,
                        "isDirectFlight": requestData.isDirectFlight,
                        "isPlusOrMinus3Days": requestData.isPlusOrMinus3Days,
                        "searchType": searchType,
                        "preferedFlightClass": requestData.preferedFlightClass,
                        "departureLocationName":requestData.departureLocationName,
                        "arrivalLocationName":requestData.arrivalLocationName,
                            "segments": [
                            {   
                                "departureLocationCode": departureLocationCode,
                                "departureDate": dateFormat(departureDate, "dd-mm-yyyy"),
                                "arrivalLocationCode": arrivalLocationCode,
                                "returnDate": requestData.searchType == 2 ? dateFormat(returnDate, "dd-mm-yyyy") : null,
                                "departureTime": requestData.segments[0].departureTime,
                                "returnTime": requestData.searchType == 2 ? requestData.segments[0].returnTime : null
                            }
                        ],
                        "paging": {
                            "PageIndex": requestData.paging.PageIndex,
                            "PageSize": requestData.paging.PageSize
                        }};
                        setRequestData(localreq);
                        var response = await getFlights(request);
                        var json = await response;
                        setLocalLoading(false);
                        setFetchLoading(false);
                        setJsondata(json.data.recommendation);   
                        setFlightData(json.data.recommendation);
                        var check_nonstop = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '0').length) : 0;
                       setnonstop(check_nonstop>0 ? true : false);
                        var check_onestop = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '1').length) : 0;
                        setonestop(check_onestop>0 ? true : false);
                        var check_twostop = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.stopOvers == '2').length) : 0;
                        settwostop(check_twostop>0 ? true : false);
                        var check_departure1 = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200).length) : 0;
                        setdeparture1(check_departure1>0 ? true: false);
                        var check_departure2 = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 1800).length) : 0;
                        setdeparture2(check_departure2>0 ? true : false);
                        var check_departure3 = jsondata!= undefined ? (jsondata.filter(x => x.flightLeg[0].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800).length) : 0;
                        setdeparture3(check_departure3>0 ? true : false);
                        var check_return1 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 600 && x.flightLeg[0].flightDetails.departureTime <= 1200).length) : null) : 0;
                        setreturn1(check_return1>0 ? true : false);
                        var check_return2 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 1800).length) : null):0;
                        setreturn2(check_return2>0 ? true : false);
                        var check_return3 = jsondata!= undefined ? (requestData.searchType == 2 ? (jsondata.filter(x => x.flightLeg[1].flightDetails.departureTime >= 1200 && x.flightLeg[0].flightDetails.departureTime <= 1800).length) : null) : 0;
                        setreturn3(check_return3>0 ? true : false);                   
                    }
                if(jsondata !== undefined)
                {
                    var currencyCode = flights.flights.data.currencyCode;
                    var total_response = jsondata.length;
                }
            return (
            <Layout>
                <div className="container-fluid">
                    <div className="bg-img">
                        <Row className="margin-0">
                            <Col sm={12} style={{ padding: '0' }}>
                                <div className="passanger-details">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} sm={8} xs={9} className='pad-6'>
                                            <Row>
                                                <Col sm={5} xs={5}>
                                                    <div className='passanger-class'>
                                                        <small className="pink-text absl-text">TRIP TYPE</small>
                                                        <Form.Control className='trip_select' as="select" defaultValue={searchType} onChange={changeSearchType}>
                                                            <option value="1">One Way</option>
                                                            <option value="2">Round Trip</option>
                                                            <option value="3">Multi-city</option>
                                                        </Form.Control>
                                                        <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                                    </div>
                                                </Col>
                                                <Col sm={7} xs={7}>
                                                    <div className="passanger-class">
                                                        <small className="pink-text absl-text">Passanger & Class</small>
                                                        <p>{requestData.adultCount} Adult, {preferedclassname(requestData.preferedFlightClass)}
                                                        {/* {this.props.userAgent} */}
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={9} lg={8} md={6} sm={4} xs={3} className='pad-6'>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} md={12} lg={6}>
                                            <Row>
                                                <Col md={6} sm={6} xs={12} className='pad-6'>
                                                    <Form.Group className='auto_countries'>
                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <InputGroup.Text id="inputGroupPrepend" className="bluebg-igroup"><i className="fa fa-map-marker" aria-hidden="true"></i></InputGroup.Text>
                                                            </InputGroup.Prepend>
                                                                <MyAutosuggest id="countries1" onChange={onChangeHome} value={departureLocationName}/>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <i className="fa fa-exchange" aria-hidden="true" onClick={changePlace} ></i>
                                                </Col>
                                                <Col md={6} sm={6} xs={12} className='pad-6'>
                                                <Form.Group className='auto_countries'>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend" className="bluebg-igroup"><i className="fa fa-map-marker" aria-hidden="true"></i></InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                            <MyAutosuggest id="countries2" onChange={onChangeHome} value={arrivalLocationName}/>
                                                    </InputGroup>
                                                </Form.Group>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm={12} md={12} lg={6} className="padding-col">
                                            <Row>
                                                <Col lg={8} md={8} sm={9} xs={12} className='pad-6'>
                                                    <div className='dis_flex'>
                                                        <div className="calendar">
                                                            <img className="img_calendar" src="static/images/calendar.svg" width='25'></img>
                                                            <DatePicker
                                                                name="departureDate"
                                                                className="form-control"
                                                                showMonthDropdown
                                                                showYearDropdown
                                                                dateFormat="eee, MMM d"
                                                                selected={departureDate}
                                                                minDate={moment().toDate()}
                                                                onChange={handleChange} />
                                                             {searchType == 2 ? <span className='separt'> | </span> : null }
                                                        </div>
                                                        {searchType == 2 ?
                                                        <div className='calendar'>
                                                        <img className="img_calendar" src="static/images/calendar.svg" width='25'></img>
                                                            <DatePicker
                                                                name="returnDate"
                                                                className="form-control"
                                                                showMonthDropdown
                                                                showYearDropdown
                                                                dateFormat="eee, MMM d"
                                                                selected={returnDate}
                                                                minDate={new Date(departureDate)}
                                                                onChange={handleChange1} />
                                                        </div> : null }
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4} sm={3} xs={12} className='pad-6'>
                                                    {/* <button className="btn-search" onClick={localSearch}>SEARCH</button> */}
                                                    <button className="btn-search" onClick={localSearch} disabled={fetchLoading}>
                                                    {fetchLoading && (
                                                        <i
                                                        className="fa fa-refresh fa-spin"
                                                        style={{ marginRight: "5px" }}
                                                        />
                                                    )}
                                                    {fetchLoading && <span>Please wait!</span>}
                                                    {!fetchLoading && <span>SEARCH</span>}
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Filtering component */}
                    { jsondata != undefined ?
                    <div className="mobile-filterscreen">
                        <div className="visible-xs filter-mobile">
                            <Row className="filtering-row">
                                {/* <Col sm={6} xs={6} lg={6} style={{ borderRight: '1px solid #FF4057' }}>
                                    <span onClick={handlesortToggler} className="mob-togglehead">Sort </span>
                                </Col> */}
                                <Col sm={12} xs={12} lg={12} className="text-center">
                                    <span onClick={handleFilterToggler} className="mob-togglehead">Filter </span>
                                </Col>
                            </Row>
                        </div> 

                        {filterToggler ?
                        <div className="datas"> 
                            <Row>
                                <Col xs={12}>
                                    <p>
                                        <span className="bold-text">Filter by:</span>
                                        <Button variant="outline-danger" style={{ float: 'right' }} onClick={() => { setSortToggler(false); setFilterToggler(false);setFilterToggler(false); }}>Done</Button>
                                    </p>
                                    <br/>
                                    <Row>
                                        <Col xs={12}>
                                            <p className='small_txt'>
                                                <b>Stops</b>
                                                {/* <small className="pink-text" style={{ float: 'right' }}>Reset</small> */}
                                            </p>
                                            <Row>
                                                <Col xs={12}>
                                                    <div className='checkbox-custom'>
                                                        <Form.Check type="checkbox" label="Non-stop" name="stop1" value={nonstop} onClick={filternonstop} defaultChecked={nonstop}/>
                                                        <Form.Check type="checkbox" label="1stop" name="stop2" value={onestop}  onClick={filteronestop} defaultChecked={onestop}/>
                                                        <Form.Check type="checkbox" label="2 Stops" name="stop3" value={twostop}  onClick={filtertwostop} defaultChecked={twostop} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={12}>
                                            <p className='small_txt'>
                                                <b>Departure from <span className="filter-cname">{filtercname(requestData.departureLocationName)}</span></b> 
                                                {/* <small className="pink-text" style={{ float: 'right' }}>Reset</small> */}
                                            </p> 
                                            <Row>
                                                <Col xs={12}>
                                                    <div className='checkbox-custom'>
                                                        <Form.Check type="checkbox" label="6AM - 12 Noon" value={departure1}  onClick={filterdeparture1} defaultChecked={departure1}/>
                                                        <Form.Check type="checkbox" label="After 6PM" value={departure2}  onClick={filterdeparture2} defaultChecked={departure2}/>
                                                        <Form.Check type="checkbox" label="12 Noon - 6PM" value={departure3}  onClick={filterdeparture3} defaultChecked={departure3}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        {requestData.searchType == 2 ? 
                                        <Col xs={12}>
                                            <p className='small_txt'>
                                                <b>Departure from <span className="filter-cname">{filtercname(requestData.arrivalLocationName)}</span></b>
                                                {/* <small className="pink-text" style={{ float: 'right' }}>Reset</small> */}
                                            </p>
                                            <Row>
                                                <Col xs={12}>
                                                    <div className='checkbox-custom'>
                                                        <Form.Check type="checkbox" label="6AM - 12 Noon" value={return1}  onClick={filterreturn1} defaultChecked={return1}/>
                                                        <Form.Check type="checkbox" label="After 6PM" value={return2}  onClick={filterreturn2} defaultChecked={return2}/>
                                                        <Form.Check type="checkbox" label="12 Noon - 6PM" value={return3}  onClick={filterreturn3} defaultChecked={return3}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col> : null }
                                    </Row>
                                </Col>
                                <Col xs={12}>
                                    <Row>
                                        <Col xs={12}>
                                            <p className='small_txt'>
                                                <b>Airlines</b>
                                            </p>
                                        </Col>
                                        <Col xs={12}>
                                            <Row>
                                                <Col xs={12}>
                                                   <div className='checkbox-custom'>
                                                       { total_response > 0 && jsondata != undefined ?
                                                        <div>{uniqueAirlines().map((airname,i=1) => <Form.Check type="checkbox" value={airname} label={airname} key={i} defaultChecked={airlineName != airname || airlinesCheck} onClick={() => filterAirline(airname)}/>)} </div> : null }
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div> : null}
                    </div>: null }
                    {/* ---------------- end for mobile ---------------- */}

                    {/* ----------- Desktop Filters, Datas and Ad.. -----------  */}
                    {/* ---------------- Desktop Filter Datas ---------------- */}
                    {localLoading ? <div className="text-center"><img src="static/images/loader1.gif" height="50" width="100"/><br/>Loading</div> : <div>
                    {jsondata!== undefined ?
                    <div className='filter-data'>
                        <div className = 'container-fluid'>
                            <Row>
                                <Col sm={12} md={12} lg={10} xl={10}>
                                    <Row>
                                        {/* Filter Datas */}
                                        <Col sm={12} md={3} className="hidden-xs">
                                            <div className='filter_Set'>
                                                <p className='small_txt'>
                                                    <b>Stops</b>
                                                    <small className="pink-text" style={{ float: 'right' }}>
                                                        {/* <i className="fa fa-angle-down" aria-hidden="true" ></i> */}

                                                    </small>
                                                </p>
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className='checkbox-custom'>
                                                            <Form.Check type="checkbox" label="Non-stop" name="stop1" value={nonstop}  onClick={filternonstop} defaultChecked={nonstop}/>
                                                            <Form.Check type="checkbox" label="1 Stop" name="stop2" value={onestop}  onClick={filteronestop} defaultChecked={onestop} />
                                                            <Form.Check type="checkbox" label="2 Stops" name="stop3" value={twostop}  onClick={filtertwostop} defaultChecked={twostop}  />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className='filter_Set'>
                                                <p className='small_txt'>
                                                    <b>Departure from <span className="filter-cname">{filtercname(departureLocationName)}</span></b> 
                                                    <small className="pink-text" style={{ float: 'right' }}>
                                                    {/* <i className="fa fa-angle-down" aria-hidden="true" ></i> */}
                                                    </small>
                                                </p>
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className='checkbox-custom'>
                                                            <Form.Check type="checkbox" label="6 AM - 12 Noon" value={departure1}  onClick={filterdeparture1} defaultChecked={departure1}/>
                                                            <Form.Check type="checkbox" label="After 6 PM" value={departure2}  onClick={filterdeparture2} defaultChecked={departure2}/>
                                                            <Form.Check type="checkbox" label="12 Noon - 6 PM" value={departure3}  onClick={filterdeparture3} defaultChecked={departure3}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            {requestData.searchType == 2 ?
                                            <div className='filter_Set'>
                                                <p className='small_txt'>
                                                    <b>Departure from <span className="filter-cname">{filtercname(arrivalLocationName)}</span></b>
                                                    <small className="pink-text" style={{ float: 'right' }}>
                                                    {/* <i className="fa fa-angle-down" aria-hidden="true" ></i> */}
                                                    </small>
                                                </p>
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className='checkbox-custom'>
                                                            <Form.Check type="checkbox" label="6 AM - 12 Noon" value={return1}  onClick={filterreturn1} defaultChecked={return1}/>
                                                            <Form.Check type="checkbox" label="After 6 PM" value={return2}  onClick={filterreturn2} defaultChecked={return2}/>
                                                            <Form.Check type="checkbox" label="12 Noon - 6 PM" value={return3}  onClick={filterreturn3} defaultChecked={return3}/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div> : null }
                                            <div className='filter_Set'>
                                                <p className='small_txt'>
                                                    <b>Airlines</b>
                                                    <small className="pink-text" style={{ float: 'right' }}>
                                                    {/* <i className="fa fa-angle-down" aria-hidden="true" ></i> */}
                                                    </small>
                                                </p>
                                                <Row>
                                                    <Col xs={12}>
                                                    <div className='checkbox-custom'>
                                                       { total_response > 0 ?
                                                        <div>{uniqueAirlines().map((airname,i=1) => <Form.Check type="checkbox" value={airname} label={airname} key={i} defaultChecked={airlineName != airname || airlinesCheck} onClick={() => filterAirline(airname)}/>)} </div> : null }
                                                    </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        {/* ------ Main Datas ------ */}
                                        {total_response > 0 ? 
                                        <Col sm={12} md={9}>
                                            
                                            {/* Sorting Title */}
                                            <Row>
                                                <Col lg={7} md={7} sm={5} xs={6}>
                                                    <p>{total_response} results sorted by <b>{sortOption}</b></p>
                                                </Col>
                                                <Col lg={5} md={5} sm={6} xs={6} className='text-right'>                                                    
                                                        <div className="select_box outline"  style={{ float: 'right' }}>
                                                            <Form.Control as="select" name="sortoptions" defaultValue={sortOption} onChange={handleSortOptions}>
                                                                <option value="0" hidden>Sort by</option>
                                                                <option value="Best">Best</option>
                                                                <option value="Cheapest First">Cheapest First</option>
                                                                <option value="Fastest First">Fastest First</option>
                                                                <option value="Outbound: Departure Time">Outbound: Departure Time</option>
                                                                <option value="Airline">Airline</option>
                                                                <option value="Stops">Stops</option>
                                                            </Form.Control>
                                                        </div>
                                                </Col>
                                            </Row>

                                            {/* Filter Sorting Best, Cheapest, Fastest */}
                                            <div className='filter_sort'>
                                                <Row>
                                                    <Col xs={4} sm={4} className={sortOption == "Best" ? 'filter_tab text-center active' : 'filter_tab text-center'} data-tip data-for='best'>
                                                        <p onClick={handleSortBest}>Best<br></br>
                                                        <b>{getSymbolFromCurrency(currencyCode)} {bestPrice()}</b>
                                                        <br></br>{bestDuration()}</p>
                                                    </Col>
                                                    <ReactTooltip id='best' place="top" type="light" effect="solid" aria-haspopup='true' role='example' className='tool'>
                                                        <p>We think these flights offer the best combination of <br></br><b>price</b> and <b>speed</b>. We may also consider factors like <br></br>number of stops and mount of hassle.</p>
                                                    </ReactTooltip>
                                                    <Col xs={4} sm={4} className={sortOption == "Cheapest First" ? 'filter_tab text-center active' : 'filter_tab text-center'} data-tip data-for='cheapest'>
                                                        <p onClick={handleSortCheapest}>Cheapest<br></br>
                                                        <b>{getSymbolFromCurrency(currencyCode)} {cheapestPrice()}</b>
                                                        <br></br>{cheapestDuration()}</p>
                                                    </Col>
                                                    <ReactTooltip id='cheapest' place="top" type="light" effect="solid" aria-haspopup='true' role='example' className='tool'>
                                                        <p>Sort by Cheatpest Price.</p>
                                                    </ReactTooltip>
                                                    <Col xs={4} sm={4} className={sortOption == "Fastest First" ? 'filter_tab text-center active' : 'filter_tab text-center'} data-tip data-for='fastest'>
                                                        <p onClick={handleSortFastest}>Fastest<br></br>
                                                        <b>{getSymbolFromCurrency(currencyCode)} {fastestPrice()} </b>
                                                        <br></br>{fastestDuration()}</p>
                                                    </Col>
                                                    <ReactTooltip id='fastest' place="top" type="light" effect="solid" aria-haspopup='true' role='example' className='tool'>
                                                        <p>Sort by Shortest Duration.</p>
                                                    </ReactTooltip>
                                                </Row>
                                            </div>

                                            {/* Common for sorting datas */}
                                            <div className='custom-container'>
                                                <div className='container' style={{padding: '0'}}>
                                                    <div className="sort-title d_flex">
                                                        <Row>
                                                            <Col xs={8} sm={8}>
                                                                <h3 className="bold-text">Smart value Flights</h3>
                                                                <p>Popularity based on customer preference, duration & price</p>
                                                            </Col>
                                                            <Col xs={4} sm={4} className="text-right" style={{borderLeft: '1px solid #d5cece'}}>
                                                                <div className="topright-price">
                                                                    <big><span className="pink-text">Chepeast Starting at</span></big>
                                                                    <br />
                                                                    <span className="top-currency">
                                                                        {getSymbolFromCurrency(currencyCode)}
                                                                         &nbsp;{cheapestPrice()}
                                                                    </span>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End common title */}
                                            {/* Start ------------------------------------------------------------ */}
                                            {/* Sorting Area */}
                                            {jsondata.map((resultData, i = 1) => (
                                                <Row className="sort-box" key={resultData.recommendationRefNo}>
                                                    <Col sm={9} style = {{ padding: '10px', borderRight: '1px dashed #03A9F4' }}>
                                                        {resultData.totalFare == cheapestPrice() ? <button className="pink-button cheap">CHEAPEST</button> : <button className="pink-button cheap">VALUE FOR MONEY</button>}
                                                        {/* Departure flights */}
                                                        <Row className="travel-timing" style={{ marginTop: '6px' }}>
                                                            <Col md={12} sm={12}>
                                                                <b>Departure</b> | {dateFormat(changeMonthDate(resultData.flightLeg[0].flightDetails.departureDate), "ddd, mmm d")} | {resultData.flightLeg[0].flightDetails.operatingAirlineName}
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={3} sm={4} className = ''>
                                                                <p className="sort-countryname">{resultData.marketingAirlineNames}</p>
                                                            </Col>
                                                            <Col xs={9} sm={8} className="flight-details">
                                                                <Row>
                                                                    <Col xs={4}>
                                                                        <div className="start-time text-right" htmlFor={`test` + i}>
                                                                            {TimeSplit(resultData.flightLeg[0].flightDetails.departureTime)}
                                                                            <p className="mini-text">{resultData.flightLeg[0].flightDetails.departureLocationCode}</p>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={4} className='text-center'>
                                                                        <div className='hrs'>
                                                                            <span className="mini-text">{CalculateDuration(resultData.flightLeg[0].flightDetails.totalFlyingHours)}</span>
                                                                            <span className="line_jet"></span>
                                                                            <span className={StopClassName(resultData.flightLeg[0].flightDetails.stopOvers)}></span>
                                                                            <span className="mini-text sky-text">{StopName(resultData.flightLeg[0].flightDetails.stopOvers)} {resultData.flightLeg[0].flightDetails.stopOvers > 0 ? <span> via <span className="via-city">{ViaCityName(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalLocationName)}</span> </span>: null }</span>
                                                                            <img className="fa fa-fighter-jet autocomplete-flight-img" alt="Flight" src="static/images/flight.png" width="16px" />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={4}>
                                                                        <div className="start-time">
                                                                            {TimeSplit(resultData.flightLeg[0].flightDetails.arrivalTime)}
                                                                            <p className="mini-text">{resultData.flightLeg[0].flightDetails.arrivalLocationCode}</p>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        {/* End Departure Flights */}
                                                        {/* Return Flights */}
                                                        {requestData.searchType == 2 ? <div>
                                                        <Row className="travel-timing" style={{ marginTop: '6px' }}>
                                                            <Col md={12} sm={12}>
                                                                <b>Return</b> | {dateFormat(changeMonthDate(resultData.flightLeg[1].flightDetails.departureDate), "ddd, mmm d")} | {resultData.flightLeg[1].flightDetails.operatingAirlineName}
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={3} sm={4} className = ''>
                                                                <p className="sort-countryname">{resultData.marketingAirlineNames}</p>
                                                            </Col>
                                                            <Col xs={9} sm={8} className="flight-details">
                                                                <Row>
                                                                    <Col xs={4}>
                                                                        <div className="start-time text-right" htmlFor={`test` + i}>
                                                                            {TimeSplit(resultData.flightLeg[1].flightDetails.departureTime)}
                                                                            <p className="mini-text">{resultData.flightLeg[1].flightDetails.departureLocationCode}</p>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={4} className='text-center'>
                                                                        <div className='hrs'>
                                                                            <span className="mini-text">{CalculateDuration(resultData.flightLeg[1].flightDetails.totalFlyingHours)}</span>
                                                                            <span className="line_jet"></span>
                                                                            <span className={StopClassName(resultData.flightLeg[1].flightDetails.stopOvers)}></span>
                                                                            <span className="mini-text sky-text">{StopName(resultData.flightLeg[1].flightDetails.stopOvers)}{resultData.flightLeg[1].flightDetails.stopOvers > 0 ? <span> via <span className="via-city">{ViaCityName(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalLocationName)}</span> </span>: null }</span>
                                                                            <img className="fa fa-fighter-jet autocomplete-flight-img" alt="Flight" src="static/images/flight.png" width="16px" />
                                                                        </div>
                                                                    </Col>
                                                                    <Col xs={4}>
                                                                        <div className="start-time">
                                                                            {TimeSplit(resultData.flightLeg[1].flightDetails.arrivalTime)}
                                                                            <p className="mini-text">{resultData.flightLeg[1].flightDetails.arrivalLocationCode}</p>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row> </div> : null }
                                                        {/* End Return Flights */}
                                                    </Col>
                                                    <Col sm={3} className='text-center set_bg'>
                                                        <span className="sort-currency">
                                                            <span className="deals_no">
                                                                8 deals
                                                            </span><br/>
                                                            {getSymbolFromCurrency(currencyCode)}
                                                            &nbsp;{resultData.totalFare}
                                                        </span>
                                                        {/* <a href={`/ticketdetails?id=${2}`}>
                                                            <button className="bpk-button">Select <i className="fa fa-arrow-right"></i></button>
                                                        </a> */}
                                                        {/* <Link href={{ pathname: 'ticketdetails', query: { id: resultData.recommendationRefNo }}}> */}
                                                        {/* <button className="bpk-button" onClick={() => showFlightDetails(resultData.recommendationRefNo)}>Select <i className="fa fa-arrow-right"></i></button> */}
                                                        <Button className="bpk-button" onClick={() => showFlightDetails(resultData.recommendationRefNo)} disabled={resultData.recommendationRefNo == flightId ? fetchLoading : null}>
                                                        {resultData.recommendationRefNo == flightId ? 
                                                        fetchLoading && (
                                                            <i
                                                            className="fa fa-refresh fa-spin"
                                                            style={{ marginRight: "5px" }}
                                                            />
                                                        ) : null}
                                                        {resultData.recommendationRefNo == flightId ? fetchLoading && <span>Loading</span> : null}
                                                        {resultData.recommendationRefNo == flightId ? !fetchLoading && <span>Select</span> : <span>Select</span>}
                                                        </Button>
                                                        {/* </Link> */}
                                                    </Col>
                                                    <Row className="flight-details">
                                                        <Col sm={12} className="text-center grey">
                                                            <span>Cabin Baggage Only Flights</span>
                                                        </Col>
                                                    </Row>
                                                    <Row className="flight-details bottom">
                                                        <Col sm={8} xs={7}>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <b className='green-text'>8.5<small>/10</small></b>
                                                                <span className=""> Non-refundable</span>
                                                                <i className="fa fa-angle-down" aria-hidden="true" ></i> | 
                                                                <span>Seat varies by flight segment</span>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            ))}
                                            {/* Ending Sorting Area */}

                                                        </Col> : <center>No data found</center>  }
                                       {/* --------End main datas------- */}
                                    </Row>
                                </Col>
                                
                                {/* Ad */}
                                <Col sm={12} md={12} lg={2} xl={2} className='text-center'>
                                    <Row>
                                        <Col md={4} lg={12}>
                                            <div className="ad-block">
                                                <p>Place for ad</p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={12}>
                                            <div className="ad-block">
                                                <p>Place for ad</p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={12}>
                                            <div className="ad-block">
                                                <p>Place for ad</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div> 
                    </div>: <div className="nodata-msg text-center">
                            <img src="static/images/nodata2.png" className="img img-responsive" style={{height:'200px',width:'250px'}}></img>
                            {/* <img className="fa fa-fighter-jet autocomplete-flight-img" alt="Flight" src="static/images/flight.png" style={{height:'70px',width:'70px',opacity:0.2}}/> */}
                            {/* <br/>Sorry! No result found. */}
                            </div> } </div> }
                </div>
            </Layout>
        )
}

TicketBooking.getInitialProps = async ({ query: {adultCount,childCount,infantCount,isDirectFlight,isPlusOrMinus3Days,searchType,preferedFlightClass,departureLocationCode,departureDate,arrivalLocationCode,returnDate,departureTime,returnTime,PageIndex,PageSize,departureLocationName,arrivalLocationName } }) => {
const request = {
    "adultCount": adultCount,
    "childCount": childCount,
    "infantCount": infantCount,
    "isDirectFlight": isDirectFlight,
    "isPlusOrMinus3Days": isPlusOrMinus3Days,
    "searchType": searchType,
    "preferedFlightClass": preferedFlightClass,
        "segments": [
        {
            "departureLocationCode": departureLocationCode,
            "departureDate": departureDate,
            "arrivalLocationCode": arrivalLocationCode,
            "returnDate": searchType == 2 ? returnDate : null,
            "departureTime": departureTime,
            "returnTime": searchType == 2 ? returnTime : null
        }
    ],
    "paging": {
        "PageIndex": PageIndex,
        "PageSize": PageSize
    }};

    const res = await getFlights(request)
    const json = await res;
    return { 
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
                "segments": [
                {
                    "departureLocationCode": departureLocationCode,
                    "departureDate": departureDate,
                    "arrivalLocationCode": arrivalLocationCode,
                    "returnDate": searchType == 2 ? returnDate : null,
                    "departureTime": departureTime,
                    "returnTime": searchType == 2 ? returnTime : null
                }
            ],
            "paging": {
                "PageIndex": PageIndex,
                "PageSize": PageSize
            }
        }
        }
        }

  export default TicketBooking;