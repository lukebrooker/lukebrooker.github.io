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
  return config
}
