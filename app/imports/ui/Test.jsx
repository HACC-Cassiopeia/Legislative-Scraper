import React, { useState, useEffect } from 'react';
import scrapers from './utils/scrapers';

const Test = () => {
  // initial state is empty array otherwise you'll ge an error
  const [data, setData] = useState([]);
  // gets data from capitol site
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('rendered');
    scrapers
      .scrapeAll(2022, 'hb')
      .then(initialData => {
        setData(initialData.scrapedData);
      });
  }, []);
  // eslint-disable-next-line no-console
  return (
    <div>
      {data.map(measure => (<div key={measure.code}>{measure.code}</div>))}
    </div>
  );
};

export default Test;
