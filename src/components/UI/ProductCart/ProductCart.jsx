import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { cartActions } from '../../../store/CartSlide/cartSlide';
import { favoriteActions } from '../../../store/FavoriteSlice/FavoriteSlice';
import { showActions } from '../../../store/QuickviewItemSlice/QuickviewItemSlice';
import { viewAction } from '../../../store/QuickviewProduct/QuickviewProduct';

import '../../../styles/productCart.css';

const ProductCart = ({ item }) => {
  const { id, title, image01, price } = item;

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

  //show popup item quickview
  const showItem = () => {
    dispatch(
      showActions.showItem({
        id,
        title,
        price,
        image01,
      }),
      viewAction.toggle(),
    );
    console.log(dispatch(viewAction.toggle()));
  };

  //add to wishlist
  const wishBtn = useSelector((state) => state.favorite.wishBtn);
  const wishListBtn = useRef(null);
  const addToWishlist = () => {
    wishListBtn.current.classList.add('favorite');
    dispatch(
      favoriteActions.addToFavorite({
        id,
        title,
        price,
        image01,
      }),
    );
    if (!wishBtn) {
      wishListBtn.current.classList.add('favorite');
      console.log(!wishBtn);
    } else {
      wishListBtn.current.classList.remove('favorite');
      console.log(!wishBtn);
    }
  };

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
              <button className="btn order__btn addToCart__btn " onClick={showItem}>
                <i class="ri-search-2-line"></i>
              </button>
              <button className="btn order__btn addToCart__btn wish__btn" ref={wishListBtn} onClick={addToWishlist}>
                <i class="ri-heart-line"></i>
              </button>
              <button className="btn order__btn addToCart__btn" onClick={addToCart}>
                <i class="ri-shopping-bag-line"></i>
              </button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
