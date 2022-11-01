import React, { useState } from 'react';
import '../styles/quickview.css';
import img1 from '../assets/images/product_01.1.jpg';
import '../styles/quickview.css';

import products from '../assets/fake-data/products';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { viewAction } from '../store/QuickviewProduct/QuickviewProduct';

const Quickview = ({ id }) => {
  const product = products.find((item) => item.id === id);
  console.log();

  const hideView = useRef(null);
  const hideViewProduct = () => {
    hideView.current.style.display = 'none';
  };

  //   const dispatch = useDispatch();
  //   const hideViewProduct = () => {
  //     dispatch(viewAction.toggle());
  //   };

  return (
    <div className="quickview" ref={hideView}>
      <div className="quickview__overlay"></div>
      <div className="quickview__container">
        <div className="quickview__img">
          <img src={product.image01} alt="" />
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
          <h5 className="quickview__title">{product.title}</h5>
          <span className="quickview__price">${product.price}</span>
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
        <button className="quickview__close" onClick={hideViewProduct}>
          <i class="ri-close-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Quickview;
