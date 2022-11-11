import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection/Commonsection';

import '../styles/checkout.css';

const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="checkout">
        <Container>
          <Row>
            <Col lg="7">
              <form>
                <h4>Contact Infomation</h4>
                <input type="text" placeholder="Enter email or phone number" />
                <div className="form__chb">
                  <input type="checkbox" id="chb" />
                  <label for="chb">Email me with news and offers</label>
                </div>

                <div className="billing">
                  <h4>Billing address</h4>
                  <div className="form__select"></div>
                  <div className="d-flex justify-content-between">
                    <div className="form__inp flex-fill">
                      <input type="text" placeholder="Fist name" />
                    </div>
                    <div className="form__inp flex-fill">
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="form__inp">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="form__inp">
                    <input type="text" placeholder="Apartment, suite, ect..." />
                  </div>
                  <div className="">
                    <div className="form__inp">
                      <input type="text" placeholder="City" />
                    </div>
                    <div className="form__inp">
                      <input type="text" placeholder="Postal code" />
                    </div>
                  </div>
                  <div className="form__chb">
                    <input type="checkbox" id="chb" />
                    <label for="chb">Save this information for next time</label>
                  </div>
                </div>

                <div className="form__footer">
                  <Link to={'/cart'}>Return to cart</Link>
                  <button type="button">Continue to payment</button>
                </div>
              </form>
            </Col>
            <Col lg="5"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
