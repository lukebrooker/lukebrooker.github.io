var path = require('path')

module.exports = function(config, env) {
  config.merge({
    resolveLoader: {
      alias: {
        markdown: path.join(__dirname, "./loaders/markdown")
      }
    }
  })
  return config
}
