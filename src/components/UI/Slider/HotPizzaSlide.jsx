import React, { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import products from '../../../assets/fake-data/products';
import ProductCart from '../ProductCart/ProductCart';

import '../../../styles/hotPizzaSlide.css';

const HotPizzaSlide = () => {
  const [hotPizza, setHotPizza] = useState(products);
  useEffect(() => {
    const filterHotPizza = products.filter((item) => item.category === 'Pizza');
    setHotPizza(filterHotPizza);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: true,
    useCSS: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {hotPizza.map((item, index) => (
        <ProductCart item={item} key={index} />
      ))}
    </Slider>
  );
};

export default HotPizzaSlide;
