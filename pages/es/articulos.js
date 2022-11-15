import { useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '../../component/es/Footer';
import Header from "../../component/es/Navbar";
import Head from 'next/head';
import BlogTile from '../../component/es/BlogTile';
import BreadHero from '../../component/es/BreadHero'


export default function Blog(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <title>Artículos - Airlingster</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.airlingster.com/es/articulos'} />
      </Head>

      <Header />


      <div className='blogadda'>
        <div className="page-title page-title--small page-title--blog align-left" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Artículos</h1>

            </div>
            <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'> 
            <li className="breadcrumb-item" > <Link href="/es/">casa</Link> </li>
             <li className='breadcrumb-item active' aria-current="page">Artículos</li> </ul></>} />
          </div>
        </div>



        <div className='popular-destination blogaddalist full-w'>
          <BlogTile allbloglist={props.allbloglist} />
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
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "categoryName": "",
    "siteId": "144",
    "pageType": "Articulo",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response }
  }
}

