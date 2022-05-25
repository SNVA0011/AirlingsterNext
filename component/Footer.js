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
      <section class="banner-contact">
        <div class="container">
          <div class="banner-inner">
            <h2>Enjoy Your Trip To The Best Flight. We Provided Each And Every Time.</h2>
            {/* <a href="#" class="btn"></a> */}
          </div>
        </div>
      </section>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="footer__top">
            <div class="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <div class="footer__top__info">
                  <a class="footer__top__info__logo"><img src={'/images/logo.png'} alt="no-image-found" /></a>
                  <p class="footer__top__info__desc">Discover amazing things to do everywhere you go.</p> 
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <aside class="footer__top__nav">
                  <h3>Company</h3>
                  <ul>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/blog" >Blog</Link></li>

                    <li><Link href="/contact" >Contact</Link></li>

                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <aside class="footer__top__nav">
                  <h3>Support</h3>
                  <ul>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/terms">Terms and Condition</Link></li>


                  </ul>
                </aside>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <aside class="footer__top__nav footer__top__nav--contact">
                  <h3>Contact Us</h3>
                  <p>Email: <a href="mailto:support@airlingster.com" class="__cf_email__" data-cfemail="">support@airlingster.com</a></p>
                  {/* <p>Phone: 1 (00) 832 2342</p> */}
                  <ul>
                    <li class="facebook">
                      <a target='_blank' href="https://www.facebook.com/airlingster">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li class="twitter mb-2">
                      <a target='_blank' href="https://twitter.com/Airlingster1">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li class="instagram mb-2">
                      <a target='_blank' href="https://www.instagram.com/air_lingster/?hl=en">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>

                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div class="footer__bottom">
            <p class="footer__bottom__copyright">2022 © <Link href="/">Airlingster</Link>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
