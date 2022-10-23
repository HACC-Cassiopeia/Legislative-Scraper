import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
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
    backgroundColor: 'cyan',
    color: 'white',
    fontSize: '20px',
    textAlign: 'left',
    zIndex: 100,
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

  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(
    () => ({
      currentUser: Meteor.user() ? Meteor.user().username : '',
    }),
    [],
  );

  if (width > breakPoint) {
    return (
      <Nav style={sideBarStyle} activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" style={{ color: 'black' }}>
            <Icon.HouseDoor /> <b>HOME</b>
          </Nav.Link>
          <Nav.Link href="/all-dashboard" style={{ color: 'black' }}>
            <Icon.Clipboard /> <b>DASHBOARD</b>
          </Nav.Link>
          {currentUser
            ? [
              <>
                <Nav.Link href="/home" style={{ color: 'black' }}>
                  <Icon.Inbox /> <b>NOTIFICATION</b>
                </Nav.Link>
                <Nav.Link href="/calendar" style={{ color: 'black' }}>
                  <Icon.Calendar /> <b>CALENDAR</b>
                </Nav.Link>
                <Nav.Link id="navbar-sign-out" as={NavLink} to="/signout">
                  SIGN OUT
                </Nav.Link>
              </>,
            ]
            : ''}
          <Nav.Link />
        </Nav.Item>
      </Nav>
    );
  }
  return (
    <Nav style={mobileSideBarStyle} activeKey="/home">
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
      </Nav.Item>
    </Nav>
  );
};
export default SideNavBar;
