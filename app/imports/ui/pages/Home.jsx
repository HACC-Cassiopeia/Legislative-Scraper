import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import SideNavBar from '../components/SideNavBar';
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mainBodyStyle = {
    marginLeft: '18%',
    maxWidth: '85vw',
  };

  return (
    <div>
      <SideNavBar />
      <div style={mainBodyStyle}>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bolder',
          }}>
          Legislative Tracking System
        </h2>
        <hr />
        <Row>
          <Col>
            <Card>
              <Card.Header>PROFILE</Card.Header>
              <Card.Body>
                <Card.Title>Name:</Card.Title>
                <Card.Subtitle>Email:</Card.Subtitle>
                <Card.Text>
                  <div style={{ textAlign: 'center' }}>
                    <b>Role</b>
                    <br />
                    <hr />
                    <Button>EDIT PROFILE</Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Upcoming Hearing(s)</Card.Header>
              <Card.Body>
                The list of upcoming hearings. A mini dashboard.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
