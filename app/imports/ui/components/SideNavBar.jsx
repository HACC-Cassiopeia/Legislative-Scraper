import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Nav, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import SignoutCheck from './SignoutCheck';
import MobileSignoutCheck from './MobileSignOutCheck';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
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

  /* Gets the current user and tells us if we are logging in */
  const { isLoggedIn } = useTracker(() => {
    const userId = Meteor.userId(); // gets the id of the user
    const isLoggingIn = Meteor.loggingIn();
    return {
      userId,
      isLoggingIn,
      isLoggedIn: !!userId, // if the user logged in does not equal the userId then we are signing in
    };
  });

  const breakPoint = 800;

  const sideBarStyle = {
    position: 'fixed',
    maxWidth: '25%',
    minHeight: '100vh',
    backgroundColor: 'cyan',
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
  if (isLoggedIn) {
    if (width > breakPoint) {
      return (
        <Nav
          style={sideBarStyle}
          activeKey='/home'
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Item>
            <Nav.Link href='#' style={{ color: 'black' }}>
              <Icon.Inbox /> <b>INBOX </b>
            </Nav.Link>
            <Nav.Link href='/home' style={{ color: 'black' }}>
              <Icon.HouseDoor /> <b>HOME</b>
            </Nav.Link>
            <Nav.Link href='#' style={{ color: 'black' }}>
              <Icon.Calendar /> <b>CALENDAR</b>
            </Nav.Link>
            <Nav.Link href='/all-dashboard' style={{ color: 'black' }}>
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
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href='#' style={{ color: 'black' }}>
            <Icon.Inbox />
          </Nav.Link>
          <Nav.Link to='/home' style={{ color: 'black' }}>
            <Icon.HouseDoor />
          </Nav.Link>
          <Nav.Link href='#' style={{ color: 'black' }}>
            <Icon.Calendar />
          </Nav.Link>
          <Nav.Link href='#' style={{ color: 'black' }}>
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
  }
  if (width > breakPoint) {
    return (
      <Nav style={sideBarStyle}>
        <Nav.Item>
          <Nav.Link href='/all-dashboard' style={{ color: 'black' }}>
            <Icon.Clipboard /> <b>DASHBOARD</b>
          </Nav.Link>
          <Nav.Link>
            <SignInModal />
          </Nav.Link>
          <Nav.Link>
            <SignUpModal />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  return (
    <Nav style={sideBarStyle}>
      <Nav.Item>
        <Nav.Link href='/all-dashboard' style={{ color: 'black' }}>
          <Icon.Clipboard /> <b>DASHBOARD</b>
        </Nav.Link>
        <Nav.Link>
          <SignInModal />
        </Nav.Link>
        <Nav.Link>
          <SignUpModal />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default SideNavBar;
