import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { cartActions } from '../../../store/CartSlide/cartSlide';

import '../../../styles/productCart.css';

const ProductCart = (props) => {
  const { id, title, image01, price } = props.item;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      }),
    );
  };

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
          <ButtonGroup>
            <button className="btn order__btn addToCart__btn">
              <i class="ri-search-2-line"></i>
            </button>
            <button className="btn order__btn addToCart__btn">
              <i class="ri-heart-line"></i>
            </button>
            <button className="btn order__btn addToCart__btn" onClick={addToCart}>
              <i class="ri-shopping-bag-line"></i>
            </button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
