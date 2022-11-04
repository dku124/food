import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';
import products from '../assets/fake-data/products';
import { Container, Row, Col } from 'reactstrap';
import '../styles/allFoods.css';

import ProductCart from '../components/UI/ProductCart/ProductCart';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === '') {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return;
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  // console.log(displayPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //category
  const [allProduct, setAllProduct] = useState(displayPage);
  const [category, setCategory] = useState('ALL');

  useEffect(() => {
    if (category === 'All') {
      setAllProduct(displayPage);
    }
    if (category === 'Burger') {
      const filterProducts = displayPage.filter((item) => item.category === 'Burger');
      setAllProduct(filterProducts);
    }
    if (category === 'Pizza') {
      const filterProducts = displayPage.filter((item) => item.category === 'Pizza');
      setAllProduct(filterProducts);
    }
    if (category === 'Bread') {
      const filterProducts = displayPage.filter((item) => item.category === 'Bread');
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
                  {/* <li onClick={() => setCategory('All')}>All foods</li>
                  <li onClick={() => setCategory('Burger')}>Burger</li>
                  <li onClick={() => setCategory('Pizza')}>Pizza</li>
                  <li onClick={() => setCategory('Bread')}>Bread</li> */}
                  {/* <li onClick={() => setCategory('All')}>All foods</li>
                  <li onClick={() => setCategory('Pizza')}>Pizza</li>
                  <li onClick={() => setCategory('Bread')}>Bread</li>
                  <li onClick={() => setCategory('Burger')}>Burger</li> */}
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
                  <input type="text" placeholder="I'm looking for..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <Row>
                {displayPage.map((item, index) => (
                  <Col lg="4" key={index} className="mt-4">
                    <ProductCart item={item} />
                  </Col>
                ))}

                <div>
                  <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    containerClassName=" paginationBttns "
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
