import Head from 'next/head'
import CustomizeTravel from '../../component/es/CustomizeTravel'
import Enginebox from '../../component/es/Enginebox'
import Footer from '../../component/es/Footer'
import Header from '../../component/es/Navbar'
import BlogTile from '../../component/es/BlogTile';
import Link from "next/link"

export default function Home(props) {
  return (
    <>
      <Head>
      <title>Airlingster | Book Low Fares Flights Tickets & Rental Cars</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.airlingster.com/es'} />
        <link rel="alternate" href={'https://www.airlingster.com/es'} />
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
              <p>Listas de blogs</p>
                            <h2>Últimos blogs</h2></div>
              <div className="news__content offset-item animate">
                <BlogTile allbloglist={props.allbloglist} showitem={3} />

                <div class="align-center button-wrap"><Link href="/es/articulos">
                  <a class="btn btn-primary readmore-blog text-uppercase">ver más</a> 
                </Link></div>

              </div>
            </div>
          </div>

        </main>
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

