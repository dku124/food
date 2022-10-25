import React from 'react';
import { useRef, useEffect } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';

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
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="header__wrapper">
          <Link to="\home" className="logo">
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
              <i class="ri-heart-line"></i>
              <span className="badge">2</span>
            </div>
            <div className="icon cart__icon">
              <i class="ri-shopping-cart-line"></i>
              <span className="badge">2</span>
            </div>
            <div className="user__icon">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
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
