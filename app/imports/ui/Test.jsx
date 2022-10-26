import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import scrapers from './utils/scrapers';

/*
 * Need to add error handling
 */

// could use props to pass down 'year' and 'hb' to scraper
const Test = () => {
  // initial state is empty array
  const [measures, setMeasures] = useState([]);
  const [hearings, setHearings] = useState([]);
  const [billDetails, setBillDetails] = useState({});
  const [testButton, setTestButton] = useState([]);
  // gets data from capitol site
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('rendered');
    scrapers
      .scrapeAll(2022, 'hb')
      .then(initialMeasures => {
        setMeasures(initialMeasures.scrapedData);
      });
    scrapers
      .scrapeUpcomingHearings()
      .then(initialHearings => {
        setHearings(initialHearings.upcomingHearings);
      });
    scrapers
      .scrapeBillDetails('HB', '137', 2022)
      .then(initialBillDetails => {
        setBillDetails(initialBillDetails);
      });
  }, []);
  // eslint-disable-next-line no-console
  return (
    <div className="d-flex flex-column align-items-center p-3 gap-3">
      <div>
        Measures: {measures.length}
      </div>
      <div>
        Upcoming hearings:
        {hearings.map(hearing => (<div key={hearing.committee}>{hearing.committee} , {hearing.dateTime}</div>))}
      </div>
      <div>
        Bill HB137: {billDetails.lastStatusText}
      </div>
      <Button onClick={() => {
        console.log('pressed');
        scrapers
          .scrapeAll('2022', 'hb')
          .then(initialData => setTestButton(initialData.scrapedData));
      }}
      >
        Press Me
      </Button>
      <div> TestButton length: {testButton.length}</div>
    </div>
  );
};

export default Test;
