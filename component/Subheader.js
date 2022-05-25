import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Subheader() {
  return (
    <div className="navtop_callto full-w">
      <Container className="navtop_1">
        <Row className="flex-grow-1 align-items-center">
          <Col xs={12} xl={6}>
            <ul className="callmail">
              <li className="d-inline-block">
                <a
                  href="mailto:support@flyinate.com"
                  target="_blank"
                  rel="noreferrer">
                  <i className="mr-1 bi bi-envelope-fill" />{" "}
                  support@flyinate.com
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} xl={6}>

            <ul className="social-urls text-right">
              <li className="d-inline-block ml-3">
                <a
                  className="Ffacebook"
                  target="_blank"
                  rel="noreferrer"
                  href='https://www.facebook.com/flyinate'>
                  <i className="bi bi-facebook" />
                </a>
              </li>
              <li className="d-inline-block ml-3">
                <a
                  className="Ftwitter"
                  target="_blank"
                  rel="noreferrer"
                  href='https://twitter.com/flyinate'>
                  <i className="bi bi-twitter" />
                </a>
              </li>


              <li className="d-inline-block ml-3">
                <a
                  className="Finstagram"
                  target="_blank"
                  rel="noreferrer"
                  href='https://www.instagram.com/flyinate'>
                  <i className="bi bi-instagram" />
                </a>
              </li>
              <li className="d-inline-block ml-3">
                <a
                  className="Fpinterest"
                  target="_blank"
                  rel="noreferrer"
                  href='https://www.pinterest.com/flyinate'>
                  <i className="bi bi-pinterest" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
