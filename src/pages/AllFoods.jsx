import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';
import products from '../assets/fake-data/products';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/allFoots.css';

import ProductCart from '../components/UI/ProductCart/ProductCart';
import { useState } from 'react';
import { useEffect } from 'react';

const AllFoods = () => {
  const [allProduct, setAllProduct] = useState(products);
  const [category, setCategory] = useState('ALL');

  useEffect(() => {
    if (category === 'All') {
      setAllProduct(products);
    }
    if (category === 'Burger') {
      const filterProducts = products.filter((item) => item.category === 'Burger');
      setAllProduct(filterProducts);
    }
    if (category === 'Pizza') {
      const filterProducts = products.filter((item) => item.category === 'Pizza');
      setAllProduct(filterProducts);
    }
    if (category === 'Bread') {
      const filterProducts = products.filter((item) => item.category === 'Bread');
      setAllProduct(filterProducts);
    }
  }, [category]);

  return (
    <Helmet title="All foods">
      <Commonsection title="Foods"></Commonsection>
      <section className="mt-4">
        <Container>
          <Row>
            <Col lg="3">
              <div className="food__sidebar">
                <h4>Category</h4>
                <ul className="category__list">
                  <li onClick={() => setCategory('All')}>All foods</li>
                  <li onClick={() => setCategory('Burger')}>Burger</li>
                  <li onClick={() => setCategory('Pizza')}>Pizza</li>
                  <li onClick={() => setCategory('Bread')}>Bread</li>
                </ul>

                <div className="select">
                  <select>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                  </select>
                </div>

                <div className="search__box">
                  <input type="text" placeholder="I'm looking for..." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <Row>
                {allProduct.map((item, index) => (
                  <Col lg="4" key={index} className="mt-4">
                    <ProductCart item={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
