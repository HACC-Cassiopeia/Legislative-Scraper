import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Nav } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './style/Component.css';
const SideNavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(
    () => ({
      currentUser: Meteor.user() ? Meteor.user().username : '',
    }),
    [],
  );

  return (
    <>
      <Nav
        className='col-md-12 d-none d-md-block sidebar'
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <div className='sidebar-sticky'></div>
        <Nav.Item>
          <Nav.Link href='#'>
            <Icon.HouseDoor /> <b>HOME</b>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#'>
            {' '}
            <b>DASHBOARD</b>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default SideNavBar;
