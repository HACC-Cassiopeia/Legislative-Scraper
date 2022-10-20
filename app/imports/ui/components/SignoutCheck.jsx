import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Button, Modal } from 'react-bootstrap';

const SignoutCheck = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <b>
          <Icon.BoxArrowLeft /> SIGN OUT
        </b>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to sign out?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            NO
          </Button>
          <Button
            variant="success"
            onClick={Meteor.logout()}
            as={NavLink}
            to="/"
          >
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignoutCheck;
