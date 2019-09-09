import React from 'react';

import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import axios from 'axios';
import Layout from '../components/layout';

export default class Fetchapi extends React.Component {
  state = {
    persons: []
  }



  componentDidMount() {
    let url = 'https://pln.lycafly.com/Affiliate/Flight/Aw_SearchFlight';
    let headers = new Headers();
    axios(url,{method: 'POST',headers:{
      'Authorization': 'Basic 0b017b0c0d414e20ee0d2e4adbed686d7c297a6d2f8ec8f9eddc2016d9513482a086fe8712ef0530',
                                 'content-Type': 'application/json'
    },
    data: JSON.stringify(
      {
          "adultCount": "1",
          "childCount": "0",
          "infantCount": "0",
          "isDirectFlight": "false",
          "isPlusOrMinus3Days": "false",
          "searchType": "2",
          "preferedFlightClass": "1",
              "segments": [
              {
                  "departureLocationCode": "LON",
                  "departureDate": "20-10-2019",
                  "arrivalLocationCode": "DEL",
                  "returnDate": "26-10-2019",
                  "departureTime": "Any",
                  "returnTime": "Any"
              }
          ],
          "paging": {
              "PageIndex": "1",
              "PageSize": "50"
          }
          }
  ),
  })
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <Layout>
          <div className="container-fluid">
              <div className='t_detail'>
                  <div className='top'>
                      <Row>
                          <Col xs={4}>
                              <a href='/ticketBooking'><div className='arrowLeft'>
                                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                  <span> Back to results</span>
                              </div></a>
                          </Col>
                          <Col xs={4} className='text-center'>
                              <div className='arrowLeft Center'>
                                  Details
                              </div>
                          </Col>
                          <Col xs={4} className='text-right'>
                              <div className='arrowLeft'>
                                  <a href='/ticketBooking'>
                                      <i className="fa fa-times" aria-hidden="true"></i>
                                  </a>
                              </div>
                          </Col>
                      </Row>
                  </div>

                  {/* Next Section */}

                  <div className='next_section'>
                      <div className='container'>
                          <Row>
                              <Col sm={12} md={7} style={{ borderRight: '1.5px solid #dedede' }}>
                                  {/* Accordion */}
                                  {jsondata.map((resultData, i = 1) => (
                                  <Accordion defaultActiveKey="0" key={resultData.recommendationRefNo}>
                                      <Card>
                                          <Card.Header>
                                              <p className='outbound'><b>Outbound, </b>{dateFormat(changeMonthDate(resultData.flightLeg[0].flightDetails.departureDate), "ddd, mmm d,yyyy")}</p>
                                              <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={handleClickFlight1 }>
                                                  <Row className='airlines'>
                                                      <Col xs={12} sm={3} className=''>
                                                          <p className="sort-countryname">
                                                              {/* <img className='' alt='Flight Name' src='https://www.Dealchecker.net/images/airlines/small/0S.png'></img> */}
                                                              {resultData.marketingAirlineNames}
                                                          </p>
                                                      </Col>
                                                      <Col xs={12} sm={8} className="flight-details pad-0">
                                                          <Row>
                                                              <Col xs={4}>
                                                                  <div className="start-time text-right">
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
                                                      <Col xs={12} sm={1} className='text-center'>
                                                          <i className="fa fa-chevron-up" aria-hidden="true"  className= {condition2 ? "fa fa-chevron-up button_1 toggled" : "fa fa-chevron-up button_1" }></i>
                                                      </Col>
                                                  </Row>

                                              </Accordion.Toggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="0">
                                              <Card.Body>
                                                  {/* Connecting flight */}
                                                  <Row className='Detailssss'>
                                                      <Col xs={2}>
                                                      </Col>
                                                      <Col xs={10}>
                                                          <div className='name'>
                                                              {/* <img className='jet_img' height='24' width='24' src='https://www.Dealchecker.net/images/airlines/favicon/0S.png' alt='Flight Name' /> */}
                                                              <span>{resultData.marketingAirlineNames}</span>
                                                          </div>
                                                      </Col>
                                                      <Col sm={2}>
                                                          <p className='flight_hrs'>{calculateDurationFormat(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].departureDate,resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalDate,resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].departureTime,resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalTime)}</p>
                                                      </Col>
                                                      <Col xs={12} sm={10}>
                                                          <Row className='track'>
                                                              <Col xs={1}>
                                                                  <div className="circles">
                                                                      <div className="timeline-trackline"></div>
                                                                  </div>
                                                              </Col>
                                                              <Col xs={3}>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].departureTime)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalTime)}
                                                                  </div>
                                                              </Col>
                                                              <Col xs={8}>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].departureLocationCode} {ViaCityName(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].departureLocationName)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalLocationCode} {ViaCityName(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalLocationName)}
                                                                  </div>
                                                              </Col>
                                                          </Row>
                                                         
                                                      </Col>
                                                     
                                                      </Row>
                                                       {/* connecting flight end */}
                                                       <br/>
                                                       <Row>
                                                           <Col xs={8} className="Detailssss text-center">
                                                                  <span className="duration-limit">{calculateDurationFormat(resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].departureDate,resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureDate,resultData.flightLeg[0].flightDetails.connectingFlightDetails[0].arrivalTime,resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureTime)} Connect in airport</span>
                                                           </Col>
                                                       </Row>
                                                       <br/>
                                                       <Row className='Detailssss'>
                                                      <Col xs={2}>
                                                      </Col>
                                                      <Col xs={10}>
                                                          <div className='name'>
                                                              {/* <img className='jet_img' height='24' width='24' src='https://www.Dealchecker.net/images/airlines/favicon/0S.png' alt='Flight Name' /> */}
                                                              <span>{resultData.marketingAirlineNames}</span>
                                                          </div>
                                                      </Col>
                                                      <Col sm={2}>
                                                          <p className='flight_hrs'>{calculateDurationFormat(resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureDate,resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].arrivalDate,resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureTime,resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].arrivalTime)}</p>
                                                      </Col>
                                                      <Col xs={12} sm={10}>
                                                          <Row className='track'>
                                                              <Col xs={1}>
                                                                  <div className="circles">
                                                                      <div className="timeline-trackline"></div>
                                                                  </div>
                                                              </Col>
                                                              <Col xs={3}>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureTime)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].arrivalTime)}
                                                                  </div>
                                                              </Col>
                                                              <Col xs={8}>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureLocationCode} {ViaCityName(resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].departureLocationName)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].arrivalLocationCode} {ViaCityName(resultData.flightLeg[0].flightDetails.connectingFlightDetails[1].arrivalLocationName)}
                                                                  </div>
                                                              </Col>
                                                          </Row>
                                                         
                                                      </Col>
                                                     
                                                      </Row>
                                                       {/* connecting flight end */}
                                                       <br/>
                                                      <Row className="Detailssss">
                                                      <Col xs={12}>
                                                          <p><b>Arrives:</b> {dateFormat(changeMonthDate(resultData.flightLeg[0].flightDetails.departureDate), "ddd, mmm d,yyyy")} | <b>Journey duration: {CalculateDuration(resultData.flightLeg[0].flightDetails.totalFlyingHours)}</b> </p>
                                                      </Col>
                                                  </Row>
                                              </Card.Body>
                                          </Accordion.Collapse>
                                      </Card>
                                      <Card>
                                          <Card.Header>
                                              <p className='outbound'><b>Return, </b>{dateFormat(changeMonthDate(resultData.flightLeg[1].flightDetails.departureDate), "ddd, mmm d,yyyy")}</p>
                                              <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={handleClickFlight2 }>
                                                  <Row className='airlines'>
                                                      <Col xs={12} sm={3} className=''>
                                                          <p className="sort-countryname">{resultData.marketingAirlineNames}</p>
                                                      </Col>
                                                      <Col xs={12} sm={8} className="flight-details">
                                                          <Row>
                                                              <Col xs={4}>
                                                                  <div className="start-time text-right">
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
                                                      <Col xs={12} sm={1} className='text-center'>
                                                          <i className="fa fa-chevron-down" aria-hidden="true"  className= { condition3 ? "fa fa-chevron-down button_2 toggled" : "fa fa-chevron-down button_2" }></i>
                                                      </Col>
                                                  </Row>
                                              </Accordion.Toggle>
                                          </Card.Header>
                                          <Accordion.Collapse eventKey="1">
                                              <Card.Body>
                                                  {/* Connecting flight */}
                                                  <Row className='Detailssss'>
                                                      <Col xs={2}>
                                                      </Col>
                                                      <Col xs={10}>
                                                          <div className='name'>
                                                              {/* <img className='jet_img' height='24' width='24' src='https://www.Dealchecker.net/images/airlines/favicon/0S.png' alt='Flight Name' /> */}
                                                              <span>{resultData.marketingAirlineNames}</span>
                                                          </div>
                                                      </Col>
                                                      <Col sm={2}>
                                                          <p className='flight_hrs'>{calculateDurationFormat(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].departureDate,resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalDate,resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].departureTime,resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalTime)}</p>
                                                      </Col>
                                                      <Col xs={12} sm={10}>
                                                          <Row className='track'>
                                                              <Col xs={1}>
                                                                  <div className="circles">
                                                                      <div className="timeline-trackline"></div>
                                                                  </div>
                                                              </Col>
                                                              <Col xs={3}>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].departureTime)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalTime)}
                                                                  </div>
                                                              </Col>
                                                              <Col xs={8}>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].departureLocationCode} {ViaCityName(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].departureLocationName)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalLocationCode} {ViaCityName(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalLocationName)}
                                                                  </div>
                                                              </Col>
                                                          </Row>
                                                         
                                                      </Col>
                                                     
                                                      </Row>
                                                       {/* connecting flight end */}
                                                       <br/>
                                                       <Row>
                                                           <Col xs={8} className="Detailssss text-center">
                                                           <span className="duration-limit">{calculateDurationFormat(resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].departureDate,resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureDate,resultData.flightLeg[1].flightDetails.connectingFlightDetails[0].arrivalTime,resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureTime)} Connect in airport</span>
                                                           </Col>
                                                       </Row>
                                                       <br/>
                                                       <Row className='Detailssss'>
                                                      <Col xs={2}>
                                                      </Col>
                                                      <Col xs={10}>
                                                          <div className='name'>
                                                              {/* <img className='jet_img' height='24' width='24' src='https://www.Dealchecker.net/images/airlines/favicon/0S.png' alt='Flight Name' /> */}
                                                              <span>{resultData.marketingAirlineNames}</span>
                                                          </div>
                                                      </Col>
                                                      <Col sm={2}>
                                                          <p className='flight_hrs'>{calculateDurationFormat(resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureDate,resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].arrivalDate,resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureTime,resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].arrivalTime)}</p>
                                                      </Col>
                                                      <Col xs={12} sm={10}>
                                                          <Row className='track'>
                                                              <Col xs={1}>
                                                                  <div className="circles">
                                                                      <div className="timeline-trackline"></div>
                                                                  </div>
                                                              </Col>
                                                              <Col xs={3}>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureTime)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {TimeSplit(resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].arrivalTime)}
                                                                  </div>
                                                              </Col>
                                                              <Col xs={8}>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureLocationCode} {ViaCityName(resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].departureLocationName)}
                                                                  </div>
                                                                  <div className="ttime">
                                                                  {resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].arrivalLocationCode} {ViaCityName(resultData.flightLeg[1].flightDetails.connectingFlightDetails[1].arrivalLocationName)}
                                                                  </div>
                                                              </Col>
                                                          </Row>
                                                         
                                                      </Col>
                                                     
                                                      </Row>
                                                       {/* connecting flight end */}
                                                       <br/>
                                                      <Row className="Detailssss">
                                                      <Col xs={12}>
                                                          <p><b>Arrives:</b> {dateFormat(changeMonthDate(resultData.flightLeg[1].flightDetails.departureDate), "ddd, mmm d,yyyy")} | <b>Journey duration: {CalculateDuration(resultData.flightLeg[1].flightDetails.totalFlyingHours)}</b> </p>
                                                      </Col>
                                                  </Row>
                                              </Card.Body>
                                          </Accordion.Collapse>
                                      </Card>
                                  </Accordion> ))}
                                  <div className='next-section'>
                                      <h3 className='book-your-ticket-header'>Book your ticket</h3>
                                      <p className='book-subtitle'>Economy class, 1 adult</p>
                                      <Accordion className='read_before_booking' defaultActiveKey="0">
                                          <Card>
                                              <Card.Header>
                                                  <Accordion.Toggle as={Button} variant="new" eventKey="0" onClick={ handleClick } >
                                                      Read before booking
                                                      <i className='fa fa-chevron-up' className= { condition1 ? "fa fa-chevron-up button" : "fa fa-chevron-up button toggled" }></i>
                                                  </Accordion.Toggle>
                                              </Card.Header>
                                              <Accordion.Collapse eventKey="0">
                                                  <Card.Body>
                                                      <p className='read-text' style={{ whiteSpace: 'normal' }}>Prices shown always include an estimate of all mandatory taxes and charges, but remember to <b>check ALL ticket details, final prices and terms and conditions</b> on the booking website before you book.</p>
                                                      <ul>
                                                          <li className='read-text'>
                                                              <b>Check for extra fees</b><br></br>
                                                              Some airlines / agents charge extra for <b>baggage, insurance</b> or use of <b>credit cards</b>. View airlines fees.
                                                          </li>
                                                          <li className='read-text'>
                                                              <b>Check T&Cs for travellers aged 12-16</b><br></br>
                                                              Restrictions may apply to young passengers travelling alone.
                                                          </li>
                                                      </ul>
                                                  </Card.Body>
                                              </Accordion.Collapse>
                                          </Card>
                                      </Accordion>

                                      <Row className='tripdotcom'>
                                          <Col xs={6}>
                                              <div className='trip-1st'>
                                                  <p>EaseMyTrip.com</p>
                                                  <div className='star_rating'>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                      <i className="fa fa-star-o" aria-hidden="true"></i>
                                                      <div className='comment_number'>
                                                          5555
                                                      </div>
                                                  </div>
                                              </div>
                                          </Col>
                                          <Col xs={6} className='text-right'>
                                              <div className='trip-2st'>
                                                  <h4>₹ 9,959</h4>
                                                  <a href='https://www.lycafly.com' target="_blank">
                                                      <button className='bpk-button'>
                                                          Select <i className='fa fa-arrow-right'></i>
                                                      </button>
                                                  </a>
                                              </div>
                                          </Col>
                                          <Col s={12}>
                                              {/* <div className='info'>
                                                  <img src='static/images/info.svg'></img>
                                                  <p>All-inclusive price. No additional charges.</p>
                                              </div>
                                              <div className='info'>
                                                  <img src='static/images/flight.svg'></img>
                                                  <p>Dealchecker Exclusive: Use coupon CTDealchecker to get up to INR 3,000 Cashback on domestic flights*.</p>
                                              </div>
                                              <div className='info comment'>
                                                  <img src='static/images/comment.svg'></img>
                                                  <p>*Refer to Terms and Conditions at bit.ly/CT_Dealchecker</p>
                                              </div> */}
                                          </Col>
                                      </Row>

                                      <Row className='tripdotcom'>
                                          <Col xs={6}>
                                              <div className='trip-1st'>
                                                  <p>Happy easy go</p>
                                                  <div className='star_rating'>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                      <i className="fa fa-star-o" aria-hidden="true"></i>
                                                      <div className='comment_number'>
                                                          5555
                                                      </div>
                                                  </div>
                                              </div>
                                          </Col>
                                          <Col xs={6} className='text-right'>
                                              <div className='trip-2st'>
                                                  <h4>₹ 9,959</h4>
                                                  <button className='bpk-button'>
                                                      Select <i className='fa fa-arrow-right'></i>
                                                  </button>
                                              </div>
                                          </Col>
                                          <Col s={12}>
                                              <div className='info'>
                                                  <img src='static/images/info.svg'></img>
                                                  <p>All-inclusive price. No additional charges.</p>
                                              </div>
                                              <div className='info'>
                                                  <img src='static/images/flight.svg'></img>
                                                  <p>Dealchecker Exclusive: Use coupon CTDealchecker to get up to INR 3,000 Cashback on domestic flights*.</p>
                                              </div>
                                              <div className='info comment'>
                                                  <img src='static/images/comment.svg'></img>
                                                  <p>*Refer to Terms and Conditions at bit.ly/CT_Dealchecker</p>
                                              </div>
                                          </Col>
                                      </Row>

                                      <Row className='tripdotcom'>
                                          <Col xs={6}>
                                              <div className='trip-1st'>
                                                  <p>Cleartrip</p>
                                                  <div className='star_rating'>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                      <i className="fa fa-star-o" aria-hidden="true"></i>
                                                      <div className='comment_number'>
                                                          5555
                                                      </div>
                                                  </div>
                                              </div>
                                          </Col>
                                          <Col xs={6} className='text-right'>
                                              <div className='trip-2st'>
                                                  <h4>₹ 9,959</h4>
                                                  <button className='bpk-button'>
                                                      Select <i className='fa fa-arrow-right'></i>
                                                  </button>
                                              </div>
                                          </Col>
                                          <Col s={12}>
                                              {/* <div className='info'>
                                                  <img src='static/images/info.svg'></img>
                                                  <p>All-inclusive price. No additional charges.</p>
                                              </div>
                                              <div className='info'>
                                                  <img src='static/images/flight.svg'></img>
                                                  <p>Dealchecker Exclusive: Use coupon CTDealchecker to get up to INR 3,000 Cashback on domestic flights*.</p>
                                              </div>
                                              <div className='info comment'>
                                                  <img src='static/images/comment.svg'></img>
                                                  <p>*Refer to Terms and Conditions at bit.ly/CT_Dealchecker</p>
                                              </div> */}
                                          </Col>
                                      </Row>

                                      <Row className='tripdotcom'>
                                          <Col xs={6}>
                                              <div className='trip-1st'>
                                                  <p>Cheapticket.in</p>
                                                  <div className='star_rating'>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                      <i className="fa fa-star-o" aria-hidden="true"></i>
                                                      <div className='comment_number'>
                                                          5555
                                                      </div>
                                                  </div>
                                              </div>
                                          </Col>
                                          <Col xs={6} className='text-right'>
                                              <div className='trip-2st'>
                                                  <h4>₹ 9,959</h4>
                                                  <button className='bpk-button bpk-button--featured'>
                                                      Book <i className='fa fa-arrow-right'></i>
                                                  </button>
                                              </div>
                                          </Col>
                                          <Col s={12}>
                                              <div className='info'>
                                                  <img src='static/images/info.svg'></img>
                                                  <p>All-inclusive price. No additional charges.</p>
                                              </div>
                                              <div className='info'>
                                                  <img src='static/images/flight.svg'></img>
                                                  <p>Dealchecker Exclusive: Use coupon CTDealchecker to get up to INR 3,000 Cashback on domestic flights*.</p>
                                              </div>
                                              <div className='info comment'>
                                                  <img src='static/images/comment.svg'></img>
                                                  <p>*Refer to Terms and Conditions at bit.ly/CT_Dealchecker</p>
                                              </div>
                                          </Col>
                                      </Row>

                                      <Row className='tripdotcom'>
                                          <Col xs={6}>
                                              <div className='trip-1st'>
                                                  <p>SpiceJet</p>
                                                  <div className='star_rating'>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star" aria-hidden="true"></i>
                                                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                      <i className="fa fa-star-o" aria-hidden="true"></i>
                                                      <div className='comment_number'>
                                                          5555
                                                      </div>
                                                  </div>
                                              </div>
                                          </Col>
                                          <Col xs={6} className='text-right'>
                                              <div className='trip-2st'>
                                                  <h4>₹ 9,959</h4>
                                                  <button className='bpk-button'>
                                                      Select <i className='fa fa-arrow-right'></i>
                                                  </button>
                                              </div>
                                          </Col>
                                          {/* <Col s={12}>
                                              <div className='info'>
                                                  <img src='static/images/info.svg'></img>
                                                  <p>All-inclusive price. No additional charges.</p>
                                              </div>
                                              <div className='info'>
                                                  <img src='static/images/flight.svg'></img>
                                                  <p>Dealchecker Exclusive: Use coupon CTDealchecker to get up to INR 3,000 Cashback on domestic flights*.</p>
                                              </div>
                                              <div className='info comment'>
                                                  <img src='static/images/comment.svg'></img>
                                                  <p>*Refer to Terms and Conditions at bit.ly/CT_Dealchecker</p>
                                              </div>
                                          </Col> */}
                                      </Row>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
  )

  }
}