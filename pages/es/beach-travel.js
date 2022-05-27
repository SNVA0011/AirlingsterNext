import React, { useEffect } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Head from 'next/head';
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"


const Beach = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <> 
            <Head>
                <title>Beach - Airlingster</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.airlingster.com/beach-travel'} />
            </Head>

            <Header />

            <div className="page-title page-title--small align-left" >
                <div className="container">
                    <div className="page-title__content">
                        <h1 className="page-title__name">Beach Travel</h1>
                        <div className="">
                            <p> <Link href="/">Home</Link> / Beach Travel</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-uspage full-w pyblock-80'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className='about-font-18 mb-4'>

                            <p className='mb-4'>


                                Beach tours are one of the greatest ways to spend your holiday in the presence of nature, and no other site can match the variety of activities that beaches can provide. Beaches with long palm trees, crystal blue water, and pleasant breezes can truly ease your mind. Do you believe you can only conceive these scenarios? Yes, Airlingster.com offers reasonably priced beach vacation packages.
                                <br /><br />
                                Airlingster is a one-stop shop for all of your travel needs, and we provide the greatest beach vacation packages. You may simply find the ideal beach vacation package to suit your preferences and budget. Our beach vacation packages are extremely affordable and include some of the most beautiful beaches in the world.
                                <br /><br />
                                Airlingster has framed and designed enticing packages that help provide all of the amenities at a reasonable cost. Our website can be used to find out more information on places that are unfamiliar to our visitors.
                                <br /><br />
                                So don't overthink it and instead use Airlingster to get the perfect beach vacation package for your budget and preferences.
                                <br /><br />
                            </p>
                        </Col>

                    </Row>
                </Container>
            </div>

            <Footer /> 
        </>
    )
}

export default Beach