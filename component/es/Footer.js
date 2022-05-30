import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link"

export default function Footer() {
  return (
    <>

      <section className="banner-contact">
        <div className="container">
          <div className="banner-inner">
            <h2>Disfruta Tu Viaje Al Mejor Vuelo. Proporcionamos cada vez.</h2>
            {/* <a href="#" className="btn"></a> */}
          </div>
        </div>
      </section>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <div className="footer__top__info">
                  <a title="Logo" className="footer__top__info__logo"><img src={'/images/logo.png'} alt="logo" /></a>
                  <p className="footer__top__info__desc">
                    Descubre cosas increíbles para hacer donde quiera que vayas.</p>

                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <aside className="footer__top__nav">
                  <h3>Empresa</h3>
                  <ul>
                    <li><Link href="/es/sobre-nosotras"  >Sobre nosotros</Link></li>
                    <li> <Link href="/es/vuelos" >vuelo</Link></li>
                    <li><Link href="/es/articulos"  >Artículos</Link></li>
                    <li><Link href="/es/contacto" title="Contact">
                      Contacto</Link></li>
                    <li className="d-none"><Link href="/" >Home</Link></li>
                    <li className="d-none"><Link href="/es" >Casa</Link></li>

                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <aside className="footer__top__nav">
                  <h3>Support</h3>
                  <ul>
                    <li><Link href="/es/politica-de-privacidad" title="Contact" >Política de privacidad</Link></li>
                    <li><Link href="/es/terminos-y-condiciones" title="Contact" >
                      Términos y Condiciones</Link></li>
                    {/* <li><Link href="/es/site-map" title="Contact" >
mapa del sitio</Link></li> */}

                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <aside className="footer__top__nav footer__top__nav--contact">
                  <h3>Contacta con nosotros</h3>
                  <p>Email: <a href="mailto:support@airlingster.com" className="__cf_email__" data-cfemail="">support@airlingster.com</a></p>
                  {/* <p>Phone: 1 (00) 832 2342</p> */}
                  <ul>
                    <li className="facebook">
                      <a title="Facebook" target='_blank' href="https://www.facebook.com/airlingster">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="twitter mb-2">
                      <a title="Twitter" target='_blank' href="https://twitter.com/Airlingster1">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="instagram mb-2">
                      <a title="Instagram" target='_blank' href="https://www.instagram.com/air_lingster/?hl=en">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>

                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__bottom__copyright">
              © 2022 <Link href="/es/">Airlingster</Link>,con domicilio social en el estado de
              W Ray Rd, Chandler, AZ 85226. Reservados todos los derechos.</p>
          </div>
        </div>
      </footer>

    </>
  );
}
