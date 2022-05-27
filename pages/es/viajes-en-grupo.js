import React, { useEffect } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Head from 'next/head';
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"


const Group = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <Head>
                <title>Viajes en grupo - Airlingster</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.airlingster.com/es/viajes-en-grupo'} />
            </Head>
            
            <Header />

            <div className="page-title page-title--small align-left" >
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">Viajes en grupo</h1>
                            <div className="">
                                <p> <Link href="/es/">Casa</Link> / Viajes en grupo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-uspage full-w pyblock-80'>
                    <Container>
                        <Row>
                            <Col xs={12} xl={12} className='about-font-18 mb-4'>

                                <p className='mb-4'>

                                    Viajar es uno de los aspectos más importantes de la vida humana y todos disfrutan visitando sus lugares favoritos. Cuando viajas con un grupo de amigos o familiares, se vuelve mucho más emocionante. Pero, ¿no es complicado viajar en grupo en el mismo vuelo y en el mismo hotel? Si elige Airlingster, la respuesta es definitivamente no. En Airlingster, ofrecemos una variedad de paquetes de viaje que han sido cuidadosamente diseñados teniendo en cuenta varios aspectos de los viajes en grupo. Brindamos paquetes de viajes grupales que cuentan con increíbles atracciones y comodidades que harán que su viaje sea inolvidable para toda la vida. Nuestros paquetes de viajes en grupo son económicos y puede reservarlos desde cualquier parte del mundo.
                                    <br /><br />
                                    Entonces, ¿qué has estado esperando? Simplemente contáctenos y diseñaremos un plan adecuado para que viaje en grupo a su destino preferido de manera eficiente.

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

export default Group