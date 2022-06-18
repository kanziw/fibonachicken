// eslint-disable-next-line @typescript-eslint/no-var-requires
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')

module.exports = {
  webpack: {
    // https://stackoverflow.com/a/60353355/15566395
    configure: webpackConfig => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
      )

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)
      return webpackConfig
    },
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
}
