import React, { useState, useEffect } from 'react';
import scrapers from './utils/scrapers';

/*
 * Need to add error handling
 */

// could use props to pass down 'year' and 'hb' to scraper
const Test = () => {
  // initial state is empty array
  const [measures, setMeasures] = useState([]);
  const [hearings, setHearings] = useState([]);
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
  }, []);
  // eslint-disable-next-line no-console
  return (
    <>
      <div>
        Measures: {measures.length}
      </div>
      <div>
        Upcoming hearings:
        {hearings.map(hearing => (<div>{hearing.committee} , {hearing.dateTime}</div>))}
      </div>
    </>
  );
};

export default Test;
