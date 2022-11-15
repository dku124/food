import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import '../styles/contact.css';

const Contact = () => {
  return (
    <Helmet title="Contact us">
      <section className="contact">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="contact__title">Contact us</h2>
            </Col>
            <Col lg="6">
              <div className="map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.223834632891!2d105.79306481542287!3d20.98366279469107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc5dffd5e81%3A0x19e60a7386ec73b1!2zNjAgTMawxqFuZyBOZ-G7jWMgUXV54bq_biwgUC4gVsSDbiBRdcOhbiwgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1668149898474!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </Col>
            <Col lg="6">
              <div className="review__container">
                <div className="rv__content">
                  <div className="rv__form active__form">
                    <fieldset className="rv__form-contact ">
                      <Container>
                        <Row>
                          <Col lg="6" className="rv__form-contact">
                            <label className="rv__form-lbl" for="inp1">
                              Name
                            </label>
                            <input type="text" className="rv__form-inp" placeholder="Enter your name" id="inp1" />
                          </Col>
                          <Col lg="6" className="rv__form-contact">
                            <label className="rv__form-lbl" for="inp2">
                              Email
                            </label>
                            <input type="text" className="rv__form-inp" placeholder="abc@gmail.com" id="inp2" />
                          </Col>
                        </Row>
                      </Container>
                    </fieldset>
                    <fieldset className="rv__form-review">
                      <div className="rv__form-title">
                        <label className="rv__form-lbl" for="inp3">
                          Phone Number
                        </label>
                        <input type="number" className="rv__form-inp" placeholder="0123456789" id="inp3" />
                      </div>
                      <div className="rv__form-body">
                        <label className="rv__form-lbl" for="inp4">
                          Message
                        </label>
                        <textarea class="rv__form-txt" rows="6" placeholder="Write your comments here" id="inp4"></textarea>
                      </div>
                    </fieldset>
                    <fieldset className="rv__form-btn">
                      <button type="submit">SEND</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
