import axios from 'axios';
import cheerio from 'cheerio';
import { ScraperData } from '../../api/scraperData/ScraperData';

const url = 'https://www.capitol.hawaii.gov/advreports/advreport.aspx?year=2022&report=deadline&active=true&rpt_type=&measuretype=hb';

if (ScraperData.collection.find().count() === 0) {
  axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
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
          ScraperData.collection.insert({
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
      // eslint-disable-next-line no-console
    }).catch((error) => console.log('Failed', console.log(error)));
}

console.log(`total scraped measures: ${ScraperData.collection.find().count()}`);
