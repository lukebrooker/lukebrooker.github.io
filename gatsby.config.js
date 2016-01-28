var path = require('path')

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
  return config
}
