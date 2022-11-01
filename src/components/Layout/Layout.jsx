import React from 'react';
import { useSelector } from 'react-redux';
import Quickview from '../../pages/Quickview';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CartBar from '../UI/Cart/CartBar';

const Layout = () => {
  const showCartBar = useSelector((state) => state.cartVisible.cartIsVisible);

  return (
    <>
      <Header />
      <Quickview />
      {showCartBar && <CartBar />}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
