import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import Quickview from '../../../pages/Quickview';
import { cartActions } from '../../../store/CartSlide/cartSlide';
import { viewAction } from '../../../store/QuickviewProduct/QuickviewProduct';

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

  // view product popup
  const [view, setView] = useState(false);
  const toggleView = () => {
    setView(!view);
  };

  // // view product popup c2
  // const view = useSelector((state) => state.view.viewProduct);
  // console.log(view);
  // const toggleView = () => {
  //   dispatch(viewAction.toggle());
  // };

  return (
    <>
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
              <button className="btn order__btn addToCart__btn" onClick={toggleView}>
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
      {view && <Quickview id={id} />}
    </>
  );
};

export default ProductCart;
