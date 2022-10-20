import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accordion, Col, Container, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { FakeData } from '../../api/fakeData/FakeData';
import DashboardBill from '../components/DashboardBill';
import LoadingSpinner from '../components/LoadingSpinner';
import SideNavBar from '../components/SideNavBar';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const Dashboard = () => {
  const [office, setOffice] = useState('Select an Office');
  const [action, setAction] = useState('Select a Status');
  const [status, setStatus] = useState('Select an Action');

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, bills } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(FakeData.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const billItems = FakeData.collection.find({}).fetch();
    return {
      bills: billItems,
      ready: rdy,
    };
  }, []);

  const returnFilter = () => (
    <Container className="pb-3">
      <h2>Legislative Tracking System 2022</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filter Options</Accordion.Header>
          <Accordion.Body>
            <Row className="pb-4">
              <Col>
                Bill # <br />
                <label htmlFor="Search by Bill #">
                  <input type="text" placeholder="Enter bill # here" />
                </label>
              </Col>
              <Col>
                Edit Date <br />
                <label htmlFor="Search by edit date">
                  <input type="text" placeholder="Enter date here" />
                </label>
              </Col>
              <Col>
                Sort by Hearing Date <br />
                <label htmlFor="Search by hearing date">
                  <input type="text" placeholder="Enter date here" />
                </label>
              </Col>
              <Col>
                Title <br />
                <label htmlFor="Search by title">
                  <input type="text" placeholder="Enter title here" />
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                Office <br />
                <DropdownButton
                  id="dropdown-basic-button"
                  title={office}
                  onSelect={(e) => setOffice(e)}
                >
                  <Dropdown.Item eventKey="OCID">OCID</Dropdown.Item>
                  <Dropdown.Item eventKey="OFO">OFO</Dropdown.Item>
                  <Dropdown.Item eventKey="OFS">OFS</Dropdown.Item>
                  <Dropdown.Item eventKey="OHE">OHE</Dropdown.Item>
                  <Dropdown.Item eventKey="OITS">OITS</Dropdown.Item>
                  <Dropdown.Item eventKey="OSIP">OSIP</Dropdown.Item>
                  <Dropdown.Item eventKey="OSSS">OSSS</Dropdown.Item>
                  <Dropdown.Item eventKey="OTM">OTM</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col>
                Status <br />
                <DropdownButton
                  id="dropdown-basic-button"
                  title={action}
                  onSelect={(e) => setAction(e)}
                >
                  <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="Another action">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Something else">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col>
                Action <br />
                <DropdownButton
                  id="dropdown-basic-button"
                  title={status}
                  onSelect={(e) => setStatus(e)}
                >
                  <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="Another action">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Something else">
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
    <Container className="py-3">
      <div style={{ height: '100vh', overflowY: 'auto' }}>
        <Table striped>
          <thead>
            <tr>
              <th>Bill #</th>
              <th>Bill / Resolution</th>
              <th>Office</th>
              <th>Action</th>
              <th>Committee</th>
              <th>Hearing Date</th>
              <th>Hearing Type</th>
              <th>DOE Position</th>
              <th>Testifier</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => <DashboardBill key={bill._id} bill={bill} />)}
          </tbody>
        </Table>
      </div>

    </Container>
  );

  return (ready ? (
    <div>
      <SideNavBar />
      <div id="mainBody">
        <Row id="dashboard-screen">
          <Col>
            <Row id="dashboard-filter">{returnFilter()}</Row>
            <Row id="dashboard-list">{returnList()}</Row>
          </Col>
        </Row>
      </div>
    </div>
  ) : <LoadingSpinner />);
};

export default Dashboard;
