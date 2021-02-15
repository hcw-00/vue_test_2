module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_test_2/'
    : '/',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
