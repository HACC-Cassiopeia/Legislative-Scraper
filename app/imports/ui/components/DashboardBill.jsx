import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const DashboardBill = ({ bill }) => (
  <tr>
    <td>{bill.code}</td>
    <td>{bill.measureTitle}</td>
    <td>{bill.reportTitle}</td>
    <td>{bill.statusHorS}</td>
    <td>{bill.statusDate}</td>
    <td>{bill.introducer}</td>
    <td>
      <Link to={`/view/${bill.code}`}>View Details</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
DashboardBill.propTypes = {
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

export default DashboardBill;
