import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import category01 from '../../../assets/images/category-01.png';
import category02 from '../../../assets/images/category-02.png';
import category03 from '../../../assets/images/category-03.png';
import category04 from '../../../assets/images/category-04.png';

import '../../../styles/category.css';

const categoryData = [
  { display: 'Fastfood', imgUrl: category01 },
  { display: 'Pizza', imgUrl: category02 },
  { display: 'Asian Food', imgUrl: category03 },
  { display: 'Row Meat', imgUrl: category04 },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="3">
            <div className="category__item">
              <div className="category__img">
                <img src={item.imgUrl} alt={item.display} />
              </div>
              <h3>{item.display}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
