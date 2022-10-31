import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import CartItemInfo from './CartItemInfo';
import '../../../styles/cartBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartVisibleAction } from '../../../store/CartSlide/cartVisible';

const CartBar = () => {
  const dispatch = useDispatch();
  const hideCartBar = () => {
    dispatch(cartVisibleAction.toggle());
  };

  //work with cart bar
  const cartProduct = useSelector((state) => state.cart.cartItem);

  return (
    <div className="cart__container">
      <div className="cart__bar">
        <button className="cart__close" onClick={hideCartBar}>
          <i class="ri-close-fill"></i>
        </button>
        <ListGroup className="cart__list">
          {cartProduct.length === 0 ? (
            <h6 className="d-flex justify-content-center">No Item</h6>
          ) : (
            cartProduct.map((item, index) => <CartItemInfo item={item} key={index} />)
          )}
        </ListGroup>
        <div className="cart__bottom">
          <h6>
            Subtotal Amount: <span>$000</span>
          </h6>
          <button className="btn btn__checkout">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBar;
