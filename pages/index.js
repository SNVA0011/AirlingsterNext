import Head from 'next/head' 
import CustomizeTravel from '../component/CustomizeTravel'
import Enginebox from '../component/Enginebox'
import Footer from '../component/Footer'
import Header from '../component/Navbar' 
import BlogTile from '../component/BlogTile';
import Link from "next/link"

export default function Home() {
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

      <div className='business-main'>


        {/* enginebanner_sctn */}

        <main id="main" className="site-main overflow">
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
                <BlogTile />

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
