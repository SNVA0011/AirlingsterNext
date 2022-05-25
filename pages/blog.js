import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../component/Footer';
import Header from "../component/Navbar";
import Head from 'next/head'


// import ScrollAnimation from 'react-animate-on-scroll';
import BreadHero from '../component/BreadHero'
// import loading from "../Atoms/Image/load.gif"




export default function Blog(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
    <Head>
    <title>	Blog - Flyinate</title>
    <html lang="en"/>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.flyinate.com/blog" />
        <link rel="alternate" href="https://www.flyinate.com/blog" />
    </Head>
      <Header />

      <div className='blogadda'>
        <BreadHero title="Blog" linkhtml={<><ul className='breadcrumb text-white'>
          <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
          <li className='breadcrumb-item active' aria-current="page">Blog</li> </ul></>} />

        <div className='popular-destination blogaddalist full-w'>
          <Container>
            <div className="top-title text-center">
              <p>Blog lists</p>
              <h2>
                Latest <span>Blog</span>
              </h2>
            </div>


            {
              props.allblog?.length > 0 ?
                <Row>
                  {props.allblog.map((items, i) => (
                    <Col xs={12} md={6}>
                      <div className='blogaddalist-round'>
                        <div className='image_area_partition'>
                          <div className='wrapper'>
                            <span>{items.posttime}</span>
                          </div>
                        </div>
                        <div className='blogaddalist-inner'>
                          <div className='h4 title'>
                            {items.title}
                          </div>
                          <p>{items.description}</p>
                          <hr className="mx-row-hr" />
                          <Link href={`/blog/${items.titleUrl}`}>
                            <a className='btn btn-site ripple-effbtn btn-40'>
                              <span>Read More</span>
                            </a>
                          </Link>
                        </div>
                      </div>
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


export async function getServerSideProps() {
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
  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allblog: json.response }
  }
}