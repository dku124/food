import React from 'react';
import { useSelector } from 'react-redux';
import Quickview from '../../pages/Quickview';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CartBar from '../UI/Cart/CartBar';

const Layout = () => {
  const showCartBar = useSelector((state) => state.cartVisible.cartIsVisible);

  const showItem = useSelector(state=> state.view.viewProduct)

  return (
    <>
      <Header />
      {showCartBar && <CartBar />}
      {showItem && <Quickview />}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
