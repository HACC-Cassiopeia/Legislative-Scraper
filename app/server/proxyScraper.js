import { WebApp } from 'meteor/webapp';
import express from 'express';
import axios from 'axios';

const app = express();
const html = [];

app.get('/api/:year/:mt', (req, res) => {
  const year = req.params.year;
  const mt = req.params.mt;

  axios(`https://www.capitol.hawaii.gov/advreports/advreport.aspx?year=${year}&report=deadline&active=true&rpt_type=&measuretype=${mt}`)
    .then(response => html.push(response.data))
    .catch(() => console.log('error'));

  res.status(200).json({ message: html });
});

WebApp.connectHandlers.use(app);
