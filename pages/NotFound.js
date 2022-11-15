import React from 'react'
import Head from 'next/head'
import Link from "next/link"

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 Page Not Found</title>
            </Head>

            <div className="about-uspage full-w py-5 my-3">
                <div className="container text-center py-3">
                    <div className="four_zero_four_bg">
                        <h1 className="display-3 text-gray-800 font-bold mb-3">404</h1>
                    </div>
                    <div className="contant_box_404">
                        <h3 className="h4 font-semibold text-blue-500">
                            The page you requested could not be found.
                        </h3> 
                        <p className='text-base mb-4  font-semibold'>Click the button below to go back to the Homepage.</p>

                        <div className='d-inline-block'>
                            <Link href="/">
                                <a className="btn btn-site btn-block ripple-effbtn">
                                    <span>Back to Home</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound