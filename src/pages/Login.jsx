import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Container } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';

import '../styles/login.css';

const Login = () => {
  // const [showTab, setShowTab] = useState();

  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => (ToggleState === index ? className : '');

  const resetPass = useRef();
  const formLogin = useRef();
  const openReset = () => {
    resetPass.current.classList.add('pass__active');
    formLogin.current.classList.add('pass__active');
  };

  const removeReset = () => {
    resetPass.current.classList.remove('pass__active');
    formLogin.current.classList.remove('pass__active');
  };

  return (
    <Helmet title="Account">
      <Commonsection title="Your Account" />
      <section className="acc">
        <Container>
          <div className="acc__content">
            <ul className="acc__tab">
              <li className={`acc__tab-title ${getActiveClass(1, '.acc__tab-active')}`} onClick={() => toggleTab(1)}>
                Login
              </li>
              <li className={`acc__tab-title ${getActiveClass(2, '.acc__tab-active')}`} onClick={() => toggleTab(2)}>
                Create Account
              </li>
            </ul>
            <div className="acc__detail">
              <div className={`acc__desc ${getActiveClass(1, 'acc__desc-active')}`} onClick={() => toggleTab(1)}>
                <form action="#" className="acc__form" ref={formLogin}>
                  <div className="acc__form-inp">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="acc__form-inp">
                    <input type="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="acc__form-btn">
                    Sign in
                  </button>
                  <a href="#" className="acc__form-note" onClick={openReset}>
                    Forgot your password?
                  </a>
                </form>
                <div className="reset__pass" ref={resetPass}>
                  <div className="reset__pass-header">
                    <h4>RESET YOUR PASSWORD</h4>
                    <p>We will send you an email to reset your password.</p>
                  </div>
                  <form action="#" className="acc__form">
                    <div className="acc__form-inp">
                      <input type="email" placeholder="Email" />
                    </div>
                    <button type="submit" className="acc__form-btn">
                      Submit
                    </button>
                    <a href="#" className="acc__form-note" onClick={removeReset}>
                      Cancel
                    </a>
                  </form>
                </div>
              </div>
              <div className={`acc__desc ${getActiveClass(2, 'acc__desc-active')}`} onClick={() => toggleTab(2)}>
                <form action="#" className="acc__form">
                  <div className="acc__form-group">
                    <div className="acc__form-inp">
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="acc__form-inp">
                      <input type="email" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="acc__form-inp">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="acc__form-inp">
                    <input type="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="acc__form-btn">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
