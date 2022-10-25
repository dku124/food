import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/productCart.css';

const ProductCart = (props) => {
  const { id, title, image01, price } = props.item;
  return (
    <div className="product__item">
      <Link to={`/foods/${id}`}>
        <div className="product__img">
          <img src={image01} alt="" className="w-50" />
        </div>
      </Link>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <span className="product__price">${price}</span>
          <button className="btn order__btn addToCart__btn">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
