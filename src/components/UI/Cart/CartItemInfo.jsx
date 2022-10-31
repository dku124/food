import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import { cartActions } from '../../../store/CartSlide/cartSlide';
import '../../../styles/cartItemInfo.css';

const CartItemInfo = ({ item }) => {
  const { id, title, image01, price, quantity, totalPrice } = item;

  // increase or decrease amount item
  const dispatch = useDispatch();
  const increaseItem = () => {
    dispatch(cartActions.addItem({ id, title, price, image01 }));
  };

  const decreaseItem = () => {
    dispatch(cartActions.decreaseItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem>
      <div className="cart__item">
        <img src={image01} alt="" className="cart__item-img" />
        <div className="cart__item-info">
          <div>
            <h6>{title}</h6>
            <p>
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="cart__item-quantity">
              <button onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </button>
              <span>{quantity}</span>
              <button onClick={increaseItem}>
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>
          <button className="cart__item-close" onClick={deleteItem}>
            <i class="ri-close-fill"></i>
          </button>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItemInfo;
