import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import SideNavBar from '../components/SideNavBar';

const Home = () => {
  const mainBodyStyle = {
    marginLeft: '25%',
    maxWidth: '65vw',
  };

  const { currentUser } = useTracker(
    () => ({
      currentUser: Meteor.user() ? Meteor.user().username : '',
    }),
    [],
  );

  return (
    <div>
      <SideNavBar />
      <div style={mainBodyStyle}>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bolder',
          }}
        >
          Legislative Tracking System
        </h2>
        <hr />
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <Card.Header>PROFILE</Card.Header>
                <Card.Body>
                  <Card.Title>Name:</Card.Title>
                  <Card.Subtitle>Email: </Card.Subtitle>
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
                <Card.Header>Notifications</Card.Header>
                <Card.Body>
                  The list of upcoming hearings. A mini dashboard.
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Card>
            <Card.Header>UPCOMING HEARING</Card.Header>
            <Card.Body>A list of different hearing.</Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};
export default Home;
