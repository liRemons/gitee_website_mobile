module.exports = {
  indexPath: "index.html",
  assetsDir: "./static",
  publicPath:'/fe_mobile/',
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Remons'
        return args
      })
  }
}