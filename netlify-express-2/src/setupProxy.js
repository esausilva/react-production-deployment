const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/.netlify/functions/server/api", {
      target: "http://localhost:9000/",
    })
  );
};
