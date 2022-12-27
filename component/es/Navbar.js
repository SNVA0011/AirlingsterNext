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
                            <Link href="/es" onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
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
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/es">
                                            <a className={'nav-link ' + (location.pathname === "/es" ? 'active' : '')}>
                                                Casa</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/es/sobre-nosotras">
                                            <a className={'nav-link ' + (location.pathname === "/es/sobre-nosotras" ? 'active' : '')}>
                                                Sobre nosotras</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/es/vuelos">
                                            <a className={'nav-link ' +
                                                (location.pathname === "/es/vuelos" || location.pathname === "/es/vuelos/[Airline]" ? 'active' : '')}>
                                                Vuelo</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/es/articulos">
                                            <a className={'nav-link ' +
                                                (location.pathname === "/es/articulos" || location.pathname === "/es/articulos/[blogDetail]" ? 'active' : '')}>
                                                Artículos</a></Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} href="/es/contacto">
                                            <a className={'nav-link ' + (location.pathname === "/es/contacto" ? 'active' : '')}>
                                                Contacto</a></Link>
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








