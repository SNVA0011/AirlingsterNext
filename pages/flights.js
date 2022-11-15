import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../component/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../component/Navbar'
import Footer from "../component/Footer"

export default function Flights(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Flights - Airlingster</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.airlingster.com/flights'} />
      </Head>


      <Header />

      <div className='blogadda'>
        <div className="page-title page-title--small page-title--blog align-left" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Flight </h1>
              <p className="page-title__slogan">Check Best Flight With us </p>
            </div>
            <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'> <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights</li> </ul></>} />

          </div>
        </div>

        <div className='container'>
          <p>You&#39;re going somewhere? The most terrible aspect of travelling can be scheduling the commute and
            preparing the schedule, while the rest is merely a bonus. To plan a vacation, you&#39;ll need a sharp mind
            that can execute complex calculations and has excellent organizing abilities. So, who&#39;s to say?
            <br /><br />
            This section will keep you covered for all of your travel needs, particularly flights. For anyone unfamiliar
            with this arena, we discuss anything and anything related to flights, including bookings, reservations,
            cancellations, and baggage.
            <br /><br />
            You may obtain more information about online flight ticket booking by visiting our official website. This
            will undoubtedly improve your <b>online flight ticket booking</b> experience. Our team of professionals will
            analyze your requirements and recommend the finest airline to make your vacation both exciting and
            pleasant.
            <br /><br />
            Because our staff is dedicated, we are able to create a cost-effective commute for all travelers who have
            encountered problems with the <b>online flight reservation system.</b>. You only need to double-check your
            information and the destinations you want to visit. Our professionals ensure that passengers&#39; needs are
            met and assist them with their future plans.
            <br /><br />
            As a result of our assistance and expertise in <b>online airline booking,</b>, you may be eligible for significant
            discounts and benefits as part of the online reservations we make for you. You may also book flight
            tickets online with the help of our trained agents who are dedicated to providing the best possible
            customer service. With the best ever flying experience in some of the best names in the aviation
            industry, get quick flight updates, information, and specifics.</p>
        </div>


        <br />
        <br />
        <br />
        <div className='top-flightoffer full-w'>
          <Container>
            <div className="top-title text-center">
              <p>Airlingster</p>
              <h2>
                Top Flights Deals Offered By Airlingster
              </h2>
            </div>

            {console.log('props.allflights-',props.allflights)}

            {
              props.allflights.length > 0 ?

                <Row className='alldeals-vi justify-content-center'>
                  {props.allflights.filter((items) => items.pageType == "Airline").map((items, i) => (
                    <Col xl={4} lg={6} xs={12}>
                      <Link onClick={() => SendingPageType(items)} href={`/flights/${items.url}-${items.pageValue}`} >
                       <a>
                       <i className="bi bi-arrow-right-circle mr-1"></i> {items.pageName}-{items.pageValue}
                       </a>
                      </Link>
                    </Col>
                  ))}
                </Row>

                : 'No items found !'
            }


          </Container>
        </div>
      </div>

      <Footer />

    </>
  )
}







export const getStaticProps = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "",
    "pageValue": "",
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "144",
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allflights: json.response }
  }
}