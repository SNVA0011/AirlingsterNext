import React, { useEffect } from "react";
import Header from '../component/Navbar'
import Footer from "../component/Footer"
import Head from 'next/head';
import BreadHero from "../component/BreadHero";
import Link from "next/link";

export default function ContactUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Head> 
				<title>Contact - Airlingster</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
				<link rel="canonical" href={'https://www.airlingster.com/contact'} />
			</Head>

			<Header />

			<div className="page-title page-title--small align-left">
				<div className="container">
					<div className="page-title__content">
						<h1 className="page-title__name">Contact Us</h1>
						<p className="page-title__slogan">Tell you Contact Us</p>
					</div>
					<BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
						<li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Contact Us</li> </ul></>} />
				</div>

			</div>

			<div className="about-uspage full-w pyblock-80">
				<div className="site-content site-contact">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="contact-text">
									<h2>Our Offices</h2>
									<div className="contact-box m-0">
										<h3>USA</h3>
										<p>W Ray Rd, Chandler, AZ 85226</p>

										<a href="#" title="Get Direction">Get Direction</a>
									</div>
									<hr></hr>
									<div className="contact-box m-0">
										<h3>Paris</h3>
										<p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>

										<a href="#" title="Get Direction">Get Direction</a>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="contact-form">
									<h2>Get in touch with us</h2>
									<form action="#" method="POST" className="form-underline">
										<div className="field-inline">
											<div className="field-input">
												<input type="text" name="first_name" value="" placeholder="First Name" />
											</div>
											<div className="field-input">
												<input type="text" name="last_name" value="" placeholder="Last Name" />
											</div>
										</div>
										<div className="field-input">
											<input type="email" name="email" value="" placeholder="Email" />
										</div>
										<div className="field-input">
											<input type="tel" name="tel" value="" placeholder="Phone Number" />
										</div>
										<div className="field-textarea">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
										<div className="field-submit">
											<input type="submit" value="Send Message" className="btn" />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
