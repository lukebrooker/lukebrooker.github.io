const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
let config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true
})

config.resolver.sourceExts.push('md', 'mdx')

config.transformer.babelTransformerPath = require.resolve('./transformer.js')

config.transformer.minifierConfig = {
  compress: {
    // The option below removes all console logs statements in production.
    drop_console: true,
    // The option below removes all warnings in production.
    warnings: false,
    // The option below removes all debugger statements in production.
    drop_debugger: true
  }
}

const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css'
})
