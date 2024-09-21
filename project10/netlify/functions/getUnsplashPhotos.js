const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const apiKey = process.env.UNSPLASH_API_KEY;
  const count = event.queryStringParameters.count || 10;

  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from Unsplash' }),
    };
  }
};
