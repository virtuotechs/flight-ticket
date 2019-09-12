import React, { useState } from 'react';
import Layout from '../components/layout';
import { Row, Col, Tab, Nav, Button, Accordion, Card } from 'react-bootstrap';

const Faq = () => {
    const [condition1, setCondition1] = useState(true);
    const [condition2, setCondition2] = useState(false);
    const [condition3, setCondition3] = useState(false);

    const handleClick = () => {
        setCondition1(!condition1);
    }


    return (
        <Layout>

            <div className="faq container uses padding-40">
                <h3 className='text-left'>FAQs</h3>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">General</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Booking</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Accordion className='read_before_booking'>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="new" eventKey="0" onClick={handleClick} >
                                                    How do I book my flight?
                                                    <i className='fa fa-chevron-down' style={{ float: 'right' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body style={{ border: 'none' }}>
                                                    <ul>
                                                        <li className='read-text'>Log on to our website that is www.DealChecker.com, look at the availability of flights and the available fares, select the flight and fares, agree to our terms & conditions, fill in your particulars, complete the payment process, and finally generate an itinerary.</li>
                                                        <li className='read-text'>Go to any DealChecker's walk-in airport ticket counters or sales offices.</li>
                                                        <li className='read-text'>Or, you can book a seat at any of the Travel Agents .</li>
                                                    </ul>
                                                    <p className='read-text'>Once your payment has been made, you will be issued a passenger Booking Reference Number(PNR), and your Travel Itinerary (your reference, receipt and booking detail) will be provided in person or emailed to you. Alternatively it can be collected at our airport sales counter, just outside the terminal. A charge of INR 100/- will be levied for each print of an Itinerary / Ticket from any of the DealChecker Ticketing Counters / Offices across India (charges not applicable for fresh bookings). This fee is applicable only on requests for a print of an existing itinerary / ticket, already paid for. Please note the Itinerary Printout Fee towards re-printing of each Itinerary Ticket is reflected under the “Itinerary Printout Fee – INR 100” column on the printout. Business Class Passengers will not be charged.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="new" eventKey="1" onClick={handleClick} >
                                                    Can I book and hold a reservation and pay later?
                                                    <i className='fa fa-chevron-down' style={{ float: 'right' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body style={{ border: 'none' }}>
                                                    <p className='read-text' style={{ whiteSpace: 'normal' }}>Yes, passengers can hold the reservation and pay later when booking at least 2 clear days prior to their flight departure day. The booking can be on hold up to a maximum of 24 hours from the time of booking of any flight and will be automatically cancelled if full payment is not made by that time. This facility is only available through our Reservations or by having your travel agent contact us.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="new" eventKey="2" onClick={handleClick} >
                                                    When do you charge my credit/debit card after I have made a booking on-line?
                                                    <i className='fa fa-chevron-down' style={{ float: 'right' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body style={{ border: 'none' }}>
                                                    <p className='read-text' style={{ whiteSpace: 'normal' }}>Booking process will be complete only after the payment has been made by the passengers. We have made arrangement for on-line payments through credit card. Your payment will be processed immediately.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h4>Booking</h4>
                                    <Accordion className='read_before_booking'>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="new" eventKey="0" onClick={handleClick} >
                                                    How do I book my flight?
                                                    <i className='fa fa-chevron-down' style={{ float: 'right' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body style={{ border: 'none' }}>
                                                    <ul>
                                                        <li className='read-text'>Log on to our website that is www.DealChecker.com, look at the availability of flights and the available fares, select the flight and fares, agree to our terms & conditions, fill in your particulars, complete the payment process, and finally generate an itinerary.</li>
                                                        <li className='read-text'>Go to any DealChecker's walk-in airport ticket counters or sales offices.</li>
                                                        <li className='read-text'>Or, you can book a seat at any of the Travel Agents .</li>
                                                    </ul>
                                                    <p className='read-text'>Once your payment has been made, you will be issued a passenger Booking Reference Number(PNR), and your Travel Itinerary (your reference, receipt and booking detail) will be provided in person or emailed to you. Alternatively it can be collected at our airport sales counter, just outside the terminal. A charge of INR 100/- will be levied for each print of an Itinerary / Ticket from any of the DealChecker Ticketing Counters / Offices across India (charges not applicable for fresh bookings). This fee is applicable only on requests for a print of an existing itinerary / ticket, already paid for. Please note the Itinerary Printout Fee towards re-printing of each Itinerary Ticket is reflected under the “Itinerary Printout Fee – INR 100” column on the printout. Business Class Passengers will not be charged.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="new" eventKey="1" onClick={handleClick} >
                                                    Can I book and hold a reservation and pay later?
                                                    <i className='fa fa-chevron-down' style={{ float: 'right' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body style={{ border: 'none' }}>
                                                    <p className='read-text' style={{ whiteSpace: 'normal' }}>Yes, passengers can hold the reservation and pay later when booking at least 2 clear days prior to their flight departure day. The booking can be on hold up to a maximum of 24 hours from the time of booking of any flight and will be automatically cancelled if full payment is not made by that time. This facility is only available through our Reservations or by having your travel agent contact us.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="new" eventKey="2" onClick={handleClick} >
                                                    When do you charge my credit/debit card after I have made a booking on-line?
                                                    <i className='fa fa-chevron-down' style={{ float: 'right' }}></i>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body style={{ border: 'none' }}>
                                                    <p className='read-text' style={{ whiteSpace: 'normal' }}>Booking process will be complete only after the payment has been made by the passengers. We have made arrangement for on-line payments through credit card. Your payment will be processed immediately.</p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Layout>
    )
}

export default Faq;