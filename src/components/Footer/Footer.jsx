import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" className="mb-4">
            <div className="logo__ft">
              <Link to="\home" className="logo">
                <img src={logo} alt="food ordering" />
                <h2>D-Tasty treat</h2>
              </Link>
            </div>
            <p className="ft_text mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magnam</p>
          </Col>
          <Col lg="3" md="4" sm="6" className="mb-4">
            <h4 className="mb-0 ft__title">Delivery Time</h4>
            <ListGroup className="ft__list">
              <ListGroupItem>
                <p>Sunday - Thursday</p>
                <span>10:00am - 11:00pm</span>
              </ListGroupItem>
              <ListGroupItem>
                <p>Friday - Saturday</p>
                <span>Off day</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6" className="mb-4">
            <h4 className="mb-0 ft__title">Contact</h4>
            <ListGroup className="ft__list">
              <ListGroupItem>
                <span>Ha Dong, Ha Noi, VN</span>
              </ListGroupItem>
              <ListGroupItem>
                <p>Phone: 0988604702</p>
                <p>Email: duongkhanhuyen124@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6" className="mb-4">
            <h4 className="mb-0 ft__title">Newsletter</h4>
            <ListGroup className="ft__list">
              <ListGroupItem>
                <span>Subscribe our newsletter</span>
                <div className="newletter">
                  <input type="email" placeholder="Enter your email..." />
                  <button type="submit">
                    <i class="ri-send-plane-line"></i>
                  </button>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6">
            <p className="copyright">Copyright - 2022, website made by D.k.u. All Rights Reserved.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__link ">
              <p className="mb-0">Follow: </p>
              <Link to="">
                <i class="ri-facebook-fill"></i>
              </Link>
              <Link to="">
                <i class="ri-github-line"></i>
              </Link>
              <Link to="">
                <i class="ri-youtube-line"></i>
              </Link>
              <Link to="">
                <i class="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
