import React from 'react';
import {
  Col,
  Container,
  Image,
  Row,
  Nav,
  Navbar,
  Button,
} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

const landingStyleA = {
  backgroudnColor: 'whitesmoke',
  textAlign: 'center',
};

const landingStyleB = {
  backgroundColor: 'cyan',
  textAlign: 'center',
  fontSize: '14px',
};

const messageStyle = {
  display: 'block',
  marginTop: '5%',
  textAlign: 'center',
  maxHeight: '50%',
};

const introMessageStyle = {
  marginTop: '3%',
  marginBottom: '3%',
  textAlign: 'center',
  fontWeight: 'bolder',
  color: 'black',
};

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div>
    <div className="headerTopTitle">
      <Navbar style={{ backgroundColor: 'transparent' }}>
        <Container>
          <Navbar.Brand>
            <h2>Legislative Tracker</h2>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Button variant="primary">Log In/Sign Up</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div style={introMessageStyle}>
          <h3>Track & Monitor your proposals</h3>
          <p>
            Have an idea to improve Hawaii <br />
            Submit it and track it here!
          </p>
        </div>
      </Container>
    </div>
    <Row style={landingStyleB}>
      <Col style={messageStyle}>
        <h3>Submit your proposals</h3>
        <p>Submit your proposal with a preset form without any trouble.</p>
      </Col>

      <Col>
        <Image
          style={{ maxWidth: '35%' }}
          src="https://1.bp.blogspot.com/-r7LqBL2a1GA/XaKa2g3kWXI/AAAAAAABVjY/tryXn3QOacc1U9WGpKPjsggNRsIyUEhHwCNcBGAsYHQ/s1600/document_list.png"
        />
      </Col>
    </Row>
    <div style={landingStyleA}>
      <Row>
        <Col style={messageStyle}>
          <h3>Check the different proposals</h3>
          <p>See what kind of ideas are being proposed.</p>
        </Col>
        <Col>
          <Image
            style={{ maxWidth: '45%' }}
            src="https://1.bp.blogspot.com/-C6vAsZfl8ic/Xq5vGe5oFpI/AAAAAAABYtE/DPvun2JQUYI7iLNp__Q2zZX5gitobZwyACEwYBhgL/s1600/computer_document_spreadsheet.png"
          />
        </Col>
      </Row>
    </div>
    <Row style={landingStyleB}>
      <Col style={messageStyle}>
        <h3>Organize Decisions Neatly</h3>
        <p>
          Based on your position, add comments, approve, or deny the proposals.
        </p>
      </Col>

      <Col>
        <Image
          style={{ maxWidth: '35%' }}
          src="https://4.bp.blogspot.com/-n39YthHIJDY/Wn1VskGy9MI/AAAAAAABKEU/600dCV5x4uINvIyB_1a2xI82mxzA5kOZACLcBGAs/s350/computer_businessman1_smile.png"
        />
      </Col>
    </Row>
    <Row style={landingStyleA}>
      <Col>
        <h3>Have an account?</h3>
        <Icon.PersonCheck size={50} />
        <p>Welcome back!</p>
      </Col>
      <Col>
        <h3>Need to sign up?</h3>
        <Icon.PersonPlus size={50} />
        <p>Create an account!</p>
      </Col>
    </Row>
    <div style={landingStyleB}>
      <Row>
        <Col>
          <p>Created for DOE</p>
        </Col>
      </Row>
    </div>
  </div>
);

export default Landing;
