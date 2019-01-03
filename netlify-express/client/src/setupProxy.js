const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/.netlify/functions/server/api', {
      target: 'http://localhost:9000/',
    }),
  );
};
