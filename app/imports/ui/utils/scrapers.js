import axios from 'axios';

const scrapeAll = async (year, mt) => {
  const request = await axios.get(`/api/${year}/${mt}`);
  return request.data;
};

export default { scrapeAll };
