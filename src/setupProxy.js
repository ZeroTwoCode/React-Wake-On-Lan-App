require('dotenv/config')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    `${process.env.API_ENDPOINT}`,
    createProxyMiddleware({
      target: `http://localhost:${process.env.APP_PORT}`,
      changeOrigin: true,
    })
  );
};