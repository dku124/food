import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection/Commonsection';

import '../styles/checkout.css';

const Checkout = () => {
  const items = useSelector((state) => state.cart.cartItem);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const formContact = useRef();
  const payment = useRef();
  const showPayment = () => {
    formContact.current.classList.add('payment__active');
    payment.current.classList.add('payment__active');
  };

  const showInfo = () => {
    formContact.current.classList.remove('payment__active');
    payment.current.classList.remove('payment__active');
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="checkout">
        <Container>
          <Row>
            <Col lg="7" className="form">
              <div className="breadcrum">
                <Link to="/cart">
                  Cart<i class="ri-arrow-right-s-line"></i>
                </Link>
                <span onClick={showInfo}>
                  Infomation<i class="ri-arrow-right-s-line"></i>
                </span>
                <span onClick={showPayment}>Payment</span>
              </div>
              <div className="form__list">
                <form className="form__contact" ref={formContact}>
                  <h4>Contact Infomation</h4>
                  <div className="form__inp">
                    <input type="text" placeholder="Enter email or phone number" />
                  </div>
                  <div className="form__chb">
                    <input type="checkbox" id="chb" />
                    <label for="chb">Email me with news and offers</label>
                  </div>

                  <div className="billing">
                    <h4>Billing address</h4>
                    <div className="form__select"></div>
                    <div className="form__group">
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
                    <div className="form__group">
                      <div className="form__inp flex-fill">
                        <input type="text" placeholder="City" />
                      </div>
                      <div className="form__inp flex-fill">
                        <input type="text" placeholder="Postal code" />
                      </div>
                    </div>
                    <div className="form__chb">
                      <input type="checkbox" id="chb" />
                      <label for="chb">Save this information for next time</label>
                    </div>
                  </div>

                  <div className="form__footer">
                    <Link to={'/cart'}>
                      <i class="ri-arrow-left-s-line"></i> Return to cart
                    </Link>
                    <button type="button" onClick={showPayment}>
                      Continue to payment
                    </button>
                  </div>
                </form>

                <div className="payment" ref={payment}>
                  <div className="payment__box">
                    <p>
                      <span className="payment__title">Contact</span>
                      <span className="payment__text">abc@gmail.com</span>
                      <a href="#" className="payment__change">
                        Change
                      </a>
                    </p>
                    <p>
                      <span className="payment__title">Billing</span>
                      <span className="payment__text">Ha noi</span>
                      <a href="#" className="payment__change">
                        Change
                      </a>
                    </p>
                  </div>
                  <div className="payment__content">
                    <h4>Payment</h4>
                    <div className="payment__content-bill"></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div className="order__content">
                <div className="order__list">
                  {items.map((item, index) => (
                    <div className="order__item" key={index}>
                      <div className="order__info">
                        <div className="order__img">
                          <img src={item.image01} alt={item.title} />
                          <span>{item.quantity}</span>
                        </div>
                        <div className="order__title">
                          <p>{item.title}</p>
                          <span>{item.category}</span>
                        </div>
                      </div>
                      <p className="order__price">${item.totalPrice}</p>
                    </div>
                  ))}
                </div>
                <div className="order__discount">
                  <div className="form__inp">
                    <input type="text" placeholder="Discount code" />
                  </div>
                  <button type="button">Apply</button>
                </div>
                <div className="order__bottom">
                  <p className="price__total">Total</p>
                  <p className="price__number">
                    <span>USD</span>
                    <strong>${totalAmount}</strong>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
