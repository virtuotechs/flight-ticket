import React, { useState } from 'react'
import Layout from '../components/layout'
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap'
import dateFormat from 'dateformat'
import datetimeDifference from 'datetime-difference'

const TicketReservation = () => {

	return (
		<Layout>
			<section className='faq container-fluid' style = {{ background: 'none', padding: '0' }}>
				<div className='padding-40 container uses'>
					<h3 className='text-left'>How do I make a reservation ?</h3>
					<p className='read-text'>Travel can be exciting or it can be frustrating. Take some of the frustration out of your next trip by booking your flight reservations online. Signing into your favorite travel site opens up the ability not only to choose your own flights, but also to choose hotels, car rentals, and even get better discounts than might otherwise be possible by going through a travel agent. By booking the reservations yourself, you can end up with a custom-made trip for you and your family.</p>
					<h6 className='read-text'><b>STEP 1</b></h6>
					<p className='read-text'>Sign in to your favorite travel site. Once the site loads, you will need to either create an account or log in to your existing account.</p>
					<h6 className='read-text'><b>STEP 2</b></h6>
					<p className='read-text'>Choose your departure location. You will want to choose the closest airport to your current location. You may need to plan either to drive to a major airport or to take a commuter flight to one. The system will automatically let you know if this is necessary, which will be determined when you choose your departure location. You will also choose your departure date as well as the time range for your flight. Input how many adults and children are taking this flight and length of your stay at the arrival point.</p>
					<h6 className='read-text'><b>STEP 3</b></h6>
					<p className='read-text'>Choose your destination. After making the departure choices, you will choose your destination. It is possible to choose an arrival time, and the system will then tell you what time you would need to depart.</p>
					<h6 className='read-text'><b>STEP 4</b></h6>
					<p className='read-text'>Select your flight. After you input your departure and destination information, a list of available flights will be generated. You can have these displayed via airline, arrival or departure times, and price. Once you have selected a flight, a payment booking page will be generated.</p>
					<h6 className='read-text'><b>STEP 5</b></h6>
					<p className='read-text'>Pay for your reservation. On the booking page you will be asked for payment information. Once payment has been processed, you will be given a confirmation page to print. You will be given the option of having tickets sent to the address listed on the account or picked up at the airport.</p>
				</div>
			</section>
		</Layout>
	)
}

export default TicketReservation
