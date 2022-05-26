import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../component/BreadHero";
import Header from '../../component/Navbar'
import Footer from "../../component/Footer"

export default function Airline(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{props.singleflight[0].metaTitle}</title>
        <meta name="description" content={props.singleflight[0].metaDesc} />
        <meta name="keywords" content={props.singleflight[0].metaKeyword} />
				<link rel="canonical" href={`https://www.airlingster.com/flights/${props.singleflight[0].url}-${props.singleflight[0].pageValue}`} />
      </Head>

      {console.log('props-',props)}

      <Header />
      {
        props.singleflight?.length > 0 ?

          <div className='blogadda'>
            <div className="page-title page-title--small page-title--blog align-left" >
              <div className="container">
                <div className="page-title__content">
                  <h1 className="page-title__name">{props.singleflight[0].metaTitle}</h1>
                </div>
                <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
                  <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights Details</li> </ul></>} />
              </div>
            </div>

            <div className='popular-destination blogaddalist details full-w'>
              <Container> 
                  <div className='blogaddalist-round'>
                    <div className='blogaddalist-inner'> 
                      <div className="blog-inner-box2 pb-5 content-ullist">
                        {props.singleflight[0].contentData.length == 0 ?
                          <p className='pb-2'>No Content found</p>
                          :
                          <div  dangerouslySetInnerHTML={{ __html: props.singleflight[0].contentData }}></div>
                        }
                      </div>
                    </div>
                  </div> 
              </Container>
            </div>
          </div>

          : 'No items found !'
      }



      <Footer />
    </>
  )
}






export async function getServerSideProps(context) {
  const { params } = context
  const pageurl = params.Airline

  var cityname = pageurl.split("-")[2]
  let actualURLParts = pageurl.split("-")

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "Airline",
    "pageValue": cityname,
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
    "url": actualURLParts[0] + '-' + actualURLParts[1],
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleflight: json.response }
  }
}