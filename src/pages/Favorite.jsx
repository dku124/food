import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';
import { cartActions } from '../store/CartSlide/cartSlide';
import { favoriteActions } from '../store/FavoriteSlice/FavoriteSlice';
import '../styles/favorite.css';

const Favorite = () => {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItem);
  console.log(favoriteItems);

  return (
    <Helmet title="Wishlist">
      <Commonsection title="Wishlist" />
      <section className="wishlist">
        <Container>
          <Row>
            {favoriteItems.length === 0 ? (
              <h3 className="text-center">No item</h3>
            ) : (
              favoriteItems.map((item, index) => (
                <Col lg="6" className="mt-4" key={index}>
                  <FavoriteItem item={item} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const FavoriteItem = ({ item }) => {
  const dispacth = useDispatch();
  const { id, title, image01, price } = item;
  const addToCart = () => {
    dispacth(
      cartActions.addItem({
        id,
        image01,
        title,
        price,
      }),
    );
  };
  const deleteFavoriteItem = () => {
    dispacth(favoriteActions.deleteFavoriteItem(id));
  };
  return (
    <div className="favorite__item">
      <div className="item__info">
        <img src={image01} alt={title} />
        <div>
          <h4>{title}</h4>
          <p>${price}</p>
        </div>
      </div>
      <div className="item__btn">
        <button className="btn order__btn addToCart__btn" onClick={addToCart}>
          <i class="ri-shopping-bag-line"></i>
        </button>
        <span className="item__close" onClick={deleteFavoriteItem}>
          <i class="ri-close-fill"></i>
        </span>
      </div>
    </div>
  );
};

export default Favorite;
