import React, { useEffect } from 'react'
import Head from 'next/head'
import BreadHero from "../component/BreadHero";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../component/Footer';
import Header from "../component/Navbar";


export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <head>
                <title>Terms And Conditions - Airlingster</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.airlingster.com/terms'} />
            </head>

            <Header />

            <div class="page-title page-title--small align-left m-0" >
                <div class="container">
                    <div class="page-title__content">
                        <h1 class="page-title__name">Terms</h1>
                    </div>
                    <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'> <li className="breadcrumb-item" >
                        <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Terms</li> </ul></>} />
                </div>
            </div>

            <div className='about-uspage full-w customizespace-75'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className="about-font-18 uidicslist content-ullist">
                            <h2 className='sub-title mt-0'>Terms and Conditions</h2>
                            <p>Airlingster does not act as principal but makes arrangements with third-party vendors, such as, but not limited to airlines, tour operators , suppliers and consolidators.</p>
                            <p>By using this Site, you acknowledge that the rates offered by Airlingster and affiliate companies are a result of negotiation between Airlingster and the Travel Suppliers and include certain fees retained by them for their services, taxes and other charges. When booking with any Travel Supplier through this Site, you authorize Airlingster and affiliate companies to book reservations or enter a contract on your behalf with Travel Suppliers for the total price displayed, including such fees and any applicable taxes or charges related to the Travel Supplier's or Cheapoflightticket 's services.</p>

                            <p>Airlingster shall not be liable for errors or inaccuracies on the Site, or the failure of Travel Suppliers from whom you obtain services through this Site, including but not limited to airlines, tour operators, suppliers and consolidators. Airlingster , in providing travel management services, does not endorse, guarantee or insure the products or services which are provided by an external supplier, the financial position of such suppliers or the reimbursement to you from any loss as a result of the financial condition of such supplier. In the event that a supplier defaults prior to providing the service to you where a payment has been made, your sole recourse for a refund shall be the defaulting supplier, or from other responsible third party unless such loss was caused solely by Airlingster. In those situations in which a supplier defaults prior to providing services you may pursue any recourse against the supplier for a refund, as permitted by law or statute.</p>
                            <p>
                                Except as expressly stated herein, Airlingster assumes no responsibility for actions relating to travel services beyond the control of Airlingster or its employees. Airlingster is not responsible or liable for any act, error, omission, injury, loss, accident, damage, delay, nonperformance, irregularity, or any consequence thereof, which may be occasioned through neglect, or default or any other act or inaction of any Travel Supplier. Airlingster shall not be liable for any fluctuation in price or change in schedule or equipment or accommodations for any travel service, which occurs subsequent to booking and payment for such service. Airlingster shall not be liable for any cancellation, overbooking, delay, re-routing, strike, any weather occurrence or governmental occurrence as it affects your travel reservation made with us. Airlingster shall not be liable for the depiction of travel products and services made available by any supplier of travel products and services, including but not limited to photographs, listed amenities, ratings, and discounts
                            </p>

                            <p>Airlingster acts as a service that provides value added service to retail travel agents and consumers. Airlingster has no control over and assumes no liability for the actions of the suppliers from whom it obtains travel products or services</p>


                            <p>Airlingster shall not be liable for final currency conversion or rates when paid after a travel reservation is made with us for international travel products and services. You agree and acknowledge that currency rates vary and any quoted price on the Site in local currency is a guideline, and not binding on us or the Travel Supplier.</p>


                            <p>Once certain travel reservations are made and paid for they may be completely non-refundable or there may be a penalty involved in cancellation or seeking a refund from the supplier of travel products and services. Once tickets have been issued there may be a penalty involved for cancellations and refunds. We do not have control over printed prices on the tickets, although some tickets may have BT (bulk fare) printed on them, some may have a specific value on them, which may be different (lower or higher) than the fare collected.</p>

                            <p>Discounts offered may vary depending on a number of factors including airlines utilized, class of service, destination, time of year (low, mid or high season), advance notice provided, minimum stay requirements fulfilled and flight load.</p>
                            <p>Airlingster does not guarantee, endorse, validate or promote other advertiser's products and services that are advertised on our Site.</p>

                            <p>By booking with us a contract may be formed between you and a Travel Supplier, and additional Terms & Conditions may apply to your booking and purchase of travel-related goods and services. Please read the additional Terms & Conditions provided by such Travel Supplier carefully. You hereby agree to be bound by all the Terms & Conditions of purchase imposed by any Travel Supplier with whom you choose to contract, including, but not limited to, payment of all amounts when due and compliance with the Travel Supplier's rules and restrictions regarding availability and use of fares, products, or services. Some Travel Suppliers may require you to present a credit card or cash deposit upon check-in to cover additional expenses incurred during the use of the reserved products or services. Such deposit is unrelated to any payment received by Airlingster for your airline ticket booking. You understand that any violation of a Travel Supplier's rules and restrictions may result in the cancellation of your reservation(s), in denial of access to the respective Service Element or services, in your forfeiting any amount paid for such reservation(s), and/or in our debiting your account for any costs we incur as a result of such violation.</p>

                            <h3 className="mb-1 mt-5 infoheadbx">DISPUTES</h3>
                            <p>Airlingster is committed to customer satisfaction, so if you have a problem or dispute, we will try to resolve your concerns You agree to give us an opportunity to resolve any disputes or claims relating in any way to the Website, any dealings with our customer service agents, any services or products provided, any representations made by us, or our Privacy Policy ("Claims") by contacting Customer Support.</p>


                            <h3 className="mb-1 mt-5 infoheadbx">PROHIBITED ACTIVITIES</h3>

                            <p>The content and information on Airlingster (including, but not limited to, price and availability of travel services), as well as the infrastructure used to provide such content and information, are proprietary to us or our suppliers and providers. While you may make limited copies of your travel itinerary (and related documents) for travel or service reservations booked through Airlingster, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any information, software, products, or services obtained from or through Airlingster. Additionally, you agree not to:</p>

                            <ul>
                                <li> Use Airlingster or its contents for any commercial purpose;</li>
                                <li> Make any speculative, false, or fraudulent reservation or any reservation in anticipation of demand;</li>
                                <li>3. Access, monitor or copy any content or information of Airlingster using any robot, spider, scraper or other automated means or any manual process for any purpose without our express written permission;</li>
                                <li>4. Violate the restrictions in any robot exclusion headers on Airlingster or bypass or circumvent other measures employed to prevent or limit access to Airlingster;</li>
                                <li>Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure;</li>
                                <li> Deep-link to any portion of Airlingster (including, without limitation, the purchase path for any travel services) for any purpose without our express written permission.</li>
                                <li> "Frame", "mirror" or otherwise incorporate any part of Airlingster into any other website without our prior written authorization</li>
                            </ul>

                            <p>If your booking or account shows signs of fraud, abuse or suspicious activity, we may cancel any travel or service reservations associated with your name, email address or account. In addition, we may verify (i.e. preauthorize) your credit card. If you have conducted any fraudulent activity, Airlingster reserves the right to take any necessary legal action and you may be liable for monetary losses to Airlingster, including litigation costs and damages.</p>

                        </Col>

                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    )
}
