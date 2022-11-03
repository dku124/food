import React, { useState } from 'react';
import '../styles/quickview.css';
import '../styles/quickview.css';

import products from '../assets/fake-data/products';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { viewAction } from '../store/QuickviewProduct/QuickviewProduct';
import { useSelector } from 'react-redux';

const Quickview = () => {
  // select image display
  const [selectedImage, setSelectedImage] = useState();

  const itemView = useSelector((state) => state.item.item);

  const item = products.find((item) => item.id === itemView.id);

  //hide popup
  const dispatch = useDispatch();

  const hideView = useRef(null);
  const hideViewProduct = () => {
    dispatch(viewAction.toggle());
  };

  return (
    <div className="quickview" ref={hideView}>
      <div className="quickview__overlay"></div>
      <div className="quickview__container">
        <div className="quickview__group">
          <div className="quickview__img">
            <img src={selectedImage || item.image01} alt="" />
          </div>
          <div className="quickview__img-group">
            <img src={item.image01} alt="" onClick={() => setSelectedImage(item.image01)} />
            <img src={item.image02} alt="" onClick={() => setSelectedImage(item.image02)} />
            <img src={item.image03} alt="" onClick={() => setSelectedImage(item.image03)} />
          </div>
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
          <h5 className="quickview__title">{item.title}</h5>
          <span className="quickview__price">${item.price}</span>
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
