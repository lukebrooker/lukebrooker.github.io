var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (config, env) {
  config.merge({
    resolveLoader: {
      alias: {
        markdown: path.join(__dirname, './loaders/markdown')
      }
    }
  })
  config.loader('js', function (cfg) {
    cfg.loaders.unshift('atomic-loader?configPath=' + __dirname + '/atomicCssConfig.js')
    return cfg
  })
  config.loader('css', function (cfg) {
    cfg.loaders.push('autoprefixer?browsers=last 2 versions')
    return cfg
  })
  if (env === 'static') {
    config.removeLoader('css')
    config.loader('css', function (cfg) {
      cfg.test = /\.css$/
      cfg.loader = ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?safe',
        'autoprefixer-loader?browsers=last 2 versions'
      )
      return cfg
    })
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ['bundle.css', { allChunks: true }])
  }
  return config
}
