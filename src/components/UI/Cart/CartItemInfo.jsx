import React from 'react';
import { ListGroupItem } from 'reactstrap';
import prImg from '../../../assets/images/product_01.jpg';
import '../../../styles/cartItemInfo.css';

const CartItemInfo = () => {
  return (
    <ListGroupItem>
      <div className="cart__item">
        <img src={prImg} alt="" className="cart__item-img" />
        <div className="cart__item-info">
          <div>
            <h6>Burger</h6>
            <p>
              2x <span>$000</span>
            </p>
            <div className="cart__item-quantity">
              <button>
                <i class="ri-subtract-line"></i>
              </button>
              <span>2</span>
              <button>
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>
          <button className="cart__item-close">
            <i class="ri-close-fill"></i>
          </button>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItemInfo;
