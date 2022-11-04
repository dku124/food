import React from 'react';
import { Container } from 'reactstrap';
import '../../../styles/commonSection.css';

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
