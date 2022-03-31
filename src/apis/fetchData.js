import axios from 'axios';

const BASE_URL = 'https://api.openbrewerydb.org/';
const BASE_QUERY = 'breweries?by_city=seattle';

/**
 * Function to fetch brewery data in Seattle, additional query parameters allowed
 * @param {String} query Query parameters, default=''
 * @returns data
 */
const fetchBreweryData = async (query) => {
  const queryParams = BASE_QUERY + (query || '');
  const url = BASE_URL + queryParams;
  let data;
  try {
    const res = await axios.get(url);
    data = await res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
  return data;
};

export default fetchBreweryData;
