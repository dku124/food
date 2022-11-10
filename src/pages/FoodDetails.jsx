import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';
import products from '../assets/fake-data/products';
import { Container, Row, Col } from 'reactstrap';

import '../styles/foodDetail.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/CartSlide/cartSlide';

const FoodDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const itemDetail = products.find((item) => item.id === id);
  // console.log(itemDetail);

  const { title, image01, image02, image03, category, desc, price, quantity } = itemDetail;
  // set image display
  const [selectImg, setSelectImg] = useState();

  //set tab dispay
  const [tab, setTab] = useState('desc');
  const [contentTab, setContentTab] = useState('');

  useEffect(() => {
    if (tab === 'desc') {
      setContentTab(desc);
    }
    if (tab === 'shipping') {
      setContentTab(<p>Shipping</p>);
    }
    if (tab === 'refurn') {
      setContentTab(<p>refurn</p>);
    }
    if (tab === 'review') {
      setContentTab(<p>review</p>);
    }
  }, [tab]);

  // add to cart

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({ id, image01, title, price }));
  };

  return (
    <Helmet title={title}>
      <Commonsection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div>
                <img src={selectImg || image01} alt={title} className="item__img" />
                <div className="item__img-group">
                  <img src={image01} alt={title} onClick={() => setSelectImg(image01)} />
                  <img src={image02} alt={title} onClick={() => setSelectImg(image02)} />
                  <img src={image03} alt={title} onClick={() => setSelectImg(image03)} />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="item__desc">
                <div className="item__review">
                  <span className="badge__star">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span className="badge__caption">1 review</span>
                </div>
                <h3 className="item__title">{title}</h3>
                <p className="item__price">${price}</p>
                <div className="item__content">
                  <p>{desc}</p>
                  <span className="instock">100 in stock</span>
                  <div className="item__size">
                    <span>double cheese</span>
                    <span>double meat</span>
                  </div>
                  <div className="item__button-group">
                    <div className="item__button-quantity">
                      <button>
                        <i class="ri-subtract-line"></i>
                      </button>
                      <span>{quantity}0</span>
                      <button>
                        <i class="ri-add-line"></i>
                      </button>
                    </div>
                    <button className="add__btn" onClick={addToCart}>
                      ADD TO CART
                    </button>
                    <button className="wish__btn">
                      <i class="ri-heart-line"></i>
                    </button>
                  </div>
                  <div class="buy__btn">
                    <Link to={'/checkout'}>BUY IT NOW</Link>
                  </div>
                </div>
                <div className="organization">
                  <div className="item__organization">
                    <span className="item__organization-label">Category: </span>
                    <span className="item__organization-text">{category}</span>
                  </div>
                  <div className="item__organization">
                    <span className="item__organization-label">Tag: </span>
                    <span className="item__organization-text">
                      <a href="#">#{category}</a>
                    </span>
                  </div>
                  <div className="item__organization">
                    <span className="item__organization-label">Share: </span>
                    <span className="item__organization-text">
                      <a href="#none" className="sosial">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="#none" className="sosial">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="#none" className="sosial">
                        <i class="ri-pinterest-fill"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="item-more__info">
                <div className="tab__wrapper">
                  <h5 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>
                    Description
                  </h5>
                  <h5 className={`${tab === 'shipping' ? 'active__tab' : ''}`} onClick={() => setTab('shipping')}>
                    Shipping
                  </h5>
                  <h5 className={`${tab === 'refurn' ? 'active__tab' : ''}`} onClick={() => setTab('refurn')}>
                    Refurn
                  </h5>
                  <h5 className={`${tab === 'refurn' ? 'active__tab' : ''}`} onClick={() => setTab('review')}>
                    Review
                  </h5>
                </div>
                <div className="tab__content">{contentTab}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
