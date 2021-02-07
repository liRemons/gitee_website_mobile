module.exports = {
  indexPath: "index.html",
  assetsDir: "./static",
  publicPath: '/fe_mobile/',
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Remons'
        return args
      })
  }, devServer: {
    proxy: {
      '/api': {
        target: 'https://remons.gitee.io/feq',
        changeOrigin: true, // 允许跨域
        pathRewrite: { // 重写路径
          '^/api': '/'
        }
      }
    }
  }

}