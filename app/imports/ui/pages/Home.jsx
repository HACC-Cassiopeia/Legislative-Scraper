import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SideNavBar from '../components/SideNavBar';
import BillResolutionDetails from '../components/BillResolutionDetails';
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mainBodyStyle = {
    marginLeft: '15%',
    maxWidth: '85%',
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
      </div>
    </div>
  );
};
export default Home;
