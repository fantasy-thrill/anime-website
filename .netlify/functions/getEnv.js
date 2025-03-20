exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({ NEWS_API_KEY: process.env.NEWS_API_KEY })
  }
}