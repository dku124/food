import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/Category/Category';

import feature01 from '../assets/images/service-01.png';
import feature02 from '../assets/images/service-02.png';
import feature03 from '../assets/images/service-03.png';

const featureData = [
  { title: 'Quick Delivery', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.', imgUrl: feature01 },
  { title: 'Super Dine In', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.', imgUrl: feature02 },
  { title: 'Easy Pick Up', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.', imgUrl: feature03 },
];

const Home = () => {
  return (
    <Helmet title={'home'}>
      <section className="spotlight__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h3 className="mb-3">Easy way to make an order</h3>
                <h2 className="hero__title">
                  <span className="txt__color">HUNGRY?</span> Just wait <br />
                  food at <span className="txt__color">your door</span>
                </h2>
                <p className="hero__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
                <div className="hero__btns">
                  <Link to="/foods" className="btn order__btn">
                    Order now
                    <span>
                      <i class="ri-arrow-right-s-line"></i>
                    </span>
                  </Link>
                  <Link to="/foods" className="btn all-foods__btn">
                    See all foods
                  </Link>
                </div>
                <div className="hero__service">
                  <p>
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p>
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="taste food" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="featute__subtitle">What we serve</h5>
              <h3 className="feature__title">
                Just sit back at home <br />
                we will <span>take care</span>
              </h3>
              <p className="feature__text mt-4 mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nihil</p>
              <p className="feature__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nihil</p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="14" className="mt-5">
                <div className="feature__item text-center px-5">
                  <img src={item.imgUrl} alt={item.title} className="w-25 mb-3" />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
