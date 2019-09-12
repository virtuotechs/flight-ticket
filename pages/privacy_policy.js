import React, { useState } from 'react';
import Layout from '../components/layout';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';
import datetimeDifference from "datetime-difference";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <section className='faq container-fluid' style = {{ background: 'none', padding: '0' }}>
                <div className="padding-40 container uses">
                    <h3 className='text-left'>Privacy Policy - DealChecker.com</h3>
                    <h5>Introduction:</h5>
                    <p className='read-text'>DealCheaker (India) Private Limited (hereinafter “MMT”) recognizes the importance of privacy of its users and also of maintaining confidentiality of the information provided by its users as a responsible data controller and data processer.</p>
                    <p className='read-text'>This Privacy Policy provides for the practices for handling and securing user's Personal Information (defined hereunder) by MMT and its subsidiaries and affiliates.</p>
                    <p className='read-text'>This Privacy Policy is applicable to any person (‘User’) who purchase, intend to purchase, or inquire about any product(s) or service(s) made available by MMT through any of MMT’s customer interface channels including its website, mobile site, mobile app & offline channels including call centers and offices (collectively referred herein as "Sales Channels").</p>
                    <p className='read-text'>For the purpose of this Privacy Policy, wherever the context so requires "you" or "your" shall mean User and the term "we", "us", "our" shall mean MMT. For the purpose of this Privacy Policy, Website means the website(s), mobile site(s) and mobile app(s).</p>
                    <p className='read-text'>By using or accessing the Website or other Sales Channels, the User hereby agrees with the terms of this Privacy Policy and the contents herein. If you disagree with this Privacy Policy please do not use or access our Website or other Sales Channels.</p>
                    <p className='read-text'>This Privacy Policy does not apply to any website(s), mobile sites and mobile apps of third parties, even if their websites/products are linked to our Website. User should take note that information and privacy practices of MMT’s business partners, advertisers, sponsors or other sites to which MMT provides hyperlink(s), may be materially different from this Privacy Policy. Accordingly, it is recommended that you review the privacy statements and policies of any such third parties with whom they interact.</p>
                    <p className='read-text'>This Privacy Policy is an integral part of your User Agreement with MMT and all capitalized terms used, but not otherwise defined herein, shall have the respective meanings as ascribed to them in the User Agreement.</p>
                    <h6>TYPE OF INFORMATION (WE COLLECT)</h6>
                    <p className='read-text'>The information as detailed below is collected for us to be able to provide the services chosen by you and also to fulfill our legal obligations as well as our obligations towards third parties as per our User Agreement.</p>
                    <p className='read-text'><b>"Personal Information"</b> of User shall include the information shared by the User and collected by us for the following purposes:</p>
                    <p className='read-text'><b>Registration on the Website:</b> Information which you provide while subscribing to or registering on the Website, including but not limited to information about your personal identity such as name, gender, marital status, religion, age etc., your contact details such as your email address, postal addresses, frequent flyer number, telephone (mobile or otherwise) and/or fax numbers. The information may also include information such as your banking details (including credit/debit card) and any other information relating to your income and/or lifestyle; billing information payment history etc. (as shared by you).</p>
                    <p className='read-text'><b>Other information:</b> We many also collect some other information and documents including but not limited to:</p>
                    <ul>
                        <li className='read-text'>Transactional history (other than banking details) about your e-commerce activities, buying behavior.</li>
                        <li className='read-text'>Your usernames, passwords, email addresses and other security-related information used by you in relation to our Services.</li>
                        <li className='read-text'>Data either created by you or by a third party and which you wish to store on our servers such as image files, documents etc.</li>
                        <li className='read-text'>Data available in public domain or received from any third party including social media channels, including but not limited to personal or non-personal information from your linked social media channels (like name, email address, friend list, profile pictures or any other information that is permitted to be received as per your account settings) as a part of your account information.</li>
                        <li className='read-text'>Information pertaining any other traveler(s) for who you make a booking through your registered MMT account. In such case, you must confirm and represent that each of the other traveler(s) for whom a booking has been made, has agreed to have the information shared by you disclosed to us and further be shared by us with the concerned service provider(s).</li>
                    </ul>
                    <h6>HOW WE USE YOUR PERSONAL INFORMATION:</h6>
                    <p className='read-text'>The Personal Information collected maybe used in the following manner:</p>
                    <h6 className='read-text'><b>While making a booking</b></h6>
                    <p className='read-text'>While making a booking, we may use Personal Information including, payment details which include cardholder name, credit/debit card number (in encrypted form) with expiration date, banking details, wallet details etc. as shared and allowed to be stored by you. We may also use the information of travelers list as available in or linked with your account. This information is presented to the User at the time of making a booking to enable you to complete your bookings expeditiously.</p>
                    <ul>
                        <li className='read-text'>confirm your reservations with respective service providers;</li>
                        <li className='read-text'>keep you informed of the transaction status;</li>
                        <li className='read-text'>send booking confirmations either via sms or Whatsapp or any other messaging service;</li>
                        <li className='read-text'>send any updates or changes to your booking(s);</li>
                        <li className='read-text'>allow our customer service to contact you, if necessary;</li>
                        <li className='read-text'>customize the content of our website, mobile site and mobile app;</li>
                        <li className='read-text'>request for reviews of products or services or any other improvements;</li>
                        <li className='read-text'>send verification message(s) or email(s);</li>
                        <li className='read-text'>validate/authenticate your account and to prevent any misuse or abuse.</li>
                        <li className='read-text'>contact you on your birthday/anniversary to offer a special gift or offer.</li>
                    </ul>
                    <h6>HOW LONG DO WE KEEP YOUR PERSONAL INFORMATION?</h6>
                    <p className='read-text'>MMT will retain your Personal Information on its servers for as long as is reasonably necessary for the purposes listed in this polixclusive travel offers, wallet cash-backs, etc. It also allows facilitating your Facebook and Google+ login.</p>
                    <p className='read-text'><b>Location:</b> This permission enables us to give you the benefit of location specific deals and provide you a personalized in-funnel experience. When you launch MakeMyTrip app to make a travel booking, we auto-detect your location so that your nearest airport or city is auto-filled. We also require this permission to recommend you nearest hotels in case you are running late and want to make a quick last minute booking for the nearest hotel. Your options are personalized basis your locations. For international travel, this enables us to determine your time zone and provide information accordingly</p>
                    <p className='read-text'><b>SMS:</b> If you allow us to access your SMS, we read your SMS to autofill or prepopulate ‘OTP’ while making a transaction and to validate your mobile number. This provides you a seamless purchase experience while making a booking and you don’t need to move out of the app to read the SMS and then enter it in the app.</p>
                    <p className='read-text'><b>Phone:</b> The app requires access to make phone calls so that you can make phone calls to hotels, airlines and our customer contact centers directly through the app.</p>
                    <p className='read-text'><b>Contacts:</b> If you allow us to access your contacts, it enables us to provide a lot of social features to you such as sharing your hotel/ flight/ holidays with your friends, inviting your friends to try our app, send across referral links to your friends, etc. We may also use this information to make recommendations for hotels where your friends have stayed. This information will be stored on our servers and synced from your phone.</p>
                    <p className='read-text'><b>Photo/ Media/ Files:</b> The libraries in the app use these permissions to allow map data to be saved to your phone's external storage, like SD cards. By saving map data locally, your phone doesn't need to re-download the same map data every time you use the app. This provides you a seamless Map based Hotel selection experience, even on low bandwidth network.</p>
                    <p className='read-text'><b>Wi-Fi connection information:</b> When you allow us the permission to detect your Wi-Fi connection, we optimize your experience such as more detailing on maps, better image loading, more hotel/ flights/ package options to choose from, etc.</p>
                    <p className='read-text'><b>Device ID & Call information:</b> This permission is used to detect your Android ID through which we can uniquely identify users. It also lets us know your contact details using which we pre-populate specific fields to ensure a seamless booking experience.</p>
                    <p className='read-text'><b>Calendar:</b> This permission enables us to put your travel plan on your calendar.</p>
                </div>
            </section>
        </Layout>
    )
}

export default PrivacyPolicy;