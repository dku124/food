import React from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import useAuth from '../../custom-hooks/useAuth';
import { cartVisibleAction } from '../../store/CartSlide/cartVisible';

import './header.css';

const nav__link = [
  { path: 'home', display: 'Home' },
  { path: 'foods', display: 'Foods' },
  { path: 'cart', display: 'Cart' },
  { path: 'contact', display: 'Contact' },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  const hideMenu = () => menuRef.current.classList.remove('show__menu');

  const headerRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };
  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener('scroll', stickyHeader);
  });

  // start using redux-toolkit
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // console.log(totalQuantity);

  //on off cartBar
  const dispatch = useDispatch();
  const toggleCartBar = () => {
    dispatch(cartVisibleAction.toggle());
  };

  //favorite
  const favoriteItem = useSelector((state) => state.favorite.favoriteItem);
  const totalQuantityFavorite = favoriteItem.length;

  // display user__info
  const userInfo = useRef();
  const userShow = () => {
    userInfo.current.classList.toggle('user__info-active');
  };

  // display info user on header bar
  const currentUser = useAuth();
  console.log(currentUser);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="header__wrapper">
          <Link to="home" className="logo">
            <img src={logo} alt="food ordering" />
            <h1>D-Tasty treat</h1>
          </Link>

          <div className="navigation" ref={menuRef} onClick={hideMenu}>
            <div className="menu">
              {nav__link.map((item, index) => (
                <NavLink onClick={toggleMenu} to={item.path} key={index} className={(navClass) => (navClass.isActive ? 'nav__active' : '')}>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav__icons">
            <div className="icon fav__icon">
              <Link to="/favorite">
                <i class="ri-heart-line"></i>
                <span className="badge">{totalQuantityFavorite}</span>
              </Link>
            </div>
            <div className="icon cart__icon" onClick={toggleCartBar}>
              <i class="ri-shopping-cart-line"></i>
              <span className="badge">{totalQuantity}</span>
            </div>
            <div className="user__icon">
              <a href="#none" onClick={userShow}>
                {currentUser ? <img src={currentUser.photoURL} alt="" /> : <i class="ri-user-line"></i>}
              </a>
              <div className="user__info" ref={userInfo}>
                <ul>
                  <li>
                    <a href="#none">
                      Signed in as <span>user</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/login">Sign in</Link>
                  </li>
                  <li>
                    <a href="#none">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
