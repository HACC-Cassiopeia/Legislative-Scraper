import React, { useState, useEffect } from 'react';
// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';
import { Nav, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import SignoutCheck from './SignoutCheck';
import MobileSignoutCheck from './MobileSignOutCheck';
import './style/Component.css';

const SideNavBar = () => {
  // the width of the screen using React useEffect
  const [width, setWidth] = useState(window.innerWidth);
  // make sure that it changes with the window size
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  const breakPoint = 800;

  const sideBarStyle = {
    position: 'fixed',
    maxWidth: '25%',
    minHeight: '100vh',
    backgroundColor: '#00FFFF',
    color: 'white',
    fontSize: '20px',
    textAlign: 'left',
    zIndex: 10,
  };

  const mobileSideBarStyle = {
    position: 'fixed',
    maxWidth: '20%',
    minHeight: '100vh',
    backgroundColor: 'cyan',
    color: 'white',
    fontSize: '16px',
    textAlign: 'center',
    zIndex: 10,
  };

  if (width > breakPoint) {
    return (
      <Nav style={sideBarStyle} activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#" style={{ color: 'black' }}>
            <b>
              <Icon.Inbox />
              &nbsp; INBOX
            </b>
          </Nav.Link>
          <Nav.Link href="/home" style={{ color: 'black' }}>
            <Icon.HouseDoor /> <b>HOME</b>
          </Nav.Link>
          <Nav.Link href="#" style={{ color: 'black' }}>
            <Icon.Calendar /> <b>CALENDAR</b>
          </Nav.Link>
          <Nav.Link href="/dashboard" style={{ color: 'black' }}>
            <Icon.Clipboard /> <b>DASHBOARD</b>
          </Nav.Link>
          <Nav.Link>
            <Button>
              <b>
                <Icon.PencilSquare /> &nbsp; CREATE
              </b>
            </Button>
          </Nav.Link>
          <Nav.Link>
            <SignoutCheck />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  return (
    <Nav
      style={mobileSideBarStyle}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="#" style={{ color: 'black' }}>
          <Icon.Inbox />
        </Nav.Link>
        <Nav.Link to="/home" style={{ color: 'black' }}>
          <Icon.HouseDoor />
        </Nav.Link>
        <Nav.Link href="#" style={{ color: 'black' }}>
          <Icon.Calendar />
        </Nav.Link>
        <Nav.Link href="#" style={{ color: 'black' }}>
          <Icon.Clipboard />
        </Nav.Link>
        <Nav.Link>
          <Button>
            <Icon.PencilSquare />
          </Button>
        </Nav.Link>
        <Nav.Link>
          <MobileSignoutCheck />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default SideNavBar;
