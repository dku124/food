import React from 'react';
import { Container } from 'reactstrap';
import commonImg from '../../../assets/images/banner.jpg';

const Commonsection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default Commonsection;
