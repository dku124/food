import React from 'react';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CartBar from '../UI/Cart/CartBar';

const Layout = () => {
  return (
    <>
      <Header />
      <CartBar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
