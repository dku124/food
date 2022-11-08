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
  // const [searchTerm, setSearchTerm] = useState('');

  // const [pageNumber, setPageNumber] = useState(0);

  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm.value === '') {
  //     return item;
  //   }
  //   if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return;
  //   }
  // });

  // const productPerPage = 9;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  // // console.log(displayPage);
  // const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  //category
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

  const handleSearch = (e) => {
    const searchItem = e.target.value;

    const searchedProduct = products.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()));
    setAllProduct(searchedProduct);
  };

  const handleFilter = (e) => {
    const filter = e.target.value;
    if (filter === 'all') {
      console.log(products);
      setAllProduct(products);
    }
    if (filter === 'title-ascending') {
      setAllProduct(
        products.sort((a, b) => {
          const nameA = a.title.toUpperCase(); // ignore upper and lowercase
          const nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      );
    }
    if (filter === 'title-descending') {
    }
    if (filter === 'price-ascending') {
      setAllProduct(products.sort((a, b) => a.price - b.price));
    }
    if (filter === 'price-descending') {
      setAllProduct(products.sort((a, b) => b.price - a.price));
    }
  };

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
                  <li onClick={() => setCategory('Pizza')}>Pizza</li>
                  <li onClick={() => setCategory('Bread')}>Bread</li>
                  <li onClick={() => setCategory('Burger')}>Burger</li>
                </ul>

                <div className="select">
                  <select onChange={handleFilter}>
                    <option value="all">All Products</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                  </select>
                </div>

                <div className="search__box">
                  <input type="text" placeholder="I'm looking for..." onChange={handleSearch} />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <Row>
                {allProduct.map((item, index) => (
                  <Col lg="4" md="4" sm="6" key={index} className="mt-4">
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
