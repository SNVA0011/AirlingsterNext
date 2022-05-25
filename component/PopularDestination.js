import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from "next/image"


export default function PopularDestinations() {
  return (
   <>
    {/* PopularDestinations */}
    <div className='popular-destination full-w'>
                <Container>
                    <div className="top-title text-center">
                        <p>Destination lists</p>
                        <h2>
                            Popular <span>Destinations</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            
                                
                                <Link href="/cheap-flights/machu-picchu-flyinate">
                                <a className='image_area_partition'>
                                <Image src='/images/macchu.jpg' width="500" height="300" alt='Machu Picchu' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Machu Picchu</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/cheap-flights/galapagos-islands-flyinate">
                            <a className='image_area_partition'> 
                                <Image src='/images/island.jpg'  width="500" height="300" alt='Galapagos Islands' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Galapagos Islands</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/cheap-flights/cusco-flyinate">
                            <a className='image_area_partition'> 
                                <Image src='/images/Cusco.jpg' width="500" height="300" alt='Cusco' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Cusco</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                        
                            <Link href="/cheap-flights/easter-island-flyinate">
                            <a className='image_area_partition'> 
                                <Image src='/images/easter.jpg'width="500" height="300" alt='Easter Island' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Easter Island</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/cheap-flights/buenos-aires-flyinat">
                            <a className='image_area_partition'> 
                                <Image src='/images/Buenos.jpg'width="500" height="300" alt='Buenos Aires' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Buenos Aires</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/cheap-flights/lima-flyinate">
                            <a className='image_area_partition'> 
                                <Image src='/images/Lima.jpg'width="500" height="300" alt='turkey' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Lima</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
   </>
  )
}

 

