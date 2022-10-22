import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => (
  <Container>
    <Row>
      <Col className="d-flex justify-content-center m-3">
        <Spinner animation="border" />
        <p className="pt-1">
          &nbsp;&nbsp;Loading
        </p>
      </Col>
    </Row>
  </Container>
);

export default LoadingSpinner;
