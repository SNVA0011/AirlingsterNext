import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../../component/es/Footer';
import Header from "../../../component/es/Navbar";
import BreadHero from '../../../component/es/BreadHero';
import Head from 'next/head'
import { useRouter } from 'next/router';
import NotFound from '../../es/NotFound'

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



  if (location.isFallback) {
    return <>
      <Header />

      <div className='text-center full-w my-5 py-5'>
        <div class="spinner-border text-secondary mr-2" role="status">
        </div>  Loading...
      </div>

      <Footer />
    </>
  }


  return (
    <>


      <Header />

      {props.singleblog.length > 0 ?
        <>
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta name="description" content={props.singleblog[0].description} />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link rel="canonical" href={'https://www.airlingster.com/es/articulos/' + props.singleblog[0].titleUrl} />
          </Head>
          {
            props.singleblog[0] != '' ?

              <div className='blogadda'>

                <div className="page-title page-title--small page-title--blog align-left" >
                  <div className="container">
                    <div className="page-title__content">
                      <h1 className="page-title__name">{loading ? 'loading...' : props.singleblog[0].title}</h1>
                    </div>
                    <BreadHero linkhtml={<><ul className='breadcrumb bradcum text-black'>
                      <li className="breadcrumb-item" > <Link href="/es/">casa</Link> </li>
                      <li className='breadcrumb-item active' aria-current="page">Detalles del blog</li> </ul></>} />
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
                                        <Link href={`/es/articulos/${items.titleUrl}`}>
                                          <a className={location.asPath === '/es/articulos/' + items.titleUrl ? 'active' : 'not-active'}>
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

        </>
        :
        <NotFound />
      }


      <Footer />


    </>
  )
}



export async function getStaticProps(context) {
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
  const res = await fetch("https://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876", requestOptions)
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
  const resall = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const multiplejson = await resall.json()

  return {
    props: ({
      singleblog: onejson.response,
      allblog: multiplejson.response
    })
  }
}




// paths -> slugs which are allowed
export const getStaticPaths = async () => {
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
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { blogDetail: post.titleUrl }
    })
  })


  return {
    paths,
    fallback: true
  }
}