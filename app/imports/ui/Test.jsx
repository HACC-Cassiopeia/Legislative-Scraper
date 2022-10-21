import React, { useState, useEffect } from 'react';
import scrapers from './utils/scrapers';

const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('rendered');
    scrapers
      .scrapeAll(2022, 'hb')
      .then(initialData => {
        setData(initialData);
      });
  }, []);
  console.log('data', data);

  return (
    <h1>{`${data.measures}`}</h1>
  );
};

export default Test;
