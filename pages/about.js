import React, { useState } from 'react';
import Layout from '../components/layout';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import datetimeDifference from "datetime-difference";

const About = () => {
    return (
        <Layout>
            <section className='faq container-fluid'>
            </section>
            <div className="padding-40 container uses">
                <h3 className='text-left'>About DealCheaker.com</h3>
                <p className='read-text'>DealCheaker is India’s leading online travel booking brand providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes. Through GoStays, our customers enjoy standardised stay experience at certified hotel properties. With industry first virtual travel booking currency GoCash and travel social network, GoCash+ Rewards – DealCheaker is the number one choice for new India on the move.</p>
                <p className='read-text'>DealCheaker is India’s leading online travel booking brand providing range of choice for hotels, flights, trains, bus and cars for travelers. Our core value differentiator is the most trusted user experience, be it in terms of quickest search and booking, fastest payments, settlement or refund processes. Through GoStays, our customers enjoy standardised stay experience at certified hotel properties. With industry first virtual travel booking currency GoCash and travel social network, GoCash+ Rewards – DealCheaker is the number one choice for new India on the move.</p>
            </div>
        </Layout>
    )
}

export default About;