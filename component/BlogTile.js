import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"


export default function Blog(props) {
  console.log('props======>', props)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='blogadda'>

        <div className='popular-destination blogaddalist full-w mb-5'>
          <Container>
            {
              props.allbloglist?.length > 0 ?
                <Row>

                  {props.showitem ?
                    props.allbloglist.slice(0,props.showitem).map((items, i) => (
                      <Col xs={12} xl={4} md={6} className="mb-4">
                        <div className='post hover__box postreadmore-card'>
                          <div className="post__info">
                            <h1 className="post__title">{items.title}</h1>
                            <p>{items.description}</p>
                            <br />
                            <Link href={`/blog/${items.titleUrl}`}>
                              <a className='image_area_partition'>
                                <button aria-label="Read More" className='btn btn-primary'>Read More
                                  <i className="bi bi-arrow-right-short ml-1 align-arrowmiddle"></i>
                                </button>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))
                    :
                    props.allbloglist.map((items, i) => (
                      <Col xs={12} xl={4} md={6} className="mb-4">
                        <div className='post hover__box postreadmore-card'>
                          <div className="post__info">
                            <h1 className="post__title">{items.title}</h1>
                            <p>{items.description}</p>
                            <br />
                            <Link href={`/blog/${items.titleUrl}`}>
                              <a className='image_area_partition'>
                                <button aria-label="Read More" className='btn btn-primary'>Read More
                                  <i className="bi bi-arrow-right-short ml-1 align-arrowmiddle"></i>
                                </button>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))
                  }


                </Row> : 'No items found !'
            }
          </Container>
        </div>
      </div>
    </>

  )
}


