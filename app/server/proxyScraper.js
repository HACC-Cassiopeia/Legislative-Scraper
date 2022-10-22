import { WebApp } from 'meteor/webapp';
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();

app.get('/api/:year/:mt', async (req, res) => {
  const year = req.params.year;
  const mt = req.params.mt;
  const url = `https://www.capitol.hawaii.gov/advreports/advreport.aspx?year=${year}&report=deadline&active=true&rpt_type=&measuretype=${mt}`;
  // connects to page
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const scrapedData = [];

  let index = 0;
  // if it's less than 10, add a zero in front to conform with format
  const getIndex = (num) => (num < 10 ? `0${index}` : index);

  $('tr', html).each(function () {
    index += 1;

    const code = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_HyperLink1`)
      .text();
    const measurePdfUrl = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_HyperLink2`)
      .attr('href');
    const measureArchiveUrl = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_HyperLink1`)
      .attr('href');
    const measureTitle = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label7`)
      .text();
    const reportTitle = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label1`)
      .text();
    const description = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label2`)
      .text();
    const statusHorS = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label3`)
      .text();
    const statusDescription = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label4`)
      .text();
    const statusDate = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label5`)
      .text();
    const introducer = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label27`)
      .text();
    const currentReferral = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label9`)
      .text();
    const companion = $(this)
      .find(`#GridViewReports_ctl${getIndex(index)}_Label6`)
      .find('a')
      .text();

    if (`${code}`.length !== 0) {
      // eslint-disable-next-line no-console
      scrapedData.push({
        code: `${code}`,
        measurePdfUrl: `${measurePdfUrl}`,
        measureArchiveUrl: `${measureArchiveUrl}`,
        measureTitle: `${measureTitle}`,
        reportTitle: `${reportTitle}`,
        description: `${description}`,
        statusHorS: `${statusHorS}`,
        statusDescription: `${statusDescription}`,
        statusDate: `${statusDate}`,
        introducer: `${introducer}`,
        currentReferral: `${currentReferral}`,
        companion: `${companion}`,
      });
    }
  });
  // axios(url)
  //   .then(response => {
  //     const html = response.data;
  //     array.push(html);
  //   })
  //   .catch(() => console.log('error'));
  res.status(200).json({ scrapedData });
});

WebApp.connectHandlers.use(app);
