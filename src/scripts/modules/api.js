import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://picsum.photos',
});

/**
* Retrieve the whole pictures list from API,
* then randomly pick n pictures from it.
* @returns {Array} randomly picked results list
*/
export default async (imagesNumber) => {
  let results = [];
  const pickedResults = [];
  let page = 1;
  let counter = 0;

  // Loop through API pages to retrieve all pictures.
  while (page !== undefined) {
    counter += 1;
    try {
      // eslint-disable-next-line no-await-in-loop
      const { headers, data } = await api.get(`/v2/list?page=${page}&limit=100`);

      // Merge results.
      results = [
        ...results,
        ...data,
      ];

      // Retrieve the next page number in the API link header.
      const nextPage = (headers.link || '')
        .split(',')
        .filter((link) => link.split('; ')[1] === 'rel="next"')
        .join('')
        .match(/page=([\d]*)/);
      if (nextPage === null) {
        page = undefined;
      } else {
        [, page] = nextPage;
      }

      // Prevent infinite loop. Just in case.
      if (counter === 19) {
        break;
      }
    } catch (e) {
      throw new Error('Unable to communicate with API');
    }
  }

  // Random pick.
  for (let i = 0; i < imagesNumber; i += 1) {
    const index = Math.round(Math.random() * results.length);
    pickedResults.push(results[index]);

    // Remove picked result from results list
    if (results.length > 1) {
      results = [
        ...results.slice(0, index),
        ...results.slice(index + 1),
      ];
    }
  }

  return pickedResults;
};
