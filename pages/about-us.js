import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link" 
import Header from '../component/Navbar'
import Footer from "../component/Footer"
import Head from 'next/head'
import BreadHero from "../component/BreadHero";
 
export default function AboutUs() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <Head> 
        <title>About us - Airlingster</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.airlingster.com/about-us'} />
      </Head>

      <Header /> 


      <div class="page-title page-title--small align-left" >
        <div class="container">
          <div class="page-title__content">
            <h1 class="page-title__name">About Us</h1>
          </div>
          <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
            <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
            <li className='breadcrumb-item active' aria-current="page">About Us</li> </ul></>} />
        </div>

      </div>



      <div className='about-uspage full-w pyblock-80'>
        <Container>
          <Row>
            <Col xs={12} xl={12} className='about-font-18 mb-5'>
              <p className='mb-4'>Traveling is an activity that anybody may enjoy, and it is the source of joy for some people who appreciate visiting new areas. To make their vacation a success, most people contact a number of travel agencies so that everything may be organised properly. Airlingster is dedicated to providing consumers with high-quality travel arrangements at the greatest possible price. We collaborate with you to manage all aspects of travel in a timely, ethical, and cost-effective manner. Our customers receive expert service, and they ensure that the customer benefits from the experience and the distinctive manner of catering our services that we offer.</p>
              <p>Airlingster was founded with the goal of providing luxury vacations and unparalleled escorted tours. We not only provide you with a variety of exotic vacation packages, but we also modify them to meet your specific needs. The skilled team that we have takes pride in your careful planning of your vacation. We figure out how to make your vacation extra exceptional and then assist you in planning your ideal vacation. So come talk to us about your goals and desired destinations, and you'll see why our clients come back to us time and time again.</p>
            </Col>
          </Row>
        </Container>
      </div>

      
      <Footer />
    </>
  );
}
