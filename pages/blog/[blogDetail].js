import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";
import BreadHero from '../../component/BreadHero';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function BlogDetails(props, router) {


  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    location.events.on('routeChangeStart', () => { window.scrollTo(0, 0); setLoading(true) });
    location.events.on('routeChangeComplete', () => setLoading(false));
    location.events.on('routeChangeError', () => setLoading(false));
    return () => {
      location.events.off('routeChangeStart', () => { window.scrollTo(0, 0); setLoading(true) });
      location.events.off('routeChangeComplete', () => setLoading(false));
      location.events.off('routeChangeError', () => setLoading(false));
    };
  }, [location.events]);


  return (
    <>


      <Head>
        <title>{props.singleblog[0].title}</title>
        <meta name="description" content={props.singleblog[0].description} />
        <meta name="keywords" content={props.singleblog[0].keywords} />
        <link rel="canonical" href={'https://www.airlingster.com/blog' + props.singleblog[0].titleUrl} />
      </Head>

      <Header />





      {
        props.singleblog[0] != '' ?

          <div className='blogadda'>

            <div className="page-title page-title--small page-title--blog align-left" >
              <div className="container">
                <div className="page-title__content">
                  <h1 className="page-title__name">
                    {loading ? 'loading...' : props.singleblog[0].title}
                  </h1>
                </div>
                <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-white'>
                  <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
                  <li className='breadcrumb-item active' aria-current="page">Blog Details</li> </ul></>} />
              </div>
              <div className='mt-2'>
              </div>
            </div>

            <div className='popular-destination blogaddalist details full-w pb-4' >
              <Container>
                <Row>
                  <Col xs={12} lg={7} xl={8} className="mb-4">

                    <div className='blogaddalist-round'>
                      <div className='blogaddalist-inner'>
                        <div className="blog-inner-box2 mb-5 content-ullist">
                          {loading ?
                          <div className='text-center py-5 my-4 w-100'>
                              <div className="spinner-border text-secondary" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            </div>
                            :
                            props.singleblog[0].content === '' ?
                              <p className='pb-2'>No Content found</p>
                              :
                              <div dangerouslySetInnerHTML={{ __html: props.singleblog[0].content }}></div>
                          }
                        </div>
                      </div>
                    </div>


                  </Col>


                  <Col xs={12} lg={5} xl={4}>
                    <aside className="recent-blogsalide">
                      <div className='post__info'>
                        <h3 className='post__title position-relative text-uppercase'>Recent Posts</h3>
                        {
                          props.allblog?.length > 0 ?
                            <ul>
                              {props.allblog.slice(0, 5).map((items, i) => (
                                <li>
                                  <div className='text-left float-left'>
                                    <span className='count-s'>{i + 1}</span>
                                  </div>
                                  <div className='overflow-hidden'>
                                    <Link href={`/blog/${items.titleUrl}`}>
                                      <a className={location.asPath === '/blog/' + items.titleUrl ? 'active' : 'not-active'}>
                                        {items.title}
                                      </a>
                                    </Link>
                                    <p>{items.description}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            : 'No items found !'
                        }
                      </div>
                    </aside>
                  </Col>


                </Row>
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

  // single blogDetail 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": `${params.blogDetail}`,
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "img_url": "",
    "siteId": "144",
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
  const onejson = await res.json()


  // All blog
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
    "siteId": "144",
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
  const resall = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const multiplejson = await resall.json()

  return {
    props: ({
      singleblog: onejson.response,
      allblog: multiplejson.response
    })
  }
}
