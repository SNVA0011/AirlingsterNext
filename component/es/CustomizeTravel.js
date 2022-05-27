import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link"
import Image from "next/image"

export default function CustomizeTravel() {
    return (
        <>


            <div className='popular-destination travellist full-w customizespace-75'>

                <Container>
                    <div className="top-title text-center">
                        <p>Listas de viajes</p>
                        <h2 >
                            Personalizar <span>Viaje</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={4} lg={4} xl={4} className="mb-3">
                            <Link href="/es/Viaje_de_aventura">
                                <a className='image_area_partition sunrealizar'>
                                    <img src={"/images/business_travel.jpg"} alt='business_travel' width="370" height="278"></img>
                                    <div className='wrapper travel_airlinster'> 
                                        Viaje de aventura
                                    </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={4} lg={4} xl={4} className="mb-3">
                            <Link href="/es/Viajes_en_grupo">
                                <a className='image_area_partition sunrealizar'>
                                    <img src={"/images/corporate_travel.jpg"} alt='corporate_travel' width="370" height="278"></img>
                                    <div className='wrapper travel_airlinster'>
                                        Viajes en grupo
                                    </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={4} lg={4} xl={4} className="mb-3">
                            <Link href="/es/Viajes_a_la_playa">
                                <a className='image_area_partition sunrealizar'>
                                    <img src={"/images/group_travel.jpg"} alt='group_travel' width="370" height="278"></img>
                                    <div className='wrapper travel_airlinster'> 
                                        Viajes a la playa
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
