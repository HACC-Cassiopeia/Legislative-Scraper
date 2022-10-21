import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Accordion,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ScraperData } from '../../api/scraperData/ScraperData';
import LoadingSpinner from '../components/LoadingSpinner';
import SideNavBar from '../components/SideNavBar';
import AllBill from '../components/AllBill';

const LoggedDashboard = () => {
  /* states for item filtering */
  const [office, setOffice] = useState('Select an Office');
  const [action, setAction] = useState('Select a Status');
  const [status, setStatus] = useState('Select an Action');

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, bills } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(ScraperData.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const billItems = ScraperData.collection.find({}).fetch();
    return {
      bills: billItems,
      ready: rdy,
    };
  }, []);

  /**
  const returnSideMenu = () => (
    <Row>
      <Col className="pt-3">
        <Button className="py-0" variant="link">
          Create Tracking Document
        </Button>
        <hr />
        <Button className="py-0" variant="link">
          Another option here
        </Button>
        <hr />
        <Button className="py-0" variant="link">
          Idk maybe another option here
        </Button>
        <hr />
      </Col>
    </Row>
  ); */

  const returnFilter = () => (
    <Container className='pb-3'>
      <h2>Legislative Tracking System 2022: All Bills</h2>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Filter Options</Accordion.Header>
          <Accordion.Body>
            <Row className='pb-4'>
              <Col>
                Bill # <br />
                <label htmlFor='Search by Bill #'>
                  <input type='text' placeholder='Enter bill # here' />
                </label>
              </Col>
              <Col>
                Edit Date <br />
                <label htmlFor='Search by edit date'>
                  <input type='text' placeholder='Enter date here' />
                </label>
              </Col>
              <Col>
                Sort by Hearing Date <br />
                <label htmlFor='Search by hearing date'>
                  <input type='text' placeholder='Enter date here' />
                </label>
              </Col>
              <Col>
                Title <br />
                <label htmlFor='Search by title'>
                  <input type='text' placeholder='Enter title here' />
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                Office <br />
                <DropdownButton
                  id='dropdown-basic-button'
                  title={office}
                  onSelect={(e) => setOffice(e)}>
                  <Dropdown.Item eventKey='OCID'>OCID</Dropdown.Item>
                  <Dropdown.Item eventKey='OFO'>OFO</Dropdown.Item>
                  <Dropdown.Item eventKey='OFS'>OFS</Dropdown.Item>
                  <Dropdown.Item eventKey='OHE'>OHE</Dropdown.Item>
                  <Dropdown.Item eventKey='OITS'>OITS</Dropdown.Item>
                  <Dropdown.Item eventKey='OSIP'>OSIP</Dropdown.Item>
                  <Dropdown.Item eventKey='OSSS'>OSSS</Dropdown.Item>
                  <Dropdown.Item eventKey='OTM'>OTM</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col>
                Status <br />
                <DropdownButton
                  id='dropdown-basic-button'
                  title={action}
                  onSelect={(e) => setAction(e)}>
                  <Dropdown.Item eventKey='Action'>Action</Dropdown.Item>
                  <Dropdown.Item eventKey='Another action'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='Something else'>
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col>
                Action <br />
                <DropdownButton
                  id='dropdown-basic-button'
                  title={status}
                  onSelect={(e) => setStatus(e)}>
                  <Dropdown.Item eventKey='Action'>Action</Dropdown.Item>
                  <Dropdown.Item eventKey='Another action'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey='Something else'>
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col />
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );

  const returnList = () => (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Table striped>
        <thead>
          <tr>
            <th>Save Bill?</th>
            <th>Measure Status</th>
            <th>Status</th>
            <th>Introducer(s)</th>
            <th>Current Referral</th>
            <th>Companion</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <AllBill key={bill._id} bill={bill} />
          ))}
        </tbody>
      </Table>
    </div>
  );

  return ready ? (
    <div>
      <SideNavBar />
      <div id='mainBody'>
        <Row id='dashboard-screen'>
          <Col>
            <Row id='dashboard-filter'>{returnFilter()}</Row>
            <Row id='dashboard-list'>{returnList()}</Row>
          </Col>
        </Row>
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default LoggedDashboard;
