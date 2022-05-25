import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"

export default function Blog() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)

  function Getdata() {
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

    fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.response)
        setLoad(true)
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    Getdata()
  }, [])

  console.log(data)
  return (
    <div>

      {load ? <div>
        <div className='blogadda'>

          <div className='popular-destination blogaddalist full-w mb-5'>
            <Container>

              <Row>

                {data.map((items, i) => (
                  <Col xs={12} xl={4} md={6} className="mb-4">
                    <div className='post hover__box postreadmore-card'>
                      <div className="post__info">
                        <h1 className="post__title">{items.title}</h1>
                        <p>{items.description}</p>
                        <br />
                        <Link href={`/blog/${items.titleUrl}`}>
                          <a className='image_area_partition'>
                            <button aria-label="Read More" className='btn btn-primary'>Read More
                              <i class="bi bi-arrow-right-short ml-1 align-arrowmiddle"></i>
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div> : 'loading...'}
    </div>

  )
}
