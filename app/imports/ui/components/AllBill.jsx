import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import { Accordion, Button } from 'react-bootstrap';

const selected = false; // TODO will need to load from db
const minDescLength = 100;
const maxDescLength = 120;

// shorter bill description
function getShortDesc(desc) {
  let sub = minDescLength;
  while (sub < maxDescLength) {
    if (desc[sub] === ' ') {
      break;
    }
    sub++;
  }
  return `${desc.substring(0, sub)}...`;
}

// the rest of the bill description
function getRemainingDesc(desc) {
  let sub = minDescLength;
  while (sub < maxDescLength) {
    if (desc[sub] === ' ') {
      break;
    }
    sub++;
  }
  return desc.substring(sub + 1);
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
      <Accordion flush className="billAccordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header> {getShortDesc(bill.description)} </Accordion.Header>
          <Accordion.Body>
            {getRemainingDesc(bill.description)}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </td>
    <td>**offices assigned**</td>
    <td>**action to be taken**</td>
    <td>{bill.currentReferral}</td>
    <td>**hearing date/time**</td>
    <td>**DOE position**</td>
    <td>**testifier**</td>
    <td>**internal status**</td> {/* THIS IS THE INTERNALLY TRACKED DOE STATUS, NOT THE STATUS ON THE STATE WEBSITE */}
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
