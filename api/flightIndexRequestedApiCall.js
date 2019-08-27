import 'isomorphic-fetch';

const flightIndexRequestedApiCall = () => {
  // fetch('http://localhost:4002/flights')
  //   .then(response => response.json())
  //   .then(response => response);

  var data = require('../data/AW_Response.json');
  return data;
}
export default flightIndexRequestedApiCall;
