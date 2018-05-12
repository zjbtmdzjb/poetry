'use strict'
module.exports = {
 proxy: {
    '/api': {  //将http://localhost:7001 映射为/api
      target: 'http://localhost:7001', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/api': '/'  //需要rewrite的,
      }       
    }
 }
}
