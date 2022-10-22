import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import SignoutCheck from './SignoutCheck';
import MobileSignoutCheck from './MobileSignOutCheck';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';
import './style/Component.css';

const SideNavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(
    () => ({
      currentUser: Meteor.user() ? Meteor.user().username : '',
    }),
    [],
  );

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
    maxWidth: '15%',
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

  if (width > breakPoint) {
    return (
      <Nav style={sideBarStyle}>
        <Nav.Item>
          <Nav.Link key='landing' href='/' style={{ color: 'black' }}>
            <Icon.HouseDoor /> <b>HOME</b>
          </Nav.Link>
          <Nav.Link
            key='dashboard'
            href='/all-dashboard'
            style={{ color: 'black' }}>
            <Icon.Clipboard /> <b>DASHBOARD</b>
          </Nav.Link>
          {currentUser === ''
            ? [
                <>
                  <SignInModal />
                  <br />
                  <br />
                  <SignUpModal />
                </>,
              ]
            : ''}
          {currentUser
            ? [
                <>
                  <Nav.Link href='/home' key='home' style={{ color: 'black' }}>
                    <Icon.HouseDoor /> <b>HOME</b>
                  </Nav.Link>
                  <Nav.Link href='#' key='calendar' style={{ color: 'black' }}>
                    <Icon.Calendar /> <b>Calendar</b>
                  </Nav.Link>
                  <Nav.Link>
                    <SignoutCheck />
                  </Nav.Link>
                </>,
              ]
            : ''}
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
        <Nav.Link key='landing' href='/' style={{ color: 'black' }}>
          <Icon.HouseDoor />
        </Nav.Link>
        <Nav.Link
          key='dashboard'
          href='/all-dashboard'
          style={{ color: 'black' }}>
          <Icon.Clipboard />
        </Nav.Link>
        {currentUser === ''
          ? [
              <>
                <SignInModal />
                <br />
                <br />
                <SignUpModal />
              </>,
            ]
          : ''}
        {currentUser
          ? [
              <>
                <Nav.Link href='/home' key='home' style={{ color: 'black' }}>
                  <Icon.HouseDoor />
                </Nav.Link>
                <Nav.Link href='#' key='calendar' style={{ color: 'black' }}>
                  <Icon.Calendar />
                </Nav.Link>
                <Nav.Link>
                  <SignoutCheck />
                </Nav.Link>
              </>,
            ]
          : ''}
      </Nav.Item>
    </Nav>
  );
};
export default SideNavBar;
