import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer';
import Navbar from "../component/Navbar"
import Container from 'react-bootstrap/Container'
// import Enginebox from '../Molecules/Home/Enginebox';
import BreadHero from '../component/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
// import loading from "../Atoms/Image/load.gif"
// import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image"
import Head from 'next/head'

export default function Flights(props, pageValue, pageType) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const SendingPageType = (data) => {
    dispatch({
      type: SENDVALUES,
      payload: data
    })
  }


  return (
    <div>
      <Head>
      <Head>
      <html lang="en"/>
    <title>	Blog - Flyinate</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.flyinate.com/flights" />
        <link rel="alternate" href="https://www.flyinate.com/flights" />
    </Head>
      </Head>

      <Navbar />
      <div>
        <div className='blogadda'> 

          <BreadHero title="Flights" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights</li> </ul></>} />

          <div className='popular-destination blogaddalist full-w'>
            <Container>
              <div className="top-title text-center">
                <p>Flights</p>
                <h2>
                  <span>Flights</span>
                </h2>
              </div>


              {
                props.allflights.filter((items) => items.pageType === "Airline")?.length > 0 ?
                  <Row>

                    {props.allflights.filter((items) => items.pageType === "Airline").map((items, i) => ( 
                      <Col xs={12} md={6}>
                        <div className='blogaddalist-round'> 
                          <div className='blogaddalist-inner'>
                          <span className='h4 title'>{items.pageName}-{items.pageValue}</span>
                            <hr className="mx-row-hr" />
                            <Link onClick={() => SendingPageType(items)} href={`/flights/${items.url}-${items.pageValue}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'> <span>Read More</span></a> 
                            </Link>

                          </div>
                        </div>
                      </Col> 

                    ))}
                  </Row>
                  : 'No items found !'
              }

            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}





export async function getServerSideProps() {
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
    "siteId": "139",
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