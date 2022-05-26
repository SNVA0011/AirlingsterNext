import React, { useEffect } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Head from 'next/head';
import Header from '../component/Navbar'
import Footer from "../component/Footer"


const Group = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <Head>
                <title>Group - Airlingster</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.airlingster.com/group-travel'} />
            </Head>
            
            <Header />

            <div className="page-title page-title--small align-left" >
                <div className="container">
                    <div className="page-title__content">
                        <h1 className="page-title__name">Group Travel</h1>
                        <div className="">
                            <p> <Link href="/">Home</Link> / Group Travel</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-uspage full-w pyblock-80'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className='about-font-18 mb-4'>

                            <p className='mb-4'>
                                Traveling is one of the most important aspects of human life, and everyone enjoys visiting their favorite places. When you travel with a group of friends or family, it becomes much more exciting. But, isn't it tough to travel in a group on the same flight and in the same hotel? If you choose Airlingster, the answer is definitely no.At Airlingster, we offer a variety of trip packages that have been carefully designed with various aspects of group travel in mind. We provide group travel packages that feature incredible attractions and amenities that will make your trip one to remember for a lifetime. Our group travel packages are inexpensive, and you may book them from anywhere in the world.
                                <br /><br />
                                So, what have you been waiting for? Simply contact us and we will design a suitable plan for you to travel in a group to your preferred destination in an efficient manner.</p>
                        </Col>

                    </Row>
                </Container>
            </div>
            
            <Footer />

        </>
    )
}

export default Group