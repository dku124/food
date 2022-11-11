import React from 'react';
import { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../../styles/review.css';

const Review = () => {
  const form = useRef('form');

  const toggleForm = () => {
    form.current.classList.toggle('active__form');
  };

  return (
    <div className="review__container">
      <div className="rv__rate">
        <span className="rv__star">
          <i class="ri-star-smile-fill"></i>
          <i class="ri-star-smile-fill"></i>
          <i class="ri-star-smile-fill"></i>
          <i class="ri-star-smile-fill"></i>
          <i class="ri-star-smile-fill"></i>
        </span>
        <span className="rv__rate-caption">Based on 1 review</span>
        <button className="rv__rate-btn" onClick={toggleForm}>
          <i class="ri-edit-fill"></i>WRITE A REVIEW
        </button>
      </div>
      <div className="rv__content">
        <div className="rv__form" ref={form}>
          <h4>Write a review</h4>
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
            <div className="rv__form-rating">
              <p className="rv__form-lbl">Rating</p>
              <span>
                <i class="ri-star-line"></i>
                <i class="ri-star-line"></i>
                <i class="ri-star-line"></i>
                <i class="ri-star-line"></i>
                <i class="ri-star-line"></i>
              </span>
            </div>
            <div className="rv__form-title">
              <label className="rv__form-lbl" for="inp3">
                Title
              </label>
              <input type="text" className="rv__form-inp" placeholder="Give your review title" id="inp3" />
            </div>
            <div className="rv__form-body">
              <label className="rv__form-lbl" for="inp4">
                Your review (1500)
              </label>
              <textarea class="rv__form-txt" rows="6" placeholder="Write your comments here" id="inp4"></textarea>
            </div>
          </fieldset>
          <fieldset className="rv__form-btn">
            <button type="submit">SUBMIT REVIEW</button>
          </fieldset>
        </div>
        <div className="rv__reviews">
          <div className="rv__reviews-cont">
            <div className="rv__reviews-header">
              <span className="rv__star">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
              </span>
            </div>
            <p className="rv__reviews-user">
              <span className="txt-bold">David John</span> on <span className="txt-bold">Jun 08, 2022</span>
            </p>
            <p className="rv__reviews-footer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur, magni rerum harum assumenda aliquam, ipsum animi numquam. Error
              veritatis assumenda ratione unde pariatur quibusdam tempora id!
            </p>
            <a href="#" className="rv__reviews-report">
              Spam
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
