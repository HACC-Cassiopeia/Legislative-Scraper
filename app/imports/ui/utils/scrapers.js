import axios from 'axios';

const scrapeAll = async (year, mt) => {
  try {
    const request = await axios.get(`/api/scrapeAll/${year}/${mt}`);
    return request.data;
  } catch {
    // eslint-disable-next-line no-console
    console.log('error: please use year and measure type as params');
    return null;
  }
};

export default { scrapeAll };
