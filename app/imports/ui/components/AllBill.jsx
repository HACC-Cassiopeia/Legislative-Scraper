import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const AllBill = ({ bill }) => (
  <tr>
    <td>
      <Link to={`/view/${bill.code}`}>Save</Link>
    </td>
    <td>
      <div style={{ fontSize: '20px' }}><strong>{bill.code}</strong></div>
      {bill.reportTitle} <br />
      {bill.measureTitle} <br />
      <div style={{ fontSize: '13px' }}>{bill.description}</div>
    </td>
    <td>
      ({bill.statusHorS})
      {bill.statusDescription}
    </td>
    <td>{bill.introducer}</td>
    <td>{bill.currentReferral}</td>
    <td>{bill.companion}</td>
  </tr>
);

// Require a document to be passed to this component.
AllBill.propTypes = {
  bill: PropTypes.shape({
    code: PropTypes.string,
    measurePdfUrl: PropTypes.string,
    measureArchiveUrl: PropTypes.string,
    measureTitle: PropTypes.string,
    reportTitle: PropTypes.string,
    description: PropTypes.string,
    statusHorS: PropTypes.string,
    statusDescription: PropTypes.string,
    statusDate: PropTypes.string,
    introducer: PropTypes.string,
    currentReferral: PropTypes.string,
    companion: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default AllBill;
