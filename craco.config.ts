import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'

export default {
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
}
