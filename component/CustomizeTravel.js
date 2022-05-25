import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link"
import Image from "next/image"

export default function CustomizeTravel() {
    return (
        <>
            {/* CustomizeTravel */}
            <div className='popular-destination travellist full-w customizespace-75'>

                <Container>
                    <div className="top-title text-center">
                        <p>Travel lists</p>
                        <h2 >
                            Customize <span>Travel</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={4} lg={4} xl={4} className="mb-3">
                            <Link href="/adventure-travel">
                                <a className='image_area_partition sunrealizar'>
                                    <Image src="/images/business_travel.jpg" alt='business_travel' width="370" height="278"></Image>
                                    <div className='wrapper travel_airlinster'>
                                        Adventure Travel
                                    </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={4} lg={4} xl={4} className="mb-3">
                            <Link href="/group-travel">
                                <a className='image_area_partition sunrealizar'>
                                    <Image src="/images/corporate_travel.jpg" alt='corporate_travel' width="370" height="278"></Image>
                                    <div className='wrapper travel_airlinster'>
                                        Group Travel
                                    </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={4} lg={4} xl={4} className="mb-3">
                            <Link href="/beach-travel">
                                <a className='image_area_partition sunrealizar'>
                                    <Image src="/images/group_travel.jpg" alt='group_travel' width="370" height="278"></Image>
                                    <div className='wrapper travel_airlinster'>
                                        Beach Travel
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
