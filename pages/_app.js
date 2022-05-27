import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css'
import '../styles/responsive.css'
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const lang = pathname.startsWith("/es") ? "es" : "en";
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Head>
        {/* <!-- Google Tag Manager --> */}
        {/* <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-T54CZW9');`}</script> */}

        {/* <!-- End Google Tag Manager -->  */}
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T54CZW9" height="0" width="0" 
    style={{display:"none",visibility:"hidden"}}></iframe></noscript> */}
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
 