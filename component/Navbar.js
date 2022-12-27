import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from "next/link"
import ChangeCountryMenu from './ChangeCountryMenu'; 
import { useRouter } from 'next/router';


export default function Header() {
    const location = useRouter();
 
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <header id="header" className="site-header p-0">
                <Navbar collapseOnSelect expanded={expanded} bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Link href="/" onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
                                <a className={'navbar-brand ' + (location.pathname === "/" ? 'active' : '')}>
                                    <img src={'/images/logo.png'} alt='logo' width={100}></img>
                                </a>
                            </Link>
                        </Navbar.Brand>
                        <ChangeCountryMenu />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <ul className='navbar-nav'>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/">
                                            <a className={'nav-link ' + (location.pathname === "/" ? 'active' : '')}>
                                                Home</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/about-us">
                                            <a className={'nav-link ' + (location.pathname === "/about-us" ? 'active' : '')}>
                                                About</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/flights">
                                            <a className={'nav-link ' + 
                                            (location.pathname === "/flights" || location.pathname === "/flights/[Airline]" ? 'active' : '')}>
                                                Flight</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/blog">
                                            <a className={'nav-link ' + 
                                            (location.pathname === "/blog" || location.pathname === "/blog/[blogDetail]" ? 'active' : '')}>
                                                Blog</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/contact">
                                            <a className={'nav-link ' + (location.pathname === "/contact" ? 'active' : '')}>
                                                Contact</a></Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse >


                    </Container >
                </Navbar >
            </header >
            <div className='new_header_area_empty full-w'></div>
        </>
    )
}








