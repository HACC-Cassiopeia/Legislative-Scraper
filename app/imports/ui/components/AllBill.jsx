import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const selected = false;

// shorter bill description
function getShortDesc(desc) {
  let sub = 70;
  for (let i = 70; i < 90; i++) {
    if (desc[i] === ' ') {
      sub = i;
    }
  }
  return `${desc.substring(0, sub)}...`;
}

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const AllBill = ({ bill }) => (
  <tr>
    <td className="p-3">
      <Button className="p-0 starButton">
        {selected ? <StarFill /> : <Star />}
      </Button>
    </td>
    <td>
      <div style={{ fontSize: '20px' }}><Link to={`/view/${bill.code}`}><strong>{bill.code}</strong></Link></div>
      {bill.measureTitle} <br />
      <div style={{ fontSize: '13px' }}>{getShortDesc(bill.description)}</div>
    </td>
    <td>**offices**</td>
    <td>**action**</td>
    <td>{bill.currentReferral}</td>
    <td>**hearing date/time**</td>
    <td>**position**</td>
    <td>**testifier**</td>
    <td>
      {`(${bill.statusHorS}) ${bill.statusDescription}`}
    </td>
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
