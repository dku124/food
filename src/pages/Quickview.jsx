import React from 'react';
import '../styles/quickview.css';
import img1 from '../assets/images/product_01.1.jpg';
import '../styles/quickview.css';
const Quickview = () => {
  return (
    <div className="quickview">
      <div className="quickview__overlay"></div>
      <div className="quickview__container">
        <div className="quickview__img">
          <img src={img1} alt="" />
        </div>
        <div className="quickview__info">
          <div className="quickview__review">
            <span className="quickview__badge">
              <span className="badge__starrating">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
              </span>
              <span className="badge__caption">1 review</span>
            </span>
          </div>
          <h5 className="quickview__title">Humburger</h5>
          <span className="quickview__price">$100</span>
          <div className="quickview__button">
            <div className="quickview__button-group">
              <button className="btn order__btn addToCart__btn">
                <i class="ri-heart-line"></i>
              </button>
              <button className="btn order__btn addToCart__btn">
                <i class="ri-shopping-bag-line"></i>
              </button>
            </div>
          </div>
        </div>
        <span className="quickview__close">
          <i class="ri-close-fill"></i>
        </span>
      </div>
    </div>
  );
};

export default Quickview;
