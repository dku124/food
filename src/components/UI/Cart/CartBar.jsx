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

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  //work with cart bar
  const cartProduct = useSelector((state) => state.cart.cartItem);

  return (
    <div className="cart__container">
      <div className="cart__bar">
        <div className="cart__bar-header">
          <h4 className="cart__bar-title">Your cart</h4>
          <button className="cart__close" onClick={hideCartBar}>
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <ListGroup className="cart__list">
          {cartProduct.length === 0 ? (
            <h6 className="d-flex justify-content-center">No Item</h6>
          ) : (
            cartProduct.map((item, index) => <CartItemInfo item={item} key={index} />)
          )}
        </ListGroup>
        <div className="cart__bottom">
          <div className="cart__bottom-info">
            <button type="button" className="btn" data-toggle="tooltip" title="Order note">
              <i class="ri-inbox-line"></i>
            </button>
            <button type="button" className="btn" data-toggle="tooltip" title="Add a coupon">
              <i class="ri-percent-line"></i>
            </button>
            <button type="button" className="btn" data-toggle="tooltip" title="Shipping">
              <i class="ri-caravan-line"></i>
            </button>
          </div>
          <h6>
            Subtotal: <span>${totalAmount}</span>
          </h6>
          <p>Taxes and shipping calculated at checkout</p>
          <div className="cart__bottom-btn">
            <div className="btn">
              <Link to="/cart">view cart</Link>
            </div>
            <div className="btn btn__checkout">
              <Link to="/checkout">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBar;
