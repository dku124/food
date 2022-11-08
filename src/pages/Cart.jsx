import React from 'react';
import { Col, Container, Row, Table } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';
import img1 from '../assets/images/product_01.1.jpg';

import '../styles/cart.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/CartSlide/cartSlide';

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Your cart">
      <Commonsection title="Your cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItem.length === 0 ? (
                <h3>No item</h3>
              ) : (
                <Table className="table">
                  <thead>
                    <tr>
                      <th scope="col" width="20%">
                        PRODUCT
                      </th>
                      <th scope="col"></th>
                      <th scope="col" width="20%" className="text-end">
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item, index) => (
                      <Tr key={index} item={item}></Tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
            <Col lg="3">
              <div className="cart__checkout">
                <h3>Checkout</h3>
                <div className="cart__checkout-cont">
                  <div className="cart__inp">
                    <label for="inp" class="form-label">
                      Note for seller
                    </label>
                    <div class="input-group">
                      <textarea type="text" class="inp__note" id="inp" rows="3" />
                    </div>
                  </div>
                  <div className="cart__inp">
                    <label for="inp" class="form-label">
                      Discount code - Applied at checkout
                    </label>
                    <div class="input-group">
                      <input type="text" class="inp" id="inp" />
                    </div>
                  </div>
                </div>
                <div class="cart-total">
                  <div class="cart-total__subtotal">
                    <span class="cart-total__subtotal-title">Subtotal: </span>
                    <span class="cart-total__subtotal-price">${totalAmount}</span>
                  </div>
                  <p class="cart-tax">
                    <em>Taxes and shipping calculated at checkout</em>
                  </p>
                  <div class="cart__bottom-btn">
                    <div class="btn btn__checkout">
                      <a href="/checkout">Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
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
    <tr>
      <td>
        <img src={image01} alt={title} />
      </td>
      <td>
        <p>{title}</p>
        <p>${price}</p>
        <div className="cart__item-quantity">
          <button onClick={decreaseItem}>
            <i class="ri-subtract-line"></i>
          </button>
          <span>{quantity}</span>
          <button onClick={increaseItem}>
            <i class="ri-add-line"></i>
          </button>
        </div>
        <span className="btn__delete" onClick={deleteItem}>
          <i class="ri-delete-bin-6-line"></i>
        </span>
      </td>
      <td className="price">${totalPrice}</td>
    </tr>
  );
};

export default Cart;
