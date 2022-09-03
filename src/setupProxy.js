const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = {
//     target: 'https://www.ecb.europa.eu',
//     changeOrigin: true
// }
// module.exports = function(app) {
//   app.use(
//     '/search',
//     createProxyMiddleware(proxy)
//   );
// };

module.exports = (app) => {
  app.use('/api',
    createProxyMiddleware({
      target: 'https://www.ecb.europa.eu',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};