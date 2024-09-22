// exports.handler = async function (event, context) {
//   const apiKey = process.env.UNSPLASH_API_KEY;
//   const count = event.queryStringParameters.count || 10;

//   const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed to fetch data from Unsplash' }),
//     };
//   }
// };
//netlify/functions/getPhotos.js
require("dotenv").config();
const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    // Fetch count from query parameters or use default value
    const count = event.queryStringParameters.count || 10;

    // Fetch photos from Unsplash API
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&count=${count}`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
      }
    );

    // Send the photo data back to the client
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching Unsplash photos:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch photos from Unsplash' }),
    };
  }
};
