import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Accordion, Dropdown, DropdownButton } from 'react-bootstrap';
/* import { useTracker } from 'meteor/react-meteor-data';
import { FakeDataCollection } from '/imports/api/fakeData/FakeData'; */

const Dashboard = () => {
  /* states for item filtering */
  const [office, setOffice] = useState('Select an Office');
  const [action, setAction] = useState('Select a Status');
  const [status, setStatus] = useState('Select an Action');

  /* importing fake database info */
  /* const bills = useTracker(() => FakeDataCollection.find().fetch()); */

  /* format info from the db */
  /*
  const createBillData = () => {
    const data = bills.map(bill => (
      <tr>
        <td>{bill.billNumber}</td>
        <td>Description here</td>
        <td>Fun office name</td>
        <td>Action type</td>
        <td>Committee name</td>
        <td>01/01/2001</td>
        <td>Hearing</td>
        <td>Comments</td>
        <td>Name</td>
        <td>Approval needed</td>
      </tr>
    ));

    return data;
  };
  */

  /* temporary function to create fake data */
  const createFakeData = () => {
    const data = [];
    for (let i = 1; i < 20; i++) {
      data.push(
        <tr>
          <td>1234</td>
          <td>Description here</td>
          <td>Fun office name</td>
          <td>Action type</td>
          <td>Committee name</td>
          <td>01/01/2001</td>
          <td>Hearing</td>
          <td>Comments</td>
          <td>Name</td>
          <td>Approval needed</td>
        </tr>,
      );
    }
    return data;
  };

  const returnSideMenu = () => (
    <Row>
      <Col className="pt-3">
        <Button className="py-0" variant="link">Create Tracking Document</Button>
        <hr />
        <Button className="py-0" variant="link">Another option here</Button>
        <hr />
        <Button className="py-0" variant="link">Idk maybe another option here</Button>
        <hr />
      </Col>
    </Row>
  );

  const returnFilter = () => (
    <Container className="pb-3">
      <h2>Legislative Tracking System 2022</h2>
      <Accordion defaultActiveKey="0">
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
                <DropdownButton id="dropdown-basic-button" title={office} onSelect={(e) => setOffice(e)}>
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
                <DropdownButton id="dropdown-basic-button" title={action} onSelect={(e) => setAction(e)}>
                  <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col>
                Action <br />
                <DropdownButton id="dropdown-basic-button" title={status} onSelect={(e) => setStatus(e)}>
                  <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
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
          {createFakeData()}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div>
      <Row id="dashboard-screen">
        <Col id="dashboard-sideMenu">
          {returnSideMenu()}
        </Col>
        <Col>
          <Row id="dashboard-filter">
            {returnFilter()}
          </Row>
          <Row id="dashboard-list">
            {returnList()}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
