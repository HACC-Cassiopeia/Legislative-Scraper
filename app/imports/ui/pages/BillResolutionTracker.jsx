import React from 'react';
import { Container } from 'react-bootstrap';
import BillResolutionDetails from '../components/BillResolutionDetails';

const BillResolutionTracker = () => (
  <>
    <Container className="text-center"><h3>TODO: Menu (create testimony, create monitoring report, send link and save to db)</h3></Container>
    <BillResolutionDetails />
    <Container className="text-center"><h3>TODO: Bottom section (list of hearings w/ more info)</h3></Container>
  </>
);

export default BillResolutionTracker;
