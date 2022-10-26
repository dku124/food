import React from 'react';
import Slider from 'react-slick';

import imgUser01 from '../../../assets/images/ava-1.jpg';
import imgUser02 from '../../../assets/images/ava-2.jpg';
import imgUser03 from '../../../assets/images/ava-3.jpg';

import '../../../styles/testimonial.css';

const reviewData = [
  {
    reviewText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente quo doloribus eos ea fugit accusamus, reiciendis sequi esse officia est veritatis quibusdam, aperiam necessitatibus laudantium id amet maiores error?',
    reviewer: 'Hogn Philyp',
    imgUer: imgUser01,
  },
  {
    reviewText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel maxime veritatis assumenda, natus officia accusantium saepe perspiciatis ipsam corrupti modi facere autem veniam omnis ex minus velit minima magnam!',
    reviewer: 'Marya Carry',
    imgUer: imgUser02,
  },
  {
    reviewText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero eius obcaecati, ex quod fuga deserunt voluptates quo. Inventore placeat ullam doloribus cum enim voluptatum magnam voluptatibus reiciendis dolorum fugiat!a',
    reviewer: 'Breist History',
    imgUer: imgUser03,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'linear',
  };
  return (
    <Slider {...settings}>
      {reviewData.map((user, index) => (
        <div key={index}>
          <p className="review__text">{user.reviewText}</p>
          <div className="review__user">
            <img src={user.imgUer} alt={user.reviewer} />
            <h6>{user.reviewer}</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
