import Head from 'next/head'
import CustomizeTravel from '../component/CustomizeTravel'
import Enginebox from '../component/Enginebox'
import Footer from '../component/Footer'
import Header from '../component/Navbar'
import BlogTile from '../component/BlogTile';
import Link from "next/link"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Airlingster | Book Low Fares Flights Tickets & Rental Cars</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.airlingster.com/'} />
        <link rel="alternate" href={'https://www.airlingster.com/'} />
      </Head>


      <Header />

      <div className='business-main english-lang'> 
        {/* enginebanner_sctn */}

        <main id="main" className="site-main overflow  en-lang">
          <Enginebox />

          {/* PopularDestinations */}
          {/* <PopularDestinations /> */}
          {/* <Who/> */}
          {/* <Testimonial/> */}
          {/* CustomizeTravel */}


          <CustomizeTravel />


          <div className="blogs">
            <div className="container p-0">
              <div className="top-title text-center mb-5">
                <p>Blog lists</p>
                <h2>Latest Blogs</h2></div>
              <div className="news__content offset-item animate">
                <BlogTile allbloglist={props.allbloglist} showitem={3} />

                <div className="align-center button-wrap">
                  <Link href="/blog">
                    <a className="btn btn-primary readmore-blog text-uppercase">
                      See More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </main>
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
  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response }
  }
}

