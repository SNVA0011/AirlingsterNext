import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"
import Head from 'next/head'
import BreadHero from "../../component/es/BreadHero";

export default function AboutUs() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <Head>
        <title>Sobre nosotras - Airlingster</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.airlingster.com/es/sobre-nosotras'} />
      </Head>

      <Header />


      <div className="page-title page-title--small page-title--blog align-left" >
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">sobre nosotras</h1>
          </div>
          <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
            <li className="breadcrumb-item" > <Link href="/es/">casa</Link> </li>
            <li className='breadcrumb-item active' aria-current="page">sobre nosotras</li> </ul></>} />
        </div>
      </div>


      <div className='about-uspage full-w pyblock-80'>
        <Container>
          <Row>
            <Col xs={12} xl={12} className='about-font-18 mb-5'>

              <p>Viajar es una actividad que cualquiera puede disfrutar, y es la fuente de alegría para algunas personas que aprecian visitar nuevas áreas. Para que sus vacaciones sean un éxito, la mayoría de la gente se pone en contacto con varias agencias de viajes para que todo se organice correctamente. Airlingster se dedica a brindar a los consumidores arreglos de viaje de alta calidad al mejor precio posible. Colaboramos con usted para administrar todos los aspectos de los viajes de manera oportuna, ética y rentable. Nuestros clientes reciben un servicio experto y se aseguran de que el cliente se beneficie de la experiencia y la forma distintiva de atender nuestros servicios que ofrecemos.

              </p>                            <br></br>
              <p>Airlingster se fundó con el objetivo de brindar vacaciones de lujo y recorridos guiados incomparables. No solo le brindamos una variedad de paquetes de vacaciones exóticos, sino que también los modificamos para satisfacer sus necesidades específicas. El equipo capacitado que tenemos se enorgullece de su cuidadosa planificación de sus vacaciones. Descubrimos cómo hacer que sus vacaciones sean más excepcionales y luego lo ayudamos a planificar sus vacaciones ideales. Así que venga a hablarnos sobre sus objetivos y destinos deseados, y verá por qué nuestros clientes vuelven a nosotros una y otra vez.</p>
            </Col>

          </Row>
        </Container>
      </div>


      <Footer />
    </>
  );
}
