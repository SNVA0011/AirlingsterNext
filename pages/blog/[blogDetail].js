import React, { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Image from "next/image"
import Link from "next/link"
import Footer from '../../component/Footer';
import Navbar from "../../component/Navbar"
import BreadHero from '../../component/BreadHero';
import Head from 'next/head'

export default function BlogDetails(props) {
  console.log('kkkkk', props.singleblog)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{props.singleblog[0].title}</title>
        <html lang="en" />
        <meta name="description" content={props.singleblog[0].description} />
        <meta name="keywords" content={props.singleblog[0].keywords} />
        <link rel="canonical" href={`https://www.flyinate.com/blog/${props.singleblog[0].titleUrl}`} />
        <link rel="alternate" href={`https://www.flyinate.com/blog/${props.singleblog[0].titleUrl}`} />
      </Head>
      <Navbar />

      <div className='blogadda'>
        <BreadHero title="Blogs" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page"> <Link href="/blog"> Blog </Link></li> <li className='breadcrumb-item active' aria-current="page">{props.singleblog[0].title}</li> </ul></>} />


        <div className='popular-destination blogaddalist details full-w'>
          <Container>
            {
              props.singleblog?.length > 0 ?
                <>
                  {props.singleblog.map((items, i) => (
                    <div className='blogaddalist-round'>
                      <div className='blogaddalist-inner'>
                        <div className="blog-inner-box2">
                          <p dangerouslySetInnerHTML={{ __html: items.content }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
                : 'No items found !'
            }


          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}



// const param = useRouter();
// const url = param.query.blogDetail;

export async function getServerSideProps(context) {
  const { params } = context
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": params.blogDetail,
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "img_url": "",
    "siteId": "139",
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
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
  const res = await fetch("https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleblog: json.response }
  }


}