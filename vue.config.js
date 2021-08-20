module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/template/' : '/',
  css: {
    loaderOptions:{
      sass:{
        additionalData: '@import "@/assets/css/shared.scss"' 
      }
    }
  }
};
