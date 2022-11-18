import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../component/es/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"

export default function Flights(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Vuelos - Airlingster</title>
        <meta name="description" content="Get Latest information about Airlines, holiday packages, flight tickets booking deals and the airlines latest policies through our blog." />
        <meta name="keywords" content="last minute flights, Flight booking online, cheap airlines ticket booking, cheap flight tickets, airlines reservations online, airlines reservations, Flight booking, Airline Tickets, Travel Agency" />
        <link rel="canonical" href={'https://www.airlingster.com/es/vuelos'} />
      </Head>


      <Header />

      <div className='blogadda'>
        <div className="page-title page-title--small page-title--blog align-left" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Vuelos</h1>
              <span>Más reciente <span>Vuelos</span></span>
            </div>
            <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
              <li className="breadcrumb-item" > <Link href="/es/">Casa</Link> </li>
              <li className='breadcrumb-item active' aria-current="page">Vuelos</li> </ul></>} />
          </div>
        </div>

        <div className='container'>
          <p>¿Vas a algún lado? El aspecto más terrible de viajar puede ser programar el viaje y preparar el horario,
            mientras que el resto es simplemente una bonificación. Para planificar unas vacaciones, necesitará una
            mente aguda que pueda ejecutar cálculos complejos y que tenga excelentes habilidades de
            organización. Entonces, ¿quién puede decir?
            <br /><br />
            Esta sección lo mantendrá cubierto para todas sus necesidades de viaje, particularmente vuelos. Para
            cualquiera que no esté familiarizado con este campo, discutimos todo lo relacionado con los vuelos,
            incluidas las reservas, las cancelaciones y el equipaje.
            <br /><br />
            Puede obtener más información sobre la <b>reserva de boletos de avión en línea</b> visitando nuestro sitio
            web oficial. Sin duda, esto mejorará su experiencia de reserva de boletos de avión en línea. Nuestro
            equipo de profesionales analizará sus necesidades y le recomendará la mejor aerolínea para que sus
            vacaciones sean emocionantes y placenteras.
            <br /><br />
            Debido a que nuestro personal está dedicado, podemos crear un viaje rentable para todos los viajeros
            que han tenido problemas con el sistema de reserva de vuelos en línea. Solo necesita verificar su
            información y los destinos que desea visitar. Nuestros profesionales se aseguran de que se satisfagan las
            necesidades de los pasajeros y los ayudan con sus planes futuros.
            <br /><br />
            Como resultado de nuestra asistencia y experiencia en la reserva de aerolíneas en línea, puede ser
            elegible para importantes descuentos y beneficios como parte de las reservas en línea que hacemos
            para usted. También puede reservar boletos de avión en línea con la ayuda de nuestros agentes
            capacitados que se dedican a brindar el mejor servicio al cliente posible. Con la mejor experiencia de
            vuelo en algunos de los mejores nombres de la industria de la aviación, obtenga actualizaciones rápidas
            de vuelos, información y detalles específicos.</p>
        </div>


        <br />
        <br />
        <br />


        <div className='top-flightoffer full-w'>
          <Container>
            <div className="top-title text-center">
              <p>Airlingster</p>
              <h2>
                Principales ofertas de vuelos ofrecidas por Airlingster
              </h2>
            </div>

            {console.log('props.allflights-', props.allflights)}

            {
              props.allflights.length > 0 ?

                <Row className='alldeals-vi justify-content-center'>
                  {props.allflights.filter((items) => items.pageType === "AirlineE").map((items, i) => (
                    <Col xl={4} lg={6} xs={12}>
                      <Link onClick={() => SendingPageType(items)} href={`/es/vuelos/${items.url}-${items.pageValue}`} >
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
    props: { allflights: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}