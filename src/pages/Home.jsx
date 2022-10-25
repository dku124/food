import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/Category/Category';

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
    </Helmet>
  );
};

export default Home;
