import React, { useState } from 'react';
import Layout from '../components/layout';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import datetimeDifference from "datetime-difference";
import {getFlights} from '../api';

const TicketDetails = (flights) => {

    console.log(flights.request.id);
    const [condition1,setCondition1] = useState(true);
    const [condition2,setCondition2] = useState(false);
    const [condition3,setCondition3] = useState(false);

    // var result = flights.flights.data.recommendation.filter(x => x.recommendationRefNo == flights.request.id);
    const [jsondata,setJsondata] = useState(flights.flights.data.recommendation);
    const [requestData,setRequestData] = useState(flights.request);
    console.log("JSON DATA: ",jsondata);

    const handleClick = () => {
        setCondition1(!condition1);
    }

    const handleClickFlight1 = () => {
        setCondition2(!condition2);
    }

    const handleClickFlight2 = () => {
        setCondition3(!condition3);
    }

    const changeMonthDate = (dt) => {
        var date1 = dt.split('-')
        var newDate = date1[1] + '-' + date1[0] + '-' + date1[2];
        var date = new Date(newDate);
        return (date);
    }
    
    const TimeSplit = (time) => {
        time = time.replace(/(..?)/g, '$1:').slice(0, -1)
        return (time);
    }
    const CalculateDuration = (duration) => {
        duration = TimeSplit(duration);
        var duration1 = duration.split(":");
        var duration_str = duration1[0]+"hrs "+duration1[1]+"min";
        return duration_str;
    }

    const ViaCityName = (cityname) => {
        cityname = cityname.split("(");
        return cityname[0];
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

    const calculateDurationFormat = (dt1, dt2, tm1, tm2) => {
        var date1 = dt1.split('-')
        var date1 = date1[1] + '-' + date1[0] + '-' + date1[2];
        tm1 = tm1.replace(/(..?)/g, '$1:').slice(0, -1);
        dt1 = date1 + ", " + tm1;
        var date2 = dt2.split('-')
        var date2 = date2[1] + '-' + date2[0] + '-' + date2[2];
        tm2 = tm2.replace(/(..?)/g, '$1:').slice(0, -1);
        dt2 = date2 + ", " + tm2;
        var duration = datetimeDifference(new Date(dt1), new Date(dt2));
        var hours = duration.hours;
        var minutes = duration.minutes;
        if (minutes != 0) {
            var duration_time = hours + "hrs " + minutes + "min";
        }
        else {
            var duration_time = hours + "hrs ";
        }
        return (duration_time);
    }
    return(
        <h1> Ticket Details</h1>
    )
    }


TicketDetails.getInitialProps = async ({ query: {id,adultCount,childCount,infantCount,isDirectFlight,isPlusOrMinus3Days,searchType,preferedFlightClass,departureLocationCode,departureDate,arrivalLocationCode,returnDate,departureTime,returnTime,PageIndex,PageSize,departureLocationName,arrivalLocationName } }) => {
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
                "returnDate": returnDate,
                "departureTime": departureTime,
                "returnTime": returnTime
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
                "id": id,
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
                        "returnDate": returnDate,
                        "departureTime": departureTime,
                        "returnTime": returnTime
                    }
                ],
                "paging": {
                    "PageIndex": PageIndex,
                    "PageSize": PageSize
                }
            }
            }
            }
    
    export default TicketDetails;