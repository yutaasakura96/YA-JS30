exports.handler = async (event) => {
  // Get API key from environment variables
  const API_KEY = process.env.VOICE_RSS_API_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({ key: API_KEY }),
  };
};
