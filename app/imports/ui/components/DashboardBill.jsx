import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const DashboardBill = ({ bill }) => (
  <tr>
    <td>{bill.billNumber}</td>
    <td>Description here</td>
    <td>Fun office name</td>
    <td>{bill.actionNeeded}</td>
    <td>Committee name</td>
    <td>{bill.hearingDate}</td>
    <td>{bill.hearingType}</td>
    <td>{bill.doePosition}</td>
    <td>Name</td>
    <td>{bill.status}</td>
    <td>
      <Link to={`/information/${bill._id}`}>Read bill</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
DashboardBill.propTypes = {
  bill: PropTypes.shape({
    billNumber: PropTypes.string,
    actionNeeded: PropTypes.string,
    hearingDate: PropTypes.string,
    hearingType: PropTypes.string,
    doePosition: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default DashboardBill;
