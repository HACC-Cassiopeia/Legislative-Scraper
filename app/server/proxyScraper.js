import { WebApp } from 'meteor/webapp';
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();
const array = [];

app.get('/api/:year/:mt', async (req, res) => {
  const year = req.params.year;
  const mt = req.params.mt;
  const url = `https://www.capitol.hawaii.gov/advreports/advreport.aspx?year=${year}&report=deadline&active=true&rpt_type=&measuretype=${mt}`;

  const test = await axios.get(url);
  // axios(url)
  //   .then(response => {
  //     const html = response.data;
  //     array.push(html);
  //   })
  //   .catch(() => console.log('error'));
  res.status(200).json({ measures: test.data });
});

WebApp.connectHandlers.use(app);
